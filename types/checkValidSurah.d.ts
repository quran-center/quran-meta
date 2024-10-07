import { Surah } from "./types";
/**
 * Checks if the given Surah (chapter) number is valid.
 *
 * @param surah - The Surah (chapter) number to check.
 * @param checkOnly - If true, the function will only check the validity and not throw an error.
 * @returns True if the Surah number is valid, false otherwise.
 */
export declare function checkValidSurah(surah: Surah, checkOnly?: boolean): boolean;
