"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findJuzHizb = findJuzHizb;
var checkValidSurah_1 = require("./checkValidSurah");
var findAyaidBySurah_1 = require("./findAyaidBySurah");
var findJuzHizbByAyaid_1 = require("./findJuzHizbByAyaid");
/**
 * Finds the Juz (part) and Hizb (section) of the Quran that the given Ayah (verse) belongs to.
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number. Defaults to 1 if not provided.
 * @param ayahMode - If true, the `ayah` parameter is treated as an Ayah ID instead of a Surah and Ayah number.
 * @returns An object containing the Juz (part) number, Hizb (section) number, and the index of the Hizb that the given Ayah belongs to.
 */
function findJuzHizb(surah, ayah, ayahMode) {
    if (ayah === void 0) { ayah = 1; }
    if (ayahMode === void 0) { ayahMode = false; }
    var ayahId = ayahMode
        ? ayah
        : ((0, checkValidSurah_1.checkValidSurah)(surah) && (0, findAyaidBySurah_1.findAyaidBySurah)(surah, ayah));
    return (0, findJuzHizbByAyaid_1.findJuzHizbByAyaid)(ayahId);
}
//# sourceMappingURL=findJuzHizb.js.map