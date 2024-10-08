import { SuraList } from "./lists/surahList.mjs";
import { checkValidSurah } from "./validation.mjs";
export function getSurahMeta(surah) {
  checkValidSurah(surah);
  return SuraList[surah];
}
