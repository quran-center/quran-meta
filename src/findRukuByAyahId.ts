import { RukuList } from "./lists/rukuList"
import { AyahId, Ruku } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Ruku number for a given Ayah ID using binary search.
 *
 * @param ayahId - The unique identifier of an Ayah in format: surah:ayah (e.g., "2:255")
 * @returns The Ruku number corresponding to the given Ayah ID
 * @throws {@link Error} If the provided Ayah ID is invalid
 *
 * @example
 * ```ts
 * const ruku = findRukuByAyahId("2:255");
 * // Returns the Ruku number containing Ayah 255 of Surah 2
 * ```
 */
export function findRukuByAyahId(ayahId: AyahId): Ruku {
  checkValidAyahId(ayahId)

  const jj = binarySearch(RukuList, ayahId)
  const juz = jj < 0 ? -jj - 2 : jj
  return juz as Ruku
}
