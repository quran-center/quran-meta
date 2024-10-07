"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findJuz = findJuz;
var checkValidSurahAyah_1 = require("./checkValidSurahAyah");
var findAyaidBySurah_1 = require("./findAyaidBySurah");
var findJuzByAyaid_1 = require("./findJuzByAyaid");
/**
 * Finds the Juz (part) of the Quran that the given Ayah (verse) belongs to.
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number. Defaults to 1 if not provided.
 * @param ayahMode - If true, the `ayah` parameter is treated as an Ayah ID instead of a Surah and Ayah number.
 * @returns The Juz (part) number that the given Ayah belongs to.
 */
function findJuz(surah, ayah, ayahMode) {
    if (ayah === void 0) { ayah = 1; }
    if (ayahMode === void 0) { ayahMode = false; }
    var ayahId = ayahMode
        ? ayah
        : ((0, checkValidSurahAyah_1.checkValidSurahAyah)(surah, ayah) && (0, findAyaidBySurah_1.findAyaidBySurah)(surah, ayah));
    return (0, findJuzByAyaid_1.findJuzByAyaid)(ayahId);
}
//# sourceMappingURL=findJuz.js.map