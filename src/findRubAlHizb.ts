import { RiwayahsWithAll } from "./lists/types"
import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { findRubAlHizbByAyahId } from "./findRubAlHizbByAyahId"
import { AyahId, AyahNo, RubAlHizbId, Surah } from "./types"
import { checkValidSurah } from "./validation"

/**
 * Finds the Juz (part) and Rub-ul-Hizb/Maqra (quarter section) of the Quran that the given Ayah (verse) belongs to.
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number. Defaults to 1 if not provided.
 *  @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns An object containing the Juz (part) number, Hizb (section) number, and the index of the Hizb that the given Ayah belongs to.
 */
export function findRubAlHizb(
  surah: Surah,
  ayah: AyahNo = 1,
  riwaya?: RiwayahsWithAll<["SurahList", "HizbQuarterList"]>
): RubAlHizbId {
  checkValidSurah(surah)
  const ayahId: AyahId = findAyahIdBySurah(surah, ayah, riwaya)

  return findRubAlHizbByAyahId(ayahId, riwaya)
}
