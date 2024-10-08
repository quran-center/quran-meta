import { getSurahMeta } from "./getSurahMeta.mjs";
import { checkValidSurahAyah } from "./validation.mjs";
export function findAyaidBySurah(surah, ayah) {
  checkValidSurahAyah(surah, ayah);
  const [startAyahId] = getSurahMeta(surah);
  return startAyahId + ayah;
}
