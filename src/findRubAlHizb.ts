import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { getRubAlHizbMetaByAyahId } from "./getRubAlHizbMetaByAyahId"
import { AyahId, AyahNo, JuzHizb, Surah } from "./types"
import { checkValidSurah } from "./validation"

/**
 * Finds the Juz (part) and Rub-ul-Hizb/Maqra (quarter section) of the Quran that the given Ayah (verse) belongs to.
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number. Defaults to 1 if not provided.
 * @param ayahMode - If true, the `ayah` parameter is treated as an Ayah ID instead of a Surah and Ayah number.
 * @returns An object containing the Juz (part) number, Hizb (section) number, and the index of the Hizb that the given Ayah belongs to.
 */
export function findRubAlHizb(
  surah: Surah,
  ayah: AyahNo = 1,
  ayahMode = false
): JuzHizb {
  const ayahId: AyahId = ayahMode
    ? ayah
    : ((checkValidSurah(surah) && findAyahIdBySurah(surah, ayah)) as AyahId)

  return getRubAlHizbMetaByAyahId(ayahId)
}
