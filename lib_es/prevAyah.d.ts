import { AyahNo, Surah, SurahAyah } from "./types";
/**
 * Get the previous ayah for the given surah and ayah number.
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @returns The surah and ayah number of the previous ayah.
 */
export declare function prevAyah(surah: Surah, ayah: AyahNo): SurahAyah;
