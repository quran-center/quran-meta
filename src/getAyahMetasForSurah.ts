import { getAyahMeta } from "./getAyahMeta"
import { HizbQuarterList } from "./lists/hizbQuarterList"
import { JuzList } from "./lists/juzList"
import { PageList } from "./lists/pageList"
import { SajdaList } from "./lists/sajdaList"
import { SurahList } from "./lists/surahList"
import { Surah, AyahMeta, AyahId } from "./types"
import { checkValidSurah } from "./validation"

/**
 * Retrieves metadata for all ayahs in a specific surah.
 *
 * @param surahNumber - The surah number (1-114)
 * @returns Array of AyahMeta objects for each ayah in the surah
 * @throws RangeError If the surah number is not between 1 and 114
 */
export function getAyahMetasForSurah(surahNumber: Surah): AyahMeta[] {
  checkValidSurah(surahNumber)
  const [
    startAyahId, ayahCount, surahOrder, rukuCount, name, isMeccan, page
  ] = SurahList[surahNumber]
  const endAyahId = startAyahId + ayahCount - 1
  const result: AyahMeta[] = []

  // const rubAlHizbMeta = getRubAlHizbMetaByAyahId(startAyahId as AyahId)
  let meta = getAyahMeta(startAyahId as AyahId)
  for (let ayahId = startAyahId; ayahId <= endAyahId; ayahId++) {
    // Most properties will be the same as previous ayah except for specific positions
    if (ayahId > startAyahId) {
      meta = structuredClone(meta)
      meta.ayah += 1
      // console.log(ayahId, meta.ayah, meta.page, PageList[meta.page + 1])
      meta.isStartOfSurah = false
      meta.isEndOfSurah = endAyahId === ayahId

      if (PageList[meta.page + 1] === ayahId) {
        meta.page += 1
        meta.isStartOfPage = true
      }
      else { meta.isStartOfPage = false }
      meta.isEndOfPage = PageList[meta.page + 1] === ayahId + 1

      meta.isEndOfJuz = JuzList[meta.juz + 1] === ayahId + 1
      if (JuzList[meta.juz + 1] === ayahId) {
        meta.juz += 1
        meta.juzPart = 0
        meta.hizbId += 1
        meta.isStartOfJuz = true
      }
      else { meta.isStartOfJuz = false }

      meta.isEndOfQuarter = HizbQuarterList[meta.rubAlHizbId + 1] === ayahId + 1
      if (HizbQuarterList[meta.rubAlHizbId + 1] === ayahId) {
        meta.rubAlHizbId += 1
        meta.juzPart += 1
        meta.isStartOfQuarter = true
        if (meta.juzPart === 5) meta.hizbId += 1
      }
      else { meta.isStartOfQuarter = false }

      meta.isSajdahAyah = SajdaList.some(x => x[0] === ayahId)
    }
    result.push(meta)
  }

  return result
}
