import { meta } from "./const"
import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import { AyahId, AyahNo, Surah, SurahAyah } from "./types"
import { checkValidSurah } from "./validation"
import { RiwayahsWith } from "./lists/types"
/**
 * Get the previous ayah for the given surah and ayah number.
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns The surah and ayah number of the previous ayah.
 */
export function prevAyah(
  surah: Surah,
  ayah: AyahNo,
  riwaya: RiwayahsWith<"SurahList"> = "Hafs"
): SurahAyah {
  checkValidSurah(surah)

  const ayahId: AyahId = findAyahIdBySurah(surah, ayah, riwaya)
  return findSurahAyahByAyahId(ayahId == 1 ? meta.numAyahs : ayahId - 1, riwaya)
}
