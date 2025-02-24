import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import { JuzList } from "./lists/juzList"
import { AyahId, JuzMeta } from "./types"
import { checkValidJuz } from "./validation"

/**
 * Retrieves metadata for a specific Juz of the Quran.
 *
 * @param juzNum - The Juz number to retrieve metadata for (1-30)
 * @returns An object containing the Juz number, first ayah, and last ayah in the Juz
 * @throws RangeError If the Juz number is not between 1 and 30
 */
export function getJuzMeta(juzNum: number): JuzMeta {
  checkValidJuz(juzNum)

  const [curJuzAyahId, nextJuzAyahId]: [AyahId, AyahId] = [
    JuzList[juzNum],
    JuzList[juzNum + 1]
  ]

  return {
    juzNum,
    first: findSurahAyahByAyahId(curJuzAyahId),
    last: findSurahAyahByAyahId(nextJuzAyahId - 1)
  }
}
