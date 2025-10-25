import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import { getList } from "./lists/index"
import { RiwayahsWith } from "./lists/types"
import { getRubAlHizb } from "./getRubAlHizb"
import { RubAlHizbMeta, RubAlHizbId, AyahId } from "./types"

/**
 * Retrieves the metadata for a specific quarter (rub' al-hizb) of the Quran.
 *
 * @param quarterIndex - The index of the quarter (rub' al-hizb) to retrieve metadata for, where 1 is the first quarter.
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns An object containing the metadata for the specified quarter, including the juz' (part), hizb (section), and the quarter (rub' al-hizb) index.
 */
export function getRubAlHizbMeta(
  quarterIndex: RubAlHizbId,
  riwaya?: RiwayahsWith<"HizbQuarterList">
): RubAlHizbMeta {
  const res = getRubAlHizb(quarterIndex)
  const HizbQuarterList = getList("HizbQuarterList", riwaya)
  const [firstAyahId, nextJuzAyahId]: [AyahId, AyahId] = [
    HizbQuarterList[quarterIndex],
    HizbQuarterList[quarterIndex + 1]
  ]
  const lastAyahId = nextJuzAyahId - 1

  return {
    firstAyahId,
    lastAyahId,
    first: findSurahAyahByAyahId(firstAyahId),
    last: findSurahAyahByAyahId(lastAyahId),
    ...res
  }
}
