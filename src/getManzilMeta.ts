import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId";
import { getList } from "./lists/index";
import { RiwayahsWith } from "./lists/types";
import { AyahId, ManzilMeta } from "./types";
import { checkValidManzil } from "./validation";

/**
 * Retrieves metadata for a specific Manzil (section) of the Quran
 *
 * @param manzilNum - The number of the Manzil (1-7)
 *   @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 *   @returns The metadata for the specified Manzil containing:
 *  - manzilNum: The Manzil number
 *  - firstAyahId: ID of the first ayah in the Manzil
 *  - lastAyahId: ID of the last ayah in the Manzil
 *  - first: Surah and ayah details of the first ayah
 *  - last: Surah and ayah details of the last ayah
 * @throws Will throw an error if manzilNum is invalid
 */
export function getManzilMeta(
  manzilNum: number,
  riwaya?: RiwayahsWith<"ManzilList">
): ManzilMeta {
  checkValidManzil(manzilNum);
  const ManzilList = getList("ManzilList", riwaya);
  const [firstAyahId, nextManzilAyahId]: [AyahId, AyahId] = [
    ManzilList[manzilNum],
    ManzilList[manzilNum + 1],
  ];
  const lastAyahId = nextManzilAyahId - 1;
  return {
    manzilNum,
    firstAyahId,
    lastAyahId,
    first: findSurahAyahByAyahId(firstAyahId),
    last: findSurahAyahByAyahId(lastAyahId),
  };
}
