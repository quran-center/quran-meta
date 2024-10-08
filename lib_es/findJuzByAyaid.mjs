import { JuzList } from "./lists/juzList.mjs";
import { checkValidAyahId } from "./validation.mjs";
export function findJuzByAyaid(ayaId) {
  checkValidAyahId(ayaId);
  return JuzList.findIndex((x) => x > ayaId) - 1;
}
