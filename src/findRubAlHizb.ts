import type { RiwayaData } from "./lists/types"
import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { findRubAlHizbByAyahId } from "./findRubAlHizbByAyahId"
import type { AyahId, AyahNo, RubAlHizbId, Surah } from "./types"
import { checkValidSurah } from "./validation"

/**
 * Finds the Juz (part) and Rub-ul-Hizb/Maqra (quarter section) of the Quran that the given Ayah (verse) belongs to.
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number. Defaults to 1 if not provided.
 * @param data - The Lists object containing SurahList and HizbQuarterList.
 * @returns An object containing the Juz (part) number, Hizb (section) number, and the index of the Hizb that the given Ayah belongs to.
 */
export function findRubAlHizb(surah: Surah, ayah: AyahNo = 1, data: RiwayaData): RubAlHizbId {
  checkValidSurah(surah, data.meta)
  const ayahId: AyahId = findAyahIdBySurah(surah, ayah, data)

  return findRubAlHizbByAyahId(ayahId, data)
}
