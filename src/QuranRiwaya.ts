import type { RiwayaName, RiwayahsWith, RiwayahsWithAll } from "./lists/types"
import type { AyahId, AyahNo, Juz, Manzil, Page, RangeMode, Ruku, Surah, SurahAyah, SurahMeta, AyahMeta, JuzMeta, PageMeta, ManzilMeta, RubAlHizbMeta, RukuMeta, ThumunAlHizbMeta, RubAlHizb, ThumunAlHizb, AyahRange, SurahJuzMeta, RubAlHizbId, ThumunAlHizbId, QuranMeta } from "./types"
import type { PartType } from "./generatePartBlocks"
import { riwayaMeta } from "./types"
import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { findJuz } from "./findJuz"
import { findJuzAndShift, findJuzAndShiftByAyahId } from "./findJuzAndShift"
import { findJuzByAyahId } from "./findJuzByAyahId"
import { findJuzMetaBySurah } from "./findJuzMetaBySurah"
import { findManzil } from "./findManzil"
import { findManzilByAyahId } from "./findManzilByAyahId"
import { findPage } from "./findPage"
import { findPagebyAyahId } from "./findPagebyAyahId"
import { findRangeAroundAyah } from "./findRangeAroundAyah"
import { findRangeAroundSurahAyah } from "./findRangeAroundSurahAyah"
import { findRubAlHizb } from "./findRubAlHizb"
import { findRubAlHizbByAyahId } from "./findRubAlHizbByAyahId"
import { findRukuByAyahId } from "./findRukuByAyahId"
import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import { findSurahByAyahId } from "./findSurahByAyahId"
import { findThumunAlHizb } from "./findThumunAlHizb"
import { findThumunAlHizbByAyahId } from "./findThumunAlHizbByAyahId"
import { getAyahCountInSurah } from "./getAyahCountInSurah"
import { getAyahMeta } from "./getAyahMeta"
import { getAyahMetasForSurah } from "./getAyahMetasForSurah"
import { getJuzMeta } from "./getJuzMeta"
import { generatePartBlocks } from "./generatePartBlocks"
import { getManzilMeta } from "./getManzilMeta"
import { getPageMeta } from "./getPageMeta"
import { getRukuMeta } from "./getRukuMeta"
import { getRubAlHizb } from "./getRubAlHizb"
import { getRubAlHizbMeta } from "./getRubAlHizbMeta"
import { getRubAlHizbMetaByAyahId } from "./getRubAlHizbMetaByAyahId"
import { getRubAlHizbByAyahId } from "./getRubAlHizbByAyahId"
import { getSurahMeta } from "./getSurahMeta"
import { getThumunAlHizb } from "./getThumunAlHizb"
import { getThumunAlHizbByAyahId } from "./getThumunAlHizbByAyahId"
import { getThumunAlHizbMeta } from "./getThumunAlHizbMeta"
import { getThumunAlHizbMetaByAyahId } from "./getThumunAlHizbMetaByAyahId"
import { isAyahJuzFirst } from "./isAyahJuzFirst"
import { isAyahPageFirst } from "./isAyahPageFirst"
import { isSurahAyahJuzFirst } from "./isSurahAyahJuzFirst"
import { isSurahAyahPageFirst } from "./isSurahAyahPageFirst"
import { nextAyah } from "./nextAyah"
import { prevAyah } from "./prevAyah"
import { getSurahInfo } from "./getSurahInfo"

/**
 * QuranRiwaya class provides a clean API for Quran metadata operations
 * with a specific riwaya (recitation tradition) context.
 *
 * Instead of passing riwaya to every function call, instantiate this class
 * with your desired riwaya and call methods directly.
 *
 * @example
 * **Basic Usage with Hafs**
 * ```typescript
 * const hafs = QuranRiwaya.hafs()
 * const surahMeta = hafs.getSurahMeta(2)  // Get Al-Baqarah metadata
 * const isFirst = hafs.isAyahJuzFirst(149)  // Check if ayah is first in juz
 * const page = hafs.findPage(2, 1)  // Find page for Al-Baqarah:1
 * ```
 *
 * @example
 * **Working with Qalun (has ThumunAlHizb support)**
 * ```typescript
 * const qalun = QuranRiwaya.qalun()
 * const thumun = qalun.findThumunAlHizb(1, 1)  // Get thumun al-hizb for Al-Fatiha:1
 * const thumunMeta = qalun.getThumunAlHizbMeta(1)  // Get metadata for first thumun
 * console.log(qalun.getMeta().numAyahs)  // 6214 (Qalun has fewer ayahs than Hafs)
 * ```
 *
 * @example
 * **Using dynamic riwaya selection**
 * ```typescript
 * const riwaya = QuranRiwaya.create("Qalun")
 * const meta = riwaya.getMeta()
 * ```
 *
 * @remarks
 * - Hafs riwaya: 6236 ayahs, 15 sajdas, 240 RubAlHizbs, 0 ThumunAlHizbs
 * - Qalun riwaya: 6214 ayahs, 12 sajdas, 240 RubAlHizbs, 480 ThumunAlHizbs
 * - ThumunAlHizb methods will throw an error if called on Hafs riwaya
 */
export class QuranRiwaya<R extends RiwayaName = "Hafs"> {
  private readonly riwaya: R

  private constructor(riwaya: R) {
    this.riwaya = riwaya
  }

  /**
   * Validates if the current riwaya supports ThumunAlHizb (Eighth of Hizb) feature.
   * This feature is only available for Qalun riwaya.
   * @throws Error if the feature is not supported by the current riwaya
   */
  private validateThumunAlHizbSupport(): void {
    const meta = riwayaMeta[this.riwaya]
    if (meta.numThumunAlHizbs === 0) {
      throw new Error(`ThumunAlHizb feature is not available for ${this.riwaya} riwaya. Only available for Qalun.`)
    }
  }

  /**
   * Create a QuranRiwaya instance with the specified riwaya
   * @param riwaya - The riwaya name ("Hafs" or "Qalun")
   */
  static create<R extends RiwayaName>(riwaya: R): QuranRiwaya<R> {
    return new QuranRiwaya(riwaya)
  }

  /**
   * Create a QuranRiwaya instance with Hafs riwaya (default)
   */
  static hafs(): QuranRiwaya<"Hafs"> {
    return new QuranRiwaya("Hafs")
  }

  /**
   * Create a QuranRiwaya instance with Qalun riwaya
   */
  static qalun(): QuranRiwaya<"Qalun"> {
    return new QuranRiwaya("Qalun")
  }

  // ==================== Surah Methods ====================

  /**
   * Gets the metadata for the specified Surah
   */
  getSurahMeta(surahNum: Surah): SurahMeta {
    return getSurahMeta(surahNum, this.riwaya as RiwayahsWith<"SurahList">)
  }

  /**
   * Gets the surah info array
   */
  getSurahInfo(surah: Surah) {
    return getSurahInfo(surah, this.riwaya as RiwayahsWith<"SurahList">)
  }

  /**
   * Gets the count of ayahs in a surah
   */
  getAyahCountInSurah(surah: Surah): number {
    return getAyahCountInSurah(surah, this.riwaya as RiwayahsWith<"SurahList">)
  }

  /**
   * Finds the surah number for a given ayah ID
   */
  findSurahByAyahId(ayahId: AyahId): Surah {
    return findSurahByAyahId(ayahId, this.riwaya as RiwayahsWith<"SurahList">)
  }

  /**
   * Finds the [surah, ayah] tuple for a given ayah ID
   */
  findSurahAyahByAyahId(ayahId: AyahId): SurahAyah {
    return findSurahAyahByAyahId(ayahId, this.riwaya as RiwayahsWith<"SurahList">)
  }

  // ==================== Ayah Methods ====================

  /**
   * Finds the ayah ID for a given surah and ayah number
   */
  findAyahIdBySurah(surah: Surah, ayah: AyahNo): AyahId {
    return findAyahIdBySurah(surah, ayah, this.riwaya as RiwayahsWith<"SurahList">)
  }

  /**
   * Gets comprehensive metadata for an ayah
   */
  getAyahMeta(ayahId: AyahId): AyahMeta {
    return getAyahMeta(ayahId, this.riwaya as RiwayahsWith<"SurahList">)
  }

  /**
   * Gets metadata for all ayahs in a surah
   */
  getAyahMetasForSurah(surah: Surah): AyahMeta[] {
    return getAyahMetasForSurah(surah, this.riwaya as RiwayahsWith<"SurahList">)
  }

  /**
   * Gets the next ayah after the given surah and ayah
   */
  nextAyah(surah: Surah, ayah: AyahNo): SurahAyah {
    return nextAyah(surah, ayah, this.riwaya as RiwayahsWith<"SurahList">)
  }

  /**
   * Gets the previous ayah before the given surah and ayah
   */
  prevAyah(surah: Surah, ayah: AyahNo): SurahAyah {
    return prevAyah(surah, ayah, this.riwaya as RiwayahsWith<"SurahList">)
  }

  // ==================== Juz Methods ====================

  /**
   * Finds the juz number for a given surah and ayah
   */
  findJuz(surah: Surah, ayah: AyahNo = 1): Juz {
    return findJuz(surah, ayah, this.riwaya as RiwayahsWith<"JuzList">)
  }

  /**
   * Finds the juz number for a given ayah ID
   */
  findJuzByAyahId(ayahId: AyahId): Juz {
    return findJuzByAyahId(ayahId, this.riwaya as RiwayahsWith<"JuzList">)
  }

  /**
   * Finds juz and shift information
   */
  findJuzAndShift(surah: Surah, ayah: AyahNo = 1) {
    return findJuzAndShift(surah, ayah, this.riwaya as RiwayahsWith<"JuzList"> & RiwayahsWith<"SurahList">)
  }

  /**
   * Finds juz and shift information by ayah ID
   */
  findJuzAndShiftByAyahId(ayahId: AyahId) {
    return findJuzAndShiftByAyahId(ayahId, this.riwaya as RiwayahsWith<"JuzList"> & RiwayahsWith<"SurahList">)
  }

  /**
   * Finds juz metadata for a given surah
   */
  findJuzMetaBySurah(surah: Surah, ayah: AyahNo = 1): SurahJuzMeta {
    return findJuzMetaBySurah(surah, ayah, this.riwaya as RiwayahsWith<"JuzList">)
  }

  /**
   * Gets metadata for a juz
   */
  getJuzMeta(juz: Juz): JuzMeta {
    return getJuzMeta(juz, this.riwaya as RiwayahsWith<"JuzList">)
  }

  /**
   * Checks if an ayah is the first in a juz
   * @returns The juz number if the ayah is first in that juz, or a negative number otherwise
   */
  isAyahJuzFirst(ayahId: AyahId): Juz | number {
    return isAyahJuzFirst(ayahId, this.riwaya as RiwayahsWith<"JuzList">)
  }

  /**
   * Checks if a surah:ayah is the first in a juz
   * @returns The juz number if the surah:ayah is first in that juz, or a negative number otherwise
   */
  isSurahAyahJuzFirst(surah: Surah, ayah: AyahNo): Juz | number {
    return isSurahAyahJuzFirst(surah, ayah, this.riwaya as RiwayahsWith<"JuzList">)
  }

  // ==================== Page Methods ====================

  /**
   * Finds the page number for a given surah and ayah
   */
  findPage(surah: Surah, ayah: AyahNo | AyahId = 1): Page {
    return findPage(surah, ayah, this.riwaya as RiwayahsWith<"PageList">)
  }

  /**
   * Finds the page number for a given ayah ID
   */
  findPagebyAyahId(ayahId: AyahId): Page {
    return findPagebyAyahId(ayahId, this.riwaya as RiwayahsWith<"PageList">)
  }

  /**
   * Gets metadata for a page
   */
  getPageMeta(page: Page): PageMeta {
    return getPageMeta(page, this.riwaya as RiwayahsWith<"PageList">)
  }

  /**
   * Checks if an ayah is the first on a page
   * @returns The page number if the ayah is first on that page, or a negative number otherwise
   */
  isAyahPageFirst(ayahId: AyahId): Page | number {
    return isAyahPageFirst(ayahId, this.riwaya as RiwayahsWith<"PageList">)
  }

  /**
   * Checks if a surah:ayah is the first on a page
   * @returns The page number if the surah:ayah is first on that page, or a negative number otherwise
   */
  isSurahAyahPageFirst(surah: Surah, ayah: AyahNo): Page | number {
    return isSurahAyahPageFirst(surah, ayah, this.riwaya as RiwayahsWith<"PageList">)
  }

  // ==================== Manzil Methods ====================

  /**
   * Finds the manzil number for a given surah and ayah
   */
  findManzil(surah: Surah, ayah: AyahNo = 1): Manzil {
    return findManzil(surah, ayah, this.riwaya as RiwayahsWithAll<["ManzilList", "SurahList"]>)
  }

  /**
   * Finds the manzil number for a given ayah ID
   */
  findManzilByAyahId(ayahId: AyahId): Manzil {
    return findManzilByAyahId(ayahId, this.riwaya as RiwayahsWith<"ManzilList">)
  }

  /**
   * Gets metadata for a manzil
   */
  getManzilMeta(manzil: Manzil): ManzilMeta {
    return getManzilMeta(manzil, this.riwaya as RiwayahsWith<"ManzilList">)
  }

  // ==================== Rub al-Hizb Methods ====================

  /**
   * Finds the rub al-hizb for a given surah and ayah
   */
  findRubAlHizb(surah: Surah, ayah: AyahNo = 1): number {
    return findRubAlHizb(surah, ayah, this.riwaya as RiwayahsWithAll<["SurahList", "HizbQuarterList"]>)
  }

  /**
   * Finds the rub al-hizb for a given ayah ID
   */
  findRubAlHizbByAyahId(ayahId: AyahId): number {
    return findRubAlHizbByAyahId(ayahId, this.riwaya as RiwayahsWith<"HizbQuarterList">)
  }

  /**
   * Gets rub al-hizb information
   */
  getRubAlHizb(quarterIndex: RubAlHizbId): RubAlHizb {
    return getRubAlHizb(quarterIndex)
  }

  /**
   * Gets rub al-hizb metadata
   */
  getRubAlHizbMeta(rubAlHizbId: RubAlHizbId): RubAlHizbMeta {
    return getRubAlHizbMeta(rubAlHizbId, this.riwaya as RiwayahsWith<"HizbQuarterList">)
  }

  /**
   * Gets rub al-hizb metadata by ayah ID
   */
  getRubAlHizbMetaByAyahId(ayahId: AyahId): RubAlHizbMeta {
    return getRubAlHizbMetaByAyahId(ayahId, this.riwaya as RiwayahsWith<"HizbQuarterList">)
  }

  /**
   * Gets rub al-hizb by ayah ID
   */
  getRubAlHizbByAyahId(ayahId: AyahId): RubAlHizb {
    return getRubAlHizbByAyahId(ayahId, this.riwaya as RiwayahsWith<"HizbQuarterList">)
  }

  // ==================== Thumun al-Hizb Methods (Qalun only) ====================

  /**
   * Finds the thumun al-hizb for a given surah and ayah
   * @remarks Only available for Qalun riwaya
   * @throws Error if called on Hafs riwaya (not supported)
   */
  findThumunAlHizb(surah: Surah, ayah: AyahNo = 1): number {
    this.validateThumunAlHizbSupport()
    return findThumunAlHizb(surah, ayah, this.riwaya as RiwayahsWithAll<["SurahList", "HizbEighthList"]>)
  }

  /**
   * Finds the thumun al-hizb for a given ayah ID
   * @remarks Only available for Qalun riwaya
   * @throws Error if called on Hafs riwaya (not supported)
   */
  findThumunAlHizbByAyahId(ayahId: AyahId): number {
    this.validateThumunAlHizbSupport()
    return findThumunAlHizbByAyahId(ayahId, this.riwaya as RiwayahsWith<"HizbEighthList">)
  }

  /**
   * Gets thumun al-hizb information
   * @remarks Only available for Qalun riwaya
   * @throws Error if called on Hafs riwaya (not supported)
   */
  getThumunAlHizb(eighthIndex: ThumunAlHizbId): ThumunAlHizb {
    this.validateThumunAlHizbSupport()
    return getThumunAlHizb(eighthIndex)
  }

  /**
   * Gets thumun al-hizb by ayah ID
   * @remarks Only available for Qalun riwaya
   * @throws Error if called on Hafs riwaya (not supported)
   */
  getThumunAlHizbByAyahId(ayahId: AyahId): ThumunAlHizb {
    this.validateThumunAlHizbSupport()
    return getThumunAlHizbByAyahId(ayahId, this.riwaya as RiwayahsWith<"HizbEighthList">)
  }

  /**
   * Gets thumun al-hizb metadata
   * @remarks Only available for Qalun riwaya
   * @throws Error if called on Hafs riwaya (not supported)
   */
  getThumunAlHizbMeta(thumunAlHizbId: ThumunAlHizbId): ThumunAlHizbMeta {
    this.validateThumunAlHizbSupport()
    return getThumunAlHizbMeta(thumunAlHizbId, this.riwaya as RiwayahsWith<"HizbEighthList">)
  }

  /**
   * Gets thumun al-hizb metadata by ayah ID
   * @remarks Only available for Qalun riwaya
   * @throws Error if called on Hafs riwaya (not supported)
   */
  getThumunAlHizbMetaByAyahId(ayahId: AyahId): ThumunAlHizbMeta {
    this.validateThumunAlHizbSupport()
    return getThumunAlHizbMetaByAyahId(ayahId, this.riwaya as RiwayahsWith<"HizbEighthList">)
  }

  // ==================== Ruku Methods ====================

  /**
   * Finds the ruku for a given ayah ID
   */
  findRukuByAyahId(ayahId: AyahId): Ruku {
    return findRukuByAyahId(ayahId, this.riwaya as RiwayahsWith<"RukuList">)
  }

  /**
   * Gets ruku metadata
   */
  getRukuMeta(ruku: Ruku): RukuMeta {
    return getRukuMeta(ruku, this.riwaya as RiwayahsWith<"RukuList">)
  }

  // ==================== Range Methods ====================

  /**
   * Finds the range of ayahs around a given ayah based on mode
   */
  findRangeAroundAyah(ayahId: AyahId, mode: RangeMode): AyahRange {
    return findRangeAroundAyah(ayahId, mode, this.riwaya as RiwayahsWith<"SurahList">)
  }

  /**
   * Finds the range of ayahs around a given surah:ayah based on mode
   */
  findRangeAroundSurahAyah(surah: Surah, ayah: AyahNo, mode: RangeMode): AyahRange {
    return findRangeAroundSurahAyah(surah, ayah, mode, this.riwaya as RiwayahsWith<"SurahList">)
  }

  // ==================== Utility Methods ====================

  /**
   * Generates part blocks for a given part type
   */
  generatePartBlocks(partType: PartType) {
    return generatePartBlocks(partType, this.riwaya as RiwayaName)
  }

  /**
   * Gets the riwaya name
   */
  getRiwayaName(): R {
    return this.riwaya
  }

  /**
   * Gets the metadata for this riwaya
   */
  getMeta(): QuranMeta {
    return riwayaMeta[this.riwaya]
  }
}
