import { findRangeAroundAyah, findRangeAroundSurahAyah } from "../src"
import { HafsLists, HafsMeta } from "../src/lists/aHafsLists"

describe("findRangeAroundSurahAyah", () => {
  it("should return correct range for juz mode", () => {
    expect(findRangeAroundSurahAyah(2, 142, "juz", HafsLists)).toEqual([149, 259])
  })

  it("should return correct range for surah mode", () => {
    expect(findRangeAroundSurahAyah(3, 60, "surah", HafsLists)).toEqual([294, 493])
  })

  it("should return correct range for ayah mode", () => {
    expect(findRangeAroundSurahAyah(4, 20, "ayah", HafsLists)).toEqual([513, 513])
  })

  it("should return correct range for page mode", () => {
    expect(findRangeAroundSurahAyah(5, 30, "page", HafsLists)).toEqual([693, 700])
    expect(findRangeAroundSurahAyah(1, 1, "page", HafsLists)).toEqual([1, 7])
    expect(findRangeAroundSurahAyah(114, 4, "page", HafsLists)).toEqual([6222, 6236])
  })

  it("should return full Quran range for all mode", () => {
    expect(findRangeAroundSurahAyah(1, 1, "all", HafsLists)).toEqual([1, HafsMeta.numAyahs])
    expect(findRangeAroundSurahAyah(2, 21, "all", HafsLists)).toEqual([1, HafsMeta.numAyahs])
    expect(findRangeAroundSurahAyah(114, 6, "all", HafsLists)).toEqual([1, HafsMeta.numAyahs])
  })

  it("should handle ayahMode correctly", () => {
    expect(findRangeAroundAyah(500, "ayah", HafsLists)).toEqual([500, 500])
  })

  it("should throw error for invalid surah in non-ayahMode", () => {
    expect(() => findRangeAroundSurahAyah(115, 1, "surah", HafsLists)).toThrow()
  })

  it("should throw error for invalid ayah in non-ayahMode", () => {
    expect(() => findRangeAroundSurahAyah(1, 8, "ayah", HafsLists)).toThrow()
  })

  it("should return correct range for first ayah of first surah", () => {
    expect(findRangeAroundSurahAyah(1, 1, "juz", HafsLists)).toEqual([1, 148])
  })

  it("should return correct range for last ayah of last surah", () => {
    expect(findRangeAroundSurahAyah(114, 6, "surah", HafsLists)).toEqual([6231, 6236])
  })

  it("should return correct ruku range for first ayah", () => {
    expect(findRangeAroundSurahAyah(1, 1, "ruku", HafsLists)).toEqual([1, 7])
    expect(findRangeAroundSurahAyah(1, 7, "ruku", HafsLists)).toEqual([1, 7])
  })

  it("should return correct ruku range for last ayah", () => {
    expect(findRangeAroundSurahAyah(114, 1, "ruku", HafsLists)).toEqual([6231, 6236])
    expect(findRangeAroundSurahAyah(114, 4, "ruku", HafsLists)).toEqual([6231, 6236])
  })

  it("should handle edge cases in findRangeAroundAyah", () => {
    // First ayah
    expect(findRangeAroundAyah(1, "juz", HafsLists)).toEqual([1, 148])
    expect(findRangeAroundAyah(1, "surah", HafsLists)).toEqual([1, 7])
    expect(findRangeAroundAyah(1, "page", HafsLists)).toEqual([1, 7])
    expect(findRangeAroundAyah(1, "ayah", HafsLists)).toEqual([1, 1])
    expect(findRangeAroundAyah(1, "all", HafsLists)).toEqual([1, HafsMeta.numAyahs])

    // Last ayah
    expect(findRangeAroundAyah(6236, "juz", HafsLists)).toEqual([5673, 6236])
    expect(findRangeAroundAyah(6236, "surah", HafsLists)).toEqual([6231, 6236])
    expect(findRangeAroundAyah(6236, "page", HafsLists)).toEqual([6222, 6236])
    expect(findRangeAroundAyah(6236, "ayah", HafsLists)).toEqual([6236, 6236])
    expect(findRangeAroundAyah(6236, "all", HafsLists)).toEqual([1, HafsMeta.numAyahs])

    // Middle ayah
    expect(findRangeAroundAyah(3000, "juz", HafsLists)).toEqual([2876, 3214])
    expect(findRangeAroundAyah(3000, "surah", HafsLists)).toEqual([2933, 3159])
    expect(findRangeAroundAyah(3000, "page", HafsLists)).toEqual([2993, 3015])
    expect(findRangeAroundAyah(3000, "ayah", HafsLists)).toEqual([3000, 3000])
    expect(findRangeAroundAyah(3000, "all", HafsLists)).toEqual([1, HafsMeta.numAyahs])
  })
})
