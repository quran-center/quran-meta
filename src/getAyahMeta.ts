import { meta } from "./const"
import { findPage } from "./findPage"
import { findSurahByAyaid } from "./findSurahByAyaid"
import { getRubAlHizbMetaByAyaid } from "./getRubAlHizbMetaByAyaid"
import { HizbQuarterList } from "./lists/hizbList"
import { JuzList } from "./lists/juzList"
import { PageList } from "./lists/pageList"
import { SajdaList } from "./lists/sajdaList"
import { SurahList } from "./lists/surahList"
import { AyahMeta, Page } from "./types"

/**
 * Retrieves metadata for a specific ayah of the Quran.
 *
 * @param ayahId - The ayahId number to retrieve metadata for (1-6236)
 * @returns An object containing the ayah related meta, including information about the surah, juz, and quarter the ayah is in.
 * @throws RangeError If the ayahId number is not between 1 and 6236
 */
export function getAyahMeta(ayahId: Page): AyahMeta {
  if (ayahId < 1 || ayahId > meta.numAyahs)
    throw new RangeError("ayahId must be between 1 and " + meta.numAyahs)

  const quarterData = getRubAlHizbMetaByAyaid(ayahId)
  const [surah, ayah] = findSurahByAyaid(ayahId)
  const page: Page = findPage(-1, ayahId, true)
  const isSajdahAyah = SajdaList.some(([sajdaAyahId]) => sajdaAyahId === ayahId)
  const isStartOfSurah = SurahList[surah][0] + 1 === ayahId
  const isStartOfPage = PageList[page] === ayahId
  const isStartOfJuz = JuzList[quarterData.juz] === ayahId
  const isStartOfQuarter = HizbQuarterList[quarterData.rubAlHizbId] === ayahId
  const isEndOfSurah = SurahList[surah + 1][0] === ayahId
  const isEndOfPage = PageList[page + 1] - 1 === ayahId
  const isEndOfJuz = JuzList[quarterData.juz + 1] - 1 === ayahId
  const isEndOfQuarter = HizbQuarterList[quarterData.rubAlHizbId + 1] - 1 === ayahId

  return {
    ...quarterData, surah, ayah, isStartOfQuarter,
    isEndOfQuarter, isSajdahAyah, isStartOfPage, isEndOfPage,
    isStartOfJuz, isEndOfJuz, isStartOfSurah, isEndOfSurah
  }
}
