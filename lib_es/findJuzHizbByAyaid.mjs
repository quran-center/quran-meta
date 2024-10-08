import { findJuzByAyaid } from "./findJuzByAyaid.mjs";
import { HizbQuarterList } from "./lists/hizbList.mjs";
import { checkValidAyahId } from "./validation.mjs";
export function findJuzHizbByAyaid(ayaId) {
  checkValidAyahId(ayaId);
  const juz = findJuzByAyaid(ayaId);
  const quarterIndex = HizbQuarterList.findIndex((x) => x > ayaId) - 1;
  const hizb = quarterIndex % 8 || 8;
  return { juz, hizb, id: quarterIndex };
}
