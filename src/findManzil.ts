import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { findManzilByAyahId } from "./findManzilByAyahId"
import { AyahId, AyahNo, Manzil, Surah } from "./types"
import { RiwayahsWithAll } from "./lists/types"

/**
 * Finds the Manzil number for a given Surah and Ayah
 * @param surah - The Surah number or object
 * @param ayah - Optional Ayah number (defaults to 1)
 * @param riwaya - The riwaya. (defaults to "Hafs")
 * @returns The Manzil number (1-7) containing the specified Ayah
 */
export function findManzil(surah: Surah, ayah: AyahNo = 1, riwaya?: RiwayahsWithAll<["ManzilList", "SurahList"]>): Manzil {
  const ayahId: AyahId = findAyahIdBySurah(surah, ayah, riwaya)

  return findManzilByAyahId(ayahId)
}
