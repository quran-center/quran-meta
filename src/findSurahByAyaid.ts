import { SurahList } from "./lists/surahList"
import { AyahId, Surah, SurahAyah } from "./types"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Surah (chapter) and Ayah (verse) numbers that the given Ayah ID belongs to.
 *
 * @param ayaId - The Ayah ID to find the Surah and Ayah numbers for.
 * @returns An array containing the Surah number and the Ayah number within that Surah.
 */
export function findSurahByAyaid(ayaId: AyahId): SurahAyah {
  checkValidAyahId(ayaId)

  const suraNum: Surah = SurahList.findIndex(x => x[0] >= ayaId) - 1
  return [suraNum, ayaId - SurahList[suraNum][0]]
}
