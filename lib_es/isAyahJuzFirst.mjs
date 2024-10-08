import { findAyaidBySurah } from "./findAyaidBySurah.mjs";
import { JuzList } from "./lists/juzList.mjs";
import { binarySearch } from "./utils.mjs";
import { checkValidAyahId, checkValidSurah } from "./validation.mjs";
export function isAyahJuzFirst(surah, ayah, ayahMode = false) {
  const ayahId = ayahMode ? checkValidAyahId(ayah) && ayah : checkValidSurah(surah) && findAyaidBySurah(surah, ayah);
  return binarySearch(JuzList, ayahId);
}
