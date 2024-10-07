import { AyahNo, Juz, Surah } from "./types";
/**
 * Returns the Juz (part) number that the given Ayah (verse) belongs to.
 *
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number.
 * @param ayahMode - If true, the `ayah` parameter is treated as an Ayah ID instead of a Surah and Ayah number.
 * @returns The Juz (part) number that the given Ayah belongs to. Returns Positive number if aya is first ayah of juz, number is juz number
 */
export declare function isAyahJuzFirst(surah: Surah, ayah: AyahNo, ayahMode?: boolean): Juz;
