import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { JuzList } from "./lists/juzList"
import { AyahId, AyahNo, Juz, Surah } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId, checkValidSurah } from "./validation"

/**
 * Returns the Juz (part) number that the given Ayah (verse) belongs to.
 *
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number.
 * @param ayahMode - If true, the `ayah` parameter is treated as an Ayah ID instead of a Surah and Ayah number.
 * @returns The Juz (part) number that the given Ayah belongs to. Returns Positive number if ayah is first ayah of juz, number is juz number
 */
export function isAyahJuzFirst(
  surah: Surah,
  ayah: AyahNo,
  ayahMode = false
): Juz {
  const ayahId: AyahId = ayahMode
    ? ((checkValidAyahId(ayah) && ayah) as AyahId)
    : ((checkValidSurah(surah) && findAyahIdBySurah(surah, ayah)) as AyahId)

  return binarySearch(JuzList, ayahId)
  // return JuzList.findIndex((x: AyahId) => x == ayahId)
}
