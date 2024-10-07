"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkValidSurah = checkValidSurah;
var const_1 = require("./const");
/**
 * Checks if the given Surah (chapter) number is valid.
 *
 * @param surah - The Surah (chapter) number to check.
 * @param checkOnly - If true, the function will only check the validity and not throw an error.
 * @returns True if the Surah number is valid, false otherwise.
 */
function checkValidSurah(surah, checkOnly) {
    if (checkOnly === void 0) { checkOnly = false; }
    if (surah < 1 || surah > const_1.meta.numSuras) {
        if (checkOnly)
            return false;
        throw new RangeError("Surah must be between 1 and " + const_1.meta.numSuras);
    }
    return true;
}
//# sourceMappingURL=checkValidSurah.js.map