import { RiwayahsWith } from "./lists/types"
import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import { AyahId, Surah } from "./types"

/**
 * Finds a Surah based on the provided Ayah ID.
 *
 * @param ayaId - The unique identifier of the Ayah
 *  @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns The Surah that contains the specified Ayah
 *
 * @example
 * const surah = findSurahByAyahId(1234);
 */
export function findSurahByAyahId(ayaId: AyahId, riwaya?: RiwayahsWith<"SurahList">): Surah {
  return findSurahAyahByAyahId(ayaId, riwaya)[0]
}
