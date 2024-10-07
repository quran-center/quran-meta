import { checkValidAyahId } from "./checkValidAyahId";
import { checkValidSurah } from "./checkValidSurah";
import { findAyaidBySurah } from "./findAyaidBySurah";
import { PageList } from "./lists/pageList";
import { binarySearch } from "./utils";
/**
 * Determines if the given ayah is the first ayah of a juz.
 *
 * @param surah - The surah number.
 * @param ayah - The ayah number.
 * @param ayahMode - Optional flag to indicate if the ayah number is already a valid ayah ID.
 * @returns The juz number if the ayah is the first ayah of the juz, otherwise -1.
 */
export function isAyahPageFirst(surah, ayah, ayahMode = false) {
    const ayahId = ayahMode
        ? (checkValidAyahId(ayah) && ayah)
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    return binarySearch(PageList, ayahId);
    // return PageList.findIndex((x: AyahId) => x == ayahId)
}
//# sourceMappingURL=isAyahPageFirst.js.map