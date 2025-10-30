import { getList } from "./lists/index"
import { RiwayahsWith } from "./lists/types"
import { Surah, SurahInfo } from "./types"
import { checkValidSurah } from "./validation"

/**
 * Gets the metadata for the specified Surah.
 *
 * @param surah - The Surah to get the metadata for.
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns The metadata for the specified Surah.
 */
export function getSurahInfo(surah: Surah, riwaya: RiwayahsWith<"SurahList"> = "Hafs"): SurahInfo {
  checkValidSurah(surah)
  const SurahList = getList("SurahList", riwaya)
  return SurahList[surah]
}
