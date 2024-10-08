import { AyahId, AyahNo, Juz, Surah } from "./types";
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
export declare function findJuzAndShift(surah: Surah, ayah: AyahNo, ayahMode?: boolean): {
    juz: Juz;
    leftAyahId: AyahId;
    ayahsBetweenJuzSurah: number;
};
