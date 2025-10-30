import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { getList } from "./lists/index"
import { RiwayahsWith } from "./lists/types"
import { AyahId, AyahNo, Page, Surah } from "./types"
import { binarySearch } from "./utils"
import { checkValidSurah } from "./validation"

/**
 * Determines if an ayah is the first ayah on its page in the Quran
 * @param surah - The surah number (1-114)
 * @param ayah - The ayah number within the surah
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns The page number if the ayah is first on its page, -1 otherwise
 * @throws Error If surah number is invalid
 */
export function isSurahAyahPageFirst(
  surah: Surah,
  ayah: AyahNo,
  riwaya: RiwayahsWith<"PageList"> = "Hafs"
): Page | number {
  checkValidSurah(surah)
  const ayahId: AyahId = findAyahIdBySurah(surah, ayah)
  const PageList = getList("PageList", riwaya)
  return binarySearch(PageList, ayahId) as Page | -1
  // return PageList.findIndex((x: AyahId) => x == ayahId)
}
