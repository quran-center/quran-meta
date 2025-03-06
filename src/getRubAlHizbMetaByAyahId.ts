import { findRubAlHizbByAyahId } from "./findRubAlHizbByAyahId"
import { getRubAlHizbMeta } from "./getRubAlHizbMeta"
import { AyahId, RubAlHizbMeta } from "./types"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Juz, Hizb, and Rub-el-Hizb id for the given Ayah ID.
 *
 * @param ayahId - The Ayah ID to find the Juz, Hizb, and Hizb ID for.
 * @returns An object containing the Juz, Hizb, and Hizb ID for the given Ayah ID.
 */
export function getRubAlHizbMetaByAyahId(ayahId: AyahId): RubAlHizbMeta {
  checkValidAyahId(ayahId)

  const quarterIndex = findRubAlHizbByAyahId(ayahId)
  return getRubAlHizbMeta(quarterIndex)
}
