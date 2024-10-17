import { meta } from "./const"
import { findAyaidBySurah } from "./findAyaidBySurah"
import { findSurahByAyaid } from "./findSurahByAyaid"
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

  const ayaid: AyahId = findAyaidBySurah(surah, ayah)
  return findSurahByAyaid(ayaid == 1 ? meta.numAyahs : ayaid - 1)
}
