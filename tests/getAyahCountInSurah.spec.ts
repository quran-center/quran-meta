import { getAyahCountInSurah } from "../src"
import { HafsLists } from "../src/lists/HafsLists"

describe(getAyahCountInSurah, () => {
  it("should return correct ayah count for first surah", () => {
    expect(getAyahCountInSurah(1, HafsLists)).toBe(7)
  })

  it("should return correct ayah count for last surah", () => {
    expect(getAyahCountInSurah(114, HafsLists)).toBe(6)
  })

  it("should return correct ayah count for a middle surah", () => {
    expect(getAyahCountInSurah(56, HafsLists)).toBe(96)
  })

  it("should return correct ayah count for the longest surah", () => {
    expect(getAyahCountInSurah(2, HafsLists)).toBe(286)
  })

  it("should return correct ayah count for the shortest surah", () => {
    expect(getAyahCountInSurah(108, HafsLists)).toBe(3)
  })

  it("should throw an error for invalid surah number", () => {
    expect(() => getAyahCountInSurah(0, HafsLists)).toThrow()
    expect(() => getAyahCountInSurah(115, HafsLists)).toThrow()
  })
})
