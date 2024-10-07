import { checkValidAyahId } from "./checkValidAyahId";
import { checkValidSurah } from "./checkValidSurah";
import { findAyaidBySurah } from "./findAyaidBySurah";
import { PageList } from "./lists/pageList";
import { AyahId, AyahNo, Juz, Surah } from "./types";
import { binarySearch } from "./utils";


/**
 * Determines if the given ayah is the first ayah of a juz.
 *
 * @param surah - The surah number.
 * @param ayah - The ayah number.
 * @param ayahMode - Optional flag to indicate if the ayah number is already a valid ayah ID.
 * @returns The juz number if the ayah is the first ayah of the juz, otherwise -1.
 */
export function isAyahPageFirst(
  surah: Surah,
  ayah: AyahNo,
  ayahMode = false
): Juz {
  const ayahId: AyahId = ayahMode
    ? ((checkValidAyahId(ayah) && ayah) as AyahId)
    : ((checkValidSurah(surah) && findAyaidBySurah(surah, ayah)) as AyahId);

  return binarySearch(PageList, ayahId);
  // return PageList.findIndex((x: AyahId) => x == ayahId)
}
