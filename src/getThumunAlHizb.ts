import { HizbId, Juz, ThumunAlHizb, JuzPart, ThumunAlHizbId, RubAlHizbId } from "./types";

/**
 * Retrieves the basic metadata for a specific Eighth (thumun' al-hizb) of the Quran.
 *
 * @param quarterIndex - The index of the Eighth (thumun' al-hizb) to retrieve metadata for, where 1 is the first quarter.
 * @returns An object containing the metadata for the specified quarter, including the juz' (part), hizb (section), and the quarter (rub' al-hizb) index.
 */
export function getThumunAlHizb(
  thumunIndex: ThumunAlHizbId,
): ThumunAlHizb {
  // return HizbQuarterList[maqra]

  // const quarterIndex = HizbQuarterList.findIndex(x => x > ayahId) - 1

  // const juz = findJuzByAyahId(ayahId)
  const juz = (Math.floor((thumunIndex - 1) / 16) + 1) as Juz;
  // isValidJuz(juz)
  
  const hizbIndex = (Math.floor((thumunIndex - 1) / 8) + 1) as HizbId;
  const rubAlHizbId = (Math.floor((thumunIndex - 1) / 2) + 1) as RubAlHizbId;
  const juzPart = (thumunIndex % 16 || 16) as JuzPart;
  return { juz, hizbId: hizbIndex, juzPart, rubAlHizbId,thumunAlHizbId: thumunIndex };
}
