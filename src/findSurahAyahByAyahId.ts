import type { RiwayaData } from "./lists/types"
import type { AyahId, AyahNo, Surah, SurahAyah } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Surah (chapter) and Ayah (verse) numbers that the given Ayah ID belongs to.
 *
 * @param ayahId - The Ayah ID to find the Surah and Ayah numbers for.
 * @param lists - The Lists object containing SurahList.
 * @returns An array containing the Surah number and the Ayah number within that Surah.
 */

export function findSurahAyahByAyahId(ayahId: AyahId, data: RiwayaData): SurahAyah {
  checkValidAyahId(ayahId, data.meta)
  const { SurahList } = data
  // Const suraNum: Surah = (SurahList.findIndex(x => x[0] > ayahId) - 1) as Surah
  const ss = binarySearch(SurahList, ayahId, (aya, b) => aya - b[0])
  const suraNum = ss < 0 ? -ss - 2 : ss

  const ayahNo = (ayahId - SurahList[suraNum][0] + 1) as AyahNo
  return [suraNum as Surah, ayahNo]
}
