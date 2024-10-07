import { checkValidSurah } from "./checkValidSurah";
import { meta } from "./const";
import { findAyaidBySurah } from "./findAyaidBySurah";
import { findSurahByAyaid } from "./findSurahByAyaid";
/**
 * Get the previous ayah for the given surah and ayah number.
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @returns The surah and ayah number of the previous ayah.
 */
export function prevAyah(surah, ayah) {
    checkValidSurah(surah);
    const ayaid = findAyaidBySurah(surah, ayah);
    return findSurahByAyaid(ayaid == 1 ? meta.numAyas : ayaid - 1);
}
//# sourceMappingURL=prevAyah.js.map