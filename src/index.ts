// Quran Meta

export type {
  QuranMeta,
  SurahListType,
  RangeMeta,
  RukuMeta,
  RangeMode,
  AyahCountBetweenJuzSurah,
  JuzMeta,
  SurahMeta,
  AyahId,
  AyahMeta,
  AyahNo,
  AyahRange,
  HizbId,
  Juz,
  RubAlHizb,
  RubAlHizbMeta,
  SurahJuzMeta,
  JuzPart,
  Manzil,
  Page,
  PageMeta,
  RubAlHizbId,
  Ruku,
  Surah,
  SurahAyah,
  SurahAyahSegment,
  SurahAyahPos,
  SurahInfo,
  SurahName,
  ManzilMeta
} from "./types"

import { HafsLists } from "./lists/HafsLists"
import { QalunLists } from "./lists/QalunLists"
import { WarshLists } from "./lists/WarshLists"

// ==================== New Class-Based API ====================
import { QuranRiwaya } from "./QuranRiwaya"

/**
 * Create a QuranRiwaya instance with Hafs riwaya (default)
 */
export const createHafs = () => QuranRiwaya.create(HafsLists)

/**
 * Create a QuranRiwaya instance with Qalun riwaya
 */
export const createQalun = () => QuranRiwaya.create(QalunLists)

/**
 * Create a QuranRiwaya instance with Warsh riwaya
 */
export const createWarsh = () => QuranRiwaya.create(WarshLists)

/**
 * Pre-initialized QuranRiwaya instance for Hafs (for convenience)
 */
export const quran = createHafs()

export { QuranRiwaya } from "./QuranRiwaya"
export { getList, generatePartBlocks, getListNormalised } from "./lists/getList"
export { getListsOfRiwaya, getListOfRiwaya } from "./lists"
export { ayahStringSplitter, string2NumberSplitter, string2NumberSplitterStrict } from "./ayahStringSplitter"
export { surahStringParser } from "./surahStringParser"
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
export { getManzilMeta } from "./getManzilMeta"
export { getPageMeta } from "./getPageMeta"
export { getRukuMeta } from "./getRukuMeta"
export { getRubAlHizb } from "./getRubAlHizb"
export { getRubAlHizbMeta } from "./getRubAlHizbMeta"
export { getRubAlHizbMetaByAyahId } from "./getRubAlHizbMetaByAyahId"
export { getRubAlHizbByAyahId } from "./getRubAlHizbByAyahId"
export { getSurahMeta } from "./getSurahMeta"
export { isAyahJuzFirst } from "./isAyahJuzFirst"
export { isAyahPageFirst } from "./isAyahPageFirst"
export { isSurahAyahJuzFirst } from "./isSurahAyahJuzFirst"
export { isSurahAyahPageFirst } from "./isSurahAyahPageFirst"
export { nextAyah } from "./nextAyah"
export { prevAyah } from "./prevAyah"
export {
  isValidManzil,
  isValidRuku,
  isValidAyahId,
  isValidAyahNo,
  isValidJuz,
  isValidPage,
  isValidSurah,
  isValidSurahAyah
} from "./typeGuards"
export {
  checkValidManzil,
  checkValidRuku,
  checkValidAyahId,
  checkValidJuz,
  checkValidPage,
  checkValidSurah,
  checkValidSurahAyah
} from "./validation"

// ------------------ Sura i18 Data ---------------------

export * from "./i18n"
// Export { getSurahNamesAsync } from "./i18n/getSurahNamesAsync"
