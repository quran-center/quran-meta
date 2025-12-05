import { maxAyahsInSurah } from "./types"
import { getAyahCountInSurah } from "./getAyahCountInSurah"
import type { AyahId, AyahNo, HizbId, Juz, Manzil, RubAlHizbId, Ruku, Surah, SurahAyah, QuranMeta } from "./types"
import type { RiwayaData } from "./lists/types"

/**
 * Checks if the given value is a valid AyahId.
 *
 * @param x - The value to check.
 * @returns True if the value is a valid AyahId, otherwise false.
 */
export function isValidAyahId(x: unknown, meta: QuranMeta): x is AyahId {
  return Number.isInteger(x) && 1 <= (x as number) && (x as number) <= meta.numAyahs
}

/**
 * Checks if the given value is a valid Ayah number.
 *
 * @param x - The value to check.
 * @returns True if the value is a valid Ayah number, otherwise false.
 */
export function isValidAyahNo(x: unknown): x is AyahNo {
  return Number.isInteger(x) && 1 <= (x as number) && (x as number) <= maxAyahsInSurah
}

/**
 * Checks if the given value is a valid Surah number.
 *
 * @param x - The value to check.
 * @returns `true` if the value is a valid Surah number, otherwise `false`.
 */
export function isValidSurah(x: unknown, meta: QuranMeta): x is Surah {
  return Number.isInteger(x) && 1 <= (x as number) && (x as number) <= meta.numSurahs
}

/**
 * Type guard function that checks if a tuple of two numbers represents a valid Surah and Ayah combination.
 *
 * @param x - A tuple containing [surahNumber, ayahNumber]
 * @param lists - The Lists object for the riwaya
 * @returns True if the tuple represents a valid Surah-Ayah combination, false otherwise
 *
 * @example
 * ```ts
 * isValidSurahAyah([1, 7], HafsLists) // true - Al-Fatiha has 7 ayahs
 * isValidSurahAyah([1, 8], HafsLists) // false - Al-Fatiha only has 7 ayahs
 * isValidSurahAyah([115, 1], HafsLists) // false - there are only 114 surahs
 * ```
 */
export function isValidSurahAyah(x: [unknown, unknown], data: RiwayaData): x is SurahAyah {
  const [surah, ayah] = x
  if (!isValidSurah(surah, data.meta)) {
    return false
  }

  return Number.isInteger(ayah) && (ayah as number) >= 1 && (ayah as number) <= getAyahCountInSurah(surah, data)
}

/**
 * Type guard that checks if a number is a valid Juz number
 * @param x - The number to check
 * @returns True if the number is an integer between 1 and the total number of Juzs (inclusive)
 */
export function isValidJuz(x: unknown, meta: QuranMeta): x is Juz {
  return Number.isInteger(x) && 1 <= (x as number) && (x as number) <= meta.numJuzs
}

/**
 * Type guard to check if a number is a valid Hizb number
 * @param x - The number to check
 * @returns True if the number is an integer between 1 and the total number of Hizbs (inclusive)
 */
export function isValidHizb(x: unknown, meta: QuranMeta): x is HizbId {
  return Number.isInteger(x) && 1 <= (x as number) && (x as number) <= meta.numHizbs
}

/**
 * Type guard to check if a number is a valid RubAlHizb number
 * @param x - The number to check
 * @returns True if the number is an integer between 1 and the total number of RubAlHizbs (inclusive)
 */
export function isValidRubAlHizb(x: unknown, lists: RiwayaData): x is RubAlHizbId {
  return Number.isInteger(x) && 1 <= (x as number) && (x as number) <= lists.meta.numRubAlHizbs
}

/**
 * Type guard to check if a number is a valid Quran page number
 * @param x - The number to check
 * @returns True if the number is an integer between 1 and the total number of pages (inclusive)
 */
export function isValidPage(x: unknown, meta: QuranMeta): x is Juz {
  return Number.isInteger(x) && 1 <= (x as number) && (x as number) <= meta.numPages
}

/**
 * Type guard that checks if a value is a valid Ruku number
 * @param x - The value to check
 * @returns True if x is an integer between 1 and the total number of Rukus
 * @example
 * ```ts
 * if (isValidRuku(5)) {
 *   // 5 is a valid Ruku number
 * }
 * ```
 */
export function isValidRuku(x: unknown, meta: QuranMeta): x is Ruku {
  return Number.isInteger(x) && 1 <= (x as number) && (x as number) <= meta.numRukus
}

/**
 * Type guard to check if a value is a valid Manzil number
 *
 * @param x - The value to check
 * @returns True if the value is an integer between 1 and the total number of Manzils
 *
 * @example
 * ```ts
 * if (isValidManzil(3)) {
 *   // value is a valid Manzil number
 * }
 * ```
 */
export function isValidManzil(x: unknown, meta: QuranMeta): x is Manzil {
  return Number.isInteger(x) && 1 <= (x as number) && (x as number) <= meta.numManzils
}
