import { checkValidSurah } from "./checkValidSurah";
import { meta } from "./const";
import { findAyaidBySurah } from "./findAyaidBySurah";
import { findJuzByAyaid } from "./findJuzByAyaid";
import { findPage } from "./findPage";
import { JuzList } from "./lists/juzList";
import { PageList } from "./lists/pageList";
import { SuraList } from "./lists/surahList";
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
export function findRangeAroundAyah(surah, ayah, mode, ayahMode = false) {
    const ayahId = ayahMode
        ? ayah
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    switch (mode) {
        case "juz": {
            const juz = findJuzByAyaid(ayahId);
            return [JuzList[juz], JuzList[juz + 1] - 1];
        }
        case "surah": {
            return [SuraList[surah][0] + 1, SuraList[surah + 1][0]];
        }
        case "ayah": {
            return [ayahId, ayahId];
        }
        case "page": {
            const page = findPage(-1, ayahId, true);
            return [PageList[page], PageList[page + 1] - 1];
        }
        case "all":
        default:
            return [1, meta.numAyas];
    }
}
//# sourceMappingURL=findRangeAroundAyah.js.map