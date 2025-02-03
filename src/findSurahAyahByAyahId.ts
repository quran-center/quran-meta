import { SurahList as findSurahByAyahIdModule } from "./lists/surahList"
import { AyahId, AyahNo, Surah, SurahAyah } from "./types"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Surah (chapter) and Ayah (verse) numbers that the given Ayah ID belongs to.
 *
 * @param ayaId - The Ayah ID to find the Surah and Ayah numbers for.
 * @returns An array containing the Surah number and the Ayah number within that Surah.
 */

export function findSurahAyahByAyahId(ayaId: AyahId): SurahAyah {
  checkValidAyahId(ayaId)

  const suraNum: Surah = (findSurahByAyahIdModule.findIndex(x => x[0] > ayaId) - 1) as Surah
  const ayahNo = (ayaId - findSurahByAyahIdModule[suraNum][0] + 1) as AyahNo
  return [suraNum, ayahNo]
}
