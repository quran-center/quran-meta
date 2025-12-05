import type { RiwayaData } from "./lists/types"
import type { AyahId, Page } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId } from "./validation"

/**
 * Determines if the given ayah is the first ayah of a juz.
 *
 * @param ayahId - The ayah id .
 * @param data - The Lists object for the riwaya.
 * @returns The page number if the ayah is the first ayah of the page, otherwise -1.
 */
export function isAyahPageFirst(ayahId: AyahId, data: RiwayaData): Page | number {
  checkValidAyahId(ayahId, data.meta)
  const PageList = data.PageList
  return binarySearch(PageList, ayahId)
  // return PageList.findIndex((x: AyahId) => x == ayahId)
}
