import { meta } from "./const";
import { findAyaidBySurah } from "./findAyaidBySurah";
import { findSurahByAyaid } from "./findSurahByAyaid";
/**
 * Get the next ayah for the given surah and ayah number.
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @returns The surah and ayah number of the next ayah.
 */
export function nextAyah(surah, ayah) {
    if (surah < 1 || surah > meta.numSuras)
        throw new RangeError("Surah must be between 1 and " + meta.numSuras);
    const ayaid = findAyaidBySurah(surah, ayah);
    return findSurahByAyaid(ayaid == meta.numAyas ? 1 : ayaid + 1);
}
//# sourceMappingURL=nextAyah.js.map