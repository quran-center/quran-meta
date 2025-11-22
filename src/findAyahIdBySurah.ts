import { getList } from "./lists/index"
import { RiwayahsWith } from "./lists/types"
import { AyahId, AyahNo, Surah } from "./types"
import { checkValidSurahAyah } from "./validation"

/**
 * Get the ayah ID for the given surah and ayah number.
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns The ayah ID for the given surah and ayah number.
 */
export function findAyahIdBySurah(surah: Surah, ayah: AyahNo, riwaya: RiwayahsWith<"SurahList"> = "Hafs"): AyahId {
  checkValidSurahAyah(surah, ayah)
  const SurahList = getList("SurahList", riwaya)
  const [startAyahId] = SurahList[surah]
  return startAyahId + ayah - 1
}
