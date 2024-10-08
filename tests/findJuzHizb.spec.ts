import { findJuzHizb } from "../src"

describe("findJuzHizb", () => {
  it("should return correct JuzHizb for first surah and ayah", () => {
    expect(findJuzHizb(1, 1)).toEqual({ juz: 1, hizb: 1, id: 1 })
  })

  it("should return correct JuzHizb for last surah and ayah", () => {
    expect(findJuzHizb(114, 6)).toEqual({ juz: 30, hizb: 8, id: 240 })
  })

  it("should return correct JuzHizb for a middle surah and ayah", () => {
    expect(findJuzHizb(18, 1)).toEqual({ juz: 15, hizb: 5, id: 117 })
  })

  it("should handle ayahMode correctly", () => {
    expect(findJuzHizb(2, 286, true)).toEqual({ juz: 3, hizb: 3, id: 19 })
  })

  it("should throw an error for invalid surah number", () => {
    expect(() => findJuzHizb(0)).toThrow()
    expect(() => findJuzHizb(115)).toThrow()
  })

  it("should handle edge cases", () => {
    expect(findJuzHizb(2, 1)).toEqual({ juz: 1, hizb: 1, id: 1 })
    expect(findJuzHizb(2, 142)).toEqual({ juz: 2, hizb: 1, id: 9 })
  })
})
