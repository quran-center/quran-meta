import { getList } from "./lists/index"
import { RiwayahsWith } from "./lists/types"
import { AyahId, Manzil } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId } from "./validation"

/**
 * Finds the Manzil number for a given Ayah ID using binary search.
 * A Manzil is one of seven approximately equal divisions of the Quran.
 *
 * @param ayahId - The ID of the Ayah to find the Manzil for
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns The Manzil number (1-7) containing the specified Ayah
 * @throws {@link Error} If the provided Ayah ID is invalid
 *
 * @example
 * ```typescript
 * const manzil = findManzilByAyahId(2345); // Returns the Manzil containing Ayah 2345
 * ```
 */
export function findManzilByAyahId(ayahId: AyahId,riwaya?:RiwayahsWith<"ManzilList">): Manzil {
  checkValidAyahId(ayahId)
const ManzilList = getList("ManzilList",riwaya)
  const jj = binarySearch(ManzilList, ayahId)
  const juz = jj < 0 ? -jj - 2 : jj
  return juz as Manzil
}
