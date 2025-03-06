import { isSurahAyahJuzFirst } from "../src"

describe("isSurahAyahJuzFirst", () => {
  it("basic", () => {
    expect(isSurahAyahJuzFirst(1, 1)).toEqual(1)
    expect(isSurahAyahJuzFirst(2, 142)).toEqual(2)

    expect(isSurahAyahJuzFirst(2, 1)).toEqual(-3)
    expect(isSurahAyahJuzFirst(114, 1)).toEqual(-32)
    // expect(isSurahAyahJuzFirst(1, 114)).toEqual(-3)
  })

  it("should return correct Juz for the first ayah of a Juz", () => {
    expect(isSurahAyahJuzFirst(2, 142)).toBe(2)
    expect(isSurahAyahJuzFirst(4, 1)).toBeLessThan(0)
    expect(isSurahAyahJuzFirst(6, 111)).toBe(8)
  })

  it("should return correct Juz for non-first ayah of a Juz", () => {
    expect(isSurahAyahJuzFirst(2, 143)).toBeLessThan(0)
    expect(isSurahAyahJuzFirst(4, 2)).toBeLessThan(0)
    expect(isSurahAyahJuzFirst(6, 112)).toBeLessThan(0)
  })

  it("should throw an error for invalid surah", () => {
    expect(() => isSurahAyahJuzFirst(0, 1)).toThrow()
    expect(() => isSurahAyahJuzFirst(115, 1)).toThrow()
  })

  it("should throw an error for invalid ayah", () => {
    expect(() => isSurahAyahJuzFirst(1, 0)).toThrow()
    expect(() => isSurahAyahJuzFirst(1, 8)).toThrow()
  })

  it("should handle edge cases", () => {
    expect(isSurahAyahJuzFirst(1, 1)).toBe(1)
    expect(isSurahAyahJuzFirst(114, 6)).toBeLessThan(0)
  })
})
