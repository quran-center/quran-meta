/**
 * Check data from Quran-cloud
 * https://api.alquran.cloud/v1/meta
 */

import { HizbQuarterList, JuzList, ManzilList, PageList, RukuList, SajdaList, SurahList } from "../../../src/lists/HafsLists"
import { quranMeta, meta } from "../../../src"
import { AyahNo, SurahInfo, Juz, Surah } from "../../../src/types"
const { findAyahIdBySurah, findJuz, findRubAlHizb } = quranMeta({ riwaya: "Hafs" })

import quranCloud from "./../data/qcloud-meta.json"

export function checkQuranCloud() {
  console.log("=====================================")
  console.log("\x1b[33mChecking against QuranCloud data\x1b[0m")
  console.log("-------------------------------------")

  for (let surahNo: Surah = 1; surahNo <= meta.numSurahs; surahNo++) {
    const [
      _startAyahId,
      ayahCount,
      _surahOrder,
      _rukuCount,
      _name,
      _isMeccan
    ]: SurahInfo = SurahList[surahNo]
    const sura = quranCloud.data.surahs.references[surahNo - 1]

    if (ayahCount !== sura.numberOfAyahs) console.warn("Error QuranCloud surah: ", ayahCount, sura)
    if (surahNo !== sura.number) console.warn("Error QuranCloud surah: ", surahNo, sura)
    // if (startAyahId !== sura[0]) console.warn("Error QuranCloud surah: ", startAyahId, sura)
    // if (rukuCount !== sura[3]) console.warn("Error QuranCloud surah: ", rukuCount, sura)
  }

  for (let juzNo: Juz = 1; juzNo <= meta.numJuzs; juzNo++) {
    const ayahId = JuzList[juzNo]
    const { surah, ayah } = quranCloud.data.juzs.references[juzNo - 1] as { surah: Surah, ayah: AyahNo }

    if (juzNo !== findJuz(surah, ayah)) console.warn("Error QuranCloud juz: ", ayahId, surah, ayah)
    if (ayahId !== findAyahIdBySurah(surah, ayah)) console.warn("Error QuranCloud juz: ", ayahId, surah, ayah)
  }

  for (let rubHizb: Juz = 1; rubHizb <= meta.numRubAlHizbs; rubHizb++) {
    const ayahId = HizbQuarterList[rubHizb]
    const { surah, ayah } = quranCloud.data.hizbQuarters.references[rubHizb - 1] as { surah: Surah, ayah: AyahNo }

    if (rubHizb !== findRubAlHizb(surah, ayah)) console.warn("Error QuranCloud rubAlHizb: ", ayahId, surah, ayah)
    if (ayahId !== findAyahIdBySurah(surah, ayah)) console.warn("Error QuranCloud findRubAlHizb: ", ayahId, surah, ayah)
  }

  for (let manzil = 1; manzil <= meta.numManzils; manzil++) {
    const ayahId = ManzilList[manzil]
    const { surah, ayah } = quranCloud.data.manzils.references[manzil - 1] as { surah: Surah, ayah: AyahNo }

    if (ayahId !== findAyahIdBySurah(surah, ayah)) console.warn("Error QuranCloud manzil: ", ayahId, surah, ayah)
  }

  for (let rukuNo = 1; rukuNo <= meta.numRukus; rukuNo++) {
    const ayahId = RukuList[rukuNo]
    const { surah, ayah } = quranCloud.data.rukus.references[rukuNo - 1] as { surah: Surah, ayah: AyahNo }

    if (ayahId !== findAyahIdBySurah(surah, ayah)) console.warn("Error QuranCloud ruku ", ayahId, surah, ayah)
  }

  for (let page = 1; page <= meta.numPages; page++) {
    const ayahId = PageList[page]
    const { surah, ayah } = quranCloud.data.pages.references[page - 1] as { surah: Surah, ayah: AyahNo }

    if (ayahId !== findAyahIdBySurah(surah, ayah)) console.warn("Error QuranCloud page: ", ayahId, surah, ayah)
  }

  for (let sajda = 0; sajda < meta.numSajdas; sajda++) {
    const ayahId = SajdaList[sajda]
    const { surah, ayah } = quranCloud.data.sajdas.references[sajda] as { surah: Surah, ayah: AyahNo }

    if (ayahId !== findAyahIdBySurah(surah, ayah)) console.warn("Error QuranCloud sajda: ", ayahId, surah, ayah)
  }
}
