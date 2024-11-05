import { JuzHizb } from "./types"

/**
 * Retrieves the metadata for a specific quarter (rub' al-hizb) of the Quran.
 *
 * @param quarterIndex - The index of the quarter (rub' al-hizb) to retrieve metadata for, where 1 is the first quarter.
 * @returns An object containing the metadata for the specified quarter, including the juz' (part), hizb (section), and the quarter (rub' al-hizb) index.
 */
export function getRubAlHizbMeta(quarterIndex: number): JuzHizb {
  // return HizbQuarterList[maqra]

  // const quarterIndex = HizbQuarterList.findIndex(x => x > ayaId) - 1

  // const juz = findJuzByAyaid(ayaId)
  const juz = Math.floor((quarterIndex - 1) / 8) + 1

  const hizbIndex = Math.floor((quarterIndex - 1) / 4) + 1
  const juzPart = quarterIndex % 8 || 8
  return { juz, hizbId: hizbIndex, juzPart, rubAlHizbId: quarterIndex }
}
