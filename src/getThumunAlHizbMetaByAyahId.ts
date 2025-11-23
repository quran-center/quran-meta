import { findThumunAlHizbByAyahId } from "./findThumunAlHizbByAyahId"
import { getThumunAlHizbMeta } from "./getThumunAlHizbMeta"
import type { AyahId, ThumunAlHizbMeta } from "./types"
import { checkValidAyahId } from "./validation"
import type { RiwayahsWith } from "./lists/types"
/**
 * Finds the Juz, Hizb, and Rub-el-Hizb id for the given Ayah ID.
 *
 * @param ayahId - The Ayah ID to find the Juz, Hizb, and Hizb ID for.
 * @param riwaya - The riwaya. Defaults to "Qalun" if not provided.
 * @returns An object containing the Juz, Hizb, thumunAlHizb ID, and Hizb ID for the given Ayah ID.
 */
export function getThumunAlHizbMetaByAyahId(
  ayahId: AyahId,
  data: RiwayahsWith<"HizbEighthList">
): ThumunAlHizbMeta {
  checkValidAyahId(ayahId, data.meta)
  const eighthIndex = findThumunAlHizbByAyahId(ayahId, data)
  return getThumunAlHizbMeta(eighthIndex, data)
}
