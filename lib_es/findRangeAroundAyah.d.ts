import { AyahNo, Surah, SurahAyah } from "./types";
/**
 * Finds a range of ayahs around a given ayah based on the specified mode.
 *
 * @param surah - The surah number (1-114)
 * @param ayah - The ayah number within the surah, or the absolute ayah ID if ayahMode is true
 * @param mode - The range mode: "juz", "surah", "ayah", "page", or "all"
 * @param ayahMode - If true, treats the ayah parameter as an absolute ayah ID
 * @returns A tuple containing the start and end ayah IDs of the range
 */
export declare function findRangeAroundAyah(surah: Surah, ayah: AyahNo, mode: "juz" | "surah" | "ayah" | "page" | "all", ayahMode?: boolean): SurahAyah;
