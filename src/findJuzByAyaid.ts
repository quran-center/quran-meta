import { checkValidAyahId } from "./checkValidAyahId";
import { JuzList } from "./lists/juzList";
import { AyahId, Juz } from "./types";


/**
 * Finds the Juz (part) of the Quran that contains the given Ayah (verse) ID.
 *
 * @param ayaId - The ID of the Ayah (verse) to find the Juz for.
 * @returns The Juz (part) of the Quran that contains the given Ayah ID.
 */
export function findJuzByAyaid(ayaId: AyahId): Juz {
  checkValidAyahId(ayaId);

  return JuzList.findIndex(x => x > ayaId) - 1;
}
