import { meta } from "./const"
import { getAyahCountInSurah } from "./getAyahCountInSurah"
import { isValidAyahId, isValidSurah } from "./typeGuards"
import { AyahId, AyahNo, Surah, SurahAyah } from "./types"

/**
 * Checks if the given Surah (chapter) number is valid.
 *
 * @param surah - The Surah (chapter) number to check.
 * @param checkOnly - If true, the function will only check the validity and not throw an error.
 * @returns True if the Surah number is valid, false otherwise.
 */
export function checkValidSurah(surah: Surah | number | unknown): asserts surah is Surah {
  if (typeof surah !== "number" || !Number.isInteger(surah)) {
    throw new TypeError("Ayah ID must be an integer")
  }

  if (!isValidSurah(surah)) {
    throw new RangeError("Surah must be between 1 and " + meta.numSurahs)
  }
}

/**
 * Checks if the given Surah and Ayah (verse) numbers are valid.
 *
 * @param surah - The Surah (chapter) number to check.
 * @param ayah - The Ayah (verse) number to check.
 * @param checkOnly - If true, the function will only check the validity and not throw an error.
 * @returns True if the Surah and Ayah numbers are valid, false otherwise.
 */
export function checkValidSurahAyah(surah: Surah | number | unknown, ayah: number | AyahNo) {
  checkValidSurahAyahPair([surah, ayah])
}

export function checkValidSurahAyahPair(surahAyah: [Surah | number | unknown, AyahNo | number | unknown]): asserts surahAyah is SurahAyah {
  const [surah, ayah] = surahAyah
  checkValidSurah(surah)

  if (typeof ayah !== "number" || !Number.isInteger(ayah) || ayah < 1 || ayah > getAyahCountInSurah(surah)) {
    throw new RangeError("Ayah must be between 1 and " + getAyahCountInSurah(surah))
  }
}

/**
 * Checks if the given Ayah (verse) ID is valid.
 *
 * @param ayahId - The Ayah (verse) ID to check.
 * @param checkOnly - If true, the function will only check the validity and not throw an error.
 * @returns True if the Ayah ID is valid, otherwise throws a RangeError.
 */
export function checkValidAyahId(ayahId: unknown | number | AyahId): asserts ayahId is AyahId {
  if (typeof ayahId !== "number" || !Number.isInteger(ayahId)) {
    throw new TypeError("Ayah ID must be an integer")
  }
  if (!isValidAyahId(ayahId)) {
    throw new RangeError("Ayah ID must be between 1 and " + meta.numAyahs)
  }
}
