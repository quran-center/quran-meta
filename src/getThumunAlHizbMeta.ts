import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import type { RiwayahsWith } from "./lists/types"
import { getThumunAlHizb } from "./getThumunAlHizb"
import type { ThumunAlHizbMeta, ThumunAlHizbId, AyahId } from "./types"

/**
 * Retrieves the metadata for a specific quarter (rub' al-hizb) of the Quran.
 *
 * @param eighthIndex - The index of the Eighth (thumun' al-hizb) to retrieve metadata for, where 1 is the first quarter.
 * @param data - The Lists object for the riwaya.
 * @returns An object containing the metadata for the specified quarter, including the juz' (part), hizb (section), and the quarter (rub' al-hizb) index.
 */
export function getThumunAlHizbMeta(
  eighthIndex: ThumunAlHizbId,
  data: RiwayahsWith<"HizbEighthList">
): ThumunAlHizbMeta {
  const res = getThumunAlHizb(eighthIndex)
  const HizbEighthList = data.HizbEighthList
  if (!HizbEighthList) {
    throw new Error(`Riwaya ${data.meta.riwayaName} does not have Hizb Eighth List data.`)
  }
  const [firstAyahId, nextJuzAyahId]: [AyahId, AyahId] = [HizbEighthList[eighthIndex], HizbEighthList[eighthIndex + 1]]
  const lastAyahId = nextJuzAyahId - 1

  return {
    firstAyahId,
    lastAyahId,
    first: findSurahAyahByAyahId(firstAyahId, data),
    last: findSurahAyahByAyahId(lastAyahId, data),
    ...res
  }
}
