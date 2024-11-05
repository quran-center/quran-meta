import { SurahList } from "./lists/surahList"
import { Surah, SurahMeta } from "./types"
import { checkValidSurah } from "./validation"

/**
 * Gets the metadata for the specified Surah.
 *
 * @param surah - The Surah to get the metadata for.
 * @returns The metadata for the specified Surah.
 */
export function getSurahMeta(surah: Surah): SurahMeta {
  checkValidSurah(surah)
  return SurahList[surah]
}
