import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import type { AyahStepOptions } from "./nextAyah"
import type { AyahId, AyahNo, Surah, SurahAyah } from "./types"
import { checkValidSurah } from "./validation"
import type { RiwayaData } from "./lists/types"

/**
 * Get the previous ayah for the given surah and ayah number.
 *
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @param data - The Lists object containing SurahList.
 * @param options - Behaviour at the start of the Quran, see {@link AyahStepOptions}.
 * @returns The surah and ayah number of the previous ayah, or `undefined` when `wrap` is `false` and there is no previous ayah.
 *
 * @example
 * ```ts
 * prevAyah(2, 1, HafsLists) // [1, 7]
 * prevAyah(1, 1, HafsLists) // [114, 6]
 * prevAyah(1, 1, HafsLists, { wrap: false }) // undefined
 * ```
 *
 * @category Navigation
 */
export function prevAyah(surah: Surah, ayah: AyahNo, data: RiwayaData, options?: { wrap?: true }): SurahAyah
export function prevAyah(surah: Surah, ayah: AyahNo, data: RiwayaData, options: AyahStepOptions): SurahAyah | undefined
export function prevAyah(
  surah: Surah,
  ayah: AyahNo,
  data: RiwayaData,
  { wrap = true }: AyahStepOptions = {}
): SurahAyah | undefined {
  checkValidSurah(surah, data.meta)

  const ayahId: AyahId = findAyahIdBySurah(surah, ayah, data)
  if (ayahId === 1) {
    return wrap ? findSurahAyahByAyahId(data.meta.numAyahs, data) : undefined
  }
  return findSurahAyahByAyahId(ayahId - 1, data)
}
