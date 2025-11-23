import { HafsLists as data, HafsMeta as meta } from "../src/lists/aHafsLists"
import { isValidHizb, isValidJuz, isValidManzil, isValidRubAlHizb, isValidRuku, isValidSurah, isValidSurahAyah } from "../src/typeGuards"

describe("isValidJuz", () => {
  it("should return true for valid juz numbers", () => {
    expect(isValidJuz(1, meta)).toBe(true)
    expect(isValidJuz(15, meta)).toBe(true)
    expect(isValidJuz(30, meta)).toBe(true)
  })

  it("should return false for invalid juz numbers", () => {
    expect(isValidJuz(0, meta)).toBe(false)
    expect(isValidJuz(31, meta)).toBe(false)
    expect(isValidJuz(-1, meta)).toBe(false)
  })

  it("should return false for non-integer values", () => {
    expect(isValidJuz("1", meta)).toBe(false)
    expect(isValidJuz(1.5, meta)).toBe(false)
    expect(isValidJuz(NaN, meta)).toBe(false)
    expect(isValidJuz(Infinity, meta)).toBe(false)
  })
})

describe("isValidSurahAyah", () => {
  it("should return true for valid surah-ayah combinations", () => {
    expect(isValidSurahAyah([1, 1], data)).toBe(true) // Al-Fatiha has 7 ayahs
    expect(isValidSurahAyah([1, 7], data)).toBe(true) // Al-Fatiha has 7 ayahs
    expect(isValidSurahAyah([2, 286], data)).toBe(true) // Al-Baqarah has 286 ayahs
    expect(isValidSurahAyah([114, 6], data)).toBe(true) // An-Nas has 6 ayahs
  })

  it("should return false for invalid surah numbers", () => {
    expect(isValidSurahAyah([0, 1], data)).toBe(false)
    expect(isValidSurahAyah([115, 1], data)).toBe(false)
    expect(isValidSurahAyah([-1, 1], data)).toBe(false)
  })

  it("should return false for invalid ayah numbers", () => {
    expect(isValidSurahAyah([1, 0], data)).toBe(false)
    expect(isValidSurahAyah([1, 8], data)).toBe(false) // Al-Fatiha only has 7 ayahs
    expect(isValidSurahAyah([2, 287], data)).toBe(false) // Al-Baqarah only has 286 ayahs
  })

  it("should return false for non-integer values", () => {
    expect(isValidSurahAyah(["1", "1"], data)).toBe(false)
    expect(isValidSurahAyah([1.5, 1], data)).toBe(false)
    expect(isValidSurahAyah([1, 1.5], data)).toBe(false)
    expect(isValidSurahAyah([NaN, 1], data)).toBe(false)
    expect(isValidSurahAyah([1, NaN], data)).toBe(false)
    expect(isValidSurahAyah([Infinity, 1], data)).toBe(false)
    expect(isValidSurahAyah([1, Infinity], data)).toBe(false)
  })
})

describe("isValidSurah", () => {
  it("should return true for valid surah numbers", () => {
    expect(isValidSurah(1, meta)).toBe(true)
    expect(isValidSurah(57, meta)).toBe(true)
    expect(isValidSurah(114, meta)).toBe(true)
  })

  it("should return false for invalid surah numbers", () => {
    expect(isValidSurah(0, meta)).toBe(false)
    expect(isValidSurah(115, meta)).toBe(false)
    expect(isValidSurah(-1, meta)).toBe(false)
  })

  it("should return false for non-integer values", () => {
    expect(isValidSurah(1.5, meta)).toBe(false)
    expect(isValidSurah("1", meta)).toBe(false)
    expect(isValidSurah(NaN, meta)).toBe(false)
    expect(isValidSurah(Infinity, meta)).toBe(false)
  })
})

describe("isValidRubAlHizb", () => {
  it("should return true for valid rub al hizb numbers", () => {
    expect(isValidRubAlHizb(1, data)).toBe(true)
    expect(isValidRubAlHizb(120, data)).toBe(true)
    expect(isValidRubAlHizb(240, data)).toBe(true)
  })

  it("should return false for invalid rub al hizb numbers", () => {
    expect(isValidRubAlHizb(0, data)).toBe(false)
    expect(isValidRubAlHizb(241, data)).toBe(false)
    expect(isValidRubAlHizb(-1, data)).toBe(false)
  })

  it("should return false for non-integer values", () => {
    expect(isValidRubAlHizb("1", data)).toBe(false)
    expect(isValidRubAlHizb(1.5, data)).toBe(false)
    expect(isValidRubAlHizb(NaN, data)).toBe(false)
    expect(isValidRubAlHizb(Infinity, data)).toBe(false)
  })
})

describe("isValidHizb", () => {
  it("should return true for valid hizb numbers", () => {
    expect(isValidHizb(1, meta)).toBe(true)
    expect(isValidHizb(30, meta)).toBe(true)
    expect(isValidHizb(60, meta)).toBe(true)
  })

  it("should return false for invalid hizb numbers", () => {
    expect(isValidHizb("1", meta)).toBe(false)
    expect(isValidHizb(0, meta)).toBe(false)
    expect(isValidHizb(61, meta)).toBe(false)
    expect(isValidHizb(-1, meta)).toBe(false)
  })

  it("should return false for non-integer values", () => {
    expect(isValidHizb(1.5, meta)).toBe(false)
    expect(isValidHizb(NaN, meta)).toBe(false)
    expect(isValidHizb(Infinity, meta)).toBe(false)
  })

  describe("isValidRuku", () => {
    it("should return true for valid ruku numbers", () => {
      expect(isValidRuku(1, meta)).toBe(true)
      expect(isValidRuku(30, meta)).toBe(true)
      expect(isValidRuku(60, meta)).toBe(true)
    })

    it("should return false for invalid ruku numbers", () => {
      expect(isValidRuku(0, meta)).toBe(false)
      expect(isValidRuku(-1, meta)).toBe(false)
      expect(isValidRuku(meta.numRukus + 1, meta)).toBe(false)
    })

    it("should return false for non-integer values", () => {
      expect(isValidRuku("1", meta)).toBe(false)
      expect(isValidRuku(1.5, meta)).toBe(false)
      expect(isValidRuku(NaN, meta)).toBe(false)
      expect(isValidRuku(Infinity, meta)).toBe(false)
    })

    describe("isValidManzil", () => {
      it("should return true for valid manzil numbers", () => {
        expect(isValidManzil(1, meta)).toBe(true)
        expect(isValidManzil(4, meta)).toBe(true)
        expect(isValidManzil(7, meta)).toBe(true)
      })

      it("should return false for invalid manzil numbers", () => {
        expect(isValidManzil(0, meta)).toBe(false)
        expect(isValidManzil(8, meta)).toBe(false)
        expect(isValidManzil(-1, meta)).toBe(false)
      })

      it("should return false for non-integer values", () => {
        expect(isValidManzil("1", meta)).toBe(false)
        expect(isValidManzil(1.5, meta)).toBe(false)
        expect(isValidManzil(NaN, meta)).toBe(false)
        expect(isValidManzil(Infinity, meta)).toBe(false)
      })
    })
  })
})
