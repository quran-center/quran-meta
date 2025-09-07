import { getSurahInfo } from "./getSurahInfo";
import { Surah, SurahMeta } from "./types";
import { RiwayahsWith } from "./lists/types";
/**
 * Gets the metadata for the specified Surah.
 *
 * @param surahNum - The Surah to get the metadata for.
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 *  @returns The metadata for the specified Surah.
 */
export function getSurahMeta(
  surahNum: Surah,
  riwaya?: RiwayahsWith<"SurahList">
): SurahMeta {
  const [firstAyahId, ayahCount, surahOrder, rukuCount, name, isMeccan] =
    getSurahInfo(surahNum, riwaya);

  const lastAyahId = firstAyahId + ayahCount - 1;
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
    last: [surahNum, ayahCount],
  };
}
