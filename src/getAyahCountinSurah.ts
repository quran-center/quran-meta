import { RiwayahsWith } from "./lists/types"
import { getSurahInfo } from "./getSurahInfo"
import { AyahNo, Surah } from "./types"

/**
 * Get the number of ayahs (verses) in the specified surah.
 * @param surah - The surah number.
 *  @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns The number of ayahs in the specified surah.
 */
export function getAyahCountInSurah(
  surah: Surah,
  riwaya?: RiwayahsWith<"SurahList">
): AyahNo {
  return getSurahInfo(surah, riwaya)[1]
}
