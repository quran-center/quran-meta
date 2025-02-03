import { meta } from "./const"
import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import { AyahId, AyahNo, Surah, SurahAyah } from "./types"
import { checkValidSurah } from "./validation"

/**
 * Get the previous ayah for the given surah and ayah number.
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @returns The surah and ayah number of the previous ayah.
 */
export function prevAyah(surah: Surah, ayah: AyahNo): SurahAyah {
  checkValidSurah(surah)

  const ayahId: AyahId = findAyahIdBySurah(surah, ayah)
  return findSurahAyahByAyahId(ayahId == 1 ? meta.numAyahs : ayahId - 1)
}
