"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ayaStringSplitter = ayaStringSplitter;
var checkValidSurahAyah_1 = require("./checkValidSurahAyah");
/**
 *  Turns String of type "x:y" or "x:y1-y2" to array [x,y] or [x,[y1,y2]] respectively
 * @param {*} str String of type "x:y" or "x:y1-y2"
 * @returns {array} array [x,y] or [x,[y1,y2]] respectively
 */
function ayaStringSplitter(str) {
    var _a = str.trim().split(":"), surahStr = _a[0], ayahsStr = _a[1];
    var surah = parseInt(surahStr, 10);
    if (isNaN(surah)) {
        throw "Error in surah format " + str;
    }
    if (!ayahsStr) {
        throw "Error in data " + str;
    }
    var ayahs;
    if (ayahsStr.includes("-")) {
        ayahs = ayahsStr.split("-").map(function (a) {
            var ayah = parseInt(a, 10);
            if (isNaN(ayah) || ayah === 0) {
                throw "Error in ayah " + a;
            }
            return ayah;
        });
        if (ayahs[0] > ayahs[1])
            throw "Error in ayah range " + str;
    }
    else {
        ayahs = parseInt(ayahsStr, 10);
        if (isNaN(ayahs) || ayahs === 0) {
            throw "Error in data " + str;
        }
        (0, checkValidSurahAyah_1.checkValidSurahAyah)(surah, ayahs);
    }
    return [surah, ayahs];
}
//# sourceMappingURL=ayaStringSplitter.js.map