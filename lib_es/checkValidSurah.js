import { meta } from "./const";
/**
 * Checks if the given Surah (chapter) number is valid.
 *
 * @param surah - The Surah (chapter) number to check.
 * @param checkOnly - If true, the function will only check the validity and not throw an error.
 * @returns True if the Surah number is valid, false otherwise.
 */
export function checkValidSurah(surah, checkOnly = false) {
    if (surah < 1 || surah > meta.numSuras) {
        if (checkOnly)
            return false;
        throw new RangeError("Surah must be between 1 and " + meta.numSuras);
    }
    return true;
}
//# sourceMappingURL=checkValidSurah.js.map