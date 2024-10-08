import { meta } from "./const.mjs";
import { findAyaidBySurah } from "./findAyaidBySurah.mjs";
import { findSurahByAyaid } from "./findSurahByAyaid.mjs";
import { checkValidSurah } from "./validation.mjs";
export function prevAyah(surah, ayah) {
  checkValidSurah(surah);
  const ayaid = findAyaidBySurah(surah, ayah);
  return findSurahByAyaid(ayaid == 1 ? meta.numAyas : ayaid - 1);
}
