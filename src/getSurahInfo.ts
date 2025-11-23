import type { RiwayaData } from "./lists/types"
import type { Surah, SurahInfo } from "./types"
import { checkValidSurah } from "./validation"

/**
 * Gets the metadata for the specified Surah.
 *
 * @param surah - The Surah to get the metadata for.
 * @param data - The Lists object containing SurahList.
 * @returns The metadata for the specified Surah.
 */
export function getSurahInfo(surah: Surah, data: RiwayaData): SurahInfo {
  checkValidSurah(surah, data.meta)
  return data.SurahList[surah]
}
