import { AyahNo, Juz, Surah } from "./types";
/**
 * Determines if the given ayah is the first ayah of a juz.
 *
 * @param surah - The surah number.
 * @param ayah - The ayah number.
 * @param ayahMode - Optional flag to indicate if the ayah number is already a valid ayah ID.
 * @returns The juz number if the ayah is the first ayah of the juz, otherwise -1.
 */
export declare function isAyahPageFirst(surah: Surah, ayah: AyahNo, ayahMode?: boolean): Juz;
