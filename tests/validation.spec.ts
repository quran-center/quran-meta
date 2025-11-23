import { checkValidJuz, checkValidManzil, checkValidPage, checkValidRuku } from "../src/validation"
import { meta } from "../src/hafs"

describe("checkValidPage", () => {
  it("should accept valid page numbers", () => {
    expect(() => checkValidPage(1, meta)).not.toThrow()
    expect(() => checkValidPage(meta.numPages, meta)).not.toThrow()
    expect(() => checkValidPage(300, meta)).not.toThrow()
  })

  it("should throw TypeError for non-number values", () => {
    expect(() => checkValidPage("1", meta)).toThrow(TypeError)
    expect(() => checkValidPage(null, meta)).toThrow(TypeError)
    expect(() => checkValidPage(undefined, meta)).toThrow(TypeError)
    expect(() => checkValidPage({}, meta)).toThrow(TypeError)
  })

  it("should throw TypeError for non-integer numbers", () => {
    expect(() => checkValidPage(1.5, meta)).toThrow(TypeError)
    expect(() => checkValidPage(2.7, meta)).toThrow(TypeError)
  })

  it("should throw RangeError for out of range values", () => {
    expect(() => checkValidPage(0, meta)).toThrow(RangeError)
    expect(() => checkValidPage(-1, meta)).toThrow(RangeError)
    expect(() => checkValidPage(meta.numPages + 1, meta)).toThrow(RangeError)
  })

  describe("checkValidJuz", () => {
    it("should accept valid juz numbers", () => {
      expect(() => checkValidJuz(1, meta)).not.toThrow()
      expect(() => checkValidJuz(meta.numJuzs, meta)).not.toThrow()
      expect(() => checkValidJuz(15, meta)).not.toThrow()
    })

    it("should throw TypeError for non-number values", () => {
      expect(() => checkValidJuz("1", meta)).toThrow(TypeError)
      expect(() => checkValidJuz(null, meta)).toThrow(TypeError)
      expect(() => checkValidJuz(undefined, meta)).toThrow(TypeError)
      expect(() => checkValidJuz({}, meta)).toThrow(TypeError)
    })

    it("should throw TypeError for non-integer numbers", () => {
      expect(() => checkValidJuz(1.5, meta)).toThrow(TypeError)
      expect(() => checkValidJuz(2.7, meta)).toThrow(TypeError)
    })

    it("should throw RangeError for out of range values", () => {
      expect(() => checkValidJuz(0, meta)).toThrow(RangeError)
      expect(() => checkValidJuz(-1, meta)).toThrow(RangeError)
      expect(() => checkValidJuz(meta.numJuzs + 1, meta)).toThrow(RangeError)
    })

    describe("checkValidRuku", () => {
      it("should accept valid ruku numbers", () => {
        expect(() => checkValidRuku(1, meta)).not.toThrow()
        expect(() => checkValidRuku(meta.numRukus, meta)).not.toThrow()
        expect(() => checkValidRuku(15, meta)).not.toThrow()
      })

      it("should throw TypeError for non-number values", () => {
        expect(() => checkValidRuku("1", meta)).toThrow(TypeError)
        expect(() => checkValidRuku(null, meta)).toThrow(TypeError)
        expect(() => checkValidRuku(undefined, meta)).toThrow(TypeError)
        expect(() => checkValidRuku({}, meta)).toThrow(TypeError)
      })

      it("should throw TypeError for non-integer numbers", () => {
        expect(() => checkValidRuku(1.5, meta)).toThrow(TypeError)
        expect(() => checkValidRuku(2.7, meta)).toThrow(TypeError)
      })

      it("should throw RangeError for out of range values", () => {
        expect(() => checkValidRuku(0, meta)).toThrow(RangeError)
        expect(() => checkValidRuku(-1, meta)).toThrow(RangeError)
        expect(() => checkValidRuku(meta.numRukus + 1, meta)).toThrow(RangeError)
      })

      describe("checkValidManzil", () => {
        it("should accept valid manzil numbers", () => {
          expect(() => checkValidManzil(1, meta)).not.toThrow()
          expect(() => checkValidManzil(meta.numManzils, meta)).not.toThrow()
          expect(() => checkValidManzil(4, meta)).not.toThrow()
        })

        it("should throw TypeError for non-number values", () => {
          expect(() => checkValidManzil("1", meta)).toThrow(TypeError)
          expect(() => checkValidManzil(null, meta)).toThrow(TypeError)
          expect(() => checkValidManzil(undefined, meta)).toThrow(TypeError)
          expect(() => checkValidManzil({}, meta)).toThrow(TypeError)
        })

        it("should throw TypeError for non-integer numbers", () => {
          expect(() => checkValidManzil(1.5, meta)).toThrow(TypeError)
          expect(() => checkValidManzil(2.7, meta)).toThrow(TypeError)
        })

        it("should throw RangeError for out of range values", () => {
          expect(() => checkValidManzil(0, meta)).toThrow(RangeError)
          expect(() => checkValidManzil(-1, meta)).toThrow(RangeError)
          expect(() => checkValidManzil(meta.numManzils + 1, meta)).toThrow(RangeError)
        })
      })
    })
  })
})
