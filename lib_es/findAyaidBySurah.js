import { checkValidSurahAyah } from "./checkValidSurahAyah";
import { getSurahMeta } from "./getSurahMeta";
/**
 * Get the ayah ID for the given surah and ayah number.
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @returns The ayah ID for the given surah and ayah number.
 */
export function findAyaidBySurah(surah, ayah) {
    checkValidSurahAyah(surah, ayah);
    const [startAyahId] = getSurahMeta(surah);
    return startAyahId + ayah;
}
//# sourceMappingURL=findAyaidBySurah.js.map