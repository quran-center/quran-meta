import { findAyaidBySurah } from "./findAyaidBySurah"
import { findJuzByAyaid } from "./findJuzByAyaid"
import { AyahId, AyahNo, Juz, Surah } from "./types"
import { checkValidSurahAyah } from "./validation"

/**
 * Finds the Juz (part) of the Quran that the given Ayah (verse) belongs to.
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number. Defaults to 1 if not provided.
 * @param ayahMode - If true, the `ayah` parameter is treated as an Ayah ID instead of a Surah and Ayah number.
 * @returns The Juz (part) number that the given Ayah belongs to.
 */
export function findJuz(surah: Surah, ayah: AyahNo = 1, ayahMode = false): Juz {
  const ayahId: AyahId = ayahMode
    ? ayah
    : ((checkValidSurahAyah(surah, ayah)
      && findAyaidBySurah(surah, ayah)) as AyahId)

  return findJuzByAyaid(ayahId)
}
