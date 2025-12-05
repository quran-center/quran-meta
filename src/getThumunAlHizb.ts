import { getRubAlHizb } from "./getRubAlHizb"
import type { ThumunAlHizb, ThumunAlHizbId, RubAlHizbId } from "./types"

/**
 * Retrieves the basic metadata for a specific Eighth (thumun' al-hizb) of the Quran.
 *
 * @param eighthIndex - The index of the Eighth (thumun' al-hizb) to retrieve metadata for, where 1 is the first quarter.
 * @returns An object containing the metadata for the specified quarter, including the juz' (part), hizb (section), and the quarter (rub' al-hizb) index.
 */
export function getThumunAlHizb(eighthIndex: ThumunAlHizbId): ThumunAlHizb {
  const rubAlHizb = getRubAlHizb((Math.floor((eighthIndex - 1) / 2) + 1) as RubAlHizbId)
  return { ...rubAlHizb, thumunAlHizbId: eighthIndex }
}
