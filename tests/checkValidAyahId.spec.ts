import { checkValidAyahId, meta } from "../src"
import { isValidAyahId } from "../src/typeGuards"

describe("checkValidAyahId", () => {
  it("should throw RangeError for ayah id less than 1", () => {
    expect(() => checkValidAyahId(0)).toThrow(RangeError)
    expect(() => checkValidAyahId(-1)).toThrow(RangeError)
  })

  it("should throw RangeError for ayah id greater than total number of ayas", () => {
    expect(() => checkValidAyahId(meta.numAyahs + 1)).toThrow(RangeError)
    expect(() => checkValidAyahId(Number.MAX_SAFE_INTEGER)).toThrow(RangeError)
  })

  it("should throw TypeError for non-integer ayah id", () => {
    expect(() => checkValidAyahId(1.5)).toThrow(TypeError)
    expect(() => checkValidAyahId(2.99)).toThrow(TypeError)
    expect(() => checkValidAyahId(Math.PI)).toThrow(TypeError)
  })

  it("should throw TypeError for NaN", () => {
    expect(() => checkValidAyahId(NaN)).toThrow(TypeError)
  })

  it("should throw TypeError for Infinity", () => {
    expect(() => checkValidAyahId(Infinity)).toThrow(TypeError)
    expect(() => checkValidAyahId(-Infinity)).toThrow(TypeError)
  })

  it("should handle checkOnly", () => {
    expect(isValidAyahId(1)).toBe(true)
    expect(isValidAyahId(meta.numAyahs)).toBe(true)
    expect(isValidAyahId(Math.floor(meta.numAyahs / 2))).toBe(true)
    expect(isValidAyahId(0)).toBe(false)
    expect(isValidAyahId(meta.numAyahs + 1)).toBe(false)
    expect(isValidAyahId(1.5)).toBe(false)
    expect(isValidAyahId(NaN)).toBe(false)
    expect(isValidAyahId(Infinity)).toBe(false)
  })

  it("should handle edge cases correctly", () => {
    expect(checkValidAyahId(1)).toBeUndefined()
    expect(checkValidAyahId(meta.numAyahs)).toBeUndefined()
    expect(() => checkValidAyahId(meta.numAyahs + 0.5)).toThrow(TypeError)
    expect(checkValidAyahId(Math.floor(meta.numAyahs / 2))).toBeUndefined()
  })

  it("should throw TypeError for non-number ayah id", () => {
    expect(() => checkValidAyahId("1" as any)).toThrow(TypeError)
    expect(() => checkValidAyahId(null as any)).toThrow(TypeError)
    expect(() => checkValidAyahId(undefined as any)).toThrow(TypeError)
  })
})
