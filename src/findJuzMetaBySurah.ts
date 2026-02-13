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
 * @returns The SurahJuzMeta object containing the left juz, ayahs between juz and surah, right juz, ayah ID of first ayah in left juz, and last ayah ID of right juz .
 */
export function findJuzMetaBySurah(surah: Surah, ayah: AyahNo = 1, data: RiwayaData): SurahJuzMeta {
  const { juz: leftjuz, ayahsBetweenJuzSurah, leftAyahId } = findJuzAndShift(surah, ayah, data)
  const { JuzList } = data
  let rightJuz: Juz = leftjuz
  while (rightJuz < data.meta.numJuzs && findSurahByAyahId(JuzList[rightJuz + 1], data) === surah) {
    rightJuz++
  }

  return {
    ayahsBetweenJuzSurah,
    leftAyahId,
    leftjuz,
    rightAyahId: JuzList[rightJuz + 1],
    rightJuz // Todo check if this is correct or should be -1
  }
}
