import { AyahNo, Page, Surah } from "./types";
/**
 * Finds the page number for the given Surah and Ayah number.
 *
 * @param surah - The Surah to find the page for.
 * @param ayah - The Ayah number to find the page for.
 * @param ayahMode - If true, the `ayah` parameter is treated as an AyahId instead of an AyahNo.
 * @returns The page number for the given Surah and Ayah.
 */
export declare function findPage(surah: Surah, ayah: AyahNo, ayahMode?: boolean): Page;
