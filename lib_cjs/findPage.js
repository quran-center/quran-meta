"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPage = findPage;
var checkValidAyahId_1 = require("./checkValidAyahId");
var checkValidSurah_1 = require("./checkValidSurah");
var findAyaidBySurah_1 = require("./findAyaidBySurah");
var pageList_1 = require("./lists/pageList");
/**
 * Finds the page number for the given Surah and Ayah number.
 *
 * @param surah - The Surah to find the page for.
 * @param ayah - The Ayah number to find the page for.
 * @param ayahMode - If true, the `ayah` parameter is treated as an AyahId instead of an AyahNo.
 * @returns The page number for the given Surah and Ayah.
 */
function findPage(surah, ayah, ayahMode) {
    if (ayahMode === void 0) { ayahMode = false; }
    var ayahId = ayahMode
        ? ((0, checkValidAyahId_1.checkValidAyahId)(ayah) && ayah)
        : ((0, checkValidSurah_1.checkValidSurah)(surah) && (0, findAyaidBySurah_1.findAyaidBySurah)(surah, ayah));
    return pageList_1.PageList.findIndex(function (x) { return x > ayahId; }) - 1;
}
//# sourceMappingURL=findPage.js.map