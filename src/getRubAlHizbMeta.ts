import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import { getRubAlHizb } from "./getRubAlHizb"
import { HizbQuarterList } from "./lists/hizbQuarterList"
import { RubAlHizbMeta, RubAlHizbId, AyahId } from "./types"

/**
 * Retrieves the metadata for a specific quarter (rub' al-hizb) of the Quran.
 *
 * @param quarterIndex - The index of the quarter (rub' al-hizb) to retrieve metadata for, where 1 is the first quarter.
 * @returns An object containing the metadata for the specified quarter, including the juz' (part), hizb (section), and the quarter (rub' al-hizb) index.
 */
export function getRubAlHizbMeta(quarterIndex: RubAlHizbId): RubAlHizbMeta {
  const res = getRubAlHizb(quarterIndex)

  const [firstAyahId, nextJuzAyahId]: [AyahId, AyahId] = [
    HizbQuarterList[quarterIndex],
    HizbQuarterList[quarterIndex + 1]
  ]
  const lastAyahId = nextJuzAyahId - 1

  return { firstAyahId,
    lastAyahId,
    first: findSurahAyahByAyahId(firstAyahId),
    last: findSurahAyahByAyahId(lastAyahId), ...res }
}
