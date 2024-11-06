import { findAyaidBySurah } from "./findAyaidBySurah"
import { PageList } from "./lists/pageList"
import { AyahId, AyahNo, Page, Surah } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId, checkValidSurah } from "./validation"

/**
 * Determines if the given ayah is the first ayah of a juz.
 *
 * @param surah - The surah number.
 * @param ayah - The ayah number.
 * @param ayahMode - Optional flag to indicate if the ayah number is already a valid ayah ID.
 * @returns The page number if the ayah is the first ayah of the page, otherwise -1.
 */
export function isAyahPageFirst(
  surah: Surah,
  ayah: AyahNo,
  ayahMode = false
): Page {
  const ayahId: AyahId = ayahMode
    ? ((checkValidAyahId(ayah) && ayah) as AyahId)
    : ((checkValidSurah(surah) && findAyaidBySurah(surah, ayah)) as AyahId)

  return binarySearch(PageList, ayahId)
  // return PageList.findIndex((x: AyahId) => x == ayahId)
}
