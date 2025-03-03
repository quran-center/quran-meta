import { HizbQuarterList } from "./lists/hizbQuarterList"
import { AyahId, RubAlHizbId } from "./types"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Maqra/Rub-al-Hizb  of the Quran that contains the given Ayah (verse) ID.
 *
 * @param ayahId - The ID of the Ayah (verse) to find the Juz for.
 * @returns The Maqra of the Quran that contains the given Ayah ID.
 */
export function findRubAlHizbByAyahId(ayahId: AyahId): RubAlHizbId {
  checkValidAyahId(ayahId)

  return HizbQuarterList.findIndex(x => x > ayahId) - 1 as RubAlHizbId
}
