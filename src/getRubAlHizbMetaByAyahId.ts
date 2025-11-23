import { findRubAlHizbByAyahId } from "./findRubAlHizbByAyahId"
import { getRubAlHizbMeta } from "./getRubAlHizbMeta"
import type { AyahId, RubAlHizbMeta } from "./types"
import { checkValidAyahId } from "./validation"
import type { RiwayaData } from "./lists/types"
/**
 * Finds the Juz, Hizb, and Rub-el-Hizb id for the given Ayah ID.
 *
 * @param ayahId - The Ayah ID to find the Juz, Hizb, and Hizb ID for.
 * @param data - The Lists object containing HizbQuarterList.
 * @returns An object containing the Juz, Hizb, and Hizb ID for the given Ayah ID.
 */
export function getRubAlHizbMetaByAyahId(
  ayahId: AyahId,
  data: RiwayaData
): RubAlHizbMeta {
  checkValidAyahId(ayahId, data.meta)
  const quarterIndex = findRubAlHizbByAyahId(ayahId, data)
  return getRubAlHizbMeta(quarterIndex, data)
}
