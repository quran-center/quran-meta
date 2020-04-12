/**
 *  Turns String of type "x:y" or "x:y1-y2" to array [x,y] or [x,[y1,y2]] respectively
 * @param {*} str String of type "x:y" or "x:y1-y2"
 * @returns {array} array [x,y] or [x,[y1,y2]] respectively
 */
export default function ayaStringSplitter(str) {
  let [surah, ayahs] = str.trim().split(":")
  if (!ayahs) {
    console.warn("Error in data ", str)
  }
  ayahs = ayahs.includes("-") ? ayahs.split("-").map(Number) : +ayahs
  return [+surah, ayahs]
}
