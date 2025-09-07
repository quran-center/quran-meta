import { meta } from "./const";
import { findJuzAndShift } from "./findJuzAndShift";
import { findSurahByAyahId } from "./findSurahByAyahId";
import { getList } from "./lists/index";
import { RiwayahsWith } from "./lists/types";
import { AyahNo, Juz, SurahJuzMeta as SurahJuzMeta, Surah } from "./types";

/**
 * Finds the SurahJuzMeta for a given Surah and Ayah.
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number.
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns The SurahJuzMeta object containing the left juz, ayahs between juz and surah, right juz, ayah ID of first ayah in left juz, and last ayah ID of right juz .
 */
export function findJuzMetaBySurah(
  surah: Surah,
  ayah: AyahNo = 1,
  riwaya?: RiwayahsWith<"JuzList">
): SurahJuzMeta {
  const {
    juz: leftjuz,
    ayahsBetweenJuzSurah,
    leftAyahId,
  } = findJuzAndShift(surah, ayah);
  const JuzList = getList("JuzList", riwaya);
  let rightJuz: Juz = leftjuz;
  while (
    rightJuz < meta.numJuzs &&
    findSurahByAyahId(JuzList[rightJuz + 1]) === surah
  ) {
    rightJuz++;
  }

  return {
    leftjuz,
    ayahsBetweenJuzSurah,
    rightJuz,
    leftAyahId,
    rightAyahId: JuzList[rightJuz + 1], // todo check if this is correct or should be -1
  };
}
