import { findPagebyAyahId } from "./findPagebyAyahId"
import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import { getRubAlHizbByAyahId } from "./getRubAlHizbByAyahId"
import type { RiwayaData } from "./lists/types"
import type { AyahId, AyahMeta, Page, ThumunAlHizbId } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId } from "./validation"

/**
 * Retrieves metadata for a specific ayah of the Quran.
 *
 * @param ayahId - The ayahId number to retrieve metadata for (1-6236)
 * @param data - The Lists object for the riwaya.
 * @returns An object containing the ayah related meta, including information about the surah, juz, and quarter the ayah is in.
 * @throws RangeError If the ayahId number is not between 1 and 6236
 */
export function getAyahMeta(ayahId: AyahId, data: RiwayaData): AyahMeta {
  checkValidAyahId(ayahId, data.meta)
  const { SurahList, SajdaList, PageList, RukuList, JuzList, HizbQuarterList } = data

  const getThumunData = () => {
    if ("HizbEighthList" in data && data.HizbEighthList) {
      const jj = binarySearch(data.HizbEighthList, ayahId)
      const thumunAlHizbId = (jj < 0 ? -jj - 2 : jj) as ThumunAlHizbId
      return { thumunAlHizbId }
    }
    return {}
  }

  const quarterData = getRubAlHizbByAyahId(ayahId, data)
  const [surah, ayah] = findSurahAyahByAyahId(ayahId, data)
  const page: Page = findPagebyAyahId(ayahId, data)

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
    ...getThumunData(),
    surah,
    ayah,
    page,
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
