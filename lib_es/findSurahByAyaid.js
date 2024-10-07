import { checkValidAyahId } from "./checkValidAyahId";
import { SuraList } from "./lists/surahList";
/**
 * Finds the Surah (chapter) and Ayah (verse) numbers that the given Ayah ID belongs to.
 *
 * @param ayaId - The Ayah ID to find the Surah and Ayah numbers for.
 * @returns An array containing the Surah number and the Ayah number within that Surah.
 */
export function findSurahByAyaid(ayaId) {
    checkValidAyahId(ayaId);
    const suraNum = SuraList.findIndex(x => x[0] >= ayaId) - 1;
    return [suraNum, ayaId - SuraList[suraNum][0]];
}
//# sourceMappingURL=findSurahByAyaid.js.map