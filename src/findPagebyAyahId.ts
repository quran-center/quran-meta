import { getList } from "./lists/index"
import { RiwayahsWith } from "./lists/types"
import { AyahId, Page } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId } from "./validation"

/**
 * Returns the page number for a given ayah ID in the Quran.
 *
 * @param ayahId - A numeric identifier representing a verse (ayah) in the Quran
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns The page number where the specified ayah can be found
 * @throws Will throw an error if the ayahId is invalid
 *
 * @example
 * ```ts
 * const page = findPagebyAyahId(142); // Returns the page number containing ayah 142
 * ```
 */

export function findPagebyAyahId(ayahId: AyahId,riwaya?:RiwayahsWith<"PageList">): Page {
  checkValidAyahId(ayahId)
 const PageList = getList("PageList",riwaya)
  // return PageList.findIndex(x => x > ayahId) - 1 as Page
  const jj = binarySearch(PageList, ayahId)
  const page = jj < 0 ? -jj - 2 : jj
  return page as Page
}
