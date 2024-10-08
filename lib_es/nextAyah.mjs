import { meta } from "./const.mjs";
import { findAyaidBySurah } from "./findAyaidBySurah.mjs";
import { findSurahByAyaid } from "./findSurahByAyaid.mjs";
export function nextAyah(surah, ayah) {
  if (surah < 1 || surah > meta.numSuras)
    throw new RangeError("Surah must be between 1 and " + meta.numSuras);
  const ayaid = findAyaidBySurah(surah, ayah);
  return findSurahByAyaid(ayaid == meta.numAyas ? 1 : ayaid + 1);
}
