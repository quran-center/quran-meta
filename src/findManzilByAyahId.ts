import type { RiwayaData } from "./lists/types"
import type { AyahId, Manzil } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Manzil number for a given Ayah ID using binary search.
 * A Manzil is one of seven approximately equal divisions of the Quran.
 *
 * @param ayahId - The ID of the Ayah to find the Manzil for
 * @param data - The Lists object for the riwaya.
 * @returns The Manzil number (1-7) containing the specified Ayah
 * @throws {@link Error} If the provided Ayah ID is invalid
 *
 * @example
 * ```typescript
 * const manzil = findManzilByAyahId(2345, HafsLists); // Returns the Manzil containing Ayah 2345
 * ```
 */
export function findManzilByAyahId(ayahId: AyahId, data: RiwayaData): Manzil {
  checkValidAyahId(ayahId, data.meta)
  const { ManzilList } = data
  const jj = binarySearch(ManzilList, ayahId)
  const juz = jj < 0 ? -jj - 2 : jj
  return juz as Manzil
}
