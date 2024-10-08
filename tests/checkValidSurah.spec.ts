import { checkValidSurah, meta } from "../src"

describe("checkValidSurah", () => {
  it("should return true for valid surah numbers", () => {
    expect(checkValidSurah(1)).toBe(true)
    expect(checkValidSurah(meta.numSuras)).toBe(true)
    expect(checkValidSurah(Math.floor(meta.numSuras / 2))).toBe(true)
  })

  it("should throw RangeError for surah number less than 1", () => {
    expect(() => checkValidSurah(0)).toThrow(RangeError)
    expect(() => checkValidSurah(-1)).toThrow(RangeError)
  })

  it("should throw RangeError for surah number greater than total number of surahs", () => {
    expect(() => checkValidSurah(meta.numSuras + 1)).toThrow(RangeError)
    expect(() => checkValidSurah(Number.MAX_SAFE_INTEGER)).toThrow(RangeError)
  })

  it("should return false for invalid surah numbers when checkOnly is true", () => {
    expect(checkValidSurah(0, true)).toBe(false)
    expect(checkValidSurah(1.9, true)).toBe(false)
    expect(checkValidSurah(meta.numSuras + 1, true)).toBe(false)
  })

  it("should return true for valid surah numbers when checkOnly is true", () => {
    expect(checkValidSurah(1, true)).toBe(true)
    expect(checkValidSurah(meta.numSuras, true)).toBe(true)
  })

  it("should throw TypeError for non-number surah number", () => {
    expect(() => checkValidSurah("1" as any)).toThrow(TypeError)
    expect(() => checkValidSurah(null as any)).toThrow(TypeError)
    expect(() => checkValidSurah(undefined as any)).toThrow(TypeError)
  })

  it("should throw TypeError for non-integer ayah id", () => {
    expect(() => checkValidSurah(1.5)).toThrow(TypeError)
    expect(() => checkValidSurah(2.99)).toThrow(TypeError)
    expect(() => checkValidSurah(Math.PI)).toThrow(TypeError)
  })
})
