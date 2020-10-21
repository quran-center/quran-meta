// Quran Meta
import meta from "./const";
//export default QuranMeta;
//------------------ Sura Data ---------------------
import SuraList from "./surahList";
//------------------ Juz Data ---------------------
const JuzList = [
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
//------------------ Hizb Data ---------------------
import HizbQuarterList from "./hizbList";
//------------------ Manzil Data ---------------------
const ManzilList = [0, 1, 670, 1365, 2030, 2933, 3789, 4631, 6237];
//------------------ Ruku Data ---------------------
// export Ruku  from "~/js/qdata-ruku.json"
import RukuList from "./rukuList";
//------------------ Page Data ---------------------
// code to get starting pages for surahs
// let res=[];
// Page.reduce((s,c,p)=>{
// 	while (c[0]>=s)
// 		{res.push([s,c[0],s==c[0]?p:p-1]);s+=1;}
// 	return s
// },0)
import PageList from "./pageList";
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
import ayaStringSplitter from "./ayaStringSplitter";
export { meta, SuraList, JuzList, HizbQuarterList, ManzilList, RukuList, PageList, SajdaList, ayaStringSplitter, };
/**
 *
 * @param {*} ayaId
 */
export function findJuzByAyaid(ayaId) {
    if (ayaId < 1 || ayaId > meta.numAyas)
        throw new RangeError("ayaid must be between 1 and " + meta.numAyas);
    let l = 1;
    while (JuzList[l + 1] <= ayaId) {
        l++;
    }
    return l;
}
/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
export function findJuz(surah, ayah = 1) {
    const a = findAyaidBySurah(surah, ayah);
    return findJuzByAyaid(a);
}
/**
 * Returns Positive number if aya is first ayah of juz, number is juz number
 * @param {*} surah
 * @param {*} ayah
 */
export function isAyahJuzFirst(surah, ayah) {
    if (surah < 1 || surah > meta.numSuras)
        throw new RangeError("Surah must be between 1 and " + meta.numSuras);
    const a = findAyaidBySurah(surah, ayah);
    return JuzList.findIndex((x) => x == a);
}
//todo explain function
/**
 * for given ayah return [starting juz, number of ayahsFrom beginning of that juz, right juz, number of ayahs in surah
 * @param {*} suraNumber
 * @param {*} ayaNumber
 * @returns [leftjuz, ayahsFromStartOfJuz, rightJuz, ayahsinSurah]
 */
export function findJuzMetaBySurah(surah, ayah = 1) {
    if (surah < 1 || surah > meta.numSuras)
        throw new RangeError("Surah must be between 1 and " + meta.numSuras);
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
    const ayahsFromStartOfJuz = SuraList[surah][0] - JuzList[l];
    // console.log(Sura[suraNumber + 1][0], Sura[Juz[l][0]][0])
    return [l, ayahsFromStartOfJuz + 1, r, getAyaCountinSura(surah)];
}
/**
 *
 * @param {*} suraNumber
 * @param {*} ayaNumber
 */
export function findPage(surah, ayah) {
    if (surah < 1 || surah > meta.numSuras)
        throw new RangeError("Surah must be between 1 and " + meta.numSuras);
    const a = findAyaidBySurah(surah, ayah);
    return PageList.findIndex(x => x > a) - 1;
}
/**
 *
 * @param {*} ayaId
 */
export function findSurahByAyaid(ayaId) {
    if (ayaId < 1 || ayaId > meta.numAyas)
        throw new RangeError("ayaid must be between 1 and " + meta.numAyas);
    const suraNum = SuraList.slice(1).findIndex(x => x[0] >= ayaId);
    return suraNum < 0
        ? [114, ayaId - SuraList[114][0]]
        : [suraNum, ayaId - SuraList[suraNum][0]];
}
/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
export function findAyaidBySurah(surah, ayah) {
    if (surah < 1 || surah > meta.numSuras)
        throw new RangeError("Surah must be between 1 and " + meta.numSuras);
    const curSurahMeta = SuraList[surah];
    return curSurahMeta[0] + ayah;
}
/**
 *
 * @param {*} surah
 */
export function getAyaCountinSura(surah) {
    if (surah < 1 || surah > meta.numSuras)
        throw new RangeError("Surah must be between 1 and " + meta.numSuras);
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
    if (surah < 1 || surah > meta.numSuras)
        throw new RangeError("Surah must be between 1 and " + meta.numSuras);
    const ayaid = findAyaidBySurah(surah, ayah);
    return findSurahByAyaid(ayaid == 1 ? meta.numAyas : ayaid - 1);
}
/**
 * Get the meta, first and last ayahs of the page
 * @param {*} pageNum
 */
export function pageMeta(pageNum) {
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
export function findRangeAroundAyah(surah, ayah, mode) {
    if (surah < 1 || surah > meta.numSuras)
        throw new RangeError("Surah must be between 1 and " + meta.numSuras);
    switch (mode) {
        case "juz": {
            const juz = findJuz(surah, ayah);
            return [JuzList[juz], JuzList[juz + 1] - 1];
        }
        case "surah": {
            return [findAyaidBySurah(surah, 1), findAyaidBySurah(surah + 1, 1) - 1];
        }
        case "ayah": {
            const ayahId = findAyaidBySurah(surah, ayah);
            return [ayahId, ayahId];
        }
        case "page": {
            const page = findPage(surah, ayah);
            return [PageList[page], PageList[page + 1] - 1];
        }
        case "all":
        default:
            return [1, meta.numAyas];
    }
}
//# sourceMappingURL=index.js.map