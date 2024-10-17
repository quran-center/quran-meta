import { getAyahCountinSura } from "../src"

describe("getAyahCountinSura", () => {
  it("should return correct aya count for first surah", () => {
    expect(getAyahCountinSura(1)).toBe(7)
  })

  it("should return correct aya count for last surah", () => {
    expect(getAyahCountinSura(114)).toBe(6)
  })

  it("should return correct aya count for a middle surah", () => {
    expect(getAyahCountinSura(56)).toBe(96)
  })

  it("should return correct aya count for the longest surah", () => {
    expect(getAyahCountinSura(2)).toBe(286)
  })

  it("should return correct aya count for the shortest surah", () => {
    expect(getAyahCountinSura(108)).toBe(3)
  })

  it("should throw an error for invalid surah number", () => {
    expect(() => getAyahCountinSura(0)).toThrow()
    expect(() => getAyahCountinSura(115)).toThrow()
  })
})
