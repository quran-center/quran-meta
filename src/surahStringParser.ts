import { isValidSurah } from "./typeGuards"
import type { QuranMeta, Surah } from "./types"

/**
 * Parses a string representation of a Surah number and converts it to a valid Surah type
 * @param str - The string containing the Surah number to parse
 * @returns The parsed Surah number as a Surah type
 * @throws {@link Error} If the string cannot be parsed as a number or if the number is not a valid Surah number
 */
export function surahStringParser(str: string, isStrict: boolean = false, meta: QuranMeta): Surah {
  const surahX = isStrict ? Number(str.trim()) : Number.parseInt(str.trim(), 10)

  if (isNaN(surahX)) {
    throw new Error("Error in surah format " + str)
  }

  if (!isValidSurah(surahX, meta)) {
    throw new Error("Error in surah number " + str)
  }

  return surahX as Surah
}
