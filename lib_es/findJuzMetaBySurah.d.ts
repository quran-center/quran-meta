import { AyahNo, JuzMeta, Surah } from "./types";
/**
 * Finds the JuzMeta for a given Surah and Ayah.
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number.
 * @returns The JuzMeta object containing the left juz, ayahs between juz and surah, right juz, left ayah ID, and right ayah ID.
 */
export declare function findJuzMetaBySurah(surah: Surah, ayah?: AyahNo): JuzMeta;
