import { RiwayahsWithAll } from "./lists/types";
import { findAyahIdBySurah } from "./findAyahIdBySurah";
import { findThumunAlHizbByAyahId } from "./findThumunAlHizbByAyahId";
import { AyahId, AyahNo, ThumunAlHizbId, Surah } from "./types";
import { checkValidSurah } from "./validation";

/**
 * Finds the Juz (part) and thumun-ul-Hizb (Eighth section) of the Quran that the given Ayah (verse) belongs to.
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number. Defaults to 1 if not provided.
 *  @param riwaya - The riwaya. Defaults to "Qalun" if not provided.
 * @returns An object containing the Juz (part) number, Hizb (section) number, and the index of the Hizb that the given Ayah belongs to.
 */
export function findThumunAlHizb(
  surah: Surah,
  ayah: AyahNo = 1,
  riwaya: RiwayahsWithAll<["SurahList", "HizbEighthList"]> = "Qalun"
): ThumunAlHizbId {
  checkValidSurah(surah);
  const ayahId: AyahId = findAyahIdBySurah(surah, ayah, riwaya);

  return findThumunAlHizbByAyahId(ayahId, riwaya);
}



