import { HizbQuarterList } from "./lists/hizbList"
import { AyahId, Juz } from "./types"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Maqra/Rub-al-Hizb  of the Quran that contains the given Ayah (verse) ID.
 *
 * @param ayaId - The ID of the Ayah (verse) to find the Juz for.
 * @returns The Maqra of the Quran that contains the given Ayah ID.
 */
export function findMaqraByAyaid(ayaId: AyahId): Juz {
  checkValidAyahId(ayaId)

  return HizbQuarterList.findIndex(x => x > ayaId) - 1
}
