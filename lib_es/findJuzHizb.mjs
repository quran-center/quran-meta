import { findAyaidBySurah } from "./findAyaidBySurah.mjs";
import { findJuzHizbByAyaid } from "./findJuzHizbByAyaid.mjs";
import { checkValidSurah } from "./validation.mjs";
export function findJuzHizb(surah, ayah = 1, ayahMode = false) {
  const ayahId = ayahMode ? ayah : checkValidSurah(surah) && findAyaidBySurah(surah, ayah);
  return findJuzHizbByAyaid(ayahId);
}
