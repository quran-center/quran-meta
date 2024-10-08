import { getSurahMeta } from "./getSurahMeta"
import { Surah } from "./types"

/**
 * Get the number of ayahs (verses) in the specified surah.
 * @param surah - The surah number.
 * @returns The number of ayahs in the specified surah.
 */
export function getAyaCountinSura(surah: Surah): number {
  return getSurahMeta(surah)[1]
}
