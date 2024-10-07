import { checkValidSurah } from "./checkValidSurah";
import { findAyaidBySurah } from "./findAyaidBySurah";
import { findJuzHizbByAyaid } from "./findJuzHizbByAyaid";
/**
 * Finds the Juz (part) and Hizb (section) of the Quran that the given Ayah (verse) belongs to.
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number. Defaults to 1 if not provided.
 * @param ayahMode - If true, the `ayah` parameter is treated as an Ayah ID instead of a Surah and Ayah number.
 * @returns An object containing the Juz (part) number, Hizb (section) number, and the index of the Hizb that the given Ayah belongs to.
 */
export function findJuzHizb(surah, ayah = 1, ayahMode = false) {
    const ayahId = ayahMode
        ? ayah
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    return findJuzHizbByAyaid(ayahId);
}
//# sourceMappingURL=findJuzHizb.js.map