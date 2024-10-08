import { meta } from "./const"
import { getAyaCountinSura } from "./getAyaCountinSura"

/**
 * Checks if the given Surah (chapter) number is valid.
 *
 * @param surah - The Surah (chapter) number to check.
 * @param checkOnly - If true, the function will only check the validity and not throw an error.
 * @returns True if the Surah number is valid, false otherwise.
 */
export function checkValidSurah(surah: number, checkOnly = false): boolean {
  if (typeof surah !== "number" || !Number.isInteger(surah)) {
    if (checkOnly) return false
    throw new TypeError("Ayah ID must be an integer")
  }

  if (surah < 1 || surah > meta.numSuras) {
    if (checkOnly) return false
    throw new RangeError("Surah must be between 1 and " + meta.numSuras)
  }
  return true
}

/**
 * Checks if the given Surah and Ayah (verse) numbers are valid.
 *
 * @param surah - The Surah (chapter) number to check.
 * @param ayah - The Ayah (verse) number to check.
 * @param checkOnly - If true, the function will only check the validity and not throw an error.
 * @returns True if the Surah and Ayah numbers are valid, false otherwise.
 */
export function checkValidSurahAyah(surah: number, ayah: number, checkOnly = false): boolean {
  if (!checkValidSurah(surah, checkOnly)) return false

  if (ayah < 1 || ayah > getAyaCountinSura(surah)) {
    if (checkOnly) return false
    throw new RangeError("Ayah must be between 1 and " + getAyaCountinSura(surah))
  }
  return true
}

/**
 * Checks if the given Ayah (verse) ID is valid.
 *
 * @param ayaId - The Ayah (verse) ID to check.
 * @returns True if the Ayah ID is valid, otherwise throws a RangeError.
 */
export function checkValidAyahId(ayahId: number, checkOnly = false): boolean {
  if (typeof ayahId !== "number" || !Number.isInteger(ayahId)) {
    if (checkOnly) return false
    throw new TypeError("Ayah ID must be an integer")
  }
  if (ayahId < 1 || ayahId > meta.numAyas) {
    if (checkOnly) return false
    throw new RangeError("Ayah ID must be between 1 and " + meta.numAyas)
  }
  return true
}
