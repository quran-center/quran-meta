import { findPagebyAyahId } from "./findPagebyAyahId"
import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import { getRubAlHizbByAyahId } from "./getRubAlHizbByAyahId"
import { findThumunAlHizbByAyahId } from "./findThumunAlHizbByAyahId"
import { getListsOfRiwaya } from "./lists/index"
import { RiwayaName } from "./lists/types"
import { AyahId, AyahMeta, Page } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId } from "./validation"

/**
 * Retrieves metadata for a specific ayah of the Quran.
 *
 * @param ayahId - The ayahId number to retrieve metadata for (1-6236)
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns An object containing the ayah related meta, including information about the surah, juz, and quarter the ayah is in.
 * @throws RangeError If the ayahId number is not between 1 and 6236
 */
export function getAyahMeta(ayahId: AyahId, riwaya: RiwayaName = "Hafs"): AyahMeta {
  checkValidAyahId(ayahId)
  const { SurahList, PageList, JuzList, HizbQuarterList, RukuList, SajdaList } = getListsOfRiwaya(riwaya)
  let thumunAlHizbId
  if ("HizbEighthList" in getListsOfRiwaya(riwaya)) {
    // add thumun functions here
    thumunAlHizbId = findThumunAlHizbByAyahId(ayahId, riwaya as "Qalun")
  }

  const quarterData = getRubAlHizbByAyahId(ayahId, riwaya)
  const [surah, ayah] = findSurahAyahByAyahId(ayahId, riwaya)
  const page: Page = findPagebyAyahId(ayahId, riwaya)

  // const isSajdahAyah = SajdaList.some(([sajdaAyahId]) => sajdaAyahId === ayahId)
  const isSajdahAyah = binarySearch(SajdaList, ayahId, (a, b) => a - b) >= 0

  const rk = binarySearch(RukuList, ayahId)
  const isStartOfRuku = rk > 0
  const ruku = isStartOfRuku ? rk : -rk - 2

  const isStartOfSurah = SurahList[surah][0] === ayahId
  const isStartOfPage = PageList[page] === ayahId
  const isStartOfJuz = JuzList[quarterData.juz] === ayahId
  const isStartOfQuarter = HizbQuarterList[quarterData.rubAlHizbId] === ayahId
  const isEndOfSurah = SurahList[surah + 1][0] - 1 === ayahId
  const isEndOfPage = PageList[page + 1] - 1 === ayahId
  const isEndOfJuz = JuzList[quarterData.juz + 1] - 1 === ayahId
  const isEndOfRuku = binarySearch(RukuList, ayahId + 1) > 0
  const isEndOfQuarter = HizbQuarterList[quarterData.rubAlHizbId + 1] - 1 === ayahId

  return {
    ...quarterData,
    surah,
    ayah,
    page,
    ...(thumunAlHizbId !== undefined ? { thumunAlHizbId } : {}),
    isStartOfQuarter,
    isEndOfQuarter,
    isSajdahAyah,
    isStartOfPage,
    isEndOfPage,
    ruku,
    isStartOfJuz,
    isEndOfJuz,
    isStartOfSurah,
    isEndOfSurah,
    isStartOfRuku,
    isEndOfRuku
  }
}
