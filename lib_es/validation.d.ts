/**
 * Checks if the given Surah (chapter) number is valid.
 *
 * @param surah - The Surah (chapter) number to check.
 * @param checkOnly - If true, the function will only check the validity and not throw an error.
 * @returns True if the Surah number is valid, false otherwise.
 */
export declare function checkValidSurah(surah: number, checkOnly?: boolean): boolean;
/**
 * Checks if the given Surah and Ayah (verse) numbers are valid.
 *
 * @param surah - The Surah (chapter) number to check.
 * @param ayah - The Ayah (verse) number to check.
 * @param checkOnly - If true, the function will only check the validity and not throw an error.
 * @returns True if the Surah and Ayah numbers are valid, false otherwise.
 */
export declare function checkValidSurahAyah(surah: number, ayah: number, checkOnly?: boolean): boolean;
/**
 * Checks if the given Ayah (verse) ID is valid.
 *
 * @param ayahId - The Ayah (verse) ID to check.
 * @param checkOnly - If true, the function will only check the validity and not throw an error.
 * @returns True if the Ayah ID is valid, otherwise throws a RangeError.
 */
export declare function checkValidAyahId(ayahId: number, checkOnly?: boolean): boolean;
