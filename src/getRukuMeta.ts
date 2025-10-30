import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import { getList } from "./lists/index"
import { RiwayahsWith } from "./lists/types"
import { AyahId, RukuMeta } from "./types"
import { checkValidRuku } from "./validation"

/**
 * Retrieves metadata for a specific Ruku (section) of the Quran.
 * @param rukuNum - The number of the Ruku to retrieve metadata for
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns {@link RukuMeta} An object containing metadata about the Ruku including:
 *  - rukuNum: The Ruku number
 *  - firstAyahId: The global Ayah ID of the first verse in this Ruku
 *  - lastAyahId: The global Ayah ID of the last verse in this Ruku
 *  - first: The Surah and Ayah numbers for the first verse
 *  - last: The Surah and Ayah numbers for the last verse
 * @throws Will throw an error if the provided Ruku number is invalid
 */
export function getRukuMeta(
  rukuNum: number,
  riwaya: RiwayahsWith<"RukuList"> = "Hafs"
): RukuMeta {
  checkValidRuku(rukuNum)
  const RukuList = getList("RukuList", riwaya)
  const [firstAyahId, nextRukuAyahId]: [AyahId, AyahId] = [
    RukuList[rukuNum],
    RukuList[rukuNum + 1]
  ]
  const lastAyahId = nextRukuAyahId - 1
  return {
    rukuNum,
    firstAyahId,
    lastAyahId,
    first: findSurahAyahByAyahId(firstAyahId),
    last: findSurahAyahByAyahId(lastAyahId)
  }
}
