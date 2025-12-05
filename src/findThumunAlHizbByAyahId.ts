import type { RiwayahsWith } from "./lists/types"
import type { AyahId, ThumunAlHizbId } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Maqra/Rub-al-Hizb  of the Quran that contains the given Ayah (verse) ID.
 *
 * @param ayahId - The ID of the Ayah (verse) to find the Juz for.
 * @param data - The Lists object for the riwaya.
 * @returns The thumun of the Quran that contains the given Ayah ID.
 */
export function findThumunAlHizbByAyahId(ayahId: AyahId, data: RiwayahsWith<"HizbEighthList">): ThumunAlHizbId {
  checkValidAyahId(ayahId, data.meta)
  const HizbEighthList = data.HizbEighthList
  if (!HizbEighthList) {
    throw new Error(`Riwaya ${data.meta.riwayaName} does not have Hizb Eighth List data.`)
  }
  // return HizbQuarterList.findIndex(x => x > ayahId) - 1 as RubAlHizbId
  const jj = binarySearch(HizbEighthList, ayahId)
  const thumun = jj < 0 ? -jj - 2 : jj
  return thumun as ThumunAlHizbId
}
