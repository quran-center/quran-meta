import { describe, it, expect } from "vitest"
import { checkValidJuz, checkValidPage } from "../src/validation"
import { meta } from "../src/const"

describe("checkValidPage", () => {
  it("should accept valid page numbers", () => {
    expect(() => checkValidPage(1)).not.toThrow()
    expect(() => checkValidPage(meta.numPages)).not.toThrow()
    expect(() => checkValidPage(300)).not.toThrow()
  })

  it("should throw TypeError for non-number values", () => {
    expect(() => checkValidPage("1")).toThrow(TypeError)
    expect(() => checkValidPage(null)).toThrow(TypeError)
    expect(() => checkValidPage(undefined)).toThrow(TypeError)
    expect(() => checkValidPage({})).toThrow(TypeError)
  })

  it("should throw TypeError for non-integer numbers", () => {
    expect(() => checkValidPage(1.5)).toThrow(TypeError)
    expect(() => checkValidPage(2.7)).toThrow(TypeError)
  })

  it("should throw RangeError for out of range values", () => {
    expect(() => checkValidPage(0)).toThrow(RangeError)
    expect(() => checkValidPage(-1)).toThrow(RangeError)
    expect(() => checkValidPage(meta.numPages + 1)).toThrow(RangeError)
  })

  describe("checkValidJuz", () => {
    it("should accept valid juz numbers", () => {
      expect(() => checkValidJuz(1)).not.toThrow()
      expect(() => checkValidJuz(meta.numJuzs)).not.toThrow()
      expect(() => checkValidJuz(15)).not.toThrow()
    })

    it("should throw TypeError for non-number values", () => {
      expect(() => checkValidJuz("1")).toThrow(TypeError)
      expect(() => checkValidJuz(null)).toThrow(TypeError)
      expect(() => checkValidJuz(undefined)).toThrow(TypeError)
      expect(() => checkValidJuz({})).toThrow(TypeError)
    })

    it("should throw TypeError for non-integer numbers", () => {
      expect(() => checkValidJuz(1.5)).toThrow(TypeError)
      expect(() => checkValidJuz(2.7)).toThrow(TypeError)
    })

    it("should throw RangeError for out of range values", () => {
      expect(() => checkValidJuz(0)).toThrow(RangeError)
      expect(() => checkValidJuz(-1)).toThrow(RangeError)
      expect(() => checkValidJuz(meta.numJuzs + 1)).toThrow(RangeError)
    })
  })
})
