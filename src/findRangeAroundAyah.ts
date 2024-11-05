import { meta } from "./const"
import { findAyaidBySurah } from "./findAyaidBySurah"
import { findJuzByAyaid } from "./findJuzByAyaid"
import { findPage } from "./findPage"
import { JuzList } from "./lists/juzList"
import { PageList } from "./lists/pageList"
import { SurahList } from "./lists/surahList"
import { AyahId, AyahNo, Juz, Page, Surah, SurahAyah } from "./types"
import { checkValidSurah } from "./validation"

/**
 * Finds a range of ayahs around a given ayah based on the specified mode.
 *
 * @param surah - The surah number (1-114)
 * @param ayah - The ayah number within the surah, or the absolute ayah ID if ayahMode is true
 * @param mode - The range mode: "juz", "surah", "ayah", "page", or "all"
 * @param ayahMode - If true, treats the ayah parameter as an absolute ayah ID
 * @returns A tuple containing the start and end ayah IDs of the range
 */
export function findRangeAroundAyah(
  surah: Surah,
  ayah: AyahNo,
  mode: "juz" | "surah" | "ayah" | "page" | "all",
  ayahMode = false
): SurahAyah {
  const ayahId: AyahId = ayahMode
    ? ayah
    : ((checkValidSurah(surah) && findAyaidBySurah(surah, ayah)) as AyahId)

  switch (mode) {
    case "juz": {
      const juz: Juz = findJuzByAyaid(ayahId)
      return [JuzList[juz], JuzList[juz + 1] - 1]
    }

    case "surah": {
      return [SurahList[surah][0] + 1, SurahList[surah + 1][0]]
    }

    case "ayah": {
      return [ayahId, ayahId]
    }
    case "page": {
      const page: Page = findPage(-1, ayahId, true)
      return [PageList[page], PageList[page + 1] - 1]
    }

    case "all":
    default:
      return [1, meta.numAyahs]
  }
}
