import { checkValidSurah, isValidSurah } from "../src"
import { meta } from "../src/hafs"

describe(checkValidSurah, () => {
  it("should return true for valid surah numbers", () => {
    expect(checkValidSurah(1, meta)).toBeUndefined()
    expect(checkValidSurah(meta.numSurahs, meta)).toBeUndefined()
    expect(checkValidSurah(Math.floor(meta.numSurahs / 2), meta)).toBeUndefined()
  })

  it("should throw RangeError for surah number less than 1", () => {
    expect(() => checkValidSurah(0, meta)).toThrow(RangeError)
    expect(() => checkValidSurah(-1, meta)).toThrow(RangeError)
  })

  it("should throw RangeError for surah number greater than total number of surahs", () => {
    expect(() => checkValidSurah(meta.numSurahs + 1, meta)).toThrow(RangeError)
    expect(() => checkValidSurah(Number.MAX_SAFE_INTEGER, meta)).toThrow(RangeError)
  })

  it("should return false for invalid surah numbers when checkOnly is true", () => {
    expect(isValidSurah(0, meta)).toBeFalsy()
    expect(isValidSurah(1.9, meta)).toBeFalsy()
    expect(isValidSurah(meta.numSurahs + 1, meta)).toBeFalsy()
  })

  it("should return true for valid surah numbers when checkOnly is true", () => {
    expect(isValidSurah(1, meta)).toBeTruthy()
    expect(isValidSurah(meta.numSurahs, meta)).toBeTruthy()
  })

  it("should throw TypeError for non-number surah number", () => {
    expect(() => checkValidSurah("1" as any, meta)).toThrow(TypeError)
    expect(() => checkValidSurah(null as any, meta)).toThrow(TypeError)
    expect(() => checkValidSurah(undefined as any, meta)).toThrow(TypeError)
  })

  it("should throw TypeError for non-integer ayah id", () => {
    expect(() => checkValidSurah(1.5, meta)).toThrow(TypeError)
    expect(() => checkValidSurah(2.99, meta)).toThrow(TypeError)
    expect(() => checkValidSurah(Math.PI, meta)).toThrow(TypeError)
  })
})
