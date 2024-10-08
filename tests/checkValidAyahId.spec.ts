import { checkValidAyahId, meta } from "../src"

describe("checkValidAyahId", () => {
  it("should throw RangeError for ayah id less than 1", () => {
    expect(() => checkValidAyahId(0)).toThrow(RangeError)
    expect(() => checkValidAyahId(-1)).toThrow(RangeError)
  })

  it("should throw RangeError for ayah id greater than total number of ayas", () => {
    expect(() => checkValidAyahId(meta.numAyas + 1)).toThrow(RangeError)
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
    expect(checkValidAyahId(1, true)).toBe(true)
    expect(checkValidAyahId(meta.numAyas, true)).toBe(true)
    expect(checkValidAyahId(Math.floor(meta.numAyas / 2), true)).toBe(true)
    expect(checkValidAyahId(0, true)).toBe(false)
    expect(checkValidAyahId(meta.numAyas + 1, true)).toBe(false)
    expect(checkValidAyahId(1.5, true)).toBe(false)
    expect(checkValidAyahId(NaN, true)).toBe(false)
    expect(checkValidAyahId(Infinity, true)).toBe(false)
  })

  it("should handle edge cases correctly", () => {
    expect(checkValidAyahId(1)).toBe(true)
    expect(checkValidAyahId(meta.numAyas)).toBe(true)
    expect(() => checkValidAyahId(meta.numAyas + 0.5)).toThrow(TypeError)
    expect(checkValidAyahId(Math.floor(meta.numAyas / 2))).toBe(true)
  })

  it("should throw TypeError for non-number ayah id", () => {
    expect(() => checkValidAyahId("1" as any)).toThrow(TypeError)
    expect(() => checkValidAyahId(null as any)).toThrow(TypeError)
    expect(() => checkValidAyahId(undefined as any)).toThrow(TypeError)
  })
})
