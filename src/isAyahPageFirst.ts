import { PageList } from "./lists/pageList"
import { AyahId, Page } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId } from "./validation"

/**
 * Determines if the given ayah is the first ayah of a juz.
 *
 * @param surah - The surah number.
 * @param ayah - The ayah number.
 * @param ayahMode - Optional flag to indicate if the ayah number is already a valid ayah ID.
 * @returns The page number if the ayah is the first ayah of the page, otherwise -1.
 */
export function isAyahPageFirst(
  ayahId: AyahId
): Page | -1 {
  checkValidAyahId(ayahId)

  return binarySearch(PageList, ayahId) as Page | -1
  // return PageList.findIndex((x: AyahId) => x == ayahId)
}
