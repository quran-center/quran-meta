import { maxAyahsInSurah, meta } from "./const"
import { getAyahCountInSurah } from "./getAyahCountInSurah"
import { AyahId, AyahNo, Juz, Surah, SurahAyah } from "./types"

export function isValidAyahId(x: number): x is AyahId {
  return Number.isInteger(x) && 1 <= x && x <= meta.numAyahs
}

export function isValidAyahNo(x: number): x is AyahNo {
  return Number.isInteger(x) && 1 <= x && x <= maxAyahsInSurah
}

export function isValidSurah(x: number): x is Surah {
  return Number.isInteger(x) && 1 <= x && x <= meta.numSurahs
}

/**
 * Type guard function that checks if a tuple of two numbers represents a valid Surah and Ayah combination.
 *
 * @param x - A tuple containing [surahNumber, ayahNumber]
 * @returns True if the tuple represents a valid Surah-Ayah combination, false otherwise
 *
 * @example
 * ```ts
 * isValidSurahAyah([1, 7]) // true - Al-Fatiha has 7 ayahs
 * isValidSurahAyah([1, 8]) // false - Al-Fatiha only has 7 ayahs
 * isValidSurahAyah([115, 1]) // false - there are only 114 surahs
 * ```
 */
export function isValidSurahAyah(x: [number, number]): x is SurahAyah {
  const [surah, ayah] = x
  if (!isValidSurah(surah)) {
    return false
  }

  return (Number.isInteger(ayah) && ayah >= 1 && ayah <= getAyahCountInSurah(surah))
}

/**
 * Type guard that checks if a number is a valid Juz number
 * @param x - The number to check
 * @returns True if the number is an integer between 1 and the total number of Juzs (inclusive)
 */
export function isValidJuz(x: number): x is Juz {
  return Number.isInteger(x) && 1 <= x && x <= meta.numJuzs
}

/**
 * Type guard to check if a number is a valid Quran page number
 * @param x - The number to check
 * @returns True if the number is an integer between 1 and the total number of pages (inclusive)
 */
export function isValidPage(x: number): x is Juz {
  return Number.isInteger(x) && 1 <= x && x <= meta.numPages
}

export function isValidAyahCountBetweenJuzSurah(x: number): x is Juz {
  return Number.isInteger(x) && 1 <= x && x <= meta.numJuzs
}
