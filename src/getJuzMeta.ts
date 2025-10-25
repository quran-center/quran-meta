import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import { getList } from "./lists/index"
import { RiwayahsWith } from "./lists/types"
import { AyahId, Juz, JuzMeta } from "./types"
import { checkValidJuz } from "./validation"

/**
 * Retrieves metadata for a specific Juz of the Quran.
 *
 * @param juzNum - The Juz number to retrieve metadata for (1-30)
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 *@returns An object containing the Juz number, first ayah, and last ayah in the Juz
 * @throws RangeError If the Juz number is not between 1 and 30
 */
export function getJuzMeta(
  juzNum: Juz,
  riwaya?: RiwayahsWith<"JuzList">
): JuzMeta {
  checkValidJuz(juzNum)
  const JuzList = getList("JuzList", riwaya)
  const [firstAyahId, nextJuzAyahId]: [AyahId, AyahId] = [
    JuzList[juzNum],
    JuzList[juzNum + 1]
  ]
  const lastAyahId = nextJuzAyahId - 1
  return {
    juzNum,
    firstAyahId,
    lastAyahId,
    first: findSurahAyahByAyahId(firstAyahId),
    last: findSurahAyahByAyahId(lastAyahId)
  }
}
