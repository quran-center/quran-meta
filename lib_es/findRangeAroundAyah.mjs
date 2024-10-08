import { meta } from "./const.mjs";
import { findAyaidBySurah } from "./findAyaidBySurah.mjs";
import { findJuzByAyaid } from "./findJuzByAyaid.mjs";
import { findPage } from "./findPage.mjs";
import { JuzList } from "./lists/juzList.mjs";
import { PageList } from "./lists/pageList.mjs";
import { SuraList } from "./lists/surahList.mjs";
import { checkValidSurah } from "./validation.mjs";
export function findRangeAroundAyah(surah, ayah, mode, ayahMode = false) {
  const ayahId = ayahMode ? ayah : checkValidSurah(surah) && findAyaidBySurah(surah, ayah);
  switch (mode) {
    case "juz": {
      const juz = findJuzByAyaid(ayahId);
      return [JuzList[juz], JuzList[juz + 1] - 1];
    }
    case "surah": {
      return [SuraList[surah][0] + 1, SuraList[surah + 1][0]];
    }
    case "ayah": {
      return [ayahId, ayahId];
    }
    case "page": {
      const page = findPage(-1, ayahId, true);
      return [PageList[page], PageList[page + 1] - 1];
    }
    case "all":
    default:
      return [1, meta.numAyas];
  }
}
