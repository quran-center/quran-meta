import type { RiwayaData } from "./lists/types"
import type { AyahId, Juz } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId } from "./validation"

/**
 * Returns the Juz (part) number that the given Ayah (verse) belongs to.
 *
 *
 * @param ayahId - The Ayah Id (verse) number.
 * @param data - The Lists object for the riwaya.
 * @returns The Juz (part) number that the given Ayah belongs to. Returns Positive number if ayah is first ayah of juz, number is juz number
 */
export function isAyahJuzFirst(ayahId: AyahId, data: RiwayaData): Juz | number {
  const { JuzList, meta } = data
  checkValidAyahId(ayahId, meta)
  return binarySearch(JuzList, ayahId)
  // Return JuzList.findIndex((x: AyahId) => x == ayahId)
}
