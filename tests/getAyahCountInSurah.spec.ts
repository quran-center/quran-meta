import { getAyahCountInSurah } from "../src"

describe("getAyahCountInSurah", () => {
  it("should return correct ayah count for first surah", () => {
    expect(getAyahCountInSurah(1)).toBe(7)
  })

  it("should return correct ayah count for last surah", () => {
    expect(getAyahCountInSurah(114)).toBe(6)
  })

  it("should return correct ayah count for a middle surah", () => {
    expect(getAyahCountInSurah(56)).toBe(96)
  })

  it("should return correct ayah count for the longest surah", () => {
    expect(getAyahCountInSurah(2)).toBe(286)
  })

  it("should return correct ayah count for the shortest surah", () => {
    expect(getAyahCountInSurah(108)).toBe(3)
  })

  it("should throw an error for invalid surah number", () => {
    expect(() => getAyahCountInSurah(0)).toThrow()
    expect(() => getAyahCountInSurah(115)).toThrow()
  })
})
