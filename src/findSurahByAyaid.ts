import { checkValidAyahId } from "./checkValidAyahId";
import { SuraList } from "./lists/surahList";
import { AyahId, Surah, SurahAyah } from "./types";

/**
 * Finds the Surah (chapter) and Ayah (verse) numbers that the given Ayah ID belongs to.
 *
 * @param ayaId - The Ayah ID to find the Surah and Ayah numbers for.
 * @returns An array containing the Surah number and the Ayah number within that Surah.
 */
export function findSurahByAyaid(ayaId: AyahId): SurahAyah {
  checkValidAyahId(ayaId);

  const suraNum: Surah = SuraList.findIndex(x => x[0] >= ayaId) - 1;
  return [suraNum, ayaId - SuraList[suraNum][0]];
}
