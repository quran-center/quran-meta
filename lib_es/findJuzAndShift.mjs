import { findAyaidBySurah } from "./findAyaidBySurah.mjs";
import { findJuzByAyaid } from "./findJuzByAyaid.mjs";
import { findSurahByAyaid } from "./findSurahByAyaid.mjs";
import { JuzList } from "./lists/juzList.mjs";
import { SuraList } from "./lists/surahList.mjs";
import { checkValidAyahId, checkValidSurah } from "./validation.mjs";
export function findJuzAndShift(surah, ayah, ayahMode = false) {
  const ayahId = ayahMode ? checkValidAyahId(ayah) && ayah : checkValidSurah(surah) && findAyaidBySurah(surah, ayah);
  const juz = findJuzByAyaid(ayahId);
  const leftAyahId = JuzList[juz];
  if (ayahMode) [surah] = findSurahByAyaid(ayahId);
  const [surahStartAyahId] = SuraList[surah];
  return {
    juz,
    ayahsBetweenJuzSurah: surahStartAyahId - leftAyahId + 1,
    leftAyahId
  };
}
