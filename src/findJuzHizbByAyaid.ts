import { findMaqraByAyaid } from "./findMaqraByAyaid"
import { getMaqraMeta } from "./getMaqraMeta"
import { AyahId, JuzHizb } from "./types"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Juz, Hizb, and Rub-el-Hizb id for the given Ayah ID.
 *
 * @param ayaId - The Ayah ID to find the Juz, Hizb, and Hizb ID for.
 * @returns An object containing the Juz, Hizb, and Hizb ID for the given Ayah ID.
 */
export function findJuzHizbByAyaid(ayaId: AyahId): JuzHizb {
  checkValidAyahId(ayaId)

  const quarterIndex = findMaqraByAyaid(ayaId)
  return getMaqraMeta(quarterIndex)
}
