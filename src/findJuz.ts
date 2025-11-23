import { findAyahIdBySurah } from "./findAyahIdBySurah"
import type { RiwayaData } from "./lists/types"
import { findJuzByAyahId } from "./findJuzByAyahId"
import type { AyahId, AyahNo, Juz, Surah } from "./types"

/**
 * Finds the Juz (part) of the Quran that the given Ayah (verse) belongs to.
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number. Defaults to 1 if not provided.
 * @param lists - The Lists object containing JuzList and SurahList.
 * @returns The Juz (part) number that the given Ayah belongs to.
 */
export function findJuz(surah: Surah, ayah: AyahNo = 1, lists: RiwayaData): Juz {
  const ayahId: AyahId = findAyahIdBySurah(surah, ayah, lists)

  return findJuzByAyahId(ayahId, lists)
}
