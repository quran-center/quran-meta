import { HafsLists as data, HafsMeta as meta } from "../src/lists/HafsLists"
import {
  isValidHizb,
  isValidJuz,
  isValidManzil,
  isValidRubAlHizb,
  isValidRuku,
  isValidSurah,
  isValidSurahAyah
} from "../src/typeGuards"

describe(isValidJuz, () => {
  it("should return true for valid juz numbers", () => {
    expect(isValidJuz(1, meta)).toBeTruthy()
    expect(isValidJuz(15, meta)).toBeTruthy()
    expect(isValidJuz(30, meta)).toBeTruthy()
  })

  it("should return false for invalid juz numbers", () => {
    expect(isValidJuz(0, meta)).toBeFalsy()
    expect(isValidJuz(31, meta)).toBeFalsy()
    expect(isValidJuz(-1, meta)).toBeFalsy()
  })

  it("should return false for non-integer values", () => {
    expect(isValidJuz("1", meta)).toBeFalsy()
    expect(isValidJuz(1.5, meta)).toBeFalsy()
    expect(isValidJuz(Number.NaN, meta)).toBeFalsy()
    expect(isValidJuz(Infinity, meta)).toBeFalsy()
  })
})

describe(isValidSurahAyah, () => {
  it("should return true for valid surah-ayah combinations", () => {
    expect(isValidSurahAyah([1, 1], data)).toBeTruthy() // Al-Fatiha has 7 ayahs
    expect(isValidSurahAyah([1, 7], data)).toBeTruthy() // Al-Fatiha has 7 ayahs
    expect(isValidSurahAyah([2, 286], data)).toBeTruthy() // Al-Baqarah has 286 ayahs
    expect(isValidSurahAyah([114, 6], data)).toBeTruthy() // An-Nas has 6 ayahs
  })

  it("should return false for invalid surah numbers", () => {
    expect(isValidSurahAyah([0, 1], data)).toBeFalsy()
    expect(isValidSurahAyah([115, 1], data)).toBeFalsy()
    expect(isValidSurahAyah([-1, 1], data)).toBeFalsy()
  })

  it("should return false for invalid ayah numbers", () => {
    expect(isValidSurahAyah([1, 0], data)).toBeFalsy()
    expect(isValidSurahAyah([1, 8], data)).toBeFalsy() // Al-Fatiha only has 7 ayahs
    expect(isValidSurahAyah([2, 287], data)).toBeFalsy() // Al-Baqarah only has 286 ayahs
  })

  it("should return false for non-integer values", () => {
    expect(isValidSurahAyah(["1", "1"], data)).toBeFalsy()
    expect(isValidSurahAyah([1.5, 1], data)).toBeFalsy()
    expect(isValidSurahAyah([1, 1.5], data)).toBeFalsy()
    expect(isValidSurahAyah([Number.NaN, 1], data)).toBeFalsy()
    expect(isValidSurahAyah([1, Number.NaN], data)).toBeFalsy()
    expect(isValidSurahAyah([Infinity, 1], data)).toBeFalsy()
    expect(isValidSurahAyah([1, Infinity], data)).toBeFalsy()
  })
})

describe(isValidSurah, () => {
  it("should return true for valid surah numbers", () => {
    expect(isValidSurah(1, meta)).toBeTruthy()
    expect(isValidSurah(57, meta)).toBeTruthy()
    expect(isValidSurah(114, meta)).toBeTruthy()
  })

  it("should return false for invalid surah numbers", () => {
    expect(isValidSurah(0, meta)).toBeFalsy()
    expect(isValidSurah(115, meta)).toBeFalsy()
    expect(isValidSurah(-1, meta)).toBeFalsy()
  })

  it("should return false for non-integer values", () => {
    expect(isValidSurah(1.5, meta)).toBeFalsy()
    expect(isValidSurah("1", meta)).toBeFalsy()
    expect(isValidSurah(Number.NaN, meta)).toBeFalsy()
    expect(isValidSurah(Infinity, meta)).toBeFalsy()
  })
})

describe(isValidRubAlHizb, () => {
  it("should return true for valid rub al hizb numbers", () => {
    expect(isValidRubAlHizb(1, data)).toBeTruthy()
    expect(isValidRubAlHizb(120, data)).toBeTruthy()
    expect(isValidRubAlHizb(240, data)).toBeTruthy()
  })

  it("should return false for invalid rub al hizb numbers", () => {
    expect(isValidRubAlHizb(0, data)).toBeFalsy()
    expect(isValidRubAlHizb(241, data)).toBeFalsy()
    expect(isValidRubAlHizb(-1, data)).toBeFalsy()
  })

  it("should return false for non-integer values", () => {
    expect(isValidRubAlHizb("1", data)).toBeFalsy()
    expect(isValidRubAlHizb(1.5, data)).toBeFalsy()
    expect(isValidRubAlHizb(Number.NaN, data)).toBeFalsy()
    expect(isValidRubAlHizb(Infinity, data)).toBeFalsy()
  })
})

describe(isValidHizb, () => {
  it("should return true for valid hizb numbers", () => {
    expect(isValidHizb(1, meta)).toBeTruthy()
    expect(isValidHizb(30, meta)).toBeTruthy()
    expect(isValidHizb(60, meta)).toBeTruthy()
  })

  it("should return false for invalid hizb numbers", () => {
    expect(isValidHizb("1", meta)).toBeFalsy()
    expect(isValidHizb(0, meta)).toBeFalsy()
    expect(isValidHizb(61, meta)).toBeFalsy()
    expect(isValidHizb(-1, meta)).toBeFalsy()
  })

  it("should return false for non-integer values", () => {
    expect(isValidHizb(1.5, meta)).toBeFalsy()
    expect(isValidHizb(Number.NaN, meta)).toBeFalsy()
    expect(isValidHizb(Infinity, meta)).toBeFalsy()
  })

  describe(isValidRuku, () => {
    it("should return true for valid ruku numbers", () => {
      expect(isValidRuku(1, meta)).toBeTruthy()
      expect(isValidRuku(30, meta)).toBeTruthy()
      expect(isValidRuku(60, meta)).toBeTruthy()
    })

    it("should return false for invalid ruku numbers", () => {
      expect(isValidRuku(0, meta)).toBeFalsy()
      expect(isValidRuku(-1, meta)).toBeFalsy()
      expect(isValidRuku(meta.numRukus + 1, meta)).toBeFalsy()
    })

    it("should return false for non-integer values", () => {
      expect(isValidRuku("1", meta)).toBeFalsy()
      expect(isValidRuku(1.5, meta)).toBeFalsy()
      expect(isValidRuku(Number.NaN, meta)).toBeFalsy()
      expect(isValidRuku(Infinity, meta)).toBeFalsy()
    })

    describe(isValidManzil, () => {
      it("should return true for valid manzil numbers", () => {
        expect(isValidManzil(1, meta)).toBeTruthy()
        expect(isValidManzil(4, meta)).toBeTruthy()
        expect(isValidManzil(7, meta)).toBeTruthy()
      })

      it("should return false for invalid manzil numbers", () => {
        expect(isValidManzil(0, meta)).toBeFalsy()
        expect(isValidManzil(8, meta)).toBeFalsy()
        expect(isValidManzil(-1, meta)).toBeFalsy()
      })

      it("should return false for non-integer values", () => {
        expect(isValidManzil("1", meta)).toBeFalsy()
        expect(isValidManzil(1.5, meta)).toBeFalsy()
        expect(isValidManzil(Number.NaN, meta)).toBeFalsy()
        expect(isValidManzil(Infinity, meta)).toBeFalsy()
      })
    })
  })
})
