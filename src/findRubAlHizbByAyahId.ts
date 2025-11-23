import type { RiwayaData } from "./lists/types"
import type { AyahId, RubAlHizbId } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Maqra/Rub-al-Hizb  of the Quran that contains the given Ayah (verse) ID.
 *
 * @param ayahId - The ID of the Ayah (verse) to find the Juz for.
 * @param lists - The Lists object for the riwaya.
 * @returns The Maqra of the Quran that contains the given Ayah ID.
 */
export function findRubAlHizbByAyahId(
  ayahId: AyahId,
  data: RiwayaData
): RubAlHizbId {
  checkValidAyahId(ayahId, data.meta)
  const HizbQuarterList = data.HizbQuarterList
  // return HizbQuarterList.findIndex(x => x > ayahId) - 1 as RubAlHizbId
  const jj = binarySearch(HizbQuarterList, ayahId)
  const page = jj < 0 ? -jj - 2 : jj
  return page as RubAlHizbId
}
