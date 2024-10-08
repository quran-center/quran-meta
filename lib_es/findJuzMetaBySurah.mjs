import { meta } from "./const.mjs";
import { findJuzAndShift } from "./findJuzAndShift.mjs";
import { findSurahByAyaid } from "./findSurahByAyaid.mjs";
import { JuzList } from "./lists/juzList.mjs";
export function findJuzMetaBySurah(surah, ayah = 1) {
  const {
    juz: leftjuz,
    ayahsBetweenJuzSurah,
    leftAyahId
  } = findJuzAndShift(surah, ayah);
  let rightJuz = leftjuz;
  while (rightJuz < meta.numJuzs && findSurahByAyaid(JuzList[rightJuz + 1])[0] === surah) {
    rightJuz++;
  }
  return {
    leftjuz,
    ayahsBetweenJuzSurah,
    rightJuz,
    leftAyahId,
    rightAyahId: JuzList[rightJuz + 1]
  };
}
