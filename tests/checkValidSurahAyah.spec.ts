import { checkValidSurahAyah, isValidSurahAyah } from "../src"
import { HafsLists } from "../src/lists/HafsLists"

describe(checkValidSurahAyah, () => {
  it("should return true for valid surah and ayah", () => {
    expect(checkValidSurahAyah(1, 1, HafsLists)).toBeUndefined()
    expect(checkValidSurahAyah(114, 6, HafsLists)).toBeUndefined()
  })

  it("should return false for invalid surah", () => {
    expect(isValidSurahAyah([0, 1], HafsLists)).toBeFalsy()
    expect(isValidSurahAyah([115, 1], HafsLists)).toBeFalsy()
  })

  it("should return false for invalid ayah when checkOnly is true", () => {
    expect(isValidSurahAyah([1, 0], HafsLists)).toBeFalsy()
    expect(isValidSurahAyah([1, 8], HafsLists)).toBeFalsy()
  })

  it("should throw RangeError for invalid ayah when checkOnly is false", () => {
    expect(() => checkValidSurahAyah(1, 0, HafsLists)).toThrow(RangeError)
    expect(() => checkValidSurahAyah(1, 8, HafsLists)).toThrow(RangeError)
  })

  it("should throw RangeError with correct message for invalid ayah", () => {
    expect(() => checkValidSurahAyah(1, 8, HafsLists)).toThrow("Ayah must be between 1 and 7")
    expect(() => checkValidSurahAyah(2, 287, HafsLists)).toThrow("Ayah must be between 1 and 286")
  })

  it("should handle edge cases", () => {
    expect(checkValidSurahAyah(1, 7, HafsLists)).toBeUndefined()
    expect(checkValidSurahAyah(2, 286, HafsLists)).toBeUndefined()
    expect(checkValidSurahAyah(114, 1, HafsLists)).toBeUndefined()
  })
})
