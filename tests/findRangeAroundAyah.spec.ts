import { findRangeAroundAyah, meta } from "../src"

describe("findRangeAroundAyah", () => {
  it("should return correct range for juz mode", () => {
    expect(findRangeAroundAyah(2, 142, "juz")).toEqual([149, 259])
  })

  it("should return correct range for surah mode", () => {
    expect(findRangeAroundAyah(3, 60, "surah")).toEqual([294, 493])
  })

  it("should return correct range for ayah mode", () => {
    expect(findRangeAroundAyah(4, 20, "ayah")).toEqual([513, 513])
  })

  it("should return correct range for page mode", () => {
    expect(findRangeAroundAyah(5, 30, "page")).toEqual([693, 700])
    expect(findRangeAroundAyah(1, 1, "page")).toEqual([1, 7])
    expect(findRangeAroundAyah(114, 4, "page")).toEqual([6222, 6236])
  })

  it("should return full Quran range for all mode", () => {
    expect(findRangeAroundAyah(1, 1, "all")).toEqual([1, meta.numAyahs])
    expect(findRangeAroundAyah(2, 21, "all")).toEqual([1, meta.numAyahs])
    expect(findRangeAroundAyah(114, 6, "all")).toEqual([1, meta.numAyahs])
  })

  it("should handle ayahMode correctly", () => {
    expect(findRangeAroundAyah(1, 500, "ayah", true)).toEqual([500, 500])
  })

  it("should throw error for invalid surah in non-ayahMode", () => {
    expect(() => findRangeAroundAyah(115, 1, "surah")).toThrow()
  })

  it("should throw error for invalid ayah in non-ayahMode", () => {
    expect(() => findRangeAroundAyah(1, 8, "ayah")).toThrow()
  })

  it("should return correct range for first ayah of first surah", () => {
    expect(findRangeAroundAyah(1, 1, "juz")).toEqual([1, 148])
  })

  it("should return correct range for last ayah of last surah", () => {
    expect(findRangeAroundAyah(114, 6, "surah")).toEqual([6231, 6236])
  })
})
