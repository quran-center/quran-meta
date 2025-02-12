import { isValidAyahCountBetweenJuzSurah, isValidJuz, isValidSurah, isValidSurahAyah } from "../src/typeGuards"

describe("isValidAyahCountBetweenJuzSurah", () => {
  it("should return true for valid juz numbers", () => {
    expect(isValidAyahCountBetweenJuzSurah(1)).toBe(true)
    expect(isValidAyahCountBetweenJuzSurah(15)).toBe(true)
    expect(isValidAyahCountBetweenJuzSurah(30)).toBe(true)
  })

  it("should return false for invalid juz numbers", () => {
    expect(isValidAyahCountBetweenJuzSurah(0)).toBe(false)
    expect(isValidAyahCountBetweenJuzSurah(31)).toBe(false)
    expect(isValidAyahCountBetweenJuzSurah(-1)).toBe(false)
  })

  it("should return false for non-integer values", () => {
    expect(isValidAyahCountBetweenJuzSurah(1.5)).toBe(false)
    expect(isValidAyahCountBetweenJuzSurah(NaN)).toBe(false)
    expect(isValidAyahCountBetweenJuzSurah(Infinity)).toBe(false)
  })

  describe("isValidJuz", () => {
    it("should return true for valid juz numbers", () => {
      expect(isValidJuz(1)).toBe(true)
      expect(isValidJuz(15)).toBe(true)
      expect(isValidJuz(30)).toBe(true)
    })

    it("should return false for invalid juz numbers", () => {
      expect(isValidJuz(0)).toBe(false)
      expect(isValidJuz(31)).toBe(false)
      expect(isValidJuz(-1)).toBe(false)
    })

    it("should return false for non-integer values", () => {
      expect(isValidJuz(1.5)).toBe(false)
      expect(isValidJuz(NaN)).toBe(false)
      expect(isValidJuz(Infinity)).toBe(false)
    })

    describe("isValidSurahAyah", () => {
      it("should return true for valid surah-ayah combinations", () => {
        expect(isValidSurahAyah([1, 7])).toBe(true) // Al-Fatiha has 7 ayahs
        expect(isValidSurahAyah([2, 286])).toBe(true) // Al-Baqarah has 286 ayahs
        expect(isValidSurahAyah([114, 6])).toBe(true) // An-Nas has 6 ayahs
      })

      it("should return false for invalid surah numbers", () => {
        expect(isValidSurahAyah([0, 1])).toBe(false)
        expect(isValidSurahAyah([115, 1])).toBe(false)
        expect(isValidSurahAyah([-1, 1])).toBe(false)
      })

      it("should return false for invalid ayah numbers", () => {
        expect(isValidSurahAyah([1, 0])).toBe(false)
        expect(isValidSurahAyah([1, 8])).toBe(false) // Al-Fatiha only has 7 ayahs
        expect(isValidSurahAyah([2, 287])).toBe(false) // Al-Baqarah only has 286 ayahs
      })

      it("should return false for non-integer values", () => {
        expect(isValidSurahAyah([1.5, 1])).toBe(false)
        expect(isValidSurahAyah([1, 1.5])).toBe(false)
        expect(isValidSurahAyah([NaN, 1])).toBe(false)
        expect(isValidSurahAyah([1, NaN])).toBe(false)
        expect(isValidSurahAyah([Infinity, 1])).toBe(false)
        expect(isValidSurahAyah([1, Infinity])).toBe(false)
      })

      describe("isValidSurah", () => {
        it("should return true for valid surah numbers", () => {
          expect(isValidSurah(1)).toBe(true)
          expect(isValidSurah(57)).toBe(true)
          expect(isValidSurah(114)).toBe(true)
        })

        it("should return false for invalid surah numbers", () => {
          expect(isValidSurah(0)).toBe(false)
          expect(isValidSurah(115)).toBe(false)
          expect(isValidSurah(-1)).toBe(false)
        })

        it("should return false for non-integer values", () => {
          expect(isValidSurah(1.5)).toBe(false)
          expect(isValidSurah(NaN)).toBe(false)
          expect(isValidSurah(Infinity)).toBe(false)
        })
      })
    })
  })
})
