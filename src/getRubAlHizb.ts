import type { HizbId, Juz, JuzPart, RubAlHizb, RubAlHizbId } from "./types"

/**
 * Retrieves the basic metadata for a specific quarter (rub' al-hizb) of the Quran.
 *
 * @param quarterIndex - The index of the quarter (rub' al-hizb) to retrieve metadata for, where 1 is the first quarter.
 *  @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns An object containing the metadata for the specified quarter, including the juz' (part), hizb (section), and the quarter (rub' al-hizb) index.
 */
export function getRubAlHizb(quarterIndex: RubAlHizbId): RubAlHizb {
  // Return HizbQuarterList[maqra]

  // Const quarterIndex = HizbQuarterList.findIndex(x => x > ayahId) - 1

  // Const juz = findJuzByAyahId(ayahId)
  const juz = (Math.floor((quarterIndex - 1) / 8) + 1) as Juz
  // IsValidJuz(juz)

  const hizbIndex = (Math.floor((quarterIndex - 1) / 4) + 1) as HizbId
  const juzPart = (quarterIndex % 8 || 8) as JuzPart
  return { hizbId: hizbIndex, juz, juzPart, rubAlHizbId: quarterIndex }
}
