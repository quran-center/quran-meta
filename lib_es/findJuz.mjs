import { findAyaidBySurah } from "./findAyaidBySurah.mjs";
import { findJuzByAyaid } from "./findJuzByAyaid.mjs";
import { checkValidSurahAyah } from "./validation.mjs";
export function findJuz(surah, ayah = 1, ayahMode = false) {
  const ayahId = ayahMode ? ayah : checkValidSurahAyah(surah, ayah) && findAyaidBySurah(surah, ayah);
  return findJuzByAyaid(ayahId);
}
