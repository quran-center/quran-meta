import { meta } from "./const"
import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { findSurahByAyahId } from "./findSurahByAyahId"
import { AyahId, AyahNo, Surah, SurahAyah } from "./types"

/**
 * Get the next ayah for the given surah and ayah number.
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @returns The surah and ayah number of the next ayah.
 */
export function nextAyah(surah: Surah, ayah: AyahNo): SurahAyah {
  if (surah < 1 || surah > meta.numSurahs)
    throw new RangeError("Surah must be between 1 and " + meta.numSurahs)

  const ayahId: AyahId = findAyahIdBySurah(surah, ayah)
  return findSurahByAyahId(ayahId == meta.numAyahs ? 1 : ayahId + 1)
}
