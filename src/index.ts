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
  ManzilMeta,
  NumericRange,
  JuzAndShift,
  ThumunAlHizb,
  ThumunAlHizbMeta,
  ThumunAlHizbId
} from "./types"
export { maxAyahsInSurah, numRubsInJuz, numSurahs } from "./types"
export type { ArrayOfSameLength, FixedArray, GrowToSize, LessThan } from "./ts-utils"
export { partNames } from "./lists/types"
export type {
  RiwayaData,
  RiwayaFullData,
  RiwayaName,
  Riwayas,
  PartType,
  AllListsNames,
  RiwayasNames,
  MissingListsPerRiwaya,
  ThumunRiwayaName,
  PartListNames
} from "./lists/types"
export type { PartBlock } from "./lists/getList"
export type { AyahStepOptions } from "./nextAyah"
export type { RiwayaListOverrides } from "./customizeRiwaya"

import { BazziLists } from "./lists/BazziLists"
import { DouriLists } from "./lists/DouriLists"
import { HafsLists } from "./lists/HafsLists"
import { QalunLists } from "./lists/QalunLists"
import { QunbulLists } from "./lists/QunbulLists"
import { ShubaLists } from "./lists/ShubaLists"
import { SousiLists } from "./lists/SousiLists"
import { WarshLists } from "./lists/WarshLists"
import { QuranRiwaya } from "./QuranRiwaya"
import type { QuranMeta } from "./types"

// ==================== Class-Based API ====================

/**
 * Create a QuranRiwaya instance with Hafs riwaya (default)
 *
 * @category Class API
 */
export const createHafs = (): QuranRiwaya<"Hafs"> => QuranRiwaya.create<"Hafs">(HafsLists)

/**
 * Create a QuranRiwaya instance with Qalun riwaya
 *
 * @category Class API
 */
export const createQalun = (): QuranRiwaya<"Qalun"> => QuranRiwaya.create<"Qalun">(QalunLists)

/**
 * Create a QuranRiwaya instance with Warsh riwaya
 *
 * @category Class API
 */
export const createWarsh = (): QuranRiwaya<"Warsh"> => QuranRiwaya.create<"Warsh">(WarshLists)

/**
 * Create a QuranRiwaya instance with Bazzi riwaya
 *
 * @category Class API
 */
export const createBazzi = (): QuranRiwaya<"Bazzi"> => QuranRiwaya.create<"Bazzi">(BazziLists)

/**
 * Create a QuranRiwaya instance with Douri riwaya
 *
 * @category Class API
 */
export const createDouri = (): QuranRiwaya<"Douri"> => QuranRiwaya.create<"Douri">(DouriLists)

/**
 * Create a QuranRiwaya instance with Qunbul riwaya
 *
 * @category Class API
 */
export const createQunbul = (): QuranRiwaya<"Qunbul"> => QuranRiwaya.create<"Qunbul">(QunbulLists)

/**
 * Create a QuranRiwaya instance with Shuba riwaya
 *
 * @category Class API
 */
export const createShuba = (): QuranRiwaya<"Shuba"> => QuranRiwaya.create<"Shuba">(ShubaLists)

/**
 * Create a QuranRiwaya instance with Sousi riwaya
 *
 * @category Class API
 */
export const createSousi = (): QuranRiwaya<"Sousi"> => QuranRiwaya.create<"Sousi">(SousiLists)

/**
 * Pre-initialized QuranRiwaya instance for Hafs (for convenience)
 *
 * @category Class API
 */
export const quran: QuranRiwaya<"Hafs"> = /* @__PURE__ */ createHafs()

/**
 * Default Quran metadata (Hafs riwaya).
 * For other riwayas, use `quran-meta/qalun`, `quran-meta/warsh`, etc.
 *
 * @category Riwaya Data
 */
export const meta: QuranMeta = HafsLists.meta

export { QuranRiwaya } from "./QuranRiwaya"
export { getList, generatePartBlocks, getListNormalised } from "./lists/getList"
export { getListsOfRiwaya, getListOfRiwaya } from "./lists"
export { customizeRiwaya, validateRiwayaData } from "./customizeRiwaya"
export { convertAyah, convertAyahSpan } from "./convert/convertAyah"
export { ayahsInJuz, ayahsInPage, ayahsInPart, getPartRange } from "./ayahsInPart"
export { formatAyahId, formatSurahAyah } from "./formatSurahAyah"
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
export { findPageByAyahId, findPagebyAyahId } from "./findPagebyAyahId"
export { findRangeAroundAyah } from "./findRangeAroundAyah"
export { findRangeAroundSurahAyah } from "./findRangeAroundSurahAyah"
export { findRubAlHizb } from "./findRubAlHizb"
export { findRubAlHizbByAyahId } from "./findRubAlHizbByAyahId"
export { findRukuByAyahId } from "./findRukuByAyahId"
export { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
export { findSurahByAyahId } from "./findSurahByAyahId"
export { getAyahCountInSurah } from "./getAyahCountInSurah"
export { getSurahInfo } from "./getSurahInfo"
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
export { findThumunAlHizb } from "./findThumunAlHizb"
export { findThumunAlHizbByAyahId } from "./findThumunAlHizbByAyahId"
export { getThumunAlHizb } from "./getThumunAlHizb"
export { getThumunAlHizbByAyahId } from "./getThumunAlHizbByAyahId"
export { getThumunAlHizbMeta } from "./getThumunAlHizbMeta"
export { getThumunAlHizbMetaByAyahId } from "./getThumunAlHizbMetaByAyahId"
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
  isValidHizb,
  isValidJuz,
  isValidPage,
  isValidRubAlHizb,
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
  checkValidSurahAyah,
  checkValidSurahAyahPair
} from "./validation"

// ==================== Surah names ====================
// English and Arabic only, the other languages are in quran-meta/i18n

export { getSurahName } from "./i18n/getSurahName"
export { surahNamesAr } from "./i18n/surah.ar"
export { surahNamesEn } from "./i18n/surah.en"
export type { SurahNames } from "./i18n/types"
