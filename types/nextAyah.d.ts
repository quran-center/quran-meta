import { AyahNo, Surah, SurahAyah } from "./types";
/**
 * Get the next ayah for the given surah and ayah number.
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @returns The surah and ayah number of the next ayah.
 */
export declare function nextAyah(surah: Surah, ayah: AyahNo): SurahAyah;
