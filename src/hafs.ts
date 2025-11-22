/**
 * Hafs-specific entry point
 *
 * This module provides a pre-initialized API for the Hafs riwaya.
 * All functions use Hafs data by default, and Qalun data is not bundled.
 *
 * @example
 * ```typescript
 * import { getAyahMeta, findJuz, quran } from 'quran-meta/hafs'
 *
 * // Using functional API (Hafs is default)
 * const meta = getAyahMeta(1)
 * const juz = findJuz(1, 1)
 *
 * // Using class API
 * const meta2 = quran.getAyahMeta(1)
 * ```
 */

import { HafsMeta } from "./lists/HafsLists"
import { QuranRiwaya } from "./QuranRiwaya"

// Re-export all types
export type * from "./types"
export type { QuranPackageConfig } from "./initPackage"
export type { PartType } from "./generatePartBlocks"

// Re-export utilities that don't depend on riwaya
export { ayahStringSplitter, string2NumberSplitter, string2NumberSplitterStrict } from "./ayahStringSplitter"
export { surahStringParser } from "./surahStringParser"
export { isValidManzil, isValidRuku, isValidAyahId, isValidAyahNo, isValidJuz, isValidPage, isValidSurah, isValidSurahAyah } from "./typeGuards"
export { checkValidManzil, checkValidRuku, checkValidAyahId, checkValidJuz, checkValidPage, checkValidSurah, checkValidSurahAyah } from "./validation"
export * from "./i18n"
export { QuranRiwaya } from "./QuranRiwaya"

/**
 * Metadata constants for Hafs riwaya
 */
export const meta = HafsMeta

export const riwayaMeta = {
  Hafs: meta
} as const

/**
 * Pre-initialized QuranRiwaya instance for Hafs
 *
 * @example
 * ```typescript
 * import { quran } from 'quran-meta/hafs'
 *
 * const meta = quran.getAyahMeta(1)
 * const juz = quran.findJuz(1, 1)
 * ```
 */
export const quran = QuranRiwaya.hafs()

// Re-export all functional API with Hafs as default
// Users can import these and use them directly without specifying riwaya
export { findAyahIdBySurah } from "./findAyahIdBySurah"
export { findJuz } from "./findJuz"
export { findJuzAndShift, findJuzAndShiftByAyahId } from "./findJuzAndShift"
export { findJuzByAyahId } from "./findJuzByAyahId"
export { findJuzMetaBySurah } from "./findJuzMetaBySurah"
export { findManzil } from "./findManzil"
export { findManzilByAyahId } from "./findManzilByAyahId"
export { findPage } from "./findPage"
export { findPagebyAyahId } from "./findPagebyAyahId"
export { findRangeAroundAyah } from "./findRangeAroundAyah"
export { findRangeAroundSurahAyah } from "./findRangeAroundSurahAyah"
export { findRubAlHizb } from "./findRubAlHizb"
export { findRubAlHizbByAyahId } from "./findRubAlHizbByAyahId"
export { findRukuByAyahId } from "./findRukuByAyahId"
export { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
export { findSurahByAyahId } from "./findSurahByAyahId"
export { getAyahCountInSurah } from "./getAyahCountInSurah"
export { getAyahMeta } from "./getAyahMeta"
export { getAyahMetasForSurah } from "./getAyahMetasForSurah"
export { getJuzMeta } from "./getJuzMeta"
export { generatePartBlocks } from "./generatePartBlocks"
export { getManzilMeta } from "./getManzilMeta"
export { getPageMeta } from "./getPageMeta"
export { getRukuMeta } from "./getRukuMeta"
export { getRubAlHizb } from "./getRubAlHizb"
export { getRubAlHizbMeta } from "./getRubAlHizbMeta"
export { getRubAlHizbMetaByAyahId } from "./getRubAlHizbMetaByAyahId"
export { getRubAlHizbByAyahId } from "./getRubAlHizbByAyahId"
export { getSurahMeta } from "./getSurahMeta"
export { getSurahInfo } from "./getSurahInfo"
export { isAyahJuzFirst } from "./isAyahJuzFirst"
export { isAyahPageFirst } from "./isAyahPageFirst"
export { isSurahAyahJuzFirst } from "./isSurahAyahJuzFirst"
export { isSurahAyahPageFirst } from "./isSurahAyahPageFirst"
export { nextAyah } from "./nextAyah"
export { prevAyah } from "./prevAyah"
