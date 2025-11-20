import { getAyahMeta } from "./getAyahMeta"
import { getListsOfRiwaya } from "./lists/index"
import { RiwayaName } from "./lists/types"
import { Surah, AyahMeta, AyahId, JuzPart } from "./types"
import { checkValidSurah } from "./validation"

/**
 * Retrieves metadata for all ayahs in a specific surah.
 *
 * @param surahNumber - The surah number (1-114)
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns Array of AyahMeta objects for each ayah in the surah
 * @throws RangeError If the surah number is not between 1 and 114
 */
export function getAyahMetasForSurah(surahNumber: Surah, riwaya: RiwayaName = "Hafs"): AyahMeta[] {
  checkValidSurah(surahNumber)
  const { SurahList, SajdaList, PageList, RukuList, JuzList, HizbQuarterList } = getListsOfRiwaya(riwaya)

  const [
    startAyahId, ayahCount // , surahOrder, rukuCount, name, isMeccan, page
  ] = SurahList[surahNumber]
  const endAyahId = startAyahId + ayahCount - 1
  const result: AyahMeta[] = []

  // const rubAlHizbMeta = getRubAlHizbMetaByAyahId(startAyahId as AyahId)
  let meta = getAyahMeta(startAyahId as AyahId, riwaya)
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

      if (RukuList[meta.ruku + 1] === ayahId) {
        meta.ruku += 1
        meta.isStartOfRuku = true
      }
      else { meta.isStartOfRuku = false }
      meta.isEndOfRuku = RukuList[meta.ruku + 1] === ayahId + 1

      meta.isEndOfJuz = JuzList[meta.juz + 1] === ayahId + 1
      if (JuzList[meta.juz + 1] === ayahId) {
        meta.juz += 1
        meta.hizbId += 1
        meta.isStartOfJuz = true
      }
      else { meta.isStartOfJuz = false }

      meta.isEndOfQuarter = HizbQuarterList[meta.rubAlHizbId + 1] === ayahId + 1
      if (HizbQuarterList[meta.rubAlHizbId + 1] === ayahId) {
        meta.rubAlHizbId += 1
        meta.juzPart = meta.isStartOfJuz ? 1 : meta.juzPart + 1 as JuzPart
        meta.isStartOfQuarter = true
        if (meta.juzPart === 5) meta.hizbId += 1
      }
      else { meta.isStartOfQuarter = false }

      meta.isSajdahAyah = SajdaList.some(x => x === ayahId)
    }
    result.push(meta)
  }

  return result
}
