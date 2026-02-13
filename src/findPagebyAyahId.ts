import type { RiwayaData } from "./lists/types"
import type { AyahId, Page } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId } from "./validation"

/**
 * Returns the page number for a given ayah ID in the Quran.
 *
 * @param ayahId - A numeric identifier representing a verse (ayah) in the Quran
 * @param data - The Lists object for the riwaya.
 * @returns The page number where the specified ayah can be found
 * @throws Will throw an error if the ayahId is invalid
 *
 * @example
 * ```ts
 * const page = findPagebyAyahId(142, HafsLists); // Returns the page number containing ayah 142
 * ```
 */

export function findPagebyAyahId(ayahId: AyahId, data: RiwayaData): Page {
  checkValidAyahId(ayahId, data.meta)
  const { PageList } = data
  // Return PageList.findIndex(x => x > ayahId) - 1 as Page
  const jj = binarySearch(PageList, ayahId)
  const page = jj < 0 ? -jj - 2 : jj
  return page as Page
}
