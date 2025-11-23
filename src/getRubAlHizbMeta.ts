import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import type { RiwayaData } from "./lists/types"
import { getRubAlHizb } from "./getRubAlHizb"
import type { RubAlHizbMeta, RubAlHizbId, AyahId } from "./types"

/**
 * Retrieves the metadata for a specific quarter (rub' al-hizb) of the Quran.
 *
 * @param quarterIndex - The index of the quarter (rub' al-hizb) to retrieve metadata for, where 1 is the first quarter.
 * @param data - The Lists object for the riwaya.
 * @returns An object containing the metadata for the specified quarter, including the juz' (part), hizb (section), and the quarter (rub' al-hizb) index.
 */
export function getRubAlHizbMeta(
  quarterIndex: RubAlHizbId,
  data: RiwayaData
): RubAlHizbMeta {
  const res = getRubAlHizb(quarterIndex)
  const HizbQuarterList = data.HizbQuarterList
  const [firstAyahId, nextJuzAyahId]: [AyahId, AyahId] = [
    HizbQuarterList[quarterIndex],
    HizbQuarterList[quarterIndex + 1]
  ]
  const lastAyahId = nextJuzAyahId - 1

  return {
    firstAyahId,
    lastAyahId,
    first: findSurahAyahByAyahId(firstAyahId, data),
    last: findSurahAyahByAyahId(lastAyahId, data),
    ...res
  }
}
