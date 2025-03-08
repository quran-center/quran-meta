import { ManzilList } from "./lists/manzilList"
import { AyahId, Manzil } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Manzil number for a given Ayah ID using binary search.
 * A Manzil is one of seven approximately equal divisions of the Quran.
 *
 * @param ayahId - The ID of the Ayah to find the Manzil for
 * @returns The Manzil number (1-7) containing the specified Ayah
 * @throws {Error} If the provided Ayah ID is invalid
 *
 * @example
 * ```typescript
 * const manzil = findManzilByAyahId(2345); // Returns the Manzil containing Ayah 2345
 * ```
 */
export function findManzilByAyahId(ayahId: AyahId): Manzil {
  checkValidAyahId(ayahId)

  const jj = binarySearch(ManzilList, ayahId)
  const juz = jj < 0 ? -jj - 2 : jj
  return juz as Manzil
}
