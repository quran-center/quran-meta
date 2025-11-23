import type { RiwayaName, Riwayas } from "./lists/types"
import type { AyahId, AyahMeta, AyahNo, AyahRange, Juz, JuzMeta, Manzil, ManzilMeta, Page, PageMeta, RangeMode, RubAlHizb, RubAlHizbId, RubAlHizbMeta, Ruku, RukuMeta, Surah, SurahAyah, SurahJuzMeta, SurahMeta, QuranMeta, SurahInfo, ThumunAlHizbId, ThumunAlHizbMeta } from "./types"
import { getSurahInfo } from "./getSurahInfo"
import { getSurahMeta } from "./getSurahMeta"
import { getAyahCountInSurah } from "./getAyahCountInSurah"
import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { findSurahByAyahId } from "./findSurahByAyahId"
import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import { nextAyah } from "./nextAyah"
import { prevAyah } from "./prevAyah"
import { findJuz } from "./findJuz"
import { findJuzByAyahId } from "./findJuzByAyahId"
import { getJuzMeta } from "./getJuzMeta"
import { findJuzMetaBySurah } from "./findJuzMetaBySurah"
import { findJuzAndShift, findJuzAndShiftByAyahId } from "./findJuzAndShift"
import { findPage } from "./findPage"
import { findPagebyAyahId } from "./findPagebyAyahId"
import { getPageMeta } from "./getPageMeta"
import { findManzil } from "./findManzil"
import { findManzilByAyahId } from "./findManzilByAyahId"
import { getManzilMeta } from "./getManzilMeta"
import { findRukuByAyahId } from "./findRukuByAyahId"
import { getRukuMeta } from "./getRukuMeta"
import { findRubAlHizb } from "./findRubAlHizb"
import { findRubAlHizbByAyahId } from "./findRubAlHizbByAyahId"
import { getRubAlHizbMeta } from "./getRubAlHizbMeta"
import { getRubAlHizbByAyahId } from "./getRubAlHizbByAyahId"
import { getRubAlHizbMetaByAyahId } from "./getRubAlHizbMetaByAyahId"
import { findThumunAlHizbByAyahId } from "./findThumunAlHizbByAyahId"
import { getThumunAlHizbMeta } from "./getThumunAlHizbMeta"
import { getAyahMeta } from "./getAyahMeta"
import { getAyahMetasForSurah } from "./getAyahMetasForSurah"
import { findRangeAroundAyah } from "./findRangeAroundAyah"
import { findRangeAroundSurahAyah } from "./findRangeAroundSurahAyah"
import { isAyahJuzFirst } from "./isAyahJuzFirst"
import { isAyahPageFirst } from "./isAyahPageFirst"
import { isSurahAyahJuzFirst } from "./isSurahAyahJuzFirst"
import { isSurahAyahPageFirst } from "./isSurahAyahPageFirst"
import { findThumunAlHizb } from "./findThumunAlHizb"

/**
 * QuranRiwaya class provides a clean API for Quran metadata operations
 * with a specific riwaya (recitation tradition) context.
 *
 * Currently provides basic Surah and Ayah operations. For advanced features
 * like Juz, Page, Manzil, RubAlHizb, etc., use the functional API directly.
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
 * const meta = quran.getMeta()
 * console.log(meta.numAyahs)  // 6214 (Qalun has fewer ayahs than Hafs)
 * ```
 *
 * @example
 * **Creating a custom instance**
 * ```typescript
 * import { QuranRiwaya } from 'quran-meta'
 * import { WarshMeta, WarshLists } from 'quran-meta/lists/WarshLists'
 *
 * const warsh = QuranRiwaya.create(WarshLists)
 * ```
 */
export class QuranRiwaya<R extends RiwayaName = "Hafs"> {
  private readonly riwaya: R
  private readonly meta: QuranMeta
  private readonly data: Riwayas[R]

  private constructor(rData: Riwayas[R]) {
    this.riwaya = rData.meta.riwayaName as R
    this.meta = rData.meta
    this.data = rData
  }

  /**
     * Create a QuranRiwaya instance with the specified riwaya, metadata, and lists
     * @param riwaya - The riwaya name ("Hafs", "Qalun", or "Warsh")
     * @param meta - The metadata for this riwaya
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
    return getSurahMeta(surahNum, this.data)
  }

  /**
     * Gets the surah info array [firstAyahId, ayahCount, surahOrder, rukuCount, name, isMeccan]
     */
  getSurahInfo(surah: Surah): SurahInfo {
    return getSurahInfo(surah, this.data)
  }

  /**
     * Gets the count of ayahs in a surah
     */
  getAyahCountInSurah(surah: Surah): number {
    return getAyahCountInSurah(surah, this.data)
  }

  /**
     * Finds the surah number for a given ayah ID
     */
  findSurahByAyahId(ayahId: AyahId): Surah {
    return findSurahByAyahId(ayahId, this.data)
  }

  /**
     * Finds the [surah, ayah] tuple for a given ayah ID
     */
  findSurahAyahByAyahId(ayahId: AyahId): SurahAyah {
    return findSurahAyahByAyahId(ayahId, this.data)
  }

  /**
     * Finds the ayah ID for a given surah and ayah number
     */
  findAyahIdBySurah(surah: Surah, ayah: AyahNo): AyahId {
    return findAyahIdBySurah(surah, ayah, this.data)
  }

  /**
     * Gets the next ayah after the given surah and ayah
     */
  nextAyah(surah: Surah, ayah: AyahNo): SurahAyah {
    return nextAyah(surah, ayah, this.data)
  }

  /**
     * Gets the previous ayah before the given surah and ayah
     */
  prevAyah(surah: Surah, ayah: AyahNo): SurahAyah {
    return prevAyah(surah, ayah, this.data)
  }

  // ==================== Juz Methods ====================

  /**
     * Finds the juz number for a given surah and ayah
     */
  findJuz(surah: Surah, ayah: AyahNo = 1): Juz {
    return findJuz(surah, ayah, this.data)
  }

  /**
     * Finds the juz number for a given ayah ID
     */
  findJuzByAyahId(ayahId: AyahId): Juz {
    return findJuzByAyahId(ayahId, this.data)
  }

  // ==================== Page Methods ====================

  /**
     * Finds the page number for a given surah and ayah
     */
  findPage(surah: Surah, ayah: AyahNo = 1): Page {
    return findPage(surah, ayah, this.data)
  }

  /**
     * Finds the page number for a given ayah ID
     */
  findPagebyAyahId(ayahId: AyahId): Page {
    return findPagebyAyahId(ayahId, this.data)
  }

  /**
     * Gets metadata for a specific page
     */
  getPageMeta(pageNum: Page): PageMeta {
    return getPageMeta(pageNum, this.data)
  }

  // ==================== Manzil Methods ====================

  /**
     * Finds the manzil number for a given surah and ayah
     */
  findManzil(surah: Surah, ayah: AyahNo = 1): Manzil {
    return findManzil(surah, ayah, this.data)
  }

  /**
     * Finds the manzil number for a given ayah ID
     */
  findManzilByAyahId(ayahId: AyahId): Manzil {
    return findManzilByAyahId(ayahId, this.data)
  }

  /**
     * Gets metadata for a specific manzil
     */
  getManzilMeta(manzilNum: number): ManzilMeta {
    return getManzilMeta(manzilNum, this.data)
  }

  // ==================== Ruku Methods ====================

  /**
     * Finds the ruku number for a given ayah ID
     */
  findRukuByAyahId(ayahId: AyahId): Ruku {
    return findRukuByAyahId(ayahId, this.data)
  }

  /**
     * Gets metadata for a specific ruku
     */
  getRukuMeta(rukuNum: number): RukuMeta {
    return getRukuMeta(rukuNum, this.data)
  }

  // ==================== Juz Additional Methods ====================

  /**
     * Gets metadata for a specific juz
     */
  getJuzMeta(juzNum: Juz): JuzMeta {
    return getJuzMeta(juzNum, this.data)
  }

  /**
     * Finds juz metadata for a given surah and ayah
     */
  findJuzMetaBySurah(surah: Surah, ayah: AyahNo = 1): SurahJuzMeta {
    return findJuzMetaBySurah(surah, ayah, this.data)
  }

  /**
     * Finds juz and calculates shift between juz start and surah start
     */
  findJuzAndShift(surah: Surah, ayah: AyahNo) {
    return findJuzAndShift(surah, ayah, this.data)
  }

  /**
     * Finds juz and shift for a given ayah ID
     */
  findJuzAndShiftByAyahId(ayahId: AyahId) {
    return findJuzAndShiftByAyahId(ayahId, this.data)
  }

  // ==================== RubAlHizb Methods ====================

  /**
     * Finds the RubAlHizb for a given surah and ayah
     */
  findRubAlHizb(surah: Surah, ayah: AyahNo = 1): RubAlHizbId {
    return findRubAlHizb(surah, ayah, this.data)
  }

  /**
     * Finds the RubAlHizb ID for a given ayah ID
     */
  findRubAlHizbByAyahId(ayahId: AyahId): RubAlHizbId {
    return findRubAlHizbByAyahId(ayahId, this.data)
  }

  /**
     * Gets RubAlHizb data (juz, hizb, etc.) for a given ayah ID
     */
  getRubAlHizbByAyahId(ayahId: AyahId): RubAlHizb {
    return getRubAlHizbByAyahId(ayahId, this.data)
  }

  /**
     * Gets complete RubAlHizb metadata for a given ayah ID
     */
  getRubAlHizbMetaByAyahId(ayahId: AyahId): RubAlHizbMeta {
    return getRubAlHizbMetaByAyahId(ayahId, this.data)
  }

  /**
     * Gets metadata for a specific RubAlHizb
     */
  getRubAlHizbMeta(quarterIndex: RubAlHizbId): RubAlHizbMeta {
    return getRubAlHizbMeta(quarterIndex, this.data)
  }

  // ==================== ThumunAlHizb Methods ====================

  /**
     * Finds the ThumunAlHizb ID for a given ayah ID (Qalun/Warsh only)
     */
  findThumunAlHizbByAyahId(ayahId: AyahId): ThumunAlHizbId | null {
    return findThumunAlHizbByAyahId(ayahId, this.data)
  }

  /**
     * Finds the ThumunAlHizb ID for a given ayah ID (Qalun/Warsh only)
     */
  findThumunAlHizb(surah: Surah, ayah: AyahNo = 1): ThumunAlHizbId | null {
    return findThumunAlHizb(surah, ayah, this.data)
  }

  /**
     * Gets metadata for a specific ThumunAlHizb (Qalun/Warsh only)
     */
  getThumunAlHizbMeta(eighthIndex: ThumunAlHizbId): ThumunAlHizbMeta | null {
    return getThumunAlHizbMeta(eighthIndex, this.data)
  }

  // ==================== Ayah Metadata ====================

  /**
     * Gets comprehensive metadata for a specific ayah
     */
  getAyahMeta(ayahId: AyahId): AyahMeta {
    return getAyahMeta(ayahId, this.data)
  }

  /**
     * Gets metadata for all ayahs in a surah
     */
  getAyahMetasForSurah(surahNumber: Surah): AyahMeta[] {
    return getAyahMetasForSurah(surahNumber, this.data)
  }

  // ==================== Range Methods ====================

  /**
     * Finds the range of ayahs around a given ayah
     */
  findRangeAroundAyah(ayahId: AyahId, mode: RangeMode): AyahRange {
    return findRangeAroundAyah(ayahId, mode, this.data)
  }

  /**
     * Finds the range of ayahs around a given surah and ayah
     */
  findRangeAroundSurahAyah(surah: Surah, ayah: AyahNo, mode: RangeMode): AyahRange {
    return findRangeAroundSurahAyah(surah, ayah, mode, this.data)
  }

  // ==================== Helper Methods ====================

  /**
     * Checks if an ayah is the first ayah of a juz
     */
  isAyahJuzFirst(ayahId: AyahId): Juz | number {
    return isAyahJuzFirst(ayahId, this.data)
  }

  /**
     * Checks if an ayah is the first ayah of a page
     */
  isAyahPageFirst(ayahId: AyahId): Page | number {
    return isAyahPageFirst(ayahId, this.data)
  }

  /**
     * Checks if a surah-ayah combination is the first ayah of a juz
     */
  isSurahAyahJuzFirst(surah: Surah, ayah: AyahNo): Juz | number {
    return isSurahAyahJuzFirst(surah, ayah, this.data)
  }

  /**
     * Checks if a surah-ayah combination is the first ayah of a page
     */
  isSurahAyahPageFirst(surah: Surah, ayah: AyahNo): Page | number {
    return isSurahAyahPageFirst(surah, ayah, this.data)
  }

  // ==================== Utility Methods ====================

  /**
     * Gets the riwaya name
     */
  getRiwayaName(): R {
    return this.riwaya
  }

  /**
     * Gets the metadata for this riwaya
     */
  getmeta(): QuranMeta {
    return this.meta
  }

  /**
     * Gets the metadata for this riwaya
     */
  getLists(): Riwayas[R] {
    return this.data
  }
}
