import { findRubAlHizbByAyahId } from "./findRubAlHizbByAyahId"
import { getRubAlHizb } from "./getRubAlHizb"
import type { RiwayaData } from "./lists/types"
import type { AyahId, RubAlHizb } from "./types"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Juz, Hizb, and Rub-el-Hizb id for the given Ayah ID.
 *
 * @param ayahId - The Ayah ID to find the Juz, Hizb, and Hizb ID for.
 * @param data - The Lists object for the riwaya.
 * @returns An object containing the Juz, Hizb, and Hizb ID for the given Ayah ID.
 */
export function getRubAlHizbByAyahId(ayahId: AyahId, data: RiwayaData): RubAlHizb {
  checkValidAyahId(ayahId, data.meta)

  const quarterIndex = findRubAlHizbByAyahId(ayahId, data)
  return getRubAlHizb(quarterIndex)
}
