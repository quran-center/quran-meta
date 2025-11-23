import { isSurahAyahJuzFirst } from "../src"
import { HafsLists } from "../src/lists/HafsLists"

describe("isSurahAyahJuzFirst", () => {
  it("basic", () => {
    expect(isSurahAyahJuzFirst(1, 1, HafsLists)).toEqual(1)
    expect(isSurahAyahJuzFirst(2, 142, HafsLists)).toEqual(2)

    expect(isSurahAyahJuzFirst(2, 1, HafsLists)).toEqual(-3)
    expect(isSurahAyahJuzFirst(114, 1, HafsLists)).toEqual(-32)
    // expect(isSurahAyahJuzFirst(1, 114, HafsLists)).toEqual(-3)
  })

  it("should return correct Juz for the first ayah of a Juz", () => {
    expect(isSurahAyahJuzFirst(2, 142, HafsLists)).toBe(2)
    expect(isSurahAyahJuzFirst(4, 1, HafsLists)).toBeLessThan(0)
    expect(isSurahAyahJuzFirst(6, 111, HafsLists)).toBe(8)
  })

  it("should return correct Juz for non-first ayah of a Juz", () => {
    expect(isSurahAyahJuzFirst(2, 143, HafsLists)).toBeLessThan(0)
    expect(isSurahAyahJuzFirst(4, 2, HafsLists)).toBeLessThan(0)
    expect(isSurahAyahJuzFirst(6, 112, HafsLists)).toBeLessThan(0)
  })

  it("should throw an error for invalid surah", () => {
    expect(() => isSurahAyahJuzFirst(0, 1, HafsLists)).toThrow()
    expect(() => isSurahAyahJuzFirst(115, 1, HafsLists)).toThrow()
  })

  it("should throw an error for invalid ayah", () => {
    expect(() => isSurahAyahJuzFirst(1, 0, HafsLists)).toThrow()
    expect(() => isSurahAyahJuzFirst(1, 8, HafsLists)).toThrow()
  })

  it("should handle edge cases", () => {
    expect(isSurahAyahJuzFirst(1, 1, HafsLists)).toBe(1)
    expect(isSurahAyahJuzFirst(114, 6, HafsLists)).toBeLessThan(0)
  })
})
