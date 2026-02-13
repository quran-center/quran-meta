import { findJuzByAyahId } from "../src"
import { HafsLists } from "../src/lists/HafsLists"

describe(findJuzByAyahId, () => {
  it("basic", () => {
    expect(findJuzByAyahId(2, HafsLists)).toEqual(1)
    expect(findJuzByAyahId(100, HafsLists)).toEqual(1)
    expect(findJuzByAyahId(200, HafsLists)).toEqual(2)
  })

  it("should return correct Juz for first ayah", () => {
    expect(findJuzByAyahId(1, HafsLists)).toBe(1)
  })

  it("should return correct Juz for last ayah", () => {
    expect(findJuzByAyahId(6236, HafsLists)).toBe(30)
  })

  it("should return correct Juz for ayah at Juz boundary", () => {
    expect(findJuzByAyahId(148, HafsLists)).toBe(1)
    expect(findJuzByAyahId(149, HafsLists)).toBe(2)
    expect(findJuzByAyahId(1327, HafsLists)).toBe(10)
    expect(findJuzByAyahId(1328, HafsLists)).toBe(11)
  })

  it("should return correct Juz for middle ayah", () => {
    expect(findJuzByAyahId(3000, HafsLists)).toBe(19)
  })

  it("should throw error for invalid ayah id", () => {
    expect(() => findJuzByAyahId(0, HafsLists)).toThrow()
    expect(() => findJuzByAyahId(6237, HafsLists)).toThrow()
  })

  it("should handle edge cases", () => {
    expect(findJuzByAyahId(2, HafsLists)).toBe(1)
    expect(findJuzByAyahId(6235, HafsLists)).toBe(30)
  })

  it("should throw error for non-number input", () => {
    expect(() => findJuzByAyahId("1" as any, HafsLists)).toThrow()
    expect(() => findJuzByAyahId(null as any, HafsLists)).toThrow()
    expect(() => findJuzByAyahId(undefined as any, HafsLists)).toThrow()
    expect(() => findJuzByAyahId({} as any, HafsLists)).toThrow()
  })

  it("should throw error for negative numbers", () => {
    expect(() => findJuzByAyahId(-1, HafsLists)).toThrow()
    expect(() => findJuzByAyahId(-100, HafsLists)).toThrow()
  })
})
