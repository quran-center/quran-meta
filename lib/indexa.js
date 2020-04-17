/*! 
 * Quran Meta library 1.0.11
 *
 * Released under the MIT license
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// Quran Meta
var const_1 = tslib_1.__importDefault(require("./const"));
exports.meta = const_1.default;
//export default QuranMeta;
//------------------ Sura Data ---------------------
var surahList_1 = tslib_1.__importDefault(require("./surahList"));
exports.SuraList = surahList_1.default;
//------------------ Juz Data ---------------------
var JuzList = [
    0,
    1,
    149,
    260,
    386,
    517,
    641,
    751,
    900,
    1042,
    1201,
    1328,
    1479,
    1649,
    1803,
    2030,
    2215,
    2484,
    2674,
    2876,
    3215,
    3386,
    3564,
    3733,
    4090,
    4265,
    4511,
    4706,
    5105,
    5242,
    5673,
    6237,
];
exports.JuzList = JuzList;
//------------------ Hizb Data ---------------------
var hizbList_1 = tslib_1.__importDefault(require("./hizbList"));
exports.HizbQuarterList = hizbList_1.default;
//------------------ Manzil Data ---------------------
var ManzilList = [0, 1, 670, 1365, 2030, 2933, 3789, 4631, 6237];
exports.ManzilList = ManzilList;
//------------------ Ruku Data ---------------------
// export Ruku  from "~/js/qdata-ruku.json"
var rukuList_1 = tslib_1.__importDefault(require("./rukuList"));
exports.RukuList = rukuList_1.default;
//------------------ Page Data ---------------------
// code to get starting pages for surahs
// let res=[];
// Page.reduce((s,c,p)=>{
// 	while (c[0]>=s)
// 		{res.push([s,c[0],s==c[0]?p:p-1]);s+=1;}
// 	return s
// },0)
var pageList_1 = tslib_1.__importDefault(require("./pageList"));
exports.PageList = pageList_1.default;
// export Page from "~/js/qdata-page.json"
//------------------ Sajda Data ---------------------
var SajdaList = [
    // [ayaId, type]
    [1160, "recommended"],
    [1722, "recommended"],
    [1951, "recommended"],
    [2138, "recommended"],
    [2308, "recommended"],
    [2613, "recommended"],
    [2672, "recommended"],
    [2915, "recommended"],
    [3185, "recommended"],
    [3518, "obligatory"],
    [3994, "recommended"],
    [4256, "obligatory"],
    [4846, "obligatory"],
    [5905, "recommended"],
    [6125, "obligatory"],
];
exports.SajdaList = SajdaList;
//export default QuranMeta;
var ayaStringSplitter_1 = tslib_1.__importDefault(require("./ayaStringSplitter"));
exports.ayaStringSplitter = ayaStringSplitter_1.default;
/**
 *
 * @param {*} ayaId
 */
function findJuzByAyaid(ayaId) {
    if (ayaId < 1 || ayaId > const_1.default.numAyas)
        throw new RangeError("ayaid must be between 1 and " + const_1.default.numAyas);
    var l = 1;
    while (JuzList[l + 1] <= ayaId) {
        l++;
    }
    return l;
}
exports.findJuzByAyaid = findJuzByAyaid;
/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
function findJuz(surah, ayah) {
    if (ayah === void 0) { ayah = 1; }
    var a = findAyaidBySurah(surah, ayah);
    return findJuzByAyaid(a);
}
exports.findJuz = findJuz;
/**
 * Returns Positive number if aya is first ayah of juz, number is juz number
 * @param {*} surah
 * @param {*} ayah
 */
function isAyahJuzFirst(surah, ayah) {
    if (surah < 1 || surah > const_1.default.numSuras)
        throw new RangeError("Surah must be between 1 and " + const_1.default.numSuras);
    var a = findAyaidBySurah(surah, ayah);
    return JuzList.findIndex(function (x) { return x == a; });
}
exports.isAyahJuzFirst = isAyahJuzFirst;
//todo explain function
/**
 * for given ayah return [starting juz, number of ayahsFrom beginning of that juz, right juz, number of ayahs in surah
 * @param {*} suraNumber
 * @param {*} ayaNumber
 * @returns [leftjuz,ayahsFromStartOfJuz,rightJuz, ayahsinSurah]
 */
function findJuzMetaBySurah(surah, ayah) {
    if (ayah === void 0) { ayah = 1; }
    if (surah < 1 || surah > const_1.default.numSuras)
        throw new RangeError("Surah must be between 1 and " + const_1.default.numSuras);
    var l = findJuz(surah, ayah);
    var r = l;
    while (r < const_1.default.numJuzs && findSurahByAyaid(JuzList[r + 1])[0] == surah)
        r++;
    // console.log(l,r,
    //   "sura at start of file ",Juz[l][0],
    //   Sura[Juz[l][0]][0],
    //   Sura[suraNumber][0],
    //   Juz[l][1]
    // )
    var sl = findSurahByAyaid(JuzList[l]);
    var ayahsFromStartOfJuz = surahList_1.default[surah][0] - JuzList[l];
    // console.log(Sura[suraNumber + 1][0], Sura[Juz[l][0]][0])
    return [l, ayahsFromStartOfJuz + 1, r, getAyaCountinSura(surah)];
}
exports.findJuzMetaBySurah = findJuzMetaBySurah;
/**
 *
 * @param {*} suraNumber
 * @param {*} ayaNumber
 */
function findPage(surah, ayah) {
    if (surah < 1 || surah > const_1.default.numSuras)
        throw new RangeError("Surah must be between 1 and " + const_1.default.numSuras);
    var a = findAyaidBySurah(surah, ayah);
    return pageList_1.default.findIndex(function (x) { return x > a; }) - 1;
}
exports.findPage = findPage;
/**
 *
 * @param {*} ayaId
 */
function findSurahByAyaid(ayaId) {
    if (ayaId < 1 || ayaId > const_1.default.numAyas)
        throw new RangeError("ayaid must be between 1 and " + const_1.default.numAyas);
    var suraNum = surahList_1.default.slice(1).findIndex(function (x) { return x[0] >= ayaId; });
    return suraNum < 0
        ? [114, ayaId - surahList_1.default[114][0]]
        : [suraNum, ayaId - surahList_1.default[suraNum][0]];
}
exports.findSurahByAyaid = findSurahByAyaid;
/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
function findAyaidBySurah(surah, ayah) {
    if (surah < 1 || surah > const_1.default.numSuras)
        throw new RangeError("Surah must be between 1 and " + const_1.default.numSuras);
    var curSurahMeta = surahList_1.default[surah];
    return curSurahMeta[0] + ayah;
}
exports.findAyaidBySurah = findAyaidBySurah;
/**
 *
 * @param {*} surah
 */
function getAyaCountinSura(surah) {
    if (surah < 1 || surah > const_1.default.numSuras)
        throw new RangeError("Surah must be between 1 and " + const_1.default.numSuras);
    return surahList_1.default[surah][1];
}
exports.getAyaCountinSura = getAyaCountinSura;
/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
function nextAyah(surah, ayah) {
    if (surah < 1 || surah > const_1.default.numSuras)
        throw new RangeError("Surah must be between 1 and " + const_1.default.numSuras);
    var ayaid = findAyaidBySurah(surah, ayah);
    return findSurahByAyaid(ayaid == const_1.default.numAyas ? 1 : ayaid + 1);
}
exports.nextAyah = nextAyah;
/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
function prevAyah(surah, ayah) {
    if (surah < 1 || surah > const_1.default.numSuras)
        throw new RangeError("Surah must be between 1 and " + const_1.default.numSuras);
    var ayaid = findAyaidBySurah(surah, ayah);
    return findSurahByAyaid(ayaid == 1 ? const_1.default.numAyas : ayaid - 1);
}
exports.prevAyah = prevAyah;
/**
 * Get the meta, first and last ayahs of the page
 * @param {*} pageNum
 */
function pageMeta(pageNum) {
    if (pageNum < 1 || pageNum > const_1.default.numPages)
        throw new RangeError("pagenum must be between 1 and " + const_1.default.numPages);
    var _a = [pageList_1.default[pageNum], pageList_1.default[pageNum + 1]], curPage = _a[0], nextPage = _a[1];
    return {
        pageNum: pageNum,
        first: findSurahByAyaid(curPage),
        last: tslib_1.__spreadArrays(findSurahByAyaid(nextPage - 1)),
    };
}
exports.pageMeta = pageMeta;
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
 * @param {*} ayahId
 * @param {*} mode can be either 'all', 'juz', 'surah', 'ayah', 'page'
 * default is all
 */
function findRangeAroundAyah(surah, ayah, mode) {
    if (surah < 1 || surah > const_1.default.numSuras)
        throw new RangeError("Surah must be between 1 and " + const_1.default.numSuras);
    switch (mode) {
        case "juz": {
            var juz = findJuz(surah, ayah);
            return [JuzList[juz], JuzList[juz + 1] - 1];
        }
        case "surah": {
            return [findAyaidBySurah(surah, 1), findAyaidBySurah(surah + 1, 1) - 1];
        }
        case "ayah": {
            var ayahId = findAyaidBySurah(surah, ayah);
            return [ayahId, ayahId];
        }
        case "page": {
            var page = findPage(surah, ayah);
            return [pageList_1.default[page], pageList_1.default[page + 1] - 1];
        }
        case "all":
        default:
            return [1, const_1.default.numAyas];
    }
}
exports.findRangeAroundAyah = findRangeAroundAyah;
