import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import type { RiwayaData } from "./lists/types"
import type { AyahId, RukuMeta } from "./types"
import { checkValidRuku } from "./validation"

/**
 * Retrieves metadata for a specific Ruku (section) of the Quran.
 * @param rukuNum - The number of the Ruku to retrieve metadata for
 * @param data - The Lists object for the riwaya.
 * @returns {@link RukuMeta} An object containing metadata about the Ruku including:
 *  - rukuNum: The Ruku number
 *  - firstAyahId: The global Ayah ID of the first verse in this Ruku
 *  - lastAyahId: The global Ayah ID of the last verse in this Ruku
 *  - first: The Surah and Ayah numbers for the first verse
 *  - last: The Surah and Ayah numbers for the last verse
 * @throws Will throw an error if the provided Ruku number is invalid
 */
export function getRukuMeta(rukuNum: number, data: RiwayaData): RukuMeta {
  checkValidRuku(rukuNum, data.meta)
  const RukuList = data.RukuList
  const [firstAyahId, nextRukuAyahId]: [AyahId, AyahId] = [RukuList[rukuNum], RukuList[rukuNum + 1]]
  const lastAyahId = nextRukuAyahId - 1
  return {
    rukuNum,
    firstAyahId,
    lastAyahId,
    first: findSurahAyahByAyahId(firstAyahId, data),
    last: findSurahAyahByAyahId(lastAyahId, data)
  }
}
