import { getSurahInfo } from "./getSurahInfo"
import type { Surah, SurahMeta } from "./types"
import type { RiwayaData } from "./lists/types"
/**
 * Gets the metadata for the specified Surah.
 *
 * @param surahNum - The Surah to get the metadata for.
 * @param data - The Lists object containing SurahList.
 * @returns The metadata for the specified Surah.
 */
export function getSurahMeta(
  surahNum: Surah,
  data: RiwayaData
): SurahMeta {
  const [firstAyahId, ayahCount, surahOrder, rukuCount, name, isMeccan]
    = getSurahInfo(surahNum, data)

  const lastAyahId = firstAyahId + ayahCount - 1
  return {
    surahNum,
    ayahCount,
    surahOrder,
    rukuCount,
    name,
    isMeccan,
    firstAyahId,
    lastAyahId,
    first: [surahNum, 1],
    last: [surahNum, ayahCount]
  }
}
