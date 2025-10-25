import { findRubAlHizbByAyahId } from "./findRubAlHizbByAyahId"
import { getRubAlHizb } from "./getRubAlHizb"
import { RiwayahsWith } from "./lists/types";
import { AyahId, RubAlHizb } from "./types"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Juz, Hizb, and Rub-el-Hizb id for the given Ayah ID.
 *
 * @param ayahId - The Ayah ID to find the Juz, Hizb, and Hizb ID for.
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns An object containing the Juz, Hizb, and Hizb ID for the given Ayah ID.
 */
export function getRubAlHizbByAyahId(ayahId: AyahId,riwaya?:RiwayahsWith<"HizbQuarterList">): RubAlHizb {
  checkValidAyahId(ayahId)

  const quarterIndex = findRubAlHizbByAyahId(ayahId,riwaya)
  return getRubAlHizb(quarterIndex)
}
