import { getSurahMeta } from "./getSurahMeta.mjs";
export function getAyaCountinSura(surah) {
  return getSurahMeta(surah)[1];
}
