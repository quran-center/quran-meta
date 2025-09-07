import { meta } from "./const"
import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import { AyahId, AyahNo, Surah, SurahAyah } from "./types"
import { RiwayahsWith } from "./lists/types";
/**
 * Get the next ayah for the given surah and ayah number.
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns The surah and ayah number of the next ayah.
 */
export function nextAyah(surah: Surah, ayah: AyahNo,  riwaya?: RiwayahsWith<"SurahList">): SurahAyah {
  if (surah < 1 || surah > meta.numSurahs)
    throw new RangeError("Surah must be between 1 and " + meta.numSurahs)

  const ayahId: AyahId = findAyahIdBySurah(surah, ayah,riwaya)
  return findSurahAyahByAyahId(ayahId == meta.numAyahs ? 1 : ayahId + 1,riwaya)
}
