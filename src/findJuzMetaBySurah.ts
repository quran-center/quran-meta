import { findJuzAndShift } from "./findJuzAndShift"
import { findSurahByAyahId } from "./findSurahByAyahId"
import type { RiwayaData } from "./lists/types"
import type { AyahNo, Juz, Surah, SurahJuzMeta } from "./types"

/**
 * Finds the SurahJuzMeta for a given Surah and Ayah.
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number.
 * @param data - The Lists object for the riwaya.
 * @returns The juz containing the ayah (`leftJuz`) and its first ayah id, the juz the surah ends in
 *   (`rightJuz`) and the first ayah id after it, and the ayahs between the juz start and the surah start.
 *
 * @category Juz
 */
export function findJuzMetaBySurah(surah: Surah, ayah: AyahNo, data: RiwayaData): SurahJuzMeta {
  const { juz: leftJuz, ayahsBetweenJuzSurah, leftAyahId } = findJuzAndShift(surah, ayah, data)
  const { JuzList } = data
  let rightJuz: Juz = leftJuz
  while (rightJuz < data.meta.numJuzs && findSurahByAyahId(JuzList[rightJuz + 1], data) === surah) {
    rightJuz++
  }

  return {
    ayahsBetweenJuzSurah,
    leftAyahId,
    leftJuz,
    leftjuz: leftJuz,
    rightAyahId: JuzList[rightJuz + 1],
    rightJuz
  }
}
