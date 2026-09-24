import type { RiwayahsWith } from "./lists/types"
import { findAyahIdBySurah } from "./findAyahIdBySurah"
import { findThumunAlHizbByAyahId } from "./findThumunAlHizbByAyahId"
import type { AyahId, AyahNo, Surah, ThumunAlHizbId } from "./types"
import { checkValidSurah } from "./validation"

/**
 * Finds the thumun al-hizb (eighth of a hizb) that the given ayah belongs to.
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number.
 * @param data - The Lists object of a riwaya that has thumun al-hizb data (Qalun).
 * @returns The thumun al-hizb number, 1 to 480.
 *
 * @category Hizb
 */
export function findThumunAlHizb(surah: Surah, ayah: AyahNo, data: RiwayahsWith<"HizbEighthList">): ThumunAlHizbId {
  checkValidSurah(surah, data.meta)
  const ayahId: AyahId = findAyahIdBySurah(surah, ayah, data)

  return findThumunAlHizbByAyahId(ayahId, data)
}
