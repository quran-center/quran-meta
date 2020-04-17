import meta from "./const";
import SuraList from "./surahList";
declare const JuzList: number[];
import HizbQuarterList from "./hizbList";
declare const ManzilList: number[];
import RukuList from "./rukuList";
import PageList from "./pageList";
declare const SajdaList: [number, string][];
import ayaStringSplitter from "./ayaStringSplitter";
export { meta, SuraList, JuzList, HizbQuarterList, ManzilList, RukuList, PageList, SajdaList, ayaStringSplitter, };
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
export declare function findJuz(surah: number, ayah?: number): number;
/**
 * Returns Positive number if aya is first ayah of juz, number is juz number
 * @param {*} surah
 * @param {*} ayah
 */
export declare function isAyahJuzFirst(surah: number, ayah: number): number;
/**
 * for given ayah return [starting juz, number of ayahsFrom beginning of that juz, right juz, number of ayahs in surah
 * @param {*} suraNumber
 * @param {*} ayaNumber
 * @returns [leftjuz,ayahsFromStartOfJuz,rightJuz, ayahsinSurah]
 */
export declare function findJuzMetaBySurah(surah: number, ayah?: number): any[];
/**
 *
 * @param {*} suraNumber
 * @param {*} ayaNumber
 */
export declare function findPage(surah: number, ayah: number): number;
/**
 *
 * @param {*} ayaId
 */
export declare function findSurahByAyaid(ayaId: number): [number, number];
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
/**
 * Find range containing ayah according to the mode
 * @param {*} ayahId
 * @param {*} mode can be either 'all', 'juz', 'surah', 'ayah', 'page'
 * default is all
 */
export declare function findRangeAroundAyah(surah: number, ayah: number, mode: string): number[];
