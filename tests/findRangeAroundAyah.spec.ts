import { findRangeAroundAyah, findRangeAroundSurahAyah, meta } from "../src"

describe("findRangeAroundSurahAyah", () => {
  it("should return correct range for juz mode", () => {
    expect(findRangeAroundSurahAyah(2, 142, "juz")).toEqual([149, 259])
  })

  it("should return correct range for surah mode", () => {
    expect(findRangeAroundSurahAyah(3, 60, "surah")).toEqual([294, 493])
  })

  it("should return correct range for ayah mode", () => {
    expect(findRangeAroundSurahAyah(4, 20, "ayah")).toEqual([513, 513])
  })

  it("should return correct range for page mode", () => {
    expect(findRangeAroundSurahAyah(5, 30, "page")).toEqual([693, 700])
    expect(findRangeAroundSurahAyah(1, 1, "page")).toEqual([1, 7])
    expect(findRangeAroundSurahAyah(114, 4, "page")).toEqual([6222, 6236])
  })

  it("should return full Quran range for all mode", () => {
    expect(findRangeAroundSurahAyah(1, 1, "all")).toEqual([1, meta.numAyahs])
    expect(findRangeAroundSurahAyah(2, 21, "all")).toEqual([1, meta.numAyahs])
    expect(findRangeAroundSurahAyah(114, 6, "all")).toEqual([1, meta.numAyahs])
  })

  it("should handle ayahMode correctly", () => {
    expect(findRangeAroundAyah(500, "ayah")).toEqual([500, 500])
  })

  it("should throw error for invalid surah in non-ayahMode", () => {
    expect(() => findRangeAroundSurahAyah(115, 1, "surah")).toThrow()
  })

  it("should throw error for invalid ayah in non-ayahMode", () => {
    expect(() => findRangeAroundSurahAyah(1, 8, "ayah")).toThrow()
  })

  it("should return correct range for first ayah of first surah", () => {
    expect(findRangeAroundSurahAyah(1, 1, "juz")).toEqual([1, 148])
  })

  it("should return correct range for last ayah of last surah", () => {
    expect(findRangeAroundSurahAyah(114, 6, "surah")).toEqual([6231, 6236])
  })

  it("should return correct ruku range for first ayah", () => {
    expect(findRangeAroundSurahAyah(1, 1, "ruku")).toEqual([1, 7])
    expect(findRangeAroundSurahAyah(1, 7, "ruku")).toEqual([1, 7])
  })

  it("should return correct ruku range for last ayah", () => {
    expect(findRangeAroundSurahAyah(114, 1, "ruku")).toEqual([6231, 6236])
    expect(findRangeAroundSurahAyah(114, 4, "ruku")).toEqual([6231, 6236])
  })

  it("should handle edge cases in findRangeAroundAyah", () => {
    // First ayah
    expect(findRangeAroundAyah(1, "juz")).toEqual([1, 148])
    expect(findRangeAroundAyah(1, "surah")).toEqual([1, 7])
    expect(findRangeAroundAyah(1, "page")).toEqual([1, 7])
    expect(findRangeAroundAyah(1, "ayah")).toEqual([1, 1])
    expect(findRangeAroundAyah(1, "all")).toEqual([1, meta.numAyahs])

    // Last ayah
    expect(findRangeAroundAyah(6236, "juz")).toEqual([5673, 6236])
    expect(findRangeAroundAyah(6236, "surah")).toEqual([6231, 6236])
    expect(findRangeAroundAyah(6236, "page")).toEqual([6222, 6236])
    expect(findRangeAroundAyah(6236, "ayah")).toEqual([6236, 6236])
    expect(findRangeAroundAyah(6236, "all")).toEqual([1, meta.numAyahs])

    // Middle ayah
    expect(findRangeAroundAyah(3000, "juz")).toEqual([2876, 3214])
    expect(findRangeAroundAyah(3000, "surah")).toEqual([2933, 3159])
    expect(findRangeAroundAyah(3000, "page")).toEqual([2993, 3015])
    expect(findRangeAroundAyah(3000, "ayah")).toEqual([3000, 3000])
    expect(findRangeAroundAyah(3000, "all")).toEqual([1, meta.numAyahs])
  })
})
