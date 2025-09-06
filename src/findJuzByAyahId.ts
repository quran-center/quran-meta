import { getList } from "./lists/index"
import { RiwayahsWith } from "./lists/types"
import { AyahId, Juz } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Juz (part) of the Quran that contains the given Ayah (verse) ID.
 *
 * @param ayahId - The ID of the Ayah (verse) to find the Juz for.
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns The Juz (part) of the Quran that contains the given Ayah ID.
 */
export function findJuzByAyahId(ayahId: AyahId,riwaya:RiwayahsWith<"JuzList">): Juz {
  const JuzList = getList("JuzList",riwaya)
  checkValidAyahId(ayahId)

  // const juz = JuzList.findIndex(x => x > ayahId) - 1
  const jj = binarySearch(JuzList, ayahId)
  const juz = jj < 0 ? -jj - 2 : jj
  return juz as Juz
}
