import { isValidAyahNo, isValidSurah } from "./typeGuards"
import { AyahNo, Surah, SurahAyahSegment } from "./types"
import { checkValidAyahId, checkValidSurahAyah } from "./validation"

/**
 *  Turns String of type "x:y" or "x:y1-y2" to array [x,y] or [x,[y1,y2]] respectively
 * @param str - String of type "x:y" or "x:y1-y2"
 * @returns array [x,y] or [x,[y1,y2]] respectively
 */
export function ayahStringSplitter(str: string): SurahAyahSegment {
  const [surahStr, ayahsStr] = str.trim().split(":")
  const surahX = parseInt(surahStr, 10)

  if (isNaN(surahX)) {
    throw new Error("Error in surah format " + str)
  }

  if (!ayahsStr) {
    throw new Error("Error in data " + str)
  }

  if (!isValidSurah(surahX)) {
    throw new Error("Error in data " + str)
  }
  const surah: Surah = surahX

  let ayahs: AyahNo | [AyahNo, AyahNo]
  if (ayahsStr.includes("-")) {
    ayahs = ayahsStr.split("-").map((a) => {
      const ayahX = parseInt(a, 10)
      checkValidAyahId(ayahX)
      if (isNaN(ayahX) || !isValidAyahNo(ayahX)) {
        throw new Error("Error in ayah " + a)
      }
      return ayahX
    }) as [AyahNo, AyahNo]
    if (ayahs[0] > ayahs[1]) throw new Error("Error in ayah range " + str)
  }
  else {
    const ayahX = parseInt(ayahsStr, 10)
    if (!isValidAyahNo(ayahX)) {
      throw new Error("Error in data " + str)
    }
    checkValidSurahAyah(surah, ayahX)
    ayahs = ayahX
  }

  return [surah, ayahs]
}
