import { AyahNo, Surah, SurahAyah } from "./types";
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
