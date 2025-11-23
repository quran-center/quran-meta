import { checkValidAyahId, isValidAyahId } from "../src"
import { meta } from "../src/hafs"

describe("checkValidAyahId", () => {
  it("should throw RangeError for ayah id less than 1", () => {
    expect(() => checkValidAyahId(0, meta)).toThrow(RangeError)
    expect(() => checkValidAyahId(-1, meta)).toThrow(RangeError)
  })

  it("should throw RangeError for ayah id greater than total number of ayas", () => {
    expect(() => checkValidAyahId(meta.numAyahs + 1, meta)).toThrow(RangeError)
    expect(() => checkValidAyahId(Number.MAX_SAFE_INTEGER, meta)).toThrow(RangeError)
  })

  it("should throw TypeError for non-integer ayah id", () => {
    expect(() => checkValidAyahId(1.5, meta)).toThrow(TypeError)
    expect(() => checkValidAyahId(2.99, meta)).toThrow(TypeError)
    expect(() => checkValidAyahId(Math.PI, meta)).toThrow(TypeError)
  })

  it("should throw TypeError for NaN", () => {
    expect(() => checkValidAyahId(NaN, meta)).toThrow(TypeError)
  })

  it("should throw TypeError for Infinity", () => {
    expect(() => checkValidAyahId(Infinity, meta)).toThrow(TypeError)
    expect(() => checkValidAyahId(-Infinity, meta)).toThrow(TypeError)
  })

  it("should handle checkOnly", () => {
    expect(isValidAyahId(1, meta)).toBe(true)
    expect(isValidAyahId(meta.numAyahs, meta)).toBe(true)
    expect(isValidAyahId(Math.floor(meta.numAyahs / 2), meta)).toBe(true)
    expect(isValidAyahId(0, meta)).toBe(false)
    expect(isValidAyahId(meta.numAyahs + 1, meta)).toBe(false)
    expect(isValidAyahId(1.5, meta)).toBe(false)
    expect(isValidAyahId(NaN, meta)).toBe(false)
    expect(isValidAyahId(Infinity, meta)).toBe(false)
  })

  it("should handle edge cases correctly", () => {
    expect(checkValidAyahId(1, meta)).toBeUndefined()
    expect(checkValidAyahId(meta.numAyahs, meta)).toBeUndefined()
    expect(() => checkValidAyahId(meta.numAyahs + 0.5, meta)).toThrow(TypeError)
    expect(checkValidAyahId(Math.floor(meta.numAyahs / 2), meta)).toBeUndefined()
  })

  it("should throw TypeError for non-number ayah id", () => {
    expect(() => checkValidAyahId("1" as any, meta)).toThrow(TypeError)
    expect(() => checkValidAyahId(null as any, meta)).toThrow(TypeError)
    expect(() => checkValidAyahId(undefined as any, meta)).toThrow(TypeError)
  })
})
