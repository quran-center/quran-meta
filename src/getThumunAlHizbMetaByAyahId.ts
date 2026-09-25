import { findThumunAlHizbByAyahId } from "./findThumunAlHizbByAyahId"
import { getThumunAlHizbMeta } from "./getThumunAlHizbMeta"
import type { AyahId, ThumunAlHizbMeta } from "./types"
import { checkValidAyahId } from "./validation"
import type { RiwayahsWith } from "./lists/types"

/**
 * Returns the thumun al-hizb containing the given ayah id, with its first and last ayah.
 *
 * @param ayahId - The ayah id.
 * @param data - The Lists object of a riwaya that has thumun al-hizb data (Qalun).
 * @returns Juz, hizb, rub' al-hizb and thumun al-hizb numbers plus the range of the thumun.
 *
 * @category Hizb
 */
export function getThumunAlHizbMetaByAyahId(ayahId: AyahId, data: RiwayahsWith<"HizbEighthList">): ThumunAlHizbMeta {
  checkValidAyahId(ayahId, data.meta)
  const eighthIndex = findThumunAlHizbByAyahId(ayahId, data)
  return getThumunAlHizbMeta(eighthIndex, data)
}
