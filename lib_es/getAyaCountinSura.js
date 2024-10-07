import { getSurahMeta } from "./getSurahMeta";
/**
 * Get the number of ayahs (verses) in the specified surah.
 * @param surah - The surah number.
 * @returns The number of ayahs in the specified surah.
 */
export function getAyaCountinSura(surah) {
    return getSurahMeta(surah)[1];
}
//# sourceMappingURL=getAyaCountinSura.js.map