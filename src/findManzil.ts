import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { findManzilByAyahId } from "./findManzilByAyahId"
import type { RiwayaData } from "./lists/types"
import type { AyahId, AyahNo, Manzil, Surah } from "./types"

/**
 * Finds the Manzil number for a given Surah and Ayah
 * @param surah - The Surah number or object
 * @param ayah - Optional Ayah number (defaults to 1)
 * @param data - The Lists object for the riwaya.
 * @returns The Manzil number (1-7) containing the specified Ayah
 */
export function findManzil(surah: Surah, ayah: AyahNo = 1, data: RiwayaData): Manzil {
  const ayahId: AyahId = findAyahIdBySurah(surah, ayah, data)

  return findManzilByAyahId(ayahId, data)
}
