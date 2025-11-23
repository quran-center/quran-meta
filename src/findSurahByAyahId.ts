import type { RiwayaData } from "./lists/types"
import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import type { AyahId, Surah } from "./types"

/**
 * Finds a Surah based on the provided Ayah ID.
 *
 * @param ayaId - The unique identifier of the Ayah
 * @param data - The Lists object containing SurahList.
 * @returns The Surah that contains the specified Ayah
 *
 * @example
 * const surah = findSurahByAyahId(1234, data);
 */
export function findSurahByAyahId(ayaId: AyahId, data: RiwayaData): Surah {
  return findSurahAyahByAyahId(ayaId, data)[0]
}
