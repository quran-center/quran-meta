"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findJuzAndShift = findJuzAndShift;
var checkValidAyahId_1 = require("./checkValidAyahId");
var checkValidSurah_1 = require("./checkValidSurah");
var findAyaidBySurah_1 = require("./findAyaidBySurah");
var findJuzByAyaid_1 = require("./findJuzByAyaid");
var findSurahByAyaid_1 = require("./findSurahByAyaid");
var juzList_1 = require("./lists/juzList");
var surahList_1 = require("./lists/surahList");
/**
 * Finds the juz (section) that contains the specified ayah (verse) and calculates the number of ayahs between the start of the juz and the start of the surah (chapter) that contains the ayah.
 *
 * @param surah - The surah (chapter) that contains the ayah.
 * @param ayah - The ayah (verse) number.
 * @param ayahMode - A boolean flag indicating whether the `ayah` parameter represents an ayah number or an ayah ID.
 * @returns An object containing the following properties:
 *   - `juz`: The juz (section) that contains the ayah.
 *   - `leftAyahId`: The ayah ID of the first ayah in the juz.
 *   - `ayahsBetweenJuzSurah`: The number of ayahs between the start of the juz and the start of the surah (positive if the surah starts is in the juz, negative if the surah starts before the juz).
 */
function findJuzAndShift(surah, ayah, ayahMode) {
    if (ayahMode === void 0) { ayahMode = false; }
    var ayahId = ayahMode
        ? ((0, checkValidAyahId_1.checkValidAyahId)(ayah) && ayah)
        : ((0, checkValidSurah_1.checkValidSurah)(surah) && (0, findAyaidBySurah_1.findAyaidBySurah)(surah, ayah));
    var juz = (0, findJuzByAyaid_1.findJuzByAyaid)(ayahId);
    var leftAyahId = juzList_1.JuzList[juz];
    if (ayahMode)
        surah = (0, findSurahByAyaid_1.findSurahByAyaid)(ayahId)[0];
    var surahStartAyahId = surahList_1.SuraList[surah][0];
    return {
        juz: juz,
        ayahsBetweenJuzSurah: surahStartAyahId - leftAyahId + 1,
        leftAyahId: leftAyahId
    };
}
//# sourceMappingURL=findJuzAndShift.js.map