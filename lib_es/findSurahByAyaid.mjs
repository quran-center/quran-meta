import { SuraList } from "./lists/surahList.mjs";
import { checkValidAyahId } from "./validation.mjs";
export function findSurahByAyaid(ayaId) {
  checkValidAyahId(ayaId);
  const suraNum = SuraList.findIndex((x) => x[0] >= ayaId) - 1;
  return [suraNum, ayaId - SuraList[suraNum][0]];
}
