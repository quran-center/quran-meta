import { getList } from "./lists/index"
import { RiwayahsWith } from "./lists/types"
import { AyahId, Page } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId } from "./validation"

/**
 * Determines if the given ayah is the first ayah of a juz.
 *
 * @param ayahId - The ayah id .
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns The page number if the ayah is the first ayah of the page, otherwise -1.
 */
export function isAyahPageFirst(
  ayahId: AyahId,
  riwaya: RiwayahsWith<"PageList"> = "Hafs"
): Page | number {
  checkValidAyahId(ayahId)
  const PageList = getList("PageList", riwaya)
  return binarySearch(PageList, ayahId) as Page | -1
  // return PageList.findIndex((x: AyahId) => x == ayahId)
}
