"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkValidSurahAyah = checkValidSurahAyah;
var checkValidSurah_1 = require("./checkValidSurah");
var getSurahMeta_1 = require("./getSurahMeta");
/**
 * Checks if the given Surah and Ayah (verse) numbers are valid.
 *
 * @param surah - The Surah (chapter) number to check.
 * @param ayah - The Ayah (verse) number to check.
 * @param checkOnly - If true, the function will only check the validity and not throw an error.
 * @returns True if the Surah and Ayah numbers are valid, false otherwise.
 */
function checkValidSurahAyah(surah, ayah, checkOnly) {
    if (checkOnly === void 0) { checkOnly = false; }
    if (!(0, checkValidSurah_1.checkValidSurah)(surah, checkOnly))
        return false;
    var _a = (0, getSurahMeta_1.getSurahMeta)(surah), startAyahId = _a[0], ayahCount = _a[1];
    if (ayah < 1 || ayah > ayahCount) {
        if (checkOnly)
            return false;
        throw new RangeError("Ayah must be between 1 and " + ayahCount);
    }
    return true;
}
//# sourceMappingURL=checkValidSurahAyah.js.map