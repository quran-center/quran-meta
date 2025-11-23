import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import type { AyahId, AyahNo, Surah, SurahAyah } from "./types"
import { checkValidSurah } from "./validation"
import type { RiwayaData } from "./lists/types"
/**
 * Get the previous ayah for the given surah and ayah number.
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @param data - The Lists object containing SurahList.
 * @returns The surah and ayah number of the previous ayah.
 */
export function prevAyah(
  surah: Surah,
  ayah: AyahNo,
  data: RiwayaData
): SurahAyah {
  checkValidSurah(surah, data.meta)

  const ayahId: AyahId = findAyahIdBySurah(surah, ayah, data)
  return findSurahAyahByAyahId(ayahId == 1 ? data.meta.numAyahs : ayahId - 1, data)
}
