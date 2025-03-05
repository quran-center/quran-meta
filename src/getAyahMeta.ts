import { findPagebyAyahId } from "./findPagebyAyahId"
import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import { getRubAlHizbMetaByAyahId } from "./getRubAlHizbMetaByAyahId"
import { HizbQuarterList } from "./lists/hizbQuarterList"
import { JuzList } from "./lists/juzList"
import { PageList } from "./lists/pageList"
import { RukuList } from "./lists/rukuList"
import { SajdaList } from "./lists/sajdaList"
import { SurahList } from "./lists/surahList"
import { AyahId, AyahMeta, Page } from "./types"
import { binarySearch } from "./utils"
import { checkValidAyahId } from "./validation"

/**
 * Retrieves metadata for a specific ayah of the Quran.
 *
 * @param ayahId - The ayahId number to retrieve metadata for (1-6236)
 * @returns An object containing the ayah related meta, including information about the surah, juz, and quarter the ayah is in.
 * @throws RangeError If the ayahId number is not between 1 and 6236
 */
export function getAyahMeta(ayahId: AyahId): AyahMeta {
  checkValidAyahId(ayahId)

  const quarterData = getRubAlHizbMetaByAyahId(ayahId)
  const [surah, ayah] = findSurahAyahByAyahId(ayahId)
  const page: Page = findPagebyAyahId(ayahId)
  const isSajdahAyah = SajdaList.some(([sajdaAyahId]) => sajdaAyahId === ayahId)
  const isStartOfSurah = SurahList[surah][0] === ayahId
  const isStartOfPage = PageList[page] === ayahId
  // const isStartOfRuku = RukuList[page] === ayahId
  const isStartOfJuz = JuzList[quarterData.juz] === ayahId
  const isStartOfQuarter = HizbQuarterList[quarterData.rubAlHizbId] === ayahId
  const isEndOfSurah = SurahList[surah + 1][0] - 1 === ayahId
  const isEndOfPage = PageList[page + 1] - 1 === ayahId
  const isEndOfJuz = JuzList[quarterData.juz + 1] - 1 === ayahId
  const isEndOfRuku = JuzList[quarterData.juz + 1] - 1 === ayahId
  const isEndOfQuarter = HizbQuarterList[quarterData.rubAlHizbId + 1] - 1 === ayahId

  return {
    ...quarterData, surah, ayah, page, isStartOfQuarter,
    isEndOfQuarter, isSajdahAyah, isStartOfPage, isEndOfPage,
    isStartOfJuz, isEndOfJuz, isStartOfSurah, isEndOfSurah
  }
}
