import { AyahNo, Surah } from "./types";
/**
 * Checks if the given Surah and Ayah (verse) numbers are valid.
 *
 * @param surah - The Surah (chapter) number to check.
 * @param ayah - The Ayah (verse) number to check.
 * @param checkOnly - If true, the function will only check the validity and not throw an error.
 * @returns True if the Surah and Ayah numbers are valid, false otherwise.
 */
export declare function checkValidSurahAyah(surah: Surah, ayah: AyahNo, checkOnly?: boolean): boolean;
