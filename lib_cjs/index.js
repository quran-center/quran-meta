"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRangeAroundAyah = exports.pageMeta = exports.prevAyah = exports.nextAyah = exports.getAyaCountinSura = exports.findAyaidBySurah = exports.findSurahByAyaid = exports.findPage = exports.findJuzMetaBySurah = exports.isAyahJuzFirst = exports.findJuz = exports.findJuzByAyaid = exports.ayaStringSplitter = exports.SajdaList = exports.PageList = exports.RukuList = exports.ManzilList = exports.HizbQuarterList = exports.JuzList = exports.SuraList = exports.meta = exports.suraNamesRu = exports.suraNamesEn = void 0;
// Quran Meta
var const_1 = require("./const");
Object.defineProperty(exports, "meta", { enumerable: true, get: function () { return const_1.meta; } });
//export default QuranMeta;
//------------------ Sura Data ---------------------
var sura_en_1 = require("./i18n/sura.en");
Object.defineProperty(exports, "suraNamesEn", { enumerable: true, get: function () { return sura_en_1.suraNames; } });
var sura_ru_1 = require("./i18n/sura.ru");
Object.defineProperty(exports, "suraNamesRu", { enumerable: true, get: function () { return sura_ru_1.suraNames; } });
var surahList_1 = require("./surahList");
Object.defineProperty(exports, "SuraList", { enumerable: true, get: function () { return surahList_1.SuraList; } });
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
var hizbList_1 = require("./hizbList");
Object.defineProperty(exports, "HizbQuarterList", { enumerable: true, get: function () { return hizbList_1.HizbQuarterList; } });
//------------------ Manzil Data ---------------------
var ManzilList = [0, 1, 670, 1365, 2030, 2933, 3789, 4631, 6237];
exports.ManzilList = ManzilList;
//------------------ Ruku Data ---------------------
// export Ruku  from "~/js/qdata-ruku.json"
var rukuList_1 = require("./rukuList");
Object.defineProperty(exports, "RukuList", { enumerable: true, get: function () { return rukuList_1.RukuList; } });
//------------------ Page Data ---------------------
// code to get starting pages for surahs
// let res=[];
// Page.reduce((s,c,p)=>{
// 	while (c[0]>=s)
// 		{res.push([s,c[0],s==c[0]?p:p-1]);s+=1;}
// 	return s
// },0)
var pageList_1 = require("./pageList");
Object.defineProperty(exports, "PageList", { enumerable: true, get: function () { return pageList_1.PageList; } });
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
var ayaStringSplitter_1 = require("./ayaStringSplitter");
Object.defineProperty(exports, "ayaStringSplitter", { enumerable: true, get: function () { return ayaStringSplitter_1.ayaStringSplitter; } });
/**
 *
 * @param {*} ayaId
 */
function findJuzByAyaid(ayaId) {
    if (ayaId < 1 || ayaId > const_1.meta.numAyas)
        throw new RangeError("ayaid must be between 1 and " + const_1.meta.numAyas);
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
    if (surah < 1 || surah > const_1.meta.numSuras)
        throw new RangeError("Surah must be between 1 and " + const_1.meta.numSuras);
    var a = findAyaidBySurah(surah, ayah);
    return JuzList.findIndex(function (x) { return x == a; });
}
exports.isAyahJuzFirst = isAyahJuzFirst;
//todo explain function
/**
 * for given ayah return [starting juz, number of ayahsFrom beginning of that juz, right juz, number of ayahs in surah
 * @param {*} suraNumber
 * @param {*} ayaNumber
 * @returns [leftjuz, ayahsFromStartOfJuz, rightJuz, ayahsinSurah]
 */
function findJuzMetaBySurah(surah, ayah) {
    if (ayah === void 0) { ayah = 1; }
    if (surah < 1 || surah > const_1.meta.numSuras)
        throw new RangeError("Surah must be between 1 and " + const_1.meta.numSuras);
    var l = findJuz(surah, ayah);
    var r = l;
    while (r < const_1.meta.numJuzs && findSurahByAyaid(JuzList[r + 1])[0] == surah)
        r++;
    // console.log(l,r,
    //   "sura at start of file ",Juz[l][0],
    //   Sura[Juz[l][0]][0],
    //   Sura[suraNumber][0],
    //   Juz[l][1]
    // )
    // let sl: SurahAyah = findSurahByAyaid(JuzList[l])
    var ayahsFromStartOfJuz = surahList_1.SuraList[surah][0] - JuzList[l];
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
    if (surah < 1 || surah > const_1.meta.numSuras)
        throw new RangeError("Surah must be between 1 and " + const_1.meta.numSuras);
    var a = findAyaidBySurah(surah, ayah);
    return pageList_1.PageList.findIndex(function (x) { return x > a; }) - 1;
}
exports.findPage = findPage;
/**
 *
 * @param {*} ayaId
 */
function findSurahByAyaid(ayaId) {
    if (ayaId < 1 || ayaId > const_1.meta.numAyas)
        throw new RangeError("ayaid must be between 1 and " + const_1.meta.numAyas);
    var suraNum = surahList_1.SuraList.slice(1).findIndex(function (x) { return x[0] >= ayaId; });
    return suraNum < 0
        ? [114, ayaId - surahList_1.SuraList[114][0]]
        : [suraNum, ayaId - surahList_1.SuraList[suraNum][0]];
}
exports.findSurahByAyaid = findSurahByAyaid;
/**
 *
 * @param {*} surah
 * @param {*} ayah```
 */
function findAyaidBySurah(surah, ayah) {
    if (surah < 1 || surah > const_1.meta.numSuras)
        throw new RangeError("Surah must be between 1 and " + const_1.meta.numSuras);
    var startAyahId = surahList_1.SuraList[surah][0];
    return startAyahId + ayah;
}
exports.findAyaidBySurah = findAyaidBySurah;
/**
 *
 * @param {*} surah
 */
function getAyaCountinSura(surah) {
    if (surah < 1 || surah > const_1.meta.numSuras)
        throw new RangeError("Surah must be between 1 and " + const_1.meta.numSuras);
    return surahList_1.SuraList[surah][1];
}
exports.getAyaCountinSura = getAyaCountinSura;
/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
function nextAyah(surah, ayah) {
    if (surah < 1 || surah > const_1.meta.numSuras)
        throw new RangeError("Surah must be between 1 and " + const_1.meta.numSuras);
    var ayaid = findAyaidBySurah(surah, ayah);
    return findSurahByAyaid(ayaid == const_1.meta.numAyas ? 1 : ayaid + 1);
}
exports.nextAyah = nextAyah;
/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
function prevAyah(surah, ayah) {
    if (surah < 1 || surah > const_1.meta.numSuras)
        throw new RangeError("Surah must be between 1 and " + const_1.meta.numSuras);
    var ayaid = findAyaidBySurah(surah, ayah);
    return findSurahByAyaid(ayaid == 1 ? const_1.meta.numAyas : ayaid - 1);
}
exports.prevAyah = prevAyah;
/**
 * Get the meta, first and last ayahs of the page
 * @param {*} pageNum
 */
function pageMeta(pageNum) {
    if (pageNum < 1 || pageNum > const_1.meta.numPages)
        throw new RangeError("pagenum must be between 1 and " + const_1.meta.numPages);
    var _a = [
        pageList_1.PageList[pageNum],
        pageList_1.PageList[pageNum + 1],
    ], curPage = _a[0], nextPage = _a[1];
    return {
        pageNum: pageNum,
        first: findSurahByAyaid(curPage),
        last: __spreadArrays(findSurahByAyaid(nextPage - 1)),
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
 * @param surah
 * @param ayah
 * @param {*} mode can be either 'all', 'juz', 'surah', 'ayah', 'page'
 * default is all
 */
function findRangeAroundAyah(surah, ayah, mode) {
    if (surah < 1 || surah > const_1.meta.numSuras)
        throw new RangeError("Surah must be between 1 and " + const_1.meta.numSuras);
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
            return [pageList_1.PageList[page], pageList_1.PageList[page + 1] - 1];
        }
        case "all":
        default:
            return [1, const_1.meta.numAyas];
    }
}
exports.findRangeAroundAyah = findRangeAroundAyah;
//# sourceMappingURL=index.js.map