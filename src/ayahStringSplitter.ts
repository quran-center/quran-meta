import type { RiwayaData } from "./lists/types"
import { isValidAyahNo, isValidSurah } from "./typeGuards"
import type { AyahNo, Surah, SurahAyahSegment } from "./types"
import { checkValidAyahId, checkValidSurahAyah } from "./validation"

/**
 * Splits a string representation of Quran reference into surah and ayah components
 * @param str - The string to parse, expected format: "surah:ayah" or "surah:ayahStart-ayahEnd"
 * @param isStrict - If true, enforces strict format checking. Defaults to true. If false, allows for additional characters in the string
 * @returns A tuple containing surah number and either a single ayah number or a range [start, end]
 * @throws {@link Error} If the string format is invalid
 * @throws {@link Error} If surah number is invalid
 * @throws {@link Error} If ayah number(s) are invalid
 * @throws {@link sError} If ayah range is invalid (start should be less than end)
 * @example
 * ```ts
 * ayahStringSplitter("2:255") // returns [2, 255]
 * ayahStringSplitter("1:1-7") // returns [1, [1, 7]]
 * ```
 */
export function ayahStringSplitter(str: string, isStrict = true, data: RiwayaData): SurahAyahSegment {
  const result = isStrict ? string2NumberSplitterStrict(str) : string2NumberSplitter(str)
  if (!result) {
    throw new Error("Invalid string format: " + str)
  }

  const { surahOrAyah: surahX, ayah, ayahTo } = result
  const meta = data.meta

  if (!isValidSurah(surahX, meta)) {
    throw new Error("Invalid ayah number: " + str)
  }
  const surah: Surah = surahX

  let ayahs: AyahNo | [AyahNo, AyahNo]
  if (ayahTo) {
    checkValidAyahId(ayah, meta)
    checkValidAyahId(ayahTo, meta)
    if (ayah > ayahTo) throw new Error("Invalid ayah range: " + str)
    ayahs = [ayah, ayahTo] as [AyahNo, AyahNo]
  }
  else {
    if (!isValidAyahNo(ayah)) {
      throw new Error("Error in data " + str)
    }
    checkValidSurahAyah(surah, ayah, data)
    ayahs = ayah
  }

  return [surah, ayahs]
}

/**
 * Splits a string containing surah and ayah numbers into their numeric components.
 *
 * @param str - Input string containing numbers separated by non-digits (e.g., "2:255" or "2 255" or "2-255")
 * @returns An object containing the parsed numbers, or null if parsing fails
 *          - ayah: The ayah number if present
 *          - ayahTo: The ending ayah number if a range is specified
 *          - surahOrAyah: The surah number
 * @example
 * stringNumberSplitter("2:255") // returns \{ ayah: 255, ayahTo: 0, surahOrAyah: 2 \}
 * stringNumberSplitter("2:255-260") // returns \{ ayah: 255, ayahTo: 260, surahOrAyah: 2 \}
 * stringNumberSplitter("invalid") // returns null
 */
export function string2NumberSplitter(str: string): { ayah?: number, ayahTo?: number, surahOrAyah?: number } | null {
  const sr = /(?<surah>\d{1,3})\D*(?<ayah>\d{0,3})\D*(?<ayahTo>\d{0,3})/.exec(str)

  if (sr?.groups && +sr.groups.surah > 0 /* && sr.groups.surah <= 114 */) {
    const { ayah, ayahTo, surah }: {
      surah?: string
      ayah?: string
      ayahTo?: string
    } = sr.groups

    return { surahOrAyah: +surah, ayah: +ayah, ayahTo: +ayahTo }
  }
  return null
}

/**
 * Splits a string in the format "surah:ayah" or "surah:ayah-ayah" into its numeric components.
 *
 * @param str - The input string to parse in the format "surah:ayah" or "surah:ayah-ayah"
 * @returns An object containing the parsed numbers:
 *          - surahOrAyah: The surah number
 *          - ayah: The first or only ayah number
 *          - ayahTo: The ending ayah number (if range specified)
 * @throws {@link Error} When the input string format is invalid or contains non-numeric values
 *
 * @example
 * string2NumberSplitterStrict("2:255")    // returns \{ surahOrAyah: 2, ayah: 255, ayahTo: NaN \}
 * string2NumberSplitterStrict("2:255-260") // returns \{ surahOrAyah: 2, ayah: 255, ayahTo: 260 \}
 */
export function string2NumberSplitterStrict(str: string): { ayah?: number, ayahTo?: number, surahOrAyah?: number } | null {
  let [surahStr, ayahsStr] = str.trim().split(":")
  surahStr = surahStr.trim()
  const surahX = parseInt(surahStr.trim(), 10)

  if (isNaN(surahX)) {
    throw new Error("Error in surah format " + str)
  }
  ayahsStr = ayahsStr.trim()
  if (!ayahsStr) {
    throw new Error("Error in data " + str)
  }

  let ayahs: [number] | [number, number]
  if (ayahsStr.includes("-")) {
    ayahs = ayahsStr.split("-").map((a) => {
      const ayahX = parseInt(a, 10)
      if (isNaN(ayahX)) {
        throw new Error("Error in surah format " + str)
      }
      return ayahX
    }) as [number, number]
  }
  else {
    const ayahX = parseInt(ayahsStr, 10)
    if (isNaN(ayahX)) {
      throw new Error("Error in surah format " + str)
    }
    ayahs = [ayahX, NaN]
  }

  return { surahOrAyah: +surahX, ayah: +ayahs[0], ayahTo: +ayahs[1] }
}
