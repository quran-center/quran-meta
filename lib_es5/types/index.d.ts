import meta from "./const";
import SuraList from "./qdata-surah";
declare const JuzList: [number, number][];
import HizbQuarterList from "./qdata-hizb";
declare const ManzilList: number[][];
import RukuList from "./qdata-ruku";
import PageList from "./qdata-page";
declare const SajdaList: (string | number)[][];
import ayaStringSplitter from "./ayaStringSplitter";
export { meta, SuraList, JuzList, HizbQuarterList, ManzilList, RukuList, PageList, SajdaList, ayaStringSplitter, };
/**
 *
 * @param {*} suraNumber
 * @param {*} ayaNumber
 */
export declare function findJuz(suraNumber: number, ayaNumber?: number): number;
/**
 * Returns Positive number if aya is first ayah of juz, number is juz number
 * @param {*} ayaNumber
 * @param {*} suraNumber
 */
export declare function isAyahJuzFirst(suraNumber: number, ayaNumber: number): number;
/**
 * juz number
 * @param {*} suraNumber
 * @param {*} ayaNumber
 */
export declare function findJuzMetaBySurah(suraNumber: number, ayaNumber?: number): any[];
/**
 *
 * @param {*} suraNumber
 * @param {*} ayaNumber
 */
export declare function findPage(suraNumber: number, ayaNumber: number): number;
/**
 *
 * @param {*} ayaId
 */
export declare function findSurahByAyaid(ayaId: number): [number, number];
/**
 *
 * @param {*} ayaId
 */
export declare function findJuzByAyaid(ayaId: number): number;
/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
export declare function findAyaidBySurah(surah: number, ayah: number): number;
/**
 *
 * @param {*} surah
 */
export declare function getAyaCountinSura(surah: number): number;
/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
export declare function nextAyah(surah: number, ayah: number): number[];
/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
export declare function prevAyah(surah: number, ayah: number): number[];
/**
 * Get the meta, first and last ayahs of the page
 * @param {*} pageNum
 */
export declare function pageMeta(pageNum: number): any;
/**
 * ALternative deprecated method
 * @param {*} pageNum
 */
export declare function pageMetaOld(pageNum: number): any;
/**
 * Find range containing ayah according to the mode
 * @param {*} ayahId
 * @param {*} mode can be either 'all', 'juz', 'surah', 'ayah', 'page'
 * default is all
 */
export declare function findRangeAroundAyah(surah: number, ayah: number, mode: string): number[];
//# sourceMappingURL=index.d.ts.map