import { checkValidSurahAyah } from "./validation.mjs";
export function ayaStringSplitter(str) {
  const [surahStr, ayahsStr] = str.trim().split(":");
  const surah = parseInt(surahStr, 10);
  if (isNaN(surah)) {
    throw "Error in surah format " + str;
  }
  if (!ayahsStr) {
    throw "Error in data " + str;
  }
  let ayahs;
  if (ayahsStr.includes("-")) {
    ayahs = ayahsStr.split("-").map((a) => {
      const ayah = parseInt(a, 10);
      if (isNaN(ayah) || ayah === 0) {
        throw "Error in ayah " + a;
      }
      return ayah;
    });
    if (ayahs[0] > ayahs[1]) throw "Error in ayah range " + str;
  } else {
    ayahs = parseInt(ayahsStr, 10);
    if (isNaN(ayahs) || ayahs === 0) {
      throw "Error in data " + str;
    }
    checkValidSurahAyah(surah, ayahs);
  }
  return [surah, ayahs];
}
