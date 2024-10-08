import { getAyaCountinSura } from "../src"

describe("getAyaCountinSura", () => {
  it("should return correct aya count for first surah", () => {
    expect(getAyaCountinSura(1)).toBe(7)
  })

  it("should return correct aya count for last surah", () => {
    expect(getAyaCountinSura(114)).toBe(6)
  })

  it("should return correct aya count for a middle surah", () => {
    expect(getAyaCountinSura(56)).toBe(96)
  })

  it("should return correct aya count for the longest surah", () => {
    expect(getAyaCountinSura(2)).toBe(286)
  })

  it("should return correct aya count for the shortest surah", () => {
    expect(getAyaCountinSura(108)).toBe(3)
  })

  it("should throw an error for invalid surah number", () => {
    expect(() => getAyaCountinSura(0)).toThrow()
    expect(() => getAyaCountinSura(115)).toThrow()
  })
})
