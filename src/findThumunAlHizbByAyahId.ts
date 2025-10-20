import { getList } from "./lists/index";
import { RiwayahsWith } from "./lists/types";
import { AyahId, ThumunAlHizbId } from "./types";
import { binarySearch } from "./utils";
import { checkValidAyahId } from "./validation";

/**
 * Finds the Maqra/Rub-al-Hizb  of the Quran that contains the given Ayah (verse) ID.
 *
 * @param ayahId - The ID of the Ayah (verse) to find the Juz for.
 *  @param riwaya - The riwaya. Defaults to "Qalun" if not provided.
 * @returns The thumun of the Quran that contains the given Ayah ID.
 */
export function findThumunAlHizbByAyahId(
  ayahId: AyahId,
  riwaya: RiwayahsWith<"HizbEighthList"> = "Qalun"
): ThumunAlHizbId {
  checkValidAyahId(ayahId);
  const HizbEighthList = getList("HizbEighthList", riwaya);
  // return HizbQuarterList.findIndex(x => x > ayahId) - 1 as RubAlHizbId
  const jj = binarySearch(HizbEighthList, ayahId);
  const page = jj < 0 ? -jj - 2 : jj;
  return page as ThumunAlHizbId;
}
