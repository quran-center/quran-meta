import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import { AyahId, Surah } from "./types"

/**
 * Finds a Surah based on the provided Ayah ID.
 *
 * @param ayaId - The unique identifier of the Ayah
 * @returns The Surah that contains the specified Ayah
 *
 * @example
 * const surah = findSurahByAyahId(1234);
 */
export function findSurahByAyahId(ayaId: AyahId): Surah {
  return findSurahAyahByAyahId(ayaId)[0]
}
