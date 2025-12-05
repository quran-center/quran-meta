import { findAyahIdBySurah } from "./findAyahIdBySurah"
import type { AyahId, AyahNo, Juz, Surah } from "./types"
import type { RiwayaData } from "./lists/types"
import { binarySearch } from "./utils"
import { checkValidSurah } from "./validation"

/**
 * Determines if a given Surah and Ayah combination marks the beginning of a Juz.
 *
 * @param surah - The Surah number to check
 * @param ayah - The Ayah number within the Surah to check
 * @param data - The Lists object for the riwaya.
 * @returns The Juz number if the combination marks the start of a Juz, -1 otherwise
 * @throws Error When the provided Surah number is invalid
 *
 * @example
 * ```typescript
 * isSurahAyahJuzFirst(2, 142, HafsLists) // Returns 2
 * isSurahAyahJuzFirst(2, 143, HafsLists) // Returns -1
 * ```
 */
export function isSurahAyahJuzFirst(surah: Surah, ayah: AyahNo, data: RiwayaData): Juz | number {
  checkValidSurah(surah, data.meta)
  const ayahId: AyahId = findAyahIdBySurah(surah, ayah, data)
  const JuzList = data.JuzList
  return binarySearch(JuzList, ayahId)
  // return JuzList.findIndex((x: AyahId) => x == ayahId)
}
