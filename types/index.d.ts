import { meta } from "./const";
import { AyahId, AyahNo, Page, Juz, SurahAyah, PageMeta, JuzMeta, JuzHizb, SurahMeta, Sajda, Surah } from "./types";
export { AyahId, AyahNo, Page, Juz, SurahAyah, PageMeta, JuzMeta, SurahMeta, Sajda, Surah, };
export { suraNames as suraNamesEn } from "./i18n/sura.en";
export { suraNames as suraNamesRu } from "./i18n/sura.ru";
import { SuraList } from "./surahList";
declare const JuzList: AyahId[];
import { HizbQuarterList } from "./hizbList";
declare const ManzilList: AyahId[];
import { RukuList } from "./rukuList";
import { PageList } from "./pageList";
declare const SajdaList: Sajda[];
import { ayaStringSplitter } from "./ayaStringSplitter";
export { meta, SuraList, JuzList, HizbQuarterList, ManzilList, RukuList, PageList, SajdaList, ayaStringSplitter, };
/**
 *
 * @param {*} ayaId
 */
export declare function findSurahByAyaid(ayaId: AyahId): SurahAyah;
/**
 *
 * @param {*} ayaId
 */
export declare function findJuzByAyaid(ayaId: AyahId): Juz;
/**
 *
 * @param {*} ayaId
 */
export declare function findJuzHizbByAyaid(ayaId: AyahId): JuzHizb;
/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
export declare function findJuz(surah: Surah, ayah?: AyahNo, ayahMode?: boolean): Juz;
/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
export declare function findJuzHizb(surah: Surah, ayah?: AyahNo, ayahMode?: boolean): JuzHizb;
/**
 * Returns Positive number if aya is first ayah of juz, number is juz number
 * @param {*} surah
 * @param {*} ayah
 */
export declare function isAyahJuzFirst(surah: Surah, ayah: AyahNo, ayahMode?: boolean): Juz;
/**
 * Returns Positive number if aya is first ayah of juz, number is juz number
 * @param {*} surah
 * @param {*} ayah
 */
export declare function isAyahPageFirst(surah: Surah, ayah: AyahNo, ayahMode?: boolean): Juz;
/**
 *  Find juz containing ayah
 * @param surah
 * @param ayah
 * @param ayahMode
 * @returns
 */
export declare function findJuzAndShift(surah: Surah, ayah: AyahNo, ayahMode?: boolean): {
    juz: Juz;
    leftAyahId: AyahId;
    ayahsBetweenJuzSurah: number;
};
/**
 * for given ayah return [starting juz, number of ayahsFrom beginning of that juz, right juz, number of ayahs in surah
 * @param {*} suraNumber
 * @param {*} ayaNumber
 * @returns [leftjuz, ayahsFromStartOfJuz, rightJuz, ayahsinSurah,leftAyahId,rightAyahId]
 */
export declare function findJuzMetaBySurah(surah: Surah, ayah?: AyahNo): JuzMeta;
/**
 * Get Surah meta
 * @param surah
 */
export declare function getSurahMeta(surah: Surah): SurahMeta;
/**
 *
 * @param {*} suraNumber
 * @param {*} ayaNumber
 */
export declare function findPage(surah: Surah, ayah: AyahNo, ayahMode?: boolean): Page;
/**
 *
 * @param {*} surah
 * @param {*} ayah```
 */
export declare function findAyaidBySurah(surah: Surah, ayah: AyahNo): AyahId;
/**
 *
 * @param {*} surah
 */
export declare function getAyaCountinSura(surah: Surah): number;
/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
export declare function nextAyah(surah: Surah, ayah: AyahNo): SurahAyah;
/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
export declare function prevAyah(surah: Surah, ayah: AyahNo): SurahAyah;
/**
 * Get the meta, first and last ayahs of the page
 * @param {*} pageNum
 */
export declare function pageMeta(pageNum: Page): PageMeta;
/**
 * ALternative deprecated method
 * @param {*} pageNum
 */
/**
 * Find range containing ayah according to the mode
 * @param surah
 * @param ayah
 * @param {*} mode can be either 'all', 'juz', 'surah', 'ayah', 'page'
 * default is all
 */
export declare function findRangeAroundAyah(surah: Surah, ayah: AyahNo, mode: "juz" | "surah" | "ayah" | "page" | "all", ayahMode?: boolean): SurahAyah;
