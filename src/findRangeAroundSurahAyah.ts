import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { findRangeAroundAyah } from "./findRangeAroundAyah"
import { SurahList } from "./lists/surahList"
import { AyahId, AyahNo, AyahRange, RangeMode, Surah } from "./types"
import { checkValidSurah } from "./validation"

/**
 * Finds a range of ayahs around a given ayah based on the specified mode.
 *
 * @param surah - The surah number (1-114)
 * @param ayah - The ayah number within the surah
 * @param mode - The range mode: "juz", "surah", "ayah", "page", "ruku" or "all"
 * @returns A tuple containing the start and end ayah IDs of the range
 */
export function findRangeAroundSurahAyah(
  surah: Surah,
  ayah: AyahNo,
  mode: RangeMode
): AyahRange {
  checkValidSurah(surah)
  if (mode === "surah") {
    return [SurahList[surah][0], SurahList[surah + 1][0] - 1]
  }
  const ayahId: AyahId = findAyahIdBySurah(surah, ayah)
  return findRangeAroundAyah(ayahId, mode)
}
