"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRangeAroundAyah = exports.pageMeta = exports.prevAyah = exports.nextAyah = exports.getAyaCountinSura = exports.findAyaidBySurah = exports.findPage = exports.getSurahMeta = exports.findJuzMetaBySurah = exports.findJuzAndShift = exports.isAyahPageFirst = exports.isAyahJuzFirst = exports.findJuzHizb = exports.findJuz = exports.findJuzHizbByAyaid = exports.findJuzByAyaid = exports.findSurahByAyaid = exports.ayaStringSplitter = exports.SajdaList = exports.PageList = exports.RukuList = exports.ManzilList = exports.HizbQuarterList = exports.JuzList = exports.SuraList = exports.meta = exports.suraNamesRu = exports.suraNamesEn = void 0;
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
    0, 1, 149, 260, 386, 517, 641, 751, 900, 1042, 1201, 1328, 1479, 1649, 1803,
    2030, 2215, 2484, 2674, 2876, 3215, 3386, 3564, 3733, 4090, 4265, 4511, 4706,
    5105, 5242, 5673, 6237,
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
function binarySearch(ar, el, compare_fn) {
    if (compare_fn === void 0) { compare_fn = function (a, b) { return a - b; }; }
    var m = 0;
    var n = ar.length - 1;
    while (m <= n) {
        var k = (n + m) >> 1;
        var cmp = compare_fn(el, ar[k]);
        if (cmp > 0) {
            m = k + 1;
        }
        else if (cmp < 0) {
            n = k - 1;
        }
        else {
            return k;
        }
    }
    return -m - 1;
}
function checkValidAyahId(ayaId) {
    if (ayaId < 1 || ayaId > const_1.meta.numAyas)
        throw new RangeError("ayaid must be between 1 and " + const_1.meta.numAyas);
    return true;
}
function checkValidSurah(surah, checkOnly) {
    if (checkOnly === void 0) { checkOnly = false; }
    if (surah < 1 || surah > const_1.meta.numSuras) {
        if (checkOnly)
            return false;
        throw new RangeError("Surah must be between 1 and " + const_1.meta.numSuras);
    }
    return true;
}
/**
 *
 * @param {*} ayaId
 */
function findSurahByAyaid(ayaId) {
    checkValidAyahId(ayaId);
    var suraNum = surahList_1.SuraList.findIndex(function (x) { return x[0] >= ayaId; }) - 1;
    return suraNum < 0
        ? [114, ayaId - surahList_1.SuraList[114][0]]
        : [suraNum, ayaId - surahList_1.SuraList[suraNum][0]];
}
exports.findSurahByAyaid = findSurahByAyaid;
/**
 *
 * @param {*} ayaId
 */
function findJuzByAyaid(ayaId) {
    checkValidAyahId(ayaId);
    return JuzList.findIndex(function (x) { return x > ayaId; }) - 1;
}
exports.findJuzByAyaid = findJuzByAyaid;
/**
 *
 * @param {*} ayaId
 */
function findJuzHizbByAyaid(ayaId) {
    checkValidAyahId(ayaId);
    var juz = findJuzByAyaid(ayaId);
    var id = hizbList_1.HizbQuarterList.findIndex(function (x) { return x > ayaId; }) - 1;
    return { juz: juz, hizb: id % 8 || 8, id: id };
}
exports.findJuzHizbByAyaid = findJuzHizbByAyaid;
/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
function findJuz(surah, ayah, ayahMode) {
    if (ayah === void 0) { ayah = 1; }
    if (ayahMode === void 0) { ayahMode = false; }
    var ayahId = ayahMode
        ? ayah
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    return findJuzByAyaid(ayahId);
}
exports.findJuz = findJuz;
/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
function findJuzHizb(surah, ayah, ayahMode) {
    if (ayah === void 0) { ayah = 1; }
    if (ayahMode === void 0) { ayahMode = false; }
    var ayahId = ayahMode
        ? ayah
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    return findJuzHizbByAyaid(ayahId);
}
exports.findJuzHizb = findJuzHizb;
/**
 * Returns Positive number if aya is first ayah of juz, number is juz number
 * @param {*} surah
 * @param {*} ayah
 */
function isAyahJuzFirst(surah, ayah, ayahMode) {
    if (ayahMode === void 0) { ayahMode = false; }
    var ayahId = ayahMode
        ? (checkValidAyahId(ayah) && ayah)
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    return binarySearch(JuzList, ayahId);
    // return JuzList.findIndex((x: AyahId) => x == ayahId)
}
exports.isAyahJuzFirst = isAyahJuzFirst;
/**
 * Returns Positive number if aya is first ayah of juz, number is juz number
 * @param {*} surah
 * @param {*} ayah
 */
function isAyahPageFirst(surah, ayah, ayahMode) {
    if (ayahMode === void 0) { ayahMode = false; }
    var ayahId = ayahMode
        ? (checkValidAyahId(ayah) && ayah)
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    return binarySearch(pageList_1.PageList, ayahId);
    // return PageList.findIndex((x: AyahId) => x == ayahId)
}
exports.isAyahPageFirst = isAyahPageFirst;
/**
 *  Find juz containing ayah
 * @param surah
 * @param ayah
 * @param ayahMode
 * @returns
 */
function findJuzAndShift(surah, ayah, ayahMode) {
    if (ayahMode === void 0) { ayahMode = false; }
    var ayahId = ayahMode
        ? (checkValidAyahId(ayah) && ayah)
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    var juz = findJuzByAyaid(ayahId);
    var leftAyahId = JuzList[juz];
    if (surah < 0)
        surah = findSurahByAyaid(leftAyahId)[0];
    var surahStartAyahId = surahList_1.SuraList[surah][0];
    return {
        juz: juz,
        ayahsBetweenJuzSurah: surahStartAyahId - leftAyahId + 1,
        leftAyahId: leftAyahId,
    };
}
exports.findJuzAndShift = findJuzAndShift;
//todo explain function
/**
 * for given ayah return [starting juz, number of ayahsFrom beginning of that juz, right juz, number of ayahs in surah
 * @param {*} suraNumber
 * @param {*} ayaNumber
 * @returns [leftjuz, ayahsFromStartOfJuz, rightJuz, ayahsinSurah,leftAyahId,rightAyahId]
 */
function findJuzMetaBySurah(surah, ayah) {
    if (ayah === void 0) { ayah = 1; }
    var _a = findJuzAndShift(surah, ayah), leftjuz = _a.juz, ayahsBetweenJuzSurah = _a.ayahsBetweenJuzSurah, leftAyahId = _a.leftAyahId;
    var rightJuz = leftjuz;
    while (rightJuz < const_1.meta.numJuzs &&
        findSurahByAyaid(JuzList[rightJuz + 1])[0] == surah)
        rightJuz++;
    return {
        leftjuz: leftjuz,
        ayahsBetweenJuzSurah: ayahsBetweenJuzSurah,
        rightJuz: rightJuz,
        leftAyahId: leftAyahId,
        rightAyahId: JuzList[rightJuz + 1],
    };
}
exports.findJuzMetaBySurah = findJuzMetaBySurah;
/**
 * Get Surah meta
 * @param surah
 */
function getSurahMeta(surah) {
    checkValidSurah(surah);
    return surahList_1.SuraList[surah];
}
exports.getSurahMeta = getSurahMeta;
/**
 *
 * @param {*} suraNumber
 * @param {*} ayaNumber
 */
function findPage(surah, ayah, ayahMode) {
    if (ayahMode === void 0) { ayahMode = false; }
    var ayahId = ayahMode
        ? (checkValidAyahId(ayah) && ayah)
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    return pageList_1.PageList.findIndex(function (x) { return x > ayahId; }) - 1;
}
exports.findPage = findPage;
/**
 *
 * @param {*} surah
 * @param {*} ayah```
 */
function findAyaidBySurah(surah, ayah) {
    var startAyahId = getSurahMeta(surah)[0];
    return startAyahId + ayah;
}
exports.findAyaidBySurah = findAyaidBySurah;
/**
 *
 * @param {*} surah
 */
function getAyaCountinSura(surah) {
    return getSurahMeta(surah)[1];
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
    checkValidSurah(surah);
    var ayaid = findAyaidBySurah(surah, ayah);
    return findSurahByAyaid(ayaid == 1 ? const_1.meta.numAyas : ayaid - 1);
}
exports.prevAyah = prevAyah;
/**
 * Get the meta, first and last ayahs of the page
 * @param {*} pageNum
 */
function pageMeta(pageNum) {
    // todo rename to getPageMeta in next major version
    if (pageNum < 1 || pageNum > const_1.meta.numPages)
        throw new RangeError("pagenum must be between 1 and " + const_1.meta.numPages);
    var _a = [
        pageList_1.PageList[pageNum],
        pageList_1.PageList[pageNum + 1],
    ], curPage = _a[0], nextPage = _a[1];
    return {
        pageNum: pageNum,
        first: findSurahByAyaid(curPage),
        last: __spreadArray([], findSurahByAyaid(nextPage - 1)),
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
function findRangeAroundAyah(surah, ayah, mode, ayahMode) {
    if (ayahMode === void 0) { ayahMode = false; }
    var ayahId = ayahMode
        ? ayah
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    switch (mode) {
        case "juz": {
            var juz = findJuzByAyaid(ayahId);
            return [JuzList[juz], JuzList[juz + 1] - 1];
        }
        case "surah": {
            return [findAyaidBySurah(surah, 1), findAyaidBySurah(surah + 1, 1) - 1];
        }
        case "ayah": {
            return [ayahId, ayahId];
        }
        case "page": {
            var page = findPage(-1, ayahId, true);
            return [pageList_1.PageList[page], pageList_1.PageList[page + 1] - 1];
        }
        case "all":
        default:
            return [1, const_1.meta.numAyas];
    }
}
exports.findRangeAroundAyah = findRangeAroundAyah;
//# sourceMappingURL=index.js.map