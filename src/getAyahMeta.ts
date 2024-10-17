import { meta } from "./const"
import { findJuzHizbByAyaid } from "./findJuzHizbByAyaid"
import { findPage } from "./findPage"
import { findSurahByAyaid } from "./findSurahByAyaid"
import { HizbQuarterList } from "./lists/hizbList"
import { JuzList } from "./lists/juzList"
import { PageList } from "./lists/pageList"
import { SajdaList } from "./lists/sajdaList"
import { SuraList } from "./lists/surahList"
import { AyahMeta, Page } from "./types"

/**
 * Retrieves metadata for a specific ayah of the Quran.
 *
 * @param ayahId - The ayahId number to retrieve metadata for (0-6236)
 * @returns An object containing the page number, first ayah, and last ayah on the page
 * @throws RangeError If the ayahId number is not between 1 and 6236
 */

export function getAyahMeta(ayahId: Page): AyahMeta {
  // todo rename to getPageMeta in next major version
  if (ayahId < 1 || ayahId > meta.numAyas)
    throw new RangeError("pagenum must be between 1 and " + meta.numPages)

  const quarterData = findJuzHizbByAyaid(ayahId)
  const [surah, ayah] = findSurahByAyaid(ayahId)
  const page: Page = findPage(-1, ayahId, true)
  const isSajdahAyah = SajdaList.some(([sajdaAyahId]) => sajdaAyahId === ayahId)
  const isStartOfSurah = SuraList[surah][0] + 1 === ayahId
  const isStartOfPage = PageList[page] === ayahId
  const isStartOfJuz = JuzList[quarterData.juz] === ayahId
  const isStartOfQuarter = HizbQuarterList[quarterData.maqraId] === ayahId
  const isEndOfSurah = SuraList[surah + 1][0] === ayahId
  const isEndOfPage = PageList[page + 1] - 1 === ayahId
  const isEndOfJuz = JuzList[quarterData.juz + 1] - 1 === ayahId
  const isEndOfQuarter = HizbQuarterList[quarterData.maqraId + 1] - 1 === ayahId

  return {
    ...quarterData, surah, ayah, isStartOfQuarter,
    isEndOfQuarter, isSajdahAyah, isStartOfPage, isEndOfPage,
    isStartOfJuz, isEndOfJuz, isStartOfSurah, isEndOfSurah
  }
}