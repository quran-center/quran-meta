import { meta } from "./const";
import { findJuzAndShift } from "./findJuzAndShift";
import { findSurahByAyaid } from "./findSurahByAyaid";
import { JuzList } from "./lists/juzList";
import { AyahNo, Juz, JuzMeta, Surah } from "./types";

/**
 * for given ayah return [starting juz, number of ayahsFrom beginning of that juz, right juz, number of ayahs in surah
 * @param {*} suraNumber
 * @param {*} ayaNumber
 * @returns [leftjuz, ayahsFromStartOfJuz, rightJuz, ayahsinSurah,leftAyahId,rightAyahId]
 */
export function findJuzMetaBySurah(surah: Surah, ayah: AyahNo = 1): JuzMeta {
  const {
    juz: leftjuz, ayahsBetweenJuzSurah, leftAyahId,
  } = findJuzAndShift(surah, ayah);

  let rightJuz: Juz = leftjuz;
  while (rightJuz < meta.numJuzs &&
    findSurahByAyaid(JuzList[rightJuz + 1])[0] == surah)
    rightJuz++;

  return {
    leftjuz,
    ayahsBetweenJuzSurah,
    rightJuz,
    leftAyahId,
    rightAyahId: JuzList[rightJuz + 1],
  };
}
