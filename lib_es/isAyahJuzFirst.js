import { checkValidAyahId } from "./checkValidAyahId";
import { checkValidSurah } from "./checkValidSurah";
import { findAyaidBySurah } from "./findAyaidBySurah";
import { JuzList } from "./lists/juzList";
import { binarySearch } from "./utils";
/**
 * Returns the Juz (part) number that the given Ayah (verse) belongs to.
 *
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number.
 * @param ayahMode - If true, the `ayah` parameter is treated as an Ayah ID instead of a Surah and Ayah number.
 * @returns The Juz (part) number that the given Ayah belongs to. Returns Positive number if aya is first ayah of juz, number is juz number
 */
export function isAyahJuzFirst(surah, ayah, ayahMode = false) {
    const ayahId = ayahMode
        ? (checkValidAyahId(ayah) && ayah)
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    return binarySearch(JuzList, ayahId);
    // return JuzList.findIndex((x: AyahId) => x == ayahId)
}
//# sourceMappingURL=isAyahJuzFirst.js.map