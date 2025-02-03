import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { JuzList } from "./lists/juzList"
import { AyahId, AyahNo, Juz, Surah } from "./types"
import { binarySearch } from "./utils"
import { checkValidSurah } from "./validation"

/**
 * Determines if a given Surah and Ayah combination marks the beginning of a Juz.
 *
 * @param surah - The Surah number to check
 * @param ayah - The Ayah number within the Surah to check
 * @returns The Juz number if the combination marks the start of a Juz, -1 otherwise
 * @throws Error When the provided Surah number is invalid
 *
 * @example
 * ```typescript
 * isSurahAyahJuzFirst(2, 142) // Returns 2
 * isSurahAyahJuzFirst(2, 143) // Returns -1
 * ```
 */
export function isSurahAyahJuzFirst(
  surah: Surah,
  ayah: AyahNo
): Juz | -1 {
  checkValidSurah(surah)
  const ayahId: AyahId = findAyahIdBySurah(surah, ayah)

  return binarySearch(JuzList, ayahId) as Juz | -1
  // return JuzList.findIndex((x: AyahId) => x == ayahId)
}
