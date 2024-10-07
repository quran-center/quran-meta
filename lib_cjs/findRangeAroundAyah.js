"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRangeAroundAyah = findRangeAroundAyah;
var checkValidSurah_1 = require("./checkValidSurah");
var const_1 = require("./const");
var findAyaidBySurah_1 = require("./findAyaidBySurah");
var findJuzByAyaid_1 = require("./findJuzByAyaid");
var findPage_1 = require("./findPage");
var juzList_1 = require("./lists/juzList");
var pageList_1 = require("./lists/pageList");
var surahList_1 = require("./lists/surahList");
/**
 * ALternative deprecated method
 * @param {*} pageNum
 */
// export function pageMetaOld(pageNum: number): any {
//   if (pageNum < 1 || pageNum > meta.numPages)
//   throw new RangeError("pagenum must be between 1 and " + meta.numPages)
//   const [curPage, nextPage] = [
//     findSurahByAyaid(PageList[pageNum]),
//     findSurahByAyaid(PageList[pageNum + 1]),
//   ]
//   const [firstSurah, firstAyah, lastSurah, lastAyah] = [
//     curPage[0],
//     curPage[1],
//     nextPage[1] === 1 ? nextPage[0] - 1 : nextPage[0],
//     nextPage[1] === 1 ? SuraList[nextPage[0] - 1][1] : nextPage[1] - 1,
//   ]
//   return {
//     pageNum,
//     first: [firstSurah, firstAyah],
//     last: [lastSurah, lastAyah],
//   }
// }
/**
 * Find range containing ayah according to the mode
 * @param surah
 * @param ayah
 * @param {*} mode can be either 'all', 'juz', 'surah', 'ayah', 'page'
 * default is all
 */
function findRangeAroundAyah(surah, ayah, mode, ayahMode) {
    if (ayahMode === void 0) { ayahMode = false; }
    var ayahId = ayahMode
        ? ayah
        : ((0, checkValidSurah_1.checkValidSurah)(surah) && (0, findAyaidBySurah_1.findAyaidBySurah)(surah, ayah));
    switch (mode) {
        case "juz": {
            var juz = (0, findJuzByAyaid_1.findJuzByAyaid)(ayahId);
            return [juzList_1.JuzList[juz], juzList_1.JuzList[juz + 1] - 1];
        }
        case "surah": {
            return [surahList_1.SuraList[surah][0] + 1, surahList_1.SuraList[surah + 1][0]];
        }
        case "ayah": {
            return [ayahId, ayahId];
        }
        case "page": {
            var page = (0, findPage_1.findPage)(-1, ayahId, true);
            return [pageList_1.PageList[page], pageList_1.PageList[page + 1] - 1];
        }
        case "all":
        default:
            return [1, const_1.meta.numAyas];
    }
}
//# sourceMappingURL=findRangeAroundAyah.js.map