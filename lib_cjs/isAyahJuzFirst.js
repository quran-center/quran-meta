"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAyahJuzFirst = isAyahJuzFirst;
var checkValidAyahId_1 = require("./checkValidAyahId");
var checkValidSurah_1 = require("./checkValidSurah");
var findAyaidBySurah_1 = require("./findAyaidBySurah");
var juzList_1 = require("./lists/juzList");
var utils_1 = require("./utils");
/**
 * Returns the Juz (part) number that the given Ayah (verse) belongs to.
 *
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number.
 * @param ayahMode - If true, the `ayah` parameter is treated as an Ayah ID instead of a Surah and Ayah number.
 * @returns The Juz (part) number that the given Ayah belongs to. Returns Positive number if aya is first ayah of juz, number is juz number
 */
function isAyahJuzFirst(surah, ayah, ayahMode) {
    if (ayahMode === void 0) { ayahMode = false; }
    var ayahId = ayahMode
        ? ((0, checkValidAyahId_1.checkValidAyahId)(ayah) && ayah)
        : ((0, checkValidSurah_1.checkValidSurah)(surah) && (0, findAyaidBySurah_1.findAyaidBySurah)(surah, ayah));
    return (0, utils_1.binarySearch)(juzList_1.JuzList, ayahId);
    // return JuzList.findIndex((x: AyahId) => x == ayahId)
}
//# sourceMappingURL=isAyahJuzFirst.js.map