import { meta } from "./const"
import { findJuzByAyahId } from "./findJuzByAyahId"
import { findPagebyAyahId } from "./findPagebyAyahId"
import { findRukuByAyahId } from "./findRukuByAyahId"
import { findSurahByAyahId } from "./findSurahByAyahId"
import { JuzList } from "./lists/juzList"
import { PageList } from "./lists/pageList"
import { RukuList } from "./lists/rukuList"
import { SurahList } from "./lists/surahList"
import { AyahId, AyahRange, Juz, Page, Ruku, Surah } from "./types"

/**
 * Finds the range of ayahs surrounding a given ayah based on specified mode
 * @param ayahId - The unique identifier of the ayah
 * @param mode - The scope for finding the range:
 *   - "juz": Returns range of ayahs in the same juz
 *   - "surah": Returns range of ayahs in the same surah
 *   - "ayah": Returns the single ayah as both start and end of range
 *   - "page": Returns range of ayahs on the same page
 *   - "ruku": Returns range of ayahs on the same ruku
 *   - "all": Returns range covering all ayahs (1 to total number of ayahs)
 * @returns An array of two numbers representing the start and end ayah IDs of the range [startAyahId, endAyahId]
 */
export function findRangeAroundAyah(
  ayahId: AyahId,
  mode: "juz" | "surah" | "ayah" | "page" | "ruku" | "all"
): AyahRange {
  switch (mode) {
    case "juz": {
      const juz: Juz = findJuzByAyahId(ayahId)
      return [JuzList[juz], JuzList[juz + 1] - 1]
    }

    case "surah": {
      const surah: Surah = findSurahByAyahId(ayahId)
      return [SurahList[surah][0], SurahList[surah + 1][0] - 1]
    }

    case "ayah": {
      return [ayahId, ayahId]
    }

    case "page": {
      const page: Page = findPagebyAyahId(ayahId)
      return [PageList[page], PageList[page + 1] - 1]
    }

    case "ruku": {
      const ruku: Ruku = findRukuByAyahId(ayahId)
      return [RukuList[ruku], RukuList[ruku + 1] - 1]
    }

    case "all":
    default:
      return [1, meta.numAyahs]
  }
}
