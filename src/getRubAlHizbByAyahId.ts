import { findRubAlHizbByAyahId } from "./findRubAlHizbByAyahId"
import { getRubAlHizb } from "./getRubAlHizb"
import { AyahId, RubAlHizb } from "./types"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Juz, Hizb, and Rub-el-Hizb id for the given Ayah ID.
 *
 * @param ayahId - The Ayah ID to find the Juz, Hizb, and Hizb ID for.
 * @returns An object containing the Juz, Hizb, and Hizb ID for the given Ayah ID.
 */
export function getRubAlHizbByAyahId(ayahId: AyahId): RubAlHizb {
  checkValidAyahId(ayahId)

  const quarterIndex = findRubAlHizbByAyahId(ayahId)
  return getRubAlHizb(quarterIndex)
}
