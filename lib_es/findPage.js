import { checkValidAyahId } from "./checkValidAyahId";
import { checkValidSurah } from "./checkValidSurah";
import { findAyaidBySurah } from "./findAyaidBySurah";
import { PageList } from "./lists/pageList";
/**
 * Finds the page number for the given Surah and Ayah number.
 *
 * @param surah - The Surah to find the page for.
 * @param ayah - The Ayah number to find the page for.
 * @param ayahMode - If true, the `ayah` parameter is treated as an AyahId instead of an AyahNo.
 * @returns The page number for the given Surah and Ayah.
 */
export function findPage(surah, ayah, ayahMode = false) {
    const ayahId = ayahMode
        ? (checkValidAyahId(ayah) && ayah)
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    return PageList.findIndex(x => x > ayahId) - 1;
}
//# sourceMappingURL=findPage.js.map