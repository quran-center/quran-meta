/**
 * Warsh-specific entry point
 *
 * This module provides metadata and functional API for Warsh riwaya only.
 * Functions are pre-bound to riwayaLists for convenience and optimal tree-shaking.
 *
 * @example
 * ```typescript
 * import { meta, findJuz, getAyahMeta } from 'quran-meta/Warsh'
 *
 * console.log(meta.numAyahs)  // 6236
 * const juz = findJuz(2, 142)
 * const ayahMeta = getAyahMeta(1)
 * ```
 */

import { WarshLists as riwayaLists } from "./lists/WarshLists"
import { getList as _getList, generatePartBlocks as _generatePartBlocks, getListNormalised as _getListNormalised } from "./lists/getList"
import { ayahStringSplitter as _ayahStringSplitter } from "./ayahStringSplitter"
import { findAyahIdBySurah as _findAyahIdBySurah } from "./findAyahIdBySurah"
import { findJuz as _findJuz } from "./findJuz"
import { findJuzAndShift as _findJuzAndShift, findJuzAndShiftByAyahId as _findJuzAndShiftByAyahId } from "./findJuzAndShift"
import { findJuzByAyahId as _findJuzByAyahId } from "./findJuzByAyahId"
import { findJuzMetaBySurah as _findJuzMetaBySurah } from "./findJuzMetaBySurah"
import { findManzil as _findManzil } from "./findManzil"
import { findManzilByAyahId as _findManzilByAyahId } from "./findManzilByAyahId"
import { findPage as _findPage } from "./findPage"
import { findPagebyAyahId as _findPagebyAyahId } from "./findPagebyAyahId"
import { findRangeAroundAyah as _findRangeAroundAyah } from "./findRangeAroundAyah"
import { findRangeAroundSurahAyah as _findRangeAroundSurahAyah } from "./findRangeAroundSurahAyah"
import { findRubAlHizb as _findRubAlHizb } from "./findRubAlHizb"
import { findRubAlHizbByAyahId as _findRubAlHizbByAyahId } from "./findRubAlHizbByAyahId"
import { findRukuByAyahId as _findRukuByAyahId } from "./findRukuByAyahId"
import { findSurahAyahByAyahId as _findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import { findSurahByAyahId as _findSurahByAyahId } from "./findSurahByAyahId"
import { getAyahCountInSurah as _getAyahCountInSurah } from "./getAyahCountInSurah"
import { getAyahMeta as _getAyahMeta } from "./getAyahMeta"
import { getAyahMetasForSurah as _getAyahMetasForSurah } from "./getAyahMetasForSurah"
import { getJuzMeta as _getJuzMeta } from "./getJuzMeta"
import { getManzilMeta as _getManzilMeta } from "./getManzilMeta"
import { getPageMeta as _getPageMeta } from "./getPageMeta"
import { getRubAlHizb as _getRubAlHizb } from "./getRubAlHizb"
import { getRubAlHizbByAyahId as _getRubAlHizbByAyahId } from "./getRubAlHizbByAyahId"
import { getRubAlHizbMeta as _getRubAlHizbMeta } from "./getRubAlHizbMeta"
import { getRubAlHizbMetaByAyahId as _getRubAlHizbMetaByAyahId } from "./getRubAlHizbMetaByAyahId"
import { getRukuMeta as _getRukuMeta } from "./getRukuMeta"
import { getSurahInfo as _getSurahInfo } from "./getSurahInfo"
import { getSurahMeta as _getSurahMeta } from "./getSurahMeta"
import { isAyahJuzFirst as _isAyahJuzFirst } from "./isAyahJuzFirst"
import { isAyahPageFirst as _isAyahPageFirst } from "./isAyahPageFirst"
import { isSurahAyahJuzFirst as _isSurahAyahJuzFirst } from "./isSurahAyahJuzFirst"
import { isSurahAyahPageFirst as _isSurahAyahPageFirst } from "./isSurahAyahPageFirst"
import { nextAyah as _nextAyah } from "./nextAyah"
import { prevAyah as _prevAyah } from "./prevAyah"
import { isValidAyahId as _isValidAyahId,
  isValidJuz as _isValidJuz,
  isValidPage as _isValidPage,
  isValidRuku as _isValidRuku,
  isValidManzil as _isValidManzil,
  isValidSurah as _isValidSurah,
  isValidSurahAyah as _isValidSurahAyah } from "./typeGuards"
import type { AyahId, AyahNo, Juz, Manzil, Page, RangeMode, RubAlHizbId, Ruku, Surah } from "./types"
import { QuranRiwaya } from "./QuranRiwaya"
import type { PartType } from "./lists/types"

// Re-export all types
export type * from "./types"
export type { PartType }

/**
 * Warsh metadata
 */
export const meta = riwayaLists.meta

export const getList = (listName: PartType) => _getList(listName, riwayaLists)
export const getListNormalised = (listName: PartType) => _getListNormalised(listName, riwayaLists)

/**
 * Warsh Lists (SurahList, JuzList, etc.)
 */
export const HizbQuarterList = riwayaLists.HizbQuarterList
export const JuzList = riwayaLists.JuzList
export const ManzilList = riwayaLists.ManzilList
export const PageList = riwayaLists.PageList
export const SurahList = riwayaLists.SurahList
export const RukuList = riwayaLists.RukuList
export const SajdaList = riwayaLists.SajdaList

// String parsers and utilities (closures with riwayaLists)
export const ayahStringSplitter = (str: string, isStrict = true) =>
  _ayahStringSplitter(str, isStrict, riwayaLists)

export const surahStringParser = (str: string) => {
  const [surah, ayah] = str.split(":")
  return {
    surah: Number.parseInt(surah) as Surah,
    ayah: ayah ? (Number.parseInt(ayah) as AyahNo) : (1 as AyahNo)
  }
}

// Surah methods
export const getSurahMeta = (surah: Surah) =>
  _getSurahMeta(surah, riwayaLists)

export const getSurahInfo = (surah: Surah) =>
  _getSurahInfo(surah, riwayaLists)

export const getAyahCountInSurah = (surah: Surah) =>
  _getAyahCountInSurah(surah, riwayaLists)

// Ayah methods
export const findAyahIdBySurah = (surah: Surah, ayah: AyahNo = 1 as AyahNo) =>
  _findAyahIdBySurah(surah, ayah, riwayaLists)

export const findSurahByAyahId = (ayahId: AyahId) =>
  _findSurahByAyahId(ayahId, riwayaLists)

export const findSurahAyahByAyahId = (ayahId: AyahId) =>
  _findSurahAyahByAyahId(ayahId, riwayaLists)

export const nextAyah = (surah: Surah, ayah: AyahNo) =>
  _nextAyah(surah, ayah, riwayaLists)

export const prevAyah = (surah: Surah, ayah: AyahNo) =>
  _prevAyah(surah, ayah, riwayaLists)

// Juz methods
export const findJuz = (surah: Surah, ayah: AyahNo = 1 as AyahNo) =>
  _findJuz(surah, ayah, riwayaLists)

export const findJuzByAyahId = (ayahId: AyahId) =>
  _findJuzByAyahId(ayahId, riwayaLists)

export const getJuzMeta = (juz: Juz) =>
  _getJuzMeta(juz, riwayaLists)

export const findJuzMetaBySurah = (surah: Surah, ayah: AyahNo = 1 as AyahNo) =>
  _findJuzMetaBySurah(surah, ayah, riwayaLists)

export const findJuzAndShift = (surah: Surah, ayah: AyahNo = 1 as AyahNo) =>
  _findJuzAndShift(surah, ayah, riwayaLists)

export const findJuzAndShiftByAyahId = (ayahId: AyahId) => {
  return _findJuzAndShiftByAyahId(ayahId, riwayaLists)
}

// Page methods
export const findPage = (surah: Surah, ayah: AyahNo = 1 as AyahNo) =>
  _findPage(surah, ayah, riwayaLists)

export const findPagebyAyahId = (ayahId: AyahId) =>
  _findPagebyAyahId(ayahId, riwayaLists)

export const getPageMeta = (page: Page) =>
  _getPageMeta(page, riwayaLists)

// Manzil methods
export const findManzil = (surah: Surah, ayah: AyahNo = 1 as AyahNo) =>
  _findManzil(surah, ayah, riwayaLists)

export const findManzilByAyahId = (ayahId: AyahId) =>
  _findManzilByAyahId(ayahId, riwayaLists)

export const getManzilMeta = (manzil: Manzil) =>
  _getManzilMeta(manzil, riwayaLists)

// Ruku methods
export const findRukuByAyahId = (ayahId: AyahId) =>
  _findRukuByAyahId(ayahId, riwayaLists)

export const getRukuMeta = (ruku: Ruku) =>
  _getRukuMeta(ruku, riwayaLists)

// RubAlHizb methods
export const findRubAlHizb = (surah: Surah, ayah: AyahNo = 1 as AyahNo) =>
  _findRubAlHizb(surah, ayah, riwayaLists)

export const findRubAlHizbByAyahId = (ayahId: AyahId) =>
  _findRubAlHizbByAyahId(ayahId, riwayaLists)

export const getRubAlHizb = (quarterIndex: RubAlHizbId
) => _getRubAlHizb(quarterIndex)

export const getRubAlHizbMeta = (quarterIndex: RubAlHizbId) =>
  _getRubAlHizbMeta(quarterIndex, riwayaLists)

export const getRubAlHizbMetaByAyahId = (ayahId: AyahId) =>
  _getRubAlHizbMetaByAyahId(ayahId, riwayaLists)

export const getRubAlHizbByAyahId = (ayahId: AyahId) =>
  _getRubAlHizbByAyahId(ayahId, riwayaLists)

// Ayah metadata
export const getAyahMeta = (ayahId: AyahId) =>
  _getAyahMeta(ayahId, riwayaLists)

export const getAyahMetasForSurah = (surah: Surah) =>
  _getAyahMetasForSurah(surah, riwayaLists)

// Range methods
export const findRangeAroundAyah = (
  ayahId: AyahId,
  mode: RangeMode
) => _findRangeAroundAyah(ayahId, mode, riwayaLists)

export const findRangeAroundSurahAyah = (
  surah: Surah,
  ayah: AyahNo,
  mode: RangeMode
) => _findRangeAroundSurahAyah(surah, ayah, mode, riwayaLists)

// Helper methods
export const isAyahJuzFirst = (ayahId: AyahId) =>
  _isAyahJuzFirst(ayahId, riwayaLists)

export const isAyahPageFirst = (ayahId: AyahId) =>
  _isAyahPageFirst(ayahId, riwayaLists)

export const isSurahAyahJuzFirst = (surah: Surah, ayah: AyahNo) =>
  _isSurahAyahJuzFirst(surah, ayah, riwayaLists)

export const isSurahAyahPageFirst = (surah: Surah, ayah: AyahNo) =>
  _isSurahAyahPageFirst(surah, ayah, riwayaLists)

// Validation methods
export const isValidSurah = (x: unknown) =>
  _isValidSurah(x, meta)

export const isValidAyahNo = (ayahNo: number): ayahNo is AyahNo =>
  ayahNo >= 1 && ayahNo <= 286

export const isValidAyahId = (x: unknown) =>
  _isValidAyahId(x, meta)

export const isValidManzil = (x: unknown) =>
  _isValidManzil(x, meta)

export const isValidPage = (x: unknown) =>
  _isValidPage(x, meta)

export const string2NumberSplitter = (str: string): number[] =>
  str
    .split(/[\s,:;.\-_/\\|]/)
    .filter(s => s.trim() !== "")
    .map(s => Number.parseInt(s.trim()))
    .filter(n => !Number.isNaN(n))

export const isValidJuz = (x: unknown) =>
  _isValidJuz(x, meta)

export const isValidRuku = (x: unknown) =>
  _isValidRuku(x, meta)
export const isValidSurahAyah = (x: [unknown, unknown]) =>
  _isValidSurahAyah(x, riwayaLists)

export const generatePartBlocks = (part: PartType) =>
  _generatePartBlocks(part, riwayaLists)

/**
 * Pre-initialized QuranRiwaya instance for Warsh
 *
 * @example
 * ```typescript
 * import { quran } from 'quran-meta/warsh'
 *
 * const ayahMeta = quran.getAyahMeta(1)
 * const juz = quran.findJuz(1, 1)
 * ```
 */
export const createWarsh = () => QuranRiwaya.create(riwayaLists)
