import { getSurahInfo } from "./getSurahInfo"
import { AyahNo, Surah } from "./types"

/**
 * Get the number of ayahs (verses) in the specified surah.
 * @param surah - The surah number.
 * @returns The number of ayahs in the specified surah.
 */
export function getAyahCountInSurah(surah: Surah): AyahNo {
  return getSurahInfo(surah)[1]
}
