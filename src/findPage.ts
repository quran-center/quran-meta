import { checkValidAyahId } from "./checkValidAyahId";
import { checkValidSurah } from "./checkValidSurah";
import { findAyaidBySurah } from "./findAyaidBySurah";
import { PageList } from "./lists/pageList";
import { AyahId, AyahNo, Page, Surah } from "./types";


/**
 * Finds the page number for the given Surah and Ayah number.
 *
 * @param surah - The Surah to find the page for.
 * @param ayah - The Ayah number to find the page for.
 * @param ayahMode - If true, the `ayah` parameter is treated as an AyahId instead of an AyahNo.
 * @returns The page number for the given Surah and Ayah.
 */
export function findPage(surah: Surah, ayah: AyahNo, ayahMode = false): Page {
  const ayahId: AyahId = ayahMode
    ? ((checkValidAyahId(ayah) && ayah) as AyahId)
    : ((checkValidSurah(surah) && findAyaidBySurah(surah, ayah)) as AyahId);

  return PageList.findIndex(x => x > ayahId) - 1;
}
