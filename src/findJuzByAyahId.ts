import type { RiwayaData } from "./lists/types"
import type { AyahId, Juz } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Juz (part) of the Quran that contains the given Ayah (verse) ID.
 *
 * @param ayahId - The ID of the Ayah (verse) to find the Juz for.
 * @param data - The Lists object containing JuzList.
 * @returns The Juz (part) of the Quran that contains the given Ayah ID.
 */
export function findJuzByAyahId(ayahId: AyahId, data: RiwayaData): Juz {
  checkValidAyahId(ayahId, data.meta)

  // Const juz = lists.JuzList.findIndex(x => x > ayahId) - 1
  const jj = binarySearch(data.JuzList, ayahId)
  const juz = jj < 0 ? -jj - 2 : jj
  return juz as Juz
}
