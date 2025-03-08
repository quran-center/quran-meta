import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { findManzilByAyahId } from "./findManzilByAyahId"
import { AyahId, AyahNo, Manzil, Surah } from "./types"

/**
 * Finds the Manzil number for a given Surah and Ayah
 * @param surah - The Surah number or object
 * @param ayah - Optional Ayah number (defaults to 1)
 * @returns The Manzil number (1-7) containing the specified Ayah
 */
export function findManzil(surah: Surah, ayah: AyahNo = 1): Manzil {
  const ayahId: AyahId = findAyahIdBySurah(surah, ayah)

  return findManzilByAyahId(ayahId)
}
