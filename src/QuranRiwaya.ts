import type { PartType, RiwayaName, Riwayas, ThumunRiwayaName } from "./lists/types"
import type {
  AyahId,
  AyahMeta,
  AyahNo,
  AyahRange,
  HizbId,
  Juz,
  JuzAndShift,
  JuzMeta,
  Manzil,
  ManzilMeta,
  Page,
  PageMeta,
  QuranMeta,
  RangeMode,
  RubAlHizb,
  RubAlHizbId,
  RubAlHizbMeta,
  Ruku,
  RukuMeta,
  Surah,
  SurahAyah,
  SurahAyahSegment,
  SurahInfo,
  SurahJuzMeta,
  SurahListType,
  SurahMeta,
  ThumunAlHizb,
  ThumunAlHizbId,
  ThumunAlHizbMeta
} from "./types"
import { ayahStringSplitter, string2NumberSplitter } from "./ayahStringSplitter"
import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { findJuz } from "./findJuz"
import { findJuzMetaBySurah } from "./findJuzMetaBySurah"
import { findJuzAndShift, findJuzAndShiftByAyahId } from "./findJuzAndShift"
import { findJuzByAyahId } from "./findJuzByAyahId"
import { findManzil } from "./findManzil"
import { findManzilByAyahId } from "./findManzilByAyahId"
import { findPage } from "./findPage"
import { findPageByAyahId } from "./findPagebyAyahId"
import { findRangeAroundAyah } from "./findRangeAroundAyah"
import { findRangeAroundSurahAyah } from "./findRangeAroundSurahAyah"
import { findRubAlHizb } from "./findRubAlHizb"
import { findRubAlHizbByAyahId } from "./findRubAlHizbByAyahId"
import { findRukuByAyahId } from "./findRukuByAyahId"
import { findSurahByAyahId } from "./findSurahByAyahId"
import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import { findThumunAlHizbByAyahId } from "./findThumunAlHizbByAyahId"
import { findThumunAlHizb } from "./findThumunAlHizb"
import { generatePartBlocks, getList, getListNormalised } from "./lists/getList"
import type { PartBlock } from "./lists/getList"
import { getAyahCountInSurah } from "./getAyahCountInSurah"
import { getAyahMeta } from "./getAyahMeta"
import { getAyahMetasForSurah } from "./getAyahMetasForSurah"
import { getJuzMeta } from "./getJuzMeta"
import { getManzilMeta } from "./getManzilMeta"
import { getPageMeta } from "./getPageMeta"
import { getRubAlHizb } from "./getRubAlHizb"
import { getRubAlHizbMeta } from "./getRubAlHizbMeta"
import { getRubAlHizbByAyahId } from "./getRubAlHizbByAyahId"
import { getRubAlHizbMetaByAyahId } from "./getRubAlHizbMetaByAyahId"
import { getRukuMeta } from "./getRukuMeta"
import { getSurahInfo } from "./getSurahInfo"
import { getSurahMeta } from "./getSurahMeta"
import { getThumunAlHizb } from "./getThumunAlHizb"
import { getThumunAlHizbByAyahId } from "./getThumunAlHizbByAyahId"
import { getThumunAlHizbMeta } from "./getThumunAlHizbMeta"
import { prevAyah } from "./prevAyah"
import { nextAyah } from "./nextAyah"
import { isAyahJuzFirst } from "./isAyahJuzFirst"
import { isAyahPageFirst } from "./isAyahPageFirst"
import { isSurahAyahJuzFirst } from "./isSurahAyahJuzFirst"
import { isSurahAyahPageFirst } from "./isSurahAyahPageFirst"
import { getThumunAlHizbMetaByAyahId } from "./getThumunAlHizbMetaByAyahId"
import { surahStringParser } from "./surahStringParser"
import {
  isValidAyahId,
  isValidAyahNo,
  isValidHizb,
  isValidJuz,
  isValidManzil,
  isValidPage,
  isValidRubAlHizb,
  isValidRuku,
  isValidSurah,
  isValidSurahAyah
} from "./typeGuards"
import { ayahsInJuz, ayahsInPage, ayahsInPart, getPartRange } from "./ayahsInPart"
import { formatAyahId } from "./formatSurahAyah"
import type { AyahStepOptions } from "./nextAyah"

/**
 * QuranRiwaya class provides a clean API for Quran metadata operations
 * with a specific riwaya (recitation tradition) context.
 *
 * It covers the whole functional API (surahs, ayahs, juz, pages, manzils, rukus,
 * rub' al-hizb and thumun al-hizb, validation and parsing) bound to one riwaya's data.
 *
 * @example
 * **Basic Usage with Hafs**
 * ```typescript
 * import { quran } from 'quran-meta/hafs'
 *
 * const surahMeta = quran.getSurahMeta(2)  // Get Al-Baqarah metadata
 * const ayahCount = quran.getAyahCountInSurah(2)  // 286 ayahs
 * const [surah, ayah] = quran.findSurahAyahByAyahId(100)  // [2, 93]
 * ```
 *
 * @example
 * **Working with Qalun**
 * ```typescript
 * import { quran } from 'quran-meta/qalun'
 *
 * const meta = quran.meta
 * console.log(meta.numAyahs)  // 6214 (Qalun has fewer ayahs than Hafs)
 * ```
 *
 * @example
 * **Creating a custom instance**
 *
 * `QuranRiwaya.create()` takes a Lists object (SurahList, JuzList, PageList, etc.
 * plus meta) shaped like the built-in data. The easiest way to build one is
 * `customizeRiwaya`, which starts from a built-in riwaya and replaces some lists:
 * ```typescript
 * import { QuranRiwaya, customizeRiwaya, getListsOfRiwaya } from 'quran-meta'
 *
 * const custom = QuranRiwaya.create(customizeRiwaya(getListsOfRiwaya("Hafs"), { PageList: myPages }))
 * ```
 *
 * @category Class API
 */
export class QuranRiwaya<R extends RiwayaName = "Hafs"> {
  readonly #riwaya: R
  readonly #meta: QuranMeta
  readonly #data: Riwayas[R]

  private constructor(rData: Riwayas[R]) {
    this.#riwaya = rData.meta.riwayaName as R
    this.#meta = rData.meta
    this.#data = rData
  }

  /**
   * Create a QuranRiwaya instance with the specified riwaya, metadata, and lists
   * @param rData - The Lists object for this riwaya
   */
  static create<R extends RiwayaName>(rData: Riwayas[R]): QuranRiwaya<R> {
    return new QuranRiwaya(rData)
  }

  // ==================== Surah Methods ====================

  /**
   * Gets the metadata for the specified Surah
   */
  getSurahMeta(surahNum: Surah): SurahMeta {
    return getSurahMeta(surahNum, this.#data)
  }

  ayahStringSplitter(str: string, isStrict = true): SurahAyahSegment {
    return ayahStringSplitter(str, isStrict, this.#data)
  }

  /**
   * Gets the surah info array [firstAyahId, ayahCount, surahOrder, rukuCount, name, isMeccan]
   */
  getSurahInfo(surah: Surah): SurahInfo {
    return getSurahInfo(surah, this.#data)
  }

  /**
   * Gets the count of ayahs in a surah
   */
  getAyahCountInSurah(surah: Surah): number {
    return getAyahCountInSurah(surah, this.#data)
  }

  /**
   * Finds the surah number for a given ayah ID
   */
  findSurahByAyahId(ayahId: AyahId): Surah {
    return findSurahByAyahId(ayahId, this.#data)
  }

  /**
   * Finds the [surah, ayah] tuple for a given ayah ID
   */
  findSurahAyahByAyahId(ayahId: AyahId): SurahAyah {
    return findSurahAyahByAyahId(ayahId, this.#data)
  }

  /**
   * Finds the ayah ID for a given surah and ayah number
   */
  findAyahIdBySurah(surah: Surah, ayah: AyahNo): AyahId {
    return findAyahIdBySurah(surah, ayah, this.#data)
  }

  /**
   * Returns the parts of a kind as `{ startAyahId, ayahCount }` blocks, or `null` when the riwaya has no such data
   */
  generatePartBlocks(type: PartType): PartBlock[] | null {
    return generatePartBlocks(type, this.#data)
  }

  /**
   * Returns the raw boundary list for a kind of part
   */
  getList(type: PartType): AyahId[] | SurahListType {
    return getList(type, this.#data)
  }

  /**
   * Returns the parts of a kind as `{ startAyahId, ayahCount }` blocks
   */
  getListNormalised(type: PartType): PartBlock[] {
    return getListNormalised(type, this.#data)
  }

  /**
   * Gets the next ayah after the given surah and ayah.
   * Wraps from the last ayah to 1:1 unless `{ wrap: false }` is passed, in which case it returns `undefined`.
   */
  nextAyah(surah: Surah, ayah: AyahNo, options?: { wrap?: true }): SurahAyah
  nextAyah(surah: Surah, ayah: AyahNo, options: AyahStepOptions): SurahAyah | undefined
  nextAyah(surah: Surah, ayah: AyahNo, options: AyahStepOptions = {}): SurahAyah | undefined {
    return nextAyah(surah, ayah, this.#data, options)
  }

  /**
   * Gets the previous ayah before the given surah and ayah.
   * Wraps from 1:1 to the last ayah unless `{ wrap: false }` is passed, in which case it returns `undefined`.
   */
  prevAyah(surah: Surah, ayah: AyahNo, options?: { wrap?: true }): SurahAyah
  prevAyah(surah: Surah, ayah: AyahNo, options: AyahStepOptions): SurahAyah | undefined
  prevAyah(surah: Surah, ayah: AyahNo, options: AyahStepOptions = {}): SurahAyah | undefined {
    return prevAyah(surah, ayah, this.#data, options)
  }

  /**
   * Formats an ayah id as a `"surah:ayah"` reference
   */
  formatAyahId(ayahId: AyahId): string {
    return formatAyahId(ayahId, this.#data)
  }

  // ==================== Iteration ====================

  /**
   * Returns `[firstAyahId, lastAyahId]` of a surah, juz, page, manzil, ruku, rub' al-hizb or thumun al-hizb
   */
  getPartRange(type: PartType, num: number): AyahRange {
    return getPartRange(type, num, this.#data)
  }

  /**
   * Iterates over every `[surah, ayah]` in a part of the Quran
   */
  ayahsInPart(type: PartType, num: number): Generator<SurahAyah, void, undefined> {
    return ayahsInPart(type, num, this.#data)
  }

  /**
   * Iterates over every `[surah, ayah]` on a page
   */
  ayahsInPage(page: Page): Generator<SurahAyah, void, undefined> {
    return ayahsInPage(page, this.#data)
  }

  /**
   * Iterates over every `[surah, ayah]` in a juz
   */
  ayahsInJuz(juz: Juz): Generator<SurahAyah, void, undefined> {
    return ayahsInJuz(juz, this.#data)
  }

  // ==================== Juz Methods ====================

  /**
   * Finds the juz number for a given surah and ayah
   */
  findJuz(surah: Surah, ayah: AyahNo = 1): Juz {
    return findJuz(surah, ayah, this.#data)
  }

  /**
   * Finds the juz number for a given ayah ID
   */
  findJuzByAyahId(ayahId: AyahId): Juz {
    return findJuzByAyahId(ayahId, this.#data)
  }

  // ==================== Page Methods ====================

  /**
   * Finds the page number for a given surah and ayah
   */
  findPage(surah: Surah, ayah: AyahNo = 1): Page {
    return findPage(surah, ayah, this.#data)
  }

  /**
   * Finds the page number for a given ayah ID
   */
  findPageByAyahId(ayahId: AyahId): Page {
    return findPageByAyahId(ayahId, this.#data)
  }

  /**
   * Old spelling of {@link QuranRiwaya.findPageByAyahId}.
   *
   * @deprecated Use {@link QuranRiwaya.findPageByAyahId}.
   */
  findPagebyAyahId(ayahId: AyahId): Page {
    return findPageByAyahId(ayahId, this.#data)
  }

  /**
   * Gets metadata for a specific page
   */
  getPageMeta(pageNum: Page): PageMeta {
    return getPageMeta(pageNum, this.#data)
  }

  // ==================== Manzil Methods ====================

  /**
   * Finds the manzil number for a given surah and ayah
   */
  findManzil(surah: Surah, ayah: AyahNo = 1): Manzil {
    return findManzil(surah, ayah, this.#data)
  }

  /**
   * Finds the manzil number for a given ayah ID
   */
  findManzilByAyahId(ayahId: AyahId): Manzil {
    return findManzilByAyahId(ayahId, this.#data)
  }

  /**
   * Gets metadata for a specific manzil
   */
  getManzilMeta(manzilNum: number): ManzilMeta {
    return getManzilMeta(manzilNum, this.#data)
  }

  // ==================== Ruku Methods ====================

  /**
   * Finds the ruku number for a given ayah ID
   */
  findRukuByAyahId(ayahId: AyahId): Ruku {
    return findRukuByAyahId(ayahId, this.#data)
  }

  /**
   * Gets metadata for a specific ruku
   */
  getRukuMeta(rukuNum: number): RukuMeta {
    return getRukuMeta(rukuNum, this.#data)
  }

  // ==================== Juz Additional Methods ====================

  /**
   * Gets metadata for a specific juz
   */
  getJuzMeta(juzNum: Juz): JuzMeta {
    return getJuzMeta(juzNum, this.#data)
  }

  /**
   * Finds juz metadata for a given surah and ayah
   */
  findJuzMetaBySurah(surah: Surah, ayah: AyahNo = 1): SurahJuzMeta {
    return findJuzMetaBySurah(surah, ayah, this.#data)
  }

  /**
   * Finds juz and calculates shift between juz start and surah start
   */
  findJuzAndShift(surah: Surah, ayah: AyahNo): JuzAndShift {
    return findJuzAndShift(surah, ayah, this.#data)
  }

  /**
   * Finds juz and shift for a given ayah ID
   */
  findJuzAndShiftByAyahId(ayahId: AyahId): JuzAndShift {
    return findJuzAndShiftByAyahId(ayahId, this.#data)
  }

  // ==================== RubAlHizb Methods ====================

  /**
   * Finds the RubAlHizb for a given surah and ayah
   */
  findRubAlHizb(surah: Surah, ayah: AyahNo = 1): RubAlHizbId {
    return findRubAlHizb(surah, ayah, this.#data)
  }

  /**
   * Finds the RubAlHizb ID for a given ayah ID
   */
  findRubAlHizbByAyahId(ayahId: AyahId): RubAlHizbId {
    return findRubAlHizbByAyahId(ayahId, this.#data)
  }

  /**
   * Gets RubAlHizb data (juz, hizb, etc.) for a given ayah ID
   */
  getRubAlHizbByAyahId(ayahId: AyahId): RubAlHizb {
    return getRubAlHizbByAyahId(ayahId, this.#data)
  }

  /**
   * Gets RubAlHizb data (juz, hizb, etc.) for a given ayah ID
   */
  getRubAlHizb(quarterIndex: RubAlHizbId): RubAlHizb {
    return getRubAlHizb(quarterIndex)
  }

  /**
   * Gets complete RubAlHizb metadata for a given ayah ID
   */
  getRubAlHizbMetaByAyahId(ayahId: AyahId): RubAlHizbMeta {
    return getRubAlHizbMetaByAyahId(ayahId, this.#data)
  }

  /**
   * Gets metadata for a specific RubAlHizb
   */
  getRubAlHizbMeta(quarterIndex: RubAlHizbId): RubAlHizbMeta {
    return getRubAlHizbMeta(quarterIndex, this.#data)
  }

  // ==================== ThumunAlHizb Methods ====================
  // Only riwayas with thumun al-hizb data (Qalun) have these methods; calling them on
  // another riwaya is a type error.

  /**
   * Finds the ThumunAlHizb ID for a given ayah ID
   */
  findThumunAlHizbByAyahId(this: QuranRiwaya<ThumunRiwayaName>, ayahId: AyahId): ThumunAlHizbId {
    return findThumunAlHizbByAyahId(ayahId, this.#data)
  }

  /**
   * Finds the ThumunAlHizb ID for a given surah and ayah
   */
  findThumunAlHizb(this: QuranRiwaya<ThumunRiwayaName>, surah: Surah, ayah: AyahNo = 1): ThumunAlHizbId {
    return findThumunAlHizb(surah, ayah, this.#data)
  }

  /**
   * Gets metadata for a specific ThumunAlHizb
   */
  getThumunAlHizbMeta(this: QuranRiwaya<ThumunRiwayaName>, eighthIndex: ThumunAlHizbId): ThumunAlHizbMeta {
    return getThumunAlHizbMeta(eighthIndex, this.#data)
  }

  /**
   * Gets juz, hizb, quarter and eighth numbers for a given ayah ID
   */
  getThumunAlHizbByAyahId(this: QuranRiwaya<ThumunRiwayaName>, ayahId: AyahId): ThumunAlHizb {
    return getThumunAlHizbByAyahId(ayahId, this.#data)
  }

  /**
   * Gets the ThumunAlHizb containing an ayah ID, with its first and last ayah
   */
  getThumunAlHizbMetaByAyahId(this: QuranRiwaya<ThumunRiwayaName>, ayahId: AyahId): ThumunAlHizbMeta {
    return getThumunAlHizbMetaByAyahId(ayahId, this.#data)
  }

  /**
   * Gets juz, hizb, quarter and eighth numbers for a ThumunAlHizb ID
   */
  getThumunAlHizb(eighthIndex: ThumunAlHizbId): ThumunAlHizb {
    return getThumunAlHizb(eighthIndex)
  }

  // ==================== Ayah Metadata ====================

  /**
   * Gets comprehensive metadata for a specific ayah
   */
  getAyahMeta(ayahId: AyahId): AyahMeta {
    return getAyahMeta(ayahId, this.#data)
  }

  /**
   * Gets metadata for all ayahs in a surah
   */
  getAyahMetasForSurah(surahNumber: Surah): AyahMeta[] {
    return getAyahMetasForSurah(surahNumber, this.#data)
  }

  // ==================== Range Methods ====================

  /**
   * Finds the range of ayahs around a given ayah
   */
  findRangeAroundAyah(ayahId: AyahId, mode: RangeMode): AyahRange {
    return findRangeAroundAyah(ayahId, mode, this.#data)
  }

  /**
   * Finds the range of ayahs around a given surah and ayah
   */
  findRangeAroundSurahAyah(surah: Surah, ayah: AyahNo, mode: RangeMode): AyahRange {
    return findRangeAroundSurahAyah(surah, ayah, mode, this.#data)
  }

  // ==================== Helper Methods ====================

  /**
   * Checks if an ayah is the first ayah of a juz
   */
  isAyahJuzFirst(ayahId: AyahId): number {
    return isAyahJuzFirst(ayahId, this.#data)
  }

  /**
   * Checks if an ayah is the first ayah of a page
   */
  isAyahPageFirst(ayahId: AyahId): number {
    return isAyahPageFirst(ayahId, this.#data)
  }

  /**
   * Checks if a surah-ayah combination is the first ayah of a juz
   */
  isSurahAyahJuzFirst(surah: Surah, ayah: AyahNo): number {
    return isSurahAyahJuzFirst(surah, ayah, this.#data)
  }

  /**
   * Checks if a surah-ayah combination is the first ayah of a page
   */
  isSurahAyahPageFirst(surah: Surah, ayah: AyahNo): number {
    return isSurahAyahPageFirst(surah, ayah, this.#data)
  }

  isValidAyahId(x: unknown): x is AyahId {
    return isValidAyahId(x, this.#meta)
  }

  isValidPage(x: unknown): x is Page {
    return isValidPage(x, this.#meta)
  }

  isValidSurah(x: unknown): x is Surah {
    return isValidSurah(x, this.#meta)
  }

  isValidJuz(x: unknown): x is Juz {
    return isValidJuz(x, this.#meta)
  }

  isValidRuku(x: unknown): x is Ruku {
    return isValidRuku(x, this.#meta)
  }

  isValidSurahAyah(x: [unknown, unknown]): x is SurahAyah {
    return isValidSurahAyah(x, this.#data)
  }

  isValidManzil(x: unknown): x is Manzil {
    return isValidManzil(x, this.#meta)
  }

  isValidHizb(x: unknown): x is HizbId {
    return isValidHizb(x, this.#meta)
  }

  isValidRubAlHizb(x: unknown): x is RubAlHizbId {
    return isValidRubAlHizb(x, this.#data)
  }

  static isValidAyahNo(x: unknown): x is AyahNo {
    return isValidAyahNo(x)
  }

  // ==================== Utility Methods ====================

  surahStringParser(str: string, isStrict = false): Surah {
    return surahStringParser(str, isStrict, this.#meta)
  }

  static string2NumberSplitter(str: string): { ayah?: number; ayahTo?: number; surahOrAyah?: number } | null {
    return string2NumberSplitter(str)
  }

  /**
   * Gets the riwaya name
   */
  get riwayaName(): R {
    return this.#riwaya
  }

  /**
   * Gets the metadata for this riwaya
   */
  get meta(): QuranMeta {
    return this.#meta
  }

  /**
   * Gets the raw lists (SurahList, JuzList, PageList, ...) for this riwaya
   */
  get lists(): Riwayas[R] {
    return this.#data
  }
}
