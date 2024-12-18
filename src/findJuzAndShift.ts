import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { findJuzByAyahId } from "./findJuzByAyahId"
import { findSurahByAyahId } from "./findSurahByAyahId"
import { JuzList } from "./lists/juzList"
import { SurahList } from "./lists/surahList"
import { AyahId, AyahNo, Juz, Surah } from "./types"
import { checkValidAyahId, checkValidSurah } from "./validation"

/**
 * Finds the juz (section) that contains the specified ayah (verse) and calculates the number of ayahs between the start of the juz and the start of the surah (chapter) that contains the ayah.
 *
 * @param surah - The surah (chapter) that contains the ayah.
 * @param ayah - The ayah (verse) number.
 * @param ayahMode - A boolean flag indicating whether the `ayah` parameter represents an ayah number or an ayah ID.
 * @returns An object containing the following properties:
 *   - `juz`: The juz (section) that contains the ayah.
 *   - `leftAyahId`: The ayah ID of the first ayah in the juz.
 *   - `ayahsBetweenJuzSurah`: The number of ayahs between the start of the juz and the start of the surah (positive if the surah starts is in the juz, negative if the surah starts before the juz).
 */
export function findJuzAndShift(
  surah: Surah,
  ayah: AyahNo,
  ayahMode = false
): {
    juz: Juz
    leftAyahId: AyahId
    ayahsBetweenJuzSurah: number
  } {
  const ayahId: AyahId = ayahMode
    ? ((checkValidAyahId(ayah) && ayah) as AyahId)
    : ((checkValidSurah(surah) && findAyahIdBySurah(surah, ayah)) as AyahId)

  const juz = findJuzByAyahId(ayahId)
  const leftAyahId = JuzList[juz]
  if (ayahMode) [surah] = findSurahByAyahId(ayahId)
  const [surahStartAyahId] = SurahList[surah]
  return {
    juz,
    ayahsBetweenJuzSurah: surahStartAyahId - leftAyahId,
    leftAyahId
  }
}
