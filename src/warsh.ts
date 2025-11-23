/**
 * Warsh-specific entry point
 *
 * This module provides metadata for the Warsh riwaya only.
 * For a class-based API with all riwayas, use 'quran-meta' instead.
 *
 * @example
 * ```typescript
 * import { meta } from 'quran-meta/warsh'
 *
 * console.log(meta.numAyahs)  // 6214
 * console.log(meta.numPages)  // 603
 * ```
 */

/**
 * Warsh-specific entry point
 *
 * This module provides metadata for the Warsh riwaya only.
 * For the QuranRiwaya class API, use the main 'quran-meta' entry point.
 *
 * @example
 * ```typescript
 * import { meta } from 'quran-meta/warsh'
 *
 * console.log(meta.numAyahs)  // 6214
 * console.log(meta.numPages)  // 603
 * ```
 */

/**
 * Warsh-specific entry point
 *
 * This module provides metadata and QuranRiwaya instance for Warsh riwaya only.
 *
 * @example
 * ```typescript
 * // Metadata only (minimal bundle)
 * import { meta } from 'quran-meta/warsh'
 * console.log(meta.numAyahs)  // 6214
 *
 * // With QuranRiwaya class
 * import { quran } from 'quran-meta/warsh'
 * const ayahMeta = quran.getAyahMeta(1)
 * ```
 */

import { QuranRiwaya } from "./QuranRiwaya"
import { WarshLists } from "./lists/WarshLists"

// Re-export all types
export type * from "./types"
export type { PartType } from "./generatePartBlocks"

/**
 * Pre-initialized QuranRiwaya instance for Warsh
 */
const riwaya = QuranRiwaya.create(WarshLists)

/**
 * Warsh metadata
 */
export const meta = riwaya.meta

/**
 * Warsh Lists (SurahList, JuzList, etc.)
 */
export const HizbQuarterList = WarshLists.HizbQuarterList
export const JuzList = WarshLists.JuzList
export const ManzilList = WarshLists.ManzilList
export const PageList = WarshLists.PageList
export const SurahList = WarshLists.SurahList
export const RukuList = WarshLists.RukuList      
export const SajdaList = WarshLists.SajdaList

// Export all QuranRiwaya methods
export const ayahStringSplitter = riwaya.ayahStringSplitter
export const surahStringParser = riwaya.surahStringParser
export const getSurahMeta = riwaya.getSurahMeta
export const getSurahInfo = riwaya.getSurahInfo
export const getAyahCountInSurah = riwaya.getAyahCountInSurah
export const findAyahIdBySurah = riwaya.findAyahIdBySurah
export const findSurahByAyahId = riwaya.findSurahByAyahId
export const findSurahAyahByAyahId = riwaya.findSurahAyahByAyahId
export const nextAyah = riwaya.nextAyah
export const prevAyah = riwaya.prevAyah
export const findJuz = riwaya.findJuz
export const findJuzByAyahId = riwaya.findJuzByAyahId
export const getJuzMeta = riwaya.getJuzMeta
export const findJuzMetaBySurah = riwaya.findJuzMetaBySurah
export const findJuzAndShift = riwaya.findJuzAndShift
export const findJuzAndShiftByAyahId = riwaya.findJuzAndShiftByAyahId
export const findPage = riwaya.findPage
export const findPagebyAyahId = riwaya.findPagebyAyahId
export const getPageMeta = riwaya.getPageMeta
export const findManzil = riwaya.findManzil
export const findManzilByAyahId = riwaya.findManzilByAyahId
export const getManzilMeta = riwaya.getManzilMeta
export const findRukuByAyahId = riwaya.findRukuByAyahId
export const getRukuMeta = riwaya.getRukuMeta
export const findRubAlHizb = riwaya.findRubAlHizb
export const findRubAlHizbByAyahId = riwaya.findRubAlHizbByAyahId
export const getRubAlHizb = riwaya.getRubAlHizb
export const getRubAlHizbMeta = riwaya.getRubAlHizbMeta
export const getRubAlHizbMetaByAyahId = riwaya.getRubAlHizbMetaByAyahId
export const getRubAlHizbByAyahId = riwaya.getRubAlHizbByAyahId
export const getAyahMeta = riwaya.getAyahMeta
export const getAyahMetasForSurah = riwaya.getAyahMetasForSurah
export const findRangeAroundAyah = riwaya.findRangeAroundAyah
export const findRangeAroundSurahAyah = riwaya.findRangeAroundSurahAyah
export const isAyahJuzFirst = riwaya.isAyahJuzFirst
export const isAyahPageFirst = riwaya.isAyahPageFirst
export const isSurahAyahJuzFirst = riwaya.isSurahAyahJuzFirst
export const isSurahAyahPageFirst = riwaya.isSurahAyahPageFirst
export const isValidSurah = riwaya.isValidSurah
export const isValidAyahNo = QuranRiwaya.isValidAyahNo
export const isValidAyahId = riwaya.isValidAyahId
export const isValidPage = riwaya.isValidPage
export const string2NumberSplitter = QuranRiwaya.string2NumberSplitter
export const isValidJuz = riwaya.isValidJuz
export const isValidRuku = riwaya.isValidRuku
export const isValidSurahAyah = riwaya.isValidSurahAyah


export const generatePartBlocks = riwaya.generatePartBlocks

export default riwaya