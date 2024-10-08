import { findAyaidBySurah } from "./findAyaidBySurah.mjs";
import { PageList } from "./lists/pageList.mjs";
import { binarySearch } from "./utils.mjs";
import { checkValidAyahId, checkValidSurah } from "./validation.mjs";
export function isAyahPageFirst(surah, ayah, ayahMode = false) {
  const ayahId = ayahMode ? checkValidAyahId(ayah) && ayah : checkValidSurah(surah) && findAyaidBySurah(surah, ayah);
  return binarySearch(PageList, ayahId);
}
