import { meta } from "./const"
import { findJuzAndShift } from "./findJuzAndShift"
import { findSurahByAyahId } from "./findSurahByAyahId"
import { JuzList } from "./lists/juzList"
import { AyahNo, Juz, JuzMeta, Surah } from "./types"

/**
 * Finds the JuzMeta for a given Surah and Ayah.
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number.
 * @returns The JuzMeta object containing the left juz, ayahs between juz and surah, right juz, left ayah ID, and right ayah ID.
 */
export function findJuzMetaBySurah(surah: Surah, ayah: AyahNo = 1): JuzMeta {
  const {
    juz: leftjuz,
    ayahsBetweenJuzSurah,
    leftAyahId
  } = findJuzAndShift(surah, ayah)

  let rightJuz: Juz = leftjuz
  while (
    rightJuz < meta.numJuzs
    && findSurahByAyahId(JuzList[rightJuz + 1])[0] === surah
  ) {
    rightJuz++
  }

  return {
    leftjuz,
    ayahsBetweenJuzSurah,
    rightJuz,
    leftAyahId,
    rightAyahId: JuzList[rightJuz + 1]
  }
}
