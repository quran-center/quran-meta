import { findJuzByAyaid } from "./findJuzByAyaid"
import { HizbQuarterList } from "./lists/hizbList"
import { AyahId, JuzHizb } from "./types"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Juz, Hizb, and Hizb ID for the given Ayah ID.
 *
 * @param ayaId - The Ayah ID to find the Juz, Hizb, and Hizb ID for.
 * @returns An object containing the Juz, Hizb, and Hizb ID for the given Ayah ID.
 */
export function findJuzHizbByAyaid(ayaId: AyahId): JuzHizb {
  checkValidAyahId(ayaId)

  const juz = findJuzByAyaid(ayaId)
  const quarterIndex = HizbQuarterList.findIndex(x => x > ayaId) - 1

  const hizb = quarterIndex % 8 || 8
  return { juz, hizb, id: quarterIndex }
}
