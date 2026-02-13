import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import type { AyahId, AyahNo, Surah, SurahAyah } from "./types"
import type { RiwayaData } from "./lists/types"
/**
 * Get the next ayah for the given surah and ayah number.
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @param data - The Lists object containing SurahList.
 * @returns The surah and ayah number of the next ayah.
 */
export function nextAyah(surah: Surah, ayah: AyahNo, data: RiwayaData): SurahAyah {
  if (surah < 1 || surah > data.meta.numSurahs) {
    throw new RangeError("Surah must be between 1 and " + data.meta.numSurahs)
  }

  const ayahId: AyahId = findAyahIdBySurah(surah, ayah, data)
  return findSurahAyahByAyahId(ayahId == data.meta.numAyahs ? 1 : ayahId + 1, data)
}
