import { checkValidAyahId } from "./checkValidAyahId";
import { checkValidSurah } from "./checkValidSurah";
import { findAyaidBySurah } from "./findAyaidBySurah";
import { findJuzByAyaid } from "./findJuzByAyaid";
import { findSurahByAyaid } from "./findSurahByAyaid";
import { JuzList } from "./lists/juzList";
import { SuraList } from "./lists/surahList";
/**
 * Finds the juz (section) that contains the specified ayah (verse) and calculates the number of ayahs between the start of the juz and the start of the surah (chapter) that contains the ayah.
 *
 * @param surah - The surah (chapter) that contains the ayah.
 * @param ayah - The ayah (verse) number.
 * @param ayahMode - A boolean flag indicating whether the `ayah` parameter represents an ayah number or an ayah ID.
 * @returns An object containing the following properties:
 *   - `juz`: The juz (section) that contains the ayah.
 *   - `leftAyahId`: The ayah ID of the first ayah in the juz.
 *   - `ayahsBetweenJuzSurah`: The number of ayahs between the start of the juz and the start of the surah (positive if the surah starts is in the juz, negative if the surah starts before the juz).
 */
export function findJuzAndShift(surah, ayah, ayahMode = false) {
    const ayahId = ayahMode
        ? (checkValidAyahId(ayah) && ayah)
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    const juz = findJuzByAyaid(ayahId);
    const leftAyahId = JuzList[juz];
    if (ayahMode)
        [surah] = findSurahByAyaid(ayahId);
    const [surahStartAyahId] = SuraList[surah];
    return {
        juz,
        ayahsBetweenJuzSurah: surahStartAyahId - leftAyahId + 1,
        leftAyahId
    };
}
//# sourceMappingURL=findJuzAndShift.js.map