import {
  ayahStringSplitter,
  ayahsInJuz,
  ayahsInPage,
  ayahsInPart,
  createQalun,
  customizeRiwaya,
  formatAyahId,
  formatSurahAyah,
  getPartRange,
  getSurahName,
  getSurahNames,
  languages,
  QuranRiwaya,
  validateRiwayaData
} from "../src"
import { getSurahNamesAsync } from "../src/i18n/async"
import * as hafs from "../src/hafs"
import * as qalun from "../src/qalun"
import { getListsOfRiwaya } from "../src/lists"
import { HafsLists } from "../src/lists/HafsLists"
import { QalunLists } from "../src/lists/QalunLists"
import type { RiwayaName } from "../src/lists/types"

const riwayas: RiwayaName[] = ["Bazzi", "Douri", "Hafs", "Qalun", "Qunbul", "Shuba", "Sousi", "Warsh"]

describe(getPartRange, () => {
  it("returns first and last ayah ids", () => {
    expect(getPartRange("surah", 1, HafsLists)).toEqual([1, 7])
    expect(getPartRange("surah", 114, HafsLists)).toEqual([6231, 6236])
    expect(getPartRange("juz", 30, HafsLists)).toEqual([5673, 6236])
    expect(getPartRange("page", 1, HafsLists)).toEqual([1, 7])
  })

  it("throws for out-of-range parts and missing data", () => {
    expect(() => getPartRange("juz", 0, HafsLists)).toThrow(RangeError)
    expect(() => getPartRange("juz", 31, HafsLists)).toThrow(RangeError)
    expect(() => getPartRange("thumunAlHizb", 1, HafsLists)).toThrow("Hafs has no thumunAlHizb data")
    expect(getPartRange("thumunAlHizb", 1, QalunLists)[0]).toBe(1)
  })
})

describe(ayahsInPart, () => {
  it("iterates across surah boundaries", () => {
    const lastPage = [...ayahsInPage(604, HafsLists)]
    expect(lastPage[0]).toEqual([112, 1])
    expect(lastPage.at(-1)).toEqual([114, 6])
    expect(lastPage).toContainEqual([113, 1])
    expect(lastPage).toHaveLength(15)
  })

  it("covers every ayah exactly once, in order, for every riwaya", () => {
    for (const riwaya of riwayas) {
      const data = getListsOfRiwaya(riwaya)
      const all = Array.from({ length: data.meta.numJuzs }, (_, i) => [...ayahsInJuz((i + 1) as never, data)]).flat()
      expect(all).toHaveLength(data.meta.numAyahs)
      expect(all[0]).toEqual([1, 1])
      expect(all.at(-1)).toEqual([114, data.SurahList[114][1]])
    }
  })

  it("matches getPartRange", () => {
    const ruku = [...ayahsInPart("ruku", 40, HafsLists)]
    const [first, last] = getPartRange("ruku", 40, HafsLists)
    expect(ruku).toHaveLength(last - first + 1)
  })
})

describe(formatSurahAyah, () => {
  it("formats references and ranges", () => {
    expect(formatSurahAyah([2, 255])).toBe("2:255")
    expect(formatSurahAyah([1, [1, 7]])).toBe("1:1-7")
    expect(formatSurahAyah([1, [3, 3]])).toBe("1:3")
    expect(formatSurahAyah([2, 255], ".")).toBe("2.255")
  })

  it("is the inverse of ayahStringSplitter", () => {
    for (const ref of ["2:255", "18:1-10", "114:6"]) {
      expect(formatSurahAyah(ayahStringSplitter(ref, true, HafsLists))).toBe(ref)
    }
  })

  it("formats ayah ids", () => {
    expect(formatAyahId(262, HafsLists)).toBe("2:255")
    expect(hafs.formatAyahId(6236)).toBe("114:6")
  })
})

describe("ayahStringSplitter ranges", () => {
  it("validates both ends of a range against the surah", () => {
    expect(ayahStringSplitter("2:280-286", true, HafsLists)).toEqual([2, [280, 286]])
    expect(() => ayahStringSplitter("2:280-290", true, HafsLists)).toThrow(RangeError)
    expect(() => ayahStringSplitter("1:5-8", true, HafsLists)).toThrow(RangeError)
  })

  it("rejects a string without a colon in strict mode with a clear error", () => {
    expect(() => ayahStringSplitter("2", true, HafsLists)).toThrow("Expected surah:ayah format")
  })
})

describe(customizeRiwaya, () => {
  it("replaces lists and recalculates meta", () => {
    // Two-page mushaf: page 2 starts at Al-Baqarah
    const custom = customizeRiwaya(HafsLists, { PageList: [0, 1, 8, 6237] })
    expect(custom.meta.numPages).toBe(2)
    expect(custom.meta.numAyahs).toBe(6236)
    const quran = QuranRiwaya.create(custom)
    expect(quran.findPage(1, 7)).toBe(1)
    expect(quran.findPage(114, 6)).toBe(2)
    expect(HafsLists.meta.numPages).toBe(604)
  })

  it("rejects inconsistent lists", () => {
    expect(() => customizeRiwaya(HafsLists, { PageList: [0, 1, 50, 20, 6237] })).toThrow("PageList is not ascending")
    expect(() => customizeRiwaya(HafsLists, { PageList: [0, 1, 50, 6000] })).toThrow("PageList must end with")
  })

  it.each(riwayas)("reports no problems for the built-in %s data", (riwaya) => {
    expect(validateRiwayaData(getListsOfRiwaya(riwaya))).toEqual([])
  })
})

describe("surah names", () => {
  it("has Arabic names", () => {
    expect(languages).toContain("ar")
    expect(getSurahName(2, "ar")).toEqual(["البَقَرَة", "البقرة"])
    // Arabic names come from the SurahList, the second form drops the tashkeel
    expect(getSurahNames("ar")[114]).toEqual([HafsLists.SurahList[114][4], "الناس"])
  })

  it("returns one name with English as the default", () => {
    expect(getSurahName(2)).toEqual(["Al-Baqara", "The Cow"])
    // @ts-expect-error out-of-range value on purpose
    expect(() => getSurahName(115)).toThrow(RangeError)
  })

  it("has a complete list for every language", () => {
    for (const lang of languages) {
      const names = getSurahNames(lang)
      expect(names).toHaveLength(116)
      for (let s = 1; s <= 114; s++) {
        expect(names[s]).toHaveLength(2)
      }
    }
  })

  it("loads a language on demand", async () => {
    expect(await getSurahNamesAsync("ar")).toBe(getSurahNames("ar"))
    expect((await getSurahNamesAsync("fr"))[1]).toEqual(getSurahNames("fr")[1])
  })
})

describe("riwaya entry points", () => {
  it("export a ready-made quran instance", () => {
    expect(hafs.quran.riwayaName).toBe("Hafs")
    expect(qalun.quran.riwayaName).toBe("Qalun")
    expect(qalun.quran.findThumunAlHizb(2, 1)).toBeGreaterThan(0)
  })

  it("keep type guard and assertion signatures", () => {
    const value: unknown = 2
    if (!hafs.isValidSurah(value)) {
      throw new Error("expected a valid surah")
    }
    // `value` is narrowed to Surah here, which only compiles if the type guard survived
    expect(hafs.getAyahCountInSurah(value)).toBe(286)
    const ayah: unknown = 255
    hafs.checkValidSurahAyah(2, ayah)
    expect(hafs.findAyahIdBySurah(2, ayah)).toBe(262)
  })

  it("support the wrap option and conversion", () => {
    expect(hafs.nextAyah(114, 6, { wrap: false })).toBeUndefined()
    expect(qalun.convertAyahTo(1, 1, "Hafs")).toEqual([1, 2])
    expect(hafs.convertAyahSpanTo(1, 7, "Qalun")).toEqual([1, [6, 7]])
  })

  it("expose the thumun al-hizb class methods for Qalun only", () => {
    expect(createQalun().getThumunAlHizbMetaByAyahId(1).thumunAlHizbId).toBe(1)
    // @ts-expect-error Hafs has no thumun al-hizb data
    expect(() => hafs.quran.findThumunAlHizbByAyahId(1)).toThrow()
  })
})
