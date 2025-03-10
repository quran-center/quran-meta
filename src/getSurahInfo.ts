import { SurahList } from "./lists/surahList"
import { Surah, SurahInfo } from "./types"
import { checkValidSurah } from "./validation"

/**
 * Gets the metadata for the specified Surah.
 *
 * @param surah - The Surah to get the metadata for.
 * @returns The metadata for the specified Surah.
 */
export function getSurahInfo(surah: Surah): SurahInfo {
  checkValidSurah(surah)
  return SurahList[surah]
}
