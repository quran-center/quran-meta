import { meta } from "./const.mjs";
import { getAyaCountinSura } from "./getAyaCountinSura.mjs";
export function checkValidSurah(surah, checkOnly = false) {
  if (typeof surah !== "number" || !Number.isInteger(surah)) {
    if (checkOnly) return false;
    throw new TypeError("Ayah ID must be an integer");
  }
  if (surah < 1 || surah > meta.numSuras) {
    if (checkOnly) return false;
    throw new RangeError("Surah must be between 1 and " + meta.numSuras);
  }
  return true;
}
export function checkValidSurahAyah(surah, ayah, checkOnly = false) {
  if (!checkValidSurah(surah, checkOnly)) return false;
  if (ayah < 1 || ayah > getAyaCountinSura(surah)) {
    if (checkOnly) return false;
    throw new RangeError("Ayah must be between 1 and " + getAyaCountinSura(surah));
  }
  return true;
}
export function checkValidAyahId(ayahId, checkOnly = false) {
  if (typeof ayahId !== "number" || !Number.isInteger(ayahId)) {
    if (checkOnly) return false;
    throw new TypeError("Ayah ID must be an integer");
  }
  if (ayahId < 1 || ayahId > meta.numAyas) {
    if (checkOnly) return false;
    throw new RangeError("Ayah ID must be between 1 and " + meta.numAyas);
  }
  return true;
}
