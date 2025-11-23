import type { RiwayaData } from "./lists/types"
import type { AyahId, AyahNo, Surah } from "./types"
import { checkValidSurahAyah } from "./validation"

/**
 * Get the ayah ID for the given surah and ayah number.
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @param data - The Lists object containing SurahList.
 * @returns The ayah ID for the given surah and ayah number.
 */
export function findAyahIdBySurah(surah: Surah, ayah: AyahNo, data: RiwayaData): AyahId {
  checkValidSurahAyah(surah, ayah, data)
  const [startAyahId] = data.SurahList[surah]
  return startAyahId + ayah - 1
}
