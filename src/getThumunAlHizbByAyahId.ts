import { findThumunAlHizbByAyahId } from "./findThumunAlHizbByAyahId"
import { getThumunAlHizb } from "./getThumunAlHizb"
import type { RiwayahsWith } from "./lists/types"
import type { AyahId, ThumunAlHizb } from "./types"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Juz, Hizb, Rub-el-Hizb id and thuumun-el-Hizb id for the given Ayah ID.
 *
 * @param ayahId - The Ayah ID to find the Juz, Hizb, and Hizb ID for.
 * @param data - The riwaya. Defaults to "Qalun" if not provided.
 * @returns An object containing the Juz, Hizb, Hizb ID and thuumun-el-Hizb id for the given Ayah ID.
 */
export function getThumunAlHizbByAyahId(ayahId: AyahId, data: RiwayahsWith<"HizbEighthList"> = "Qalun"): ThumunAlHizb {
  checkValidAyahId(ayahId, data.meta)

  const eighthIndex = findThumunAlHizbByAyahId(ayahId, data)
  return getThumunAlHizb(eighthIndex)
}
