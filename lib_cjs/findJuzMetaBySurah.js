"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findJuzMetaBySurah = findJuzMetaBySurah;
var const_1 = require("./const");
var findJuzAndShift_1 = require("./findJuzAndShift");
var findSurahByAyaid_1 = require("./findSurahByAyaid");
var juzList_1 = require("./lists/juzList");
/**
 * for given ayah return [starting juz, number of ayahsFrom beginning of that juz, right juz, number of ayahs in surah
 * @param {*} suraNumber
 * @param {*} ayaNumber
 * @returns [leftjuz, ayahsFromStartOfJuz, rightJuz, ayahsinSurah,leftAyahId,rightAyahId]
 */
function findJuzMetaBySurah(surah, ayah) {
    if (ayah === void 0) { ayah = 1; }
    var _a = (0, findJuzAndShift_1.findJuzAndShift)(surah, ayah), leftjuz = _a.juz, ayahsBetweenJuzSurah = _a.ayahsBetweenJuzSurah, leftAyahId = _a.leftAyahId;
    var rightJuz = leftjuz;
    while (rightJuz < const_1.meta.numJuzs &&
        (0, findSurahByAyaid_1.findSurahByAyaid)(juzList_1.JuzList[rightJuz + 1])[0] == surah)
        rightJuz++;
    return {
        leftjuz: leftjuz,
        ayahsBetweenJuzSurah: ayahsBetweenJuzSurah,
        rightJuz: rightJuz,
        leftAyahId: leftAyahId,
        rightAyahId: juzList_1.JuzList[rightJuz + 1],
    };
}
//# sourceMappingURL=findJuzMetaBySurah.js.map