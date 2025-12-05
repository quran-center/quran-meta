import type { RiwayaData } from "./lists/types"
import { getSurahInfo } from "./getSurahInfo"
import type { AyahNo, Surah } from "./types"

/**
 * Get the number of ayahs (verses) in the specified surah.
 * @param surah - The surah number.
 * @param data - The Lists object containing SurahList.
 * @returns The number of ayahs in the specified surah.
 */
export function getAyahCountInSurah(surah: Surah, data: RiwayaData): AyahNo {
  return getSurahInfo(surah, data)[1]
}
