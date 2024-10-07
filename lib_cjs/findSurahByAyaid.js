"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSurahByAyaid = findSurahByAyaid;
var checkValidAyahId_1 = require("./checkValidAyahId");
var surahList_1 = require("./lists/surahList");
/**
 * Finds the Surah (chapter) and Ayah (verse) numbers that the given Ayah ID belongs to.
 *
 * @param ayaId - The Ayah ID to find the Surah and Ayah numbers for.
 * @returns An array containing the Surah number and the Ayah number within that Surah.
 */
function findSurahByAyaid(ayaId) {
    (0, checkValidAyahId_1.checkValidAyahId)(ayaId);
    var suraNum = surahList_1.SuraList.findIndex(function (x) { return x[0] >= ayaId; }) - 1;
    return [suraNum, ayaId - surahList_1.SuraList[suraNum][0]];
}
//# sourceMappingURL=findSurahByAyaid.js.map