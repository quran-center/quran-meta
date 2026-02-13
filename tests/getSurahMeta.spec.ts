import { getSurahMeta } from "../src/getSurahMeta"
import { HafsLists } from "../src/lists/HafsLists"

describe(getSurahMeta, () => {
  it("returns correct metadata for Surah Al-Fatihah (1)", () => {
    const meta = getSurahMeta(1, HafsLists)
    expect(meta).toEqual({
      ayahCount: 7,
      first: [1, 1],
      firstAyahId: 1,
      isMeccan: true,
      last: [1, 7],
      lastAyahId: 7,
      name: "الفَاتِحة",
      rukuCount: 1,
      surahNum: 1,
      surahOrder: 5
    })
  })

  it("returns correct metadata for Surah Al-Baqarah (2)", () => {
    const meta = getSurahMeta(2, HafsLists)
    expect(meta).toEqual({
      ayahCount: 286,
      first: [2, 1],
      firstAyahId: 8,
      isMeccan: false,
      last: [2, 286],
      lastAyahId: 293,
      name: "البَقَرَة",
      rukuCount: 40,
      surahNum: 2,
      surahOrder: 87
    })
  })
})
