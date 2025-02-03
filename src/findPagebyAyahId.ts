import { PageList } from "./lists/pageList"
import { AyahId, Page } from "./types"
import { checkValidAyahId } from "./validation"

/**
 * Returns the page number for a given ayah ID in the Quran.
 *
 * @param ayahId - A numeric identifier representing a verse (ayah) in the Quran
 * @returns The page number where the specified ayah can be found
 * @throws Will throw an error if the ayahId is invalid
 *
 * @example
 * ```ts
 * const page = findPagebyAyahId(142); // Returns the page number containing ayah 142
 * ```
 */

export function findPagebyAyahId(ayahId: AyahId): Page {
  checkValidAyahId(ayahId)

  return PageList.findIndex(x => x > ayahId) - 1 as Page
}
