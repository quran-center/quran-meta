import { checkValidSurahAyah } from "../src"
import { isValidSurahAyah } from "../src/typeGuards"

describe("checkValidSurahAyah", () => {
  it("should return true for valid surah and ayah", () => {
    expect(checkValidSurahAyah(1, 1)).toBeUndefined()
    expect(checkValidSurahAyah(114, 6)).toBeUndefined()
  })

  it("should return false for invalid surah", () => {
    expect(isValidSurahAyah([0, 1])).toBe(false)
    expect(isValidSurahAyah([115, 1])).toBe(false)
  })

  it("should return false for invalid ayah when checkOnly is true", () => {
    expect(isValidSurahAyah([1, 0])).toBe(false)
    expect(isValidSurahAyah([1, 8])).toBe(false)
  })

  it("should throw RangeError for invalid ayah when checkOnly is false", () => {
    expect(() => checkValidSurahAyah(1, 0)).toThrow(RangeError)
    expect(() => checkValidSurahAyah(1, 8)).toThrow(RangeError)
  })

  it("should throw RangeError with correct message for invalid ayah", () => {
    expect(() => checkValidSurahAyah(1, 8)).toThrow("Ayah must be between 1 and 7")
    expect(() => checkValidSurahAyah(2, 287)).toThrow("Ayah must be between 1 and 286")
  })

  it("should handle edge cases", () => {
    expect(checkValidSurahAyah(1, 7)).toBeUndefined()
    expect(checkValidSurahAyah(2, 286)).toBeUndefined()
    expect(checkValidSurahAyah(114, 1)).toBeUndefined()
  })
})
