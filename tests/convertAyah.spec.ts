import { convertAyah, convertAyahSpan } from "../src"
import { ayahCountForConversion } from "../src/convert/convertAyah"
import { getListsOfRiwaya } from "../src/lists"
import type { RiwayaName } from "../src/lists/types"
import type { AyahNo, Surah } from "../src/types"

const riwayas: RiwayaName[] = ["Bazzi", "Douri", "Hafs", "Qalun", "Qunbul", "Shuba", "Sousi", "Warsh"]
const surahs = Array.from({ length: 114 }, (_, i) => (i + 1) as Surah)

describe(convertAyah, () => {
  it.each(riwayas)("agrees with the %s surah ayah counts", (riwaya) => {
    const { SurahList } = getListsOfRiwaya(riwaya)
    for (const surah of surahs) {
      expect(ayahCountForConversion(surah, riwaya)).toBe(SurahList[surah][1])
    }
  })

  it("handles الم at the start of Al-Baqarah", () => {
    expect(convertAyah(2, 1, "Hafs", "Warsh")).toEqual([2, 1])
    expect(convertAyah(2, 2, "Hafs", "Warsh")).toEqual([2, 1])
    expect(convertAyah(2, 3, "Hafs", "Warsh")).toEqual([2, 2])
    expect(convertAyah(2, 1, "Warsh", "Hafs")).toEqual([2, 1])
    expect(convertAyah(2, 2, "Warsh", "Hafs")).toEqual([2, 3])
  })

  it("handles Ayat al-Kursi, split in two in the Madani count", () => {
    expect(convertAyah(2, 255, "Hafs", "Warsh")).toEqual([2, 253])
    expect(convertAyah(2, 254, "Warsh", "Hafs")).toEqual([2, 255])
    expect(convertAyah(2, 256, "Hafs", "Warsh")).toEqual([2, 255])
    expect(convertAyah(2, 286, "Hafs", "Warsh")).toEqual([2, 285])
  })

  it("handles the basmala of Al-Fatiha", () => {
    expect(convertAyah(1, 1, "Warsh", "Hafs")).toEqual([1, 2])
    expect(convertAyah(1, 1, "Hafs", "Warsh")).toEqual([1, 1])
    expect(convertAyah(1, 6, "Warsh", "Hafs")).toEqual([1, 7])
    expect(convertAyah(1, 7, "Warsh", "Hafs")).toEqual([1, 7])
    // Makki count (Bazzi, Qunbul) numbers the basmala like Hafs
    expect(convertAyah(1, 1, "Bazzi", "Hafs")).toEqual([1, 1])
  })

  // Riwayas from the same qari share the ayah count. Warsh and Qalun come from separate
  // KFQC files, so agreeing here is an independent check of the alignment.
  it.each([
    ["Hafs", "Shuba"],
    ["Warsh", "Qalun"],
    ["Douri", "Sousi"],
    ["Bazzi", "Qunbul"]
  ] as const)("is the identity between %s and %s (same qari)", (a, b) => {
    for (const surah of surahs) {
      for (let ayah = 1; ayah <= ayahCountForConversion(surah, a); ayah++) {
        expect(convertAyah(surah, ayah as AyahNo, a, b)).toEqual([surah, ayah])
      }
    }
  })

  it.each(riwayas)("round-trips every %s ayah through every other riwaya", (from) => {
    for (const to of riwayas) {
      for (const surah of surahs) {
        const count = ayahCountForConversion(surah, from)
        let previous = 0
        for (let ayah = 1; ayah <= count; ayah++) {
          const [s, converted] = convertAyah(surah, ayah as AyahNo, from, to)
          expect(s).toBe(surah)
          // Monotonic: later ayahs never map to earlier ones
          expect(converted).toBeGreaterThanOrEqual(previous)
          previous = converted
          // Converting back lands on this ayah or one that starts earlier (the Fatiha basmala
          // has no counterpart in some riwayas and maps forward)
          const [, back] = convertAyah(surah, converted, to, from)
          expect(back).toBeLessThanOrEqual(surah === 1 && ayah === 1 ? 2 : ayah)
        }
      }
    }
  })

  it("throws for ayahs that do not exist in the source riwaya", () => {
    expect(() => convertAyah(2, 286, "Warsh", "Hafs")).toThrow(RangeError)
    expect(() => convertAyah(0 as Surah, 1, "Hafs", "Warsh")).toThrow(RangeError)
    expect(() => convertAyah(115 as Surah, 1, "Hafs", "Warsh")).toThrow(RangeError)
  })
})

describe(convertAyahSpan, () => {
  it("returns every overlapping ayah", () => {
    expect(convertAyahSpan(2, 1, "Warsh", "Hafs")).toEqual([2, [1, 2]])
    expect(convertAyahSpan(1, 7, "Hafs", "Warsh")).toEqual([1, [6, 7]])
    expect(convertAyahSpan(2, 3, "Hafs", "Warsh")).toEqual([2, 2])
    expect(convertAyahSpan(2, 255, "Hafs", "Warsh")).toEqual([2, [253, 254]])
    expect(convertAyahSpan(2, 286, "Hafs", "Warsh")).toEqual([2, 285])
  })

  it("returns a single ayah when converting within the same riwaya", () => {
    expect(convertAyahSpan(2, 5, "Warsh", "Warsh")).toEqual([2, 5])
  })
})
