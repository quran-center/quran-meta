import { AyahNo, SurahAyahSegment } from "./types"
import { checkValidSurahAyah } from "./validation"

/**
 *  Turns String of type "x:y" or "x:y1-y2" to array [x,y] or [x,[y1,y2]] respectively
 * @param str - String of type "x:y" or "x:y1-y2"
 * @returns array [x,y] or [x,[y1,y2]] respectively
 */
export function ayahStringSplitter(str: string): SurahAyahSegment {
  const [surahStr, ayahsStr] = str.trim().split(":")
  const surah = parseInt(surahStr, 10)

  if (isNaN(surah)) {
    throw new Error("Error in surah format " + str)
  }

  if (!ayahsStr) {
    throw new Error("Error in data " + str)
  }

  let ayahs: AyahNo | [AyahNo, AyahNo]
  if (ayahsStr.includes("-")) {
    ayahs = ayahsStr.split("-").map((a) => {
      const ayah = parseInt(a, 10)
      if (isNaN(ayah) || ayah === 0) {
        throw new Error("Error in ayah " + a)
      }
      return ayah
    }) as [AyahNo, AyahNo]
    if (ayahs[0] > ayahs[1]) throw new Error("Error in ayah range " + str)
  }
  else {
    ayahs = parseInt(ayahsStr, 10)
    if (isNaN(ayahs) || ayahs === 0) {
      throw new Error("Error in data " + str)
    }
    checkValidSurahAyah(surah, ayahs)
  }

  return [surah, ayahs]
}
