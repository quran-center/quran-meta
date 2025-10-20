import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId";
import { getList } from "./lists/index";
import { RiwayahsWith } from "./lists/types";
import {getThumunAlHizb} from "./getThumunAlHizb";
import { ThumunAlHizbMeta, ThumunAlHizbId, AyahId } from "./types";

/**
 * Retrieves the metadata for a specific quarter (rub' al-hizb) of the Quran.
 *
 * @param eighthIndex - The index of the Eighth (thumun' al-hizb) to retrieve metadata for, where 1 is the first quarter.
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns An object containing the metadata for the specified quarter, including the juz' (part), hizb (section), and the quarter (rub' al-hizb) index.
 */
export function getRubAlHizbMeta(
 eighthIndex: ThumunAlHizbId,
  riwaya: RiwayahsWith<"HizbEighthList"> = "Qalun"
): ThumunAlHizbMeta {
  const res = getThumunAlHizb(eighthIndex);
  const HizbEighthList = getList("HizbEighthList", riwaya);
  const [firstAyahId, nextJuzAyahId]: [AyahId, AyahId] = [
    HizbEighthList[eighthIndex],
    HizbEighthList[eighthIndex + 1],
  ];
  const lastAyahId = nextJuzAyahId - 1;

  return {
    firstAyahId,
    lastAyahId,
    first: findSurahAyahByAyahId(firstAyahId),
    last: findSurahAyahByAyahId(lastAyahId),
    ...res,
  };
}
