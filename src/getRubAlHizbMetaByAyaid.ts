import { findRubAlHizbByAyaid } from "./findRubAlHizbByAyaid"
import { getRubAlHizbMeta } from "./getRubAlHizbMeta"
import { AyahId, JuzHizb } from "./types"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Juz, Hizb, and Rub-el-Hizb id for the given Ayah ID.
 *
 * @param ayaId - The Ayah ID to find the Juz, Hizb, and Hizb ID for.
 * @returns An object containing the Juz, Hizb, and Hizb ID for the given Ayah ID.
 */
export function getRubAlHizbMetaByAyaid(ayaId: AyahId): JuzHizb {
  checkValidAyahId(ayaId)

  const quarterIndex = findRubAlHizbByAyaid(ayaId)
  return getRubAlHizbMeta(quarterIndex)
}
