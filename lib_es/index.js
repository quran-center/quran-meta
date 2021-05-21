// Quran Meta
import { meta } from "./const";
//export default QuranMeta;
//------------------ Sura Data ---------------------
export { suraNames as suraNamesEn } from "./i18n/sura.en";
export { suraNames as suraNamesRu } from "./i18n/sura.ru";
import { SuraList } from "./surahList";
//------------------ Juz Data ---------------------
const JuzList = [
    0, 1, 149, 260, 386, 517, 641, 751, 900, 1042, 1201, 1328, 1479, 1649, 1803,
    2030, 2215, 2484, 2674, 2876, 3215, 3386, 3564, 3733, 4090, 4265, 4511, 4706,
    5105, 5242, 5673, 6237,
];
//------------------ Hizb Data ---------------------
import { HizbQuarterList } from "./hizbList";
//------------------ Manzil Data ---------------------
const ManzilList = [0, 1, 670, 1365, 2030, 2933, 3789, 4631, 6237];
//------------------ Ruku Data ---------------------
// export Ruku  from "~/js/qdata-ruku.json"
import { RukuList } from "./rukuList";
//------------------ Page Data ---------------------
// code to get starting pages for surahs
// let res=[];
// Page.reduce((s,c,p)=>{
// 	while (c[0]>=s)
// 		{res.push([s,c[0],s==c[0]?p:p-1]);s+=1;}
// 	return s
// },0)
import { PageList } from "./pageList";
// export Page from "~/js/qdata-page.json"
//------------------ Sajda Data ---------------------
const SajdaList = [
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
//export default QuranMeta;
import { ayaStringSplitter } from "./ayaStringSplitter";
export { meta, SuraList, JuzList, HizbQuarterList, ManzilList, RukuList, PageList, SajdaList, ayaStringSplitter, };
function binarySearch(ar, el, compare_fn = (a, b) => a - b) {
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
    if (ayaId < 1 || ayaId > meta.numAyas)
        throw new RangeError("ayaid must be between 1 and " + meta.numAyas);
    return true;
}
function checkValidSurah(surah, checkOnly = false) {
    if (surah < 1 || surah > meta.numSuras) {
        if (checkOnly)
            return false;
        throw new RangeError("Surah must be between 1 and " + meta.numSuras);
    }
    return true;
}
/**
 *
 * @param {*} ayaId
 */
export function findSurahByAyaid(ayaId) {
    checkValidAyahId(ayaId);
    const suraNum = SuraList.findIndex(x => x[0] >= ayaId) - 1;
    return suraNum < 0
        ? [114, ayaId - SuraList[114][0]]
        : [suraNum, ayaId - SuraList[suraNum][0]];
}
/**
 *
 * @param {*} ayaId
 */
export function findJuzByAyaid(ayaId) {
    checkValidAyahId(ayaId);
    return JuzList.findIndex(x => x > ayaId) - 1;
}
/**
 *
 * @param {*} ayaId
 */
export function findJuzHizbByAyaid(ayaId) {
    checkValidAyahId(ayaId);
    let juz = findJuzByAyaid(ayaId);
    const id = HizbQuarterList.findIndex(x => x > ayaId) - 1;
    return { juz, hizb: id % 8 || 8, id };
}
/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
export function findJuz(surah, ayah = 1, ayahMode = false) {
    const ayahId = ayahMode
        ? ayah
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    return findJuzByAyaid(ayahId);
}
/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
export function findJuzHizb(surah, ayah = 1, ayahMode = false) {
    const ayahId = ayahMode
        ? ayah
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    return findJuzHizbByAyaid(ayahId);
}
/**
 * Returns Positive number if aya is first ayah of juz, number is juz number
 * @param {*} surah
 * @param {*} ayah
 */
export function isAyahJuzFirst(surah, ayah, ayahMode = false) {
    const ayahId = ayahMode
        ? (checkValidAyahId(ayah) && ayah)
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    return binarySearch(JuzList, ayahId);
    // return JuzList.findIndex((x: AyahId) => x == ayahId)
}
/**
 * Returns Positive number if aya is first ayah of juz, number is juz number
 * @param {*} surah
 * @param {*} ayah
 */
export function isAyahPageFirst(surah, ayah, ayahMode = false) {
    const ayahId = ayahMode
        ? (checkValidAyahId(ayah) && ayah)
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    return binarySearch(PageList, ayahId);
    // return PageList.findIndex((x: AyahId) => x == ayahId)
}
//todo explain function
/**
 * for given ayah return [starting juz, number of ayahsFrom beginning of that juz, right juz, number of ayahs in surah
 * @param {*} suraNumber
 * @param {*} ayaNumber
 * @returns [leftjuz, ayahsFromStartOfJuz, rightJuz, ayahsinSurah]
 */
export function findJuzMetaBySurah(surah, ayah = 1) {
    checkValidSurah(surah);
    const l = findJuz(surah, ayah);
    let r = l;
    while (r < meta.numJuzs && findSurahByAyaid(JuzList[r + 1])[0] == surah)
        r++;
    // console.log(l,r,
    //   "sura at start of file ",Juz[l][0],
    //   Sura[Juz[l][0]][0],
    //   Sura[suraNumber][0],
    //   Juz[l][1]
    // )
    // let sl: SurahAyah = findSurahByAyaid(JuzList[l])
    const leftAyahId = JuzList[l];
    const ayahsFromStartOfJuz = SuraList[surah][0] - leftAyahId;
    // console.log(Sura[suraNumber + 1][0], Sura[Juz[l][0]][0])
    return [
        l,
        ayahsFromStartOfJuz + 1,
        r,
        getAyaCountinSura(surah),
        leftAyahId,
        JuzList[r + 1],
    ];
}
/**
 * Get Surah meta
 * @param surah
 */
export function getSurahMeta(surah) {
    checkValidSurah(surah);
    return SuraList[surah];
}
/**
 *
 * @param {*} suraNumber
 * @param {*} ayaNumber
 */
export function findPage(surah, ayah, ayahMode = false) {
    const ayahId = ayahMode
        ? (checkValidAyahId(ayah) && ayah)
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    return PageList.findIndex(x => x > ayahId) - 1;
}
/**
 *
 * @param {*} surah
 * @param {*} ayah```
 */
export function findAyaidBySurah(surah, ayah) {
    checkValidSurah(surah);
    const [startAyahId] = SuraList[surah];
    return startAyahId + ayah;
}
/**
 *
 * @param {*} surah
 */
export function getAyaCountinSura(surah) {
    checkValidSurah(surah);
    return SuraList[surah][1];
}
/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
export function nextAyah(surah, ayah) {
    if (surah < 1 || surah > meta.numSuras)
        throw new RangeError("Surah must be between 1 and " + meta.numSuras);
    const ayaid = findAyaidBySurah(surah, ayah);
    return findSurahByAyaid(ayaid == meta.numAyas ? 1 : ayaid + 1);
}
/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
export function prevAyah(surah, ayah) {
    checkValidSurah(surah);
    const ayaid = findAyaidBySurah(surah, ayah);
    return findSurahByAyaid(ayaid == 1 ? meta.numAyas : ayaid - 1);
}
/**
 * Get the meta, first and last ayahs of the page
 * @param {*} pageNum
 */
export function pageMeta(pageNum) {
    // todo rename to getPageMeta in next major version
    if (pageNum < 1 || pageNum > meta.numPages)
        throw new RangeError("pagenum must be between 1 and " + meta.numPages);
    const [curPage, nextPage] = [
        PageList[pageNum],
        PageList[pageNum + 1],
    ];
    return {
        pageNum,
        first: findSurahByAyaid(curPage),
        last: [...findSurahByAyaid(nextPage - 1)],
    };
}
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
            return [findAyaidBySurah(surah, 1), findAyaidBySurah(surah + 1, 1) - 1];
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
//# sourceMappingURL=index.js.map