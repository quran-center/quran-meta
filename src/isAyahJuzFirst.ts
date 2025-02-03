import { JuzList } from "./lists/juzList"
import { AyahId, Juz } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId } from "./validation"

/**
 * Returns the Juz (part) number that the given Ayah (verse) belongs to.
 *
 *
 * @param ayahId - The Ayah Id (verse) number.
 * @returns The Juz (part) number that the given Ayah belongs to. Returns Positive number if ayah is first ayah of juz, number is juz number
 */
export function isAyahJuzFirst(
  ayahId: AyahId
): Juz | number {
  checkValidAyahId(ayahId)

  return binarySearch(JuzList, ayahId) as Juz | -1
  // return JuzList.findIndex((x: AyahId) => x == ayahId)
}
