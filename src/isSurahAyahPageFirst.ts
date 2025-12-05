import { findAyahIdBySurah } from "./findAyahIdBySurah"
import type { RiwayaData } from "./lists/types"
import type { AyahId, AyahNo, Page, Surah } from "./types"
import { binarySearch } from "./utils"
import { checkValidSurah } from "./validation"

/**
 * Determines if an ayah is the first ayah on its page in the Quran
 * @param surah - The surah number (1-114)
 * @param ayah - The ayah number within the surah
 * @param lists - The Lists object for the riwaya.
 * @returns The page number if the ayah is first on its page, -1 otherwise
 * @throws Error If surah number is invalid
 */
export function isSurahAyahPageFirst(surah: Surah, ayah: AyahNo, data: RiwayaData): Page | number {
  checkValidSurah(surah, data.meta)
  const ayahId: AyahId = findAyahIdBySurah(surah, ayah, data)
  const PageList = data.PageList
  return binarySearch(PageList, ayahId)
  // return PageList.findIndex((x: AyahId) => x == ayahId)
}
