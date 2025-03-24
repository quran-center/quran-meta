import { getSurahInfo } from "./getSurahInfo"
import { Surah, SurahMeta } from "./types"

/**
 * Gets the metadata for the specified Surah.
 *
 * @param surah - The Surah to get the metadata for.
 * @returns The metadata for the specified Surah.
 */
export function getSurahMeta(surahNum: Surah): SurahMeta {
  const [firstAyahId, ayahCount, surahOrder, rukuCount, lineCount, name, isMeccan] = getSurahInfo(surahNum);

  const lastAyahId = firstAyahId + ayahCount - 1
  return {
    surahNum,
    ayahCount,
    surahOrder,
    rukuCount,
    lineCount,
    name,
    isMeccan,
    firstAyahId,
    lastAyahId,
    first: [surahNum, 1],
    last: [surahNum, ayahCount],
  }
}
