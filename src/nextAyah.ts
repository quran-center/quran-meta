import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import type { AyahId, AyahNo, Surah, SurahAyah } from "./types"
import type { RiwayaData } from "./lists/types"
import { checkValidSurah } from "./validation"

/**
 * Options for {@link nextAyah} and {@link prevAyah}.
 */
export interface AyahStepOptions {
  /**
   * When `true` (default) stepping past the last ayah of the Quran wraps around to 1:1
   * (and stepping back from 1:1 wraps to the last ayah). When `false` the functions
   * return `undefined` at the edges instead.
   */
  wrap?: boolean
}

/**
 * Get the next ayah for the given surah and ayah number.
 *
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @param data - The Lists object containing SurahList.
 * @param options - Behaviour at the end of the Quran, see {@link AyahStepOptions}.
 * @returns The surah and ayah number of the next ayah, or `undefined` when `wrap` is `false` and there is no next ayah.
 *
 * @example
 * ```ts
 * nextAyah(1, 7, HafsLists) // [2, 1]
 * nextAyah(114, 6, HafsLists) // [1, 1]
 * nextAyah(114, 6, HafsLists, { wrap: false }) // undefined
 * ```
 *
 * @category Navigation
 */
export function nextAyah(surah: Surah, ayah: AyahNo, data: RiwayaData, options?: { wrap?: true }): SurahAyah
export function nextAyah(surah: Surah, ayah: AyahNo, data: RiwayaData, options: AyahStepOptions): SurahAyah | undefined
export function nextAyah(
  surah: Surah,
  ayah: AyahNo,
  data: RiwayaData,
  { wrap = true }: AyahStepOptions = {}
): SurahAyah | undefined {
  checkValidSurah(surah, data.meta)

  const ayahId: AyahId = findAyahIdBySurah(surah, ayah, data)
  if (ayahId === data.meta.numAyahs) {
    return wrap ? findSurahAyahByAyahId(1, data) : undefined
  }
  return findSurahAyahByAyahId(ayahId + 1, data)
}
