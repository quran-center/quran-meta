import { PageList } from "./lists/pageList"
import { AyahId, Page } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId } from "./validation"

/**
 * Determines if the given ayah is the first ayah of a juz.
 *
 * @param ayahId - The ayah id .
 * @returns The page number if the ayah is the first ayah of the page, otherwise -1.
 */
export function isAyahPageFirst(
  ayahId: AyahId
): Page | -1 {
  checkValidAyahId(ayahId)

  return binarySearch(PageList, ayahId) as Page | -1
  // return PageList.findIndex((x: AyahId) => x == ayahId)
}
