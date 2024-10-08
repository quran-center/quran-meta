import { findAyaidBySurah } from "./findAyaidBySurah.mjs";
import { PageList } from "./lists/pageList.mjs";
import { checkValidAyahId, checkValidSurah } from "./validation.mjs";
export function findPage(surah, ayah, ayahMode = false) {
  const ayahId = ayahMode ? checkValidAyahId(ayah) && ayah : checkValidSurah(surah) && findAyaidBySurah(surah, ayah);
  return PageList.findIndex((x) => x > ayahId) - 1;
}
