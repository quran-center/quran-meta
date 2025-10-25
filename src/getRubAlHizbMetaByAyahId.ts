import { findRubAlHizbByAyahId } from "./findRubAlHizbByAyahId";
import { getRubAlHizbMeta } from "./getRubAlHizbMeta";
import { AyahId, RubAlHizbMeta } from "./types";
import { checkValidAyahId } from "./validation";
import { RiwayahsWith } from "./lists/types";
/**
 * Finds the Juz, Hizb, and Rub-el-Hizb id for the given Ayah ID.
 *
 * @param ayahId - The Ayah ID to find the Juz, Hizb, and Hizb ID for.
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns An object containing the Juz, Hizb, and Hizb ID for the given Ayah ID.
 */
export function getRubAlHizbMetaByAyahId(
  ayahId: AyahId,
  riwaya?: RiwayahsWith<"HizbQuarterList">
): RubAlHizbMeta {
  checkValidAyahId(ayahId);
  const quarterIndex = findRubAlHizbByAyahId(ayahId, riwaya);
  return getRubAlHizbMeta(quarterIndex);
}
