import { SurahAyahSegment, AyahNo } from "./types"

/**
 *  Turns String of type "x:y" or "x:y1-y2" to array [x,y] or [x,[y1,y2]] respectively
 * @param {*} str String of type "x:y" or "x:y1-y2"
 * @returns {array} array [x,y] or [x,[y1,y2]] respectively
 */
export function ayaStringSplitter(str: string): SurahAyahSegment {
  const [surah, ayahs] = str.trim().split(":")
  if (!ayahs) {
    throw "Error in data " + str
  }
  return [
    +surah,
    ayahs.includes("-")
      ? (ayahs.split("-").map(Number) as [AyahNo, AyahNo])
      : +ayahs,
  ]
}
