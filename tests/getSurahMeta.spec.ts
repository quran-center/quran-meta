import { getSurahMeta } from "../src/getSurahMeta"

describe("getSurahMeta", () => {
  it("returns correct metadata for Surah Al-Fatihah (1)", () => {
    const meta = getSurahMeta(1)
    expect(meta).toEqual({
      surahNum: 1,
      ayahCount: 7,
      surahOrder: 5,
      rukuCount: 1,
      name: "الفَاتِحة",
      isMeccan: true,
      firstAyahId: 1,
      lastAyahId: 7,
      first: [1, 1],
      last: [1, 7]
    })
  })

  it("returns correct metadata for Surah Al-Baqarah (2)", () => {
    const meta = getSurahMeta(2)
    expect(meta).toEqual({
      surahNum: 2,
      ayahCount: 286,
      surahOrder: 87,
      rukuCount: 40,
      name: "البَقَرَة",
      isMeccan: false,
      firstAyahId: 8,
      lastAyahId: 293,
      first: [2, 1],
      last: [2, 286]
    })
  })
})
