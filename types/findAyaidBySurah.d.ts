import { AyahId, AyahNo, Surah } from "./types";
/**
 * Get the ayah ID for the given surah and ayah number.
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @returns The ayah ID for the given surah and ayah number.
 */
export declare function findAyaidBySurah(surah: Surah, ayah: AyahNo): AyahId;
