import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { findJuzByAyahId } from "./findJuzByAyahId"
import { findSurahByAyahId } from "./findSurahByAyahId"

import { getList } from "./lists/index"
import { RiwayahsWith } from "./lists/types"
import { AyahCountBetweenJuzSurah, AyahId, AyahNo, Juz, Surah } from "./types"
import { checkValidAyahId } from "./validation"

/**
 * Finds the juz (section) that contains the specified ayah (verse) and calculates the number of ayahs between the start of the juz and the start of the surah (chapter) that contains the ayah.
 *
 * @param surah - The surah (chapter) that contains the ayah.
 * @param ayah - The ayah (verse) number.
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns An object containing the following properties:
 *   - `juz`: The juz (section) that contains the ayah.
 *   - `leftAyahId`: The ayah ID of the first ayah in the juz.
 *   - `ayahsBetweenJuzSurah`: The number of ayahs between the start of the juz and the start of the surah (positive if the surah starts is in the juz, negative if the surah starts before the juz).
 */
export function findJuzAndShift(
  surah: Surah,
  ayah: AyahNo,
  riwaya: RiwayahsWith<"JuzList"> & RiwayahsWith<"SurahList"> = "Hafs"
): {
  juz: Juz
  leftAyahId: AyahId
  ayahsBetweenJuzSurah: AyahCountBetweenJuzSurah
} {
  const ayahId: AyahId = findAyahIdBySurah(surah, ayah)
  const JuzList = getList("JuzList", riwaya)
  const SurahList = getList("SurahList", riwaya)
  const juz = findJuzByAyahId(ayahId)
  const juzLeftAyahId = JuzList[juz]
  const [surahStartAyahId] = SurahList[surah]
  return {
    juz,
    ayahsBetweenJuzSurah: (surahStartAyahId
      - juzLeftAyahId) as AyahCountBetweenJuzSurah,
    leftAyahId: juzLeftAyahId
  }
}

/**
 * Finds the Juz number and calculates the shift between Juz start and Surah start for a given Ayah ID
 *
 * @param ayahId - The unique identifier of an Ayah (verse) in the Quran
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns An object containing:
 * - juz: The Juz number where the Ayah is located
 * - leftAyahId: The starting Ayah ID of the Juz
 * - ayahsBetweenJuzSurah: The number of Ayahs between the Juz start and the Surah start
 *
 * @throws Error If the provided Ayah ID is invalid
 */
export function findJuzAndShiftByAyahId(
  ayahId: AyahId,
  riwaya?: RiwayahsWith<"JuzList"> & RiwayahsWith<"SurahList">
): {
  juz: Juz
  leftAyahId: AyahId
  ayahsBetweenJuzSurah: AyahCountBetweenJuzSurah
} {
  checkValidAyahId(ayahId)
  const JuzList = getList("JuzList", riwaya)
  const SurahList = getList("SurahList", riwaya)
  const juz = findJuzByAyahId(ayahId)
  const leftAyahId = JuzList[juz]
  const surah = findSurahByAyahId(ayahId)
  const [surahStartAyahId] = SurahList[surah]
  return {
    juz,
    ayahsBetweenJuzSurah: (surahStartAyahId
      - leftAyahId) as AyahCountBetweenJuzSurah,
    leftAyahId
  }
}
