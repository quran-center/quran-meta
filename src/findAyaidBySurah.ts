import { checkValidSurahAyah } from "./checkValidSurahAyah";
import { getSurahMeta } from "./getSurahMeta";
import { AyahId, AyahNo, Surah } from "./types";

/**
 * Get the ayah ID for the given surah and ayah number.
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @returns The ayah ID for the given surah and ayah number.
 */
export function findAyaidBySurah(surah: Surah, ayah: AyahNo): AyahId {
  checkValidSurahAyah(surah, ayah);
  const [startAyahId] = getSurahMeta(surah);
  return startAyahId + ayah;
}
