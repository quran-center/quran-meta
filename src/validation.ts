import { meta } from "./const"
import { getAyahCountInSurah } from "./getAyahCountInSurah"
import { isValidAyahId, isValidJuz, isValidPage, isValidSurah } from "./typeGuards"
import { AyahId, AyahNo, Juz, Page, Surah, SurahAyah } from "./types"

/**
 * Validates if the provided value is a valid Surah number.
 *
 * @param surah - The value to validate, can be a Surah object, number, or unknown type
 * @throws TypeError When the provided value is not an integer
 * @throws RangeError When the provided surah number is outside the valid range (1 to total number of surahs)
 * @remarks This is a type assertion function that ensures the input is a valid Surah
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
 * Validates if the given surah and ayah numbers form a valid combination.
 * @param surah - The surah number or Surah object to validate
 * @param ayah - The ayah number or AyahNo object to validate
 * @throws Error If the surah-ayah combination is invalid
 */
export function checkValidSurahAyah(surah: Surah | number | unknown, ayah: number | AyahNo) {
  checkValidSurahAyahPair([surah, ayah])
}

/**
 * Validates that a surah-ayah pair contains valid values
 * @param surahAyah - A tuple containing surah number/object and ayah number
 * @throws RangeError If ayah number is not between 1 and the maximum ayah count for the given surah
 * @throws If surah is invalid (from checkValidSurah)
 * @example
 * ```ts
 * checkValidSurahAyahPair([1, 7]) // Valid
 * checkValidSurahAyahPair([1, 8]) // Throws RangeError
 * ```
 */
export function checkValidSurahAyahPair(surahAyah: [Surah | number | unknown, AyahNo | number | unknown]): asserts surahAyah is SurahAyah {
  const [surah, ayah] = surahAyah
  checkValidSurah(surah)

  if (typeof ayah !== "number" || !Number.isInteger(ayah) || ayah < 1 || ayah > getAyahCountInSurah(surah)) {
    throw new RangeError("Ayah must be between 1 and " + getAyahCountInSurah(surah))
  }
}

/**
 * Validates and asserts that the given value is a valid Ayah ID.
 * An Ayah ID must be an integer between 1 and the total number of Ayahs.
 *
 * @param ayahId - The value to check as an Ayah ID
 * @throws TypeError If the value is not an integer
 * @throws RangeError If the value is not within valid Ayah ID range
 */
export function checkValidAyahId(ayahId: unknown | number | AyahId): asserts ayahId is AyahId {
  if (typeof ayahId !== "number" || !Number.isInteger(ayahId)) {
    throw new TypeError("Ayah ID must be an integer")
  }
  if (!isValidAyahId(ayahId)) {
    throw new RangeError("Ayah ID must be between 1 and " + meta.numAyahs)
  }
}

export function checkValidPage(x: unknown | number | Page): asserts x is Page {
  if (typeof x !== "number" || !Number.isInteger(x)) {
    throw new TypeError("Page must be an integer")
  }
  if (!isValidPage(x)) {
    throw new RangeError("Page must be between 1 and " + meta.numPages)
  }
}

export function checkValidJuz(x: unknown | number | Juz): asserts x is Juz {
  if (typeof x !== "number" || !Number.isInteger(x)) {
    throw new TypeError("Juz must be an integer")
  }
  if (!isValidJuz(x)) {
    throw new RangeError("Juz must be between 1 and " + meta.numJuzs)
  }
}
