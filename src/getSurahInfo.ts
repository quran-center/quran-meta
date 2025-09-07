import { getList } from "./lists/index";
import { RiwayahsWith } from "./lists/types";
import { Surah, SurahInfo } from "./types"
import { checkValidSurah } from "./validation"

/**
 * Gets the metadata for the specified Surah.
 *
 * @param surah - The Surah to get the metadata for.
 * @returns The metadata for the specified Surah.
 */
export function getSurahInfo(surah: Surah,riwaya?:RiwayahsWith<"SurahList">): SurahInfo {
  checkValidSurah(surah)
  const SurahList = getList("SurahList",riwaya)
  return SurahList[surah]
}
