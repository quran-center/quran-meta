"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAyahPageFirst = isAyahPageFirst;
var checkValidAyahId_1 = require("./checkValidAyahId");
var checkValidSurah_1 = require("./checkValidSurah");
var findAyaidBySurah_1 = require("./findAyaidBySurah");
var pageList_1 = require("./lists/pageList");
var utils_1 = require("./utils");
/**
 * Determines if the given ayah is the first ayah of a juz.
 *
 * @param surah - The surah number.
 * @param ayah - The ayah number.
 * @param ayahMode - Optional flag to indicate if the ayah number is already a valid ayah ID.
 * @returns The juz number if the ayah is the first ayah of the juz, otherwise -1.
 */
function isAyahPageFirst(surah, ayah, ayahMode) {
    if (ayahMode === void 0) { ayahMode = false; }
    var ayahId = ayahMode
        ? ((0, checkValidAyahId_1.checkValidAyahId)(ayah) && ayah)
        : ((0, checkValidSurah_1.checkValidSurah)(surah) && (0, findAyaidBySurah_1.findAyaidBySurah)(surah, ayah));
    return (0, utils_1.binarySearch)(pageList_1.PageList, ayahId);
    // return PageList.findIndex((x: AyahId) => x == ayahId)
}
//# sourceMappingURL=isAyahPageFirst.js.map