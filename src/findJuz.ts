import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { findJuzByAyahId } from "./findJuzByAyahId"
import { AyahId, AyahNo, Juz, Surah } from "./types"

/**
 * Finds the Juz (part) of the Quran that the given Ayah (verse) belongs to.
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number. Defaults to 1 if not provided.
 * @returns The Juz (part) number that the given Ayah belongs to.
 */
export function findJuz(surah: Surah, ayah: AyahNo = 1): Juz {
  const ayahId: AyahId = findAyahIdBySurah(surah, ayah)

  return findJuzByAyahId(ayahId)
}
