import { findThumunAlHizbByAyahId } from "./findThumunAlHizbByAyahId";
import { getThumunAlHizb } from "./getThumunAlHizb";
import { RiwayahsWith } from "./lists/types";
import { AyahId, ThumunAlHizb } from "./types"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Juz, Hizb, Rub-el-Hizb id and thuumun-el-Hizb id for the given Ayah ID.
 *
 * @param ayahId - The Ayah ID to find the Juz, Hizb, and Hizb ID for.
 * @param riwaya - The riwaya. Defaults to "Qalun" if not provided.
 * @returns An object containing the Juz, Hizb, Hizb ID and thuumun-el-Hizb id for the given Ayah ID.
 */
export function getThumunAlHizbByAyahId(ayahId: AyahId,riwaya:RiwayahsWith<"HizbEighthList">="Qalun"): ThumunAlHizb {
  checkValidAyahId(ayahId)

  const eighthIndex = findThumunAlHizbByAyahId(ayahId,riwaya)
  return getThumunAlHizb(eighthIndex)
}
