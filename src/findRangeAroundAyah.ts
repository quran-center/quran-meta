import { findJuzByAyahId } from "./findJuzByAyahId"
import { findPagebyAyahId } from "./findPagebyAyahId"
import { findRukuByAyahId } from "./findRukuByAyahId"
import { findSurahByAyahId } from "./findSurahByAyahId"
import type { RiwayaData } from "./lists/types"
import type { AyahId, AyahRange, Juz, Page, RangeMode, Ruku, Surah } from "./types"

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
 * @param data - The Lists object for the riwaya.
 * @returns An array of two numbers representing the start and end ayah IDs of the range [startAyahId, endAyahId]
 */
export function findRangeAroundAyah(
  ayahId: AyahId,
  mode: RangeMode,
  data: RiwayaData
): AyahRange {
  const JuzList = data.JuzList
  const SurahList = data.SurahList
  const PageList = data.PageList
  const RukuList = data.RukuList
  switch (mode) {
    case "juz": {
      const juz: Juz = findJuzByAyahId(ayahId, data)
      return [JuzList[juz], JuzList[juz + 1] - 1]
    }

    case "surah": {
      const surah: Surah = findSurahByAyahId(ayahId, data)
      return [SurahList[surah][0], SurahList[surah + 1][0] - 1]
    }

    case "ayah": {
      return [ayahId, ayahId]
    }

    case "page": {
      const page: Page = findPagebyAyahId(ayahId, data)
      return [PageList[page], PageList[page + 1] - 1]
    }

    case "ruku": {
      const ruku: Ruku = findRukuByAyahId(ayahId, data)
      return [RukuList[ruku], RukuList[ruku + 1] - 1]
    }

    case "all":
    default:
      return [1, data.meta.numAyahs]
  }
}
