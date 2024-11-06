import { getAyahCountinSurah } from "../src"

describe("getAyahCountinSurah", () => {
  it("should return correct aya count for first surah", () => {
    expect(getAyahCountinSurah(1)).toBe(7)
  })

  it("should return correct aya count for last surah", () => {
    expect(getAyahCountinSurah(114)).toBe(6)
  })

  it("should return correct aya count for a middle surah", () => {
    expect(getAyahCountinSurah(56)).toBe(96)
  })

  it("should return correct aya count for the longest surah", () => {
    expect(getAyahCountinSurah(2)).toBe(286)
  })

  it("should return correct aya count for the shortest surah", () => {
    expect(getAyahCountinSurah(108)).toBe(3)
  })

  it("should throw an error for invalid surah number", () => {
    expect(() => getAyahCountinSurah(0)).toThrow()
    expect(() => getAyahCountinSurah(115)).toThrow()
  })
})
