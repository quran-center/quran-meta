import { AyahNo, Juz, Surah } from "./types";
/**
 * Finds the Juz (part) of the Quran that the given Ayah (verse) belongs to.
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number. Defaults to 1 if not provided.
 * @param ayahMode - If true, the `ayah` parameter is treated as an Ayah ID instead of a Surah and Ayah number.
 * @returns The Juz (part) number that the given Ayah belongs to.
 */
export declare function findJuz(surah: Surah, ayah?: AyahNo, ayahMode?: boolean): Juz;
