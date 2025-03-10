import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { PageList } from "./lists/pageList"
import { AyahId, AyahNo, Page, Surah } from "./types"
import { binarySearch } from "./utils"
import { checkValidSurah } from "./validation"

/**
 * Finds the page number for the given Surah and Ayah number.
 *
 * @param surah - The Surah to find the page for.
 * @param ayah - The Ayah number to find the page for.
 * @returns The page number for the given Surah and Ayah.
 */
export function findPage(surah: Surah, ayah: AyahNo | AyahId = 1): Page {
  checkValidSurah(surah)
  const ayahId: AyahId = findAyahIdBySurah(surah, ayah as AyahNo)

  // return PageList.findIndex(x => x > ayahId) - 1 as Page
  const jj = binarySearch(PageList, ayahId)
  const page = jj < 0 ? -jj - 2 : jj
  return page as Page
}
