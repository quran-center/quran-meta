import { maxAyahsInSurah, meta } from "./const"
import { getAyahCountInSurah } from "./getAyahCountInSurah"
import { AyahId, AyahNo, HizbId, Juz, RubAlHizbId, Surah, SurahAyah } from "./types"

export function isValidAyahId(x: unknown): x is AyahId {
  return Number.isInteger(x) && 1 <= (x as number) && x as number <= meta.numAyahs
}

export function isValidAyahNo(x: unknown): x is AyahNo {
  return Number.isInteger(x) && 1 <= (x as number) && x as number <= maxAyahsInSurah
}

export function isValidSurah(x: unknown): x is Surah {
  return Number.isInteger(x) && 1 <= (x as number) && x as number <= meta.numSurahs
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
export function isValidSurahAyah(x: [unknown, unknown]): x is SurahAyah {
  const [surah, ayah] = x
  if (!isValidSurah(surah)) {
    return false
  }

  return (Number.isInteger(ayah) && (ayah as number) >= 1 && ayah as number <= getAyahCountInSurah(surah))
}

/**
 * Type guard that checks if a number is a valid Juz number
 * @param x - The number to check
 * @returns True if the number is an integer between 1 and the total number of Juzs (inclusive)
 */
export function isValidJuz(x: unknown): x is Juz {
  return Number.isInteger(x) && 1 <= (x as number) && x as number <= meta.numJuzs
}

/**
 * Type guard to check if a number is a valid Hizb number
 * @param x - The number to check
 * @returns True if the number is an integer between 1 and the total number of Hizbs (inclusive)
 */
export function isValidHizb(x: unknown): x is HizbId {
  return Number.isInteger(x) && 1 <= (x as number) && x as number <= meta.numHizbs
}

/**
 * Type guard to check if a number is a valid RubAlHizb number
 * @param x - The number to check
 * @returns True if the number is an integer between 1 and the total number of RubAlHizbs (inclusive)
 */
export function isValidRubAlHizb(x: unknown): x is RubAlHizbId {
  return Number.isInteger(x) && 1 <= (x as number) && x as number <= meta.numRubAlHizbs
}

/**
 * Type guard to check if a number is a valid Quran page number
 * @param x - The number to check
 * @returns True if the number is an integer between 1 and the total number of pages (inclusive)
 */
export function isValidPage(x: unknown): x is Juz {
  return Number.isInteger(x) && 1 <= (x as number) && x as number <= meta.numPages
}

/**
 * Checks if a given number is a valid Ayah count between Juz and Surah.
 *
 * @param x - The number to check.
 * @returns A boolean indicating whether the number is a valid Ayah count between Juz and Surah.
 */
export function isValidAyahCountBetweenJuzSurah(x: number): x is Juz {
  return Number.isInteger(x) && 1 <= x && x <= meta.numJuzs
}
