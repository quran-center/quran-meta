import { checkValidSurah } from "./checkValidSurah";
import { SuraList } from "./lists/surahList";
/**
 * Gets the metadata for the specified Surah.
 *
 * @param surah - The Surah to get the metadata for.
 * @returns The metadata for the specified Surah.
 */
export function getSurahMeta(surah) {
    checkValidSurah(surah);
    return SuraList[surah];
}
//# sourceMappingURL=getSurahMeta.js.map