import { JuzList } from "./lists/juzList"
import { AyahId, Juz } from "./types"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Juz (part) of the Quran that contains the given Ayah (verse) ID.
 *
 * @param ayahId - The ID of the Ayah (verse) to find the Juz for.
 * @returns The Juz (part) of the Quran that contains the given Ayah ID.
 */
export function findJuzByAyahId(ayahId: AyahId): Juz {
  checkValidAyahId(ayahId)

  return JuzList.findIndex(x => x > ayahId) - 1
}
