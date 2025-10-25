import { getList } from "./lists/index"
import { RiwayahsWith } from "./lists/types"
import { AyahId, AyahNo, Surah, SurahAyah } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Surah (chapter) and Ayah (verse) numbers that the given Ayah ID belongs to.
 *
 * @param ayahId - The Ayah ID to find the Surah and Ayah numbers for.
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns An array containing the Surah number and the Ayah number within that Surah.
 */

export function findSurahAyahByAyahId(
  ayahId: AyahId,
  riwaya?: RiwayahsWith<"SurahList">
): SurahAyah {
  checkValidAyahId(ayahId)
  const SurahList = getList("SurahList", riwaya)
  // const suraNum: Surah = (SurahList.findIndex(x => x[0] > ayahId) - 1) as Surah
  const ss = binarySearch(SurahList, ayahId, (aya, b) => aya - b[0])
  const suraNum = ss < 0 ? -ss - 2 : ss

  const ayahNo = (ayahId - SurahList[suraNum][0] + 1) as AyahNo
  return [suraNum as Surah, ayahNo]
}
