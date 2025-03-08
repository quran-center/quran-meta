/**
 * Check data from Quran-cloud
 * https://api.alquran.cloud/v1/meta
 */

import { findPagebyAyahId, findAyahIdBySurah, findJuz, findRubAlHizb, getAyahMeta, getRubAlHizbMetaByAyahId, HizbQuarterList, Juz, JuzList, ManzilList, meta, PageList, RukuList, SajdaList, Surah, SurahList, SurahMeta } from "../../src"
import { AyahNo, AyahId, Manzil, Page, Ruku } from "../../src/types"


import quranCloud from "./data/qcloud-meta.json"

export function checkQuranCloud() {
    console.log("Checking against QuranCloud data")
  
    for (let surahNo: Surah = 1; surahNo <= meta.numSurahs; surahNo++) {
      const [
        startAyahId,
        ayahCount,
        surahOrder,
        rukuCount,
        name,
        isMeccan,
        page
      ]: SurahMeta = SurahList[surahNo]
      const sura = quranCloud.data.surahs.references[surahNo - 1]
  
      if (ayahCount !== sura.numberOfAyahs) console.warn("error QuranCloud surah: ", ayahCount, sura)
      if (surahNo !== sura.number) console.warn("error QuranCloud surah: ", surahNo, sura)
      // if (startAyahId !== sura[0]) console.warn("error QuranCloud surah: ", startAyahId, sura)
      // if (rukuCount !== sura[3]) console.warn("error QuranCloud surah: ", rukuCount, sura)
    }
  
    for (let juzNo: Juz = 1; juzNo <= meta.numJuzs; juzNo++) {
      const ayahId = JuzList[juzNo]
      const { surah, ayah } = quranCloud.data.juzs.references[juzNo - 1] as { surah: Surah, ayah: AyahNo }
  
      if (juzNo !== findJuz(surah, ayah)) console.warn("error QuranCloud juz: ", ayahId, surah, ayah)
      if (ayahId !== findAyahIdBySurah(surah, ayah)) console.warn("error QuranCloud juz: ", ayahId, surah, ayah)
    }
  
    for (let rubHizb: Juz = 1; rubHizb <= meta.numRubAlHizbs; rubHizb++) {
      const ayahId = HizbQuarterList[rubHizb]
      const { surah, ayah } = quranCloud.data.hizbQuarters.references[rubHizb - 1]
  
      if (rubHizb !== findRubAlHizb(surah, ayah)) console.warn("error QuranCloud rubAlHizb: ", ayahId, surah, ayah)
      if (ayahId !== findAyahIdBySurah(surah, ayah)) console.warn("error QuranCloud findRubAlHizb: ", ayahId, surah, ayah)
    }
  
    for (let manzil = 1; manzil <= meta.numManzils; manzil++) {
      const ayahId = ManzilList[manzil]
      const { surah, ayah } = quranCloud.data.manzils.references[manzil - 1] as { surah: Surah, ayah: AyahNo }
  
      if (ayahId !== findAyahIdBySurah(surah, ayah)) console.warn("error QuranCloud manzil: ", ayahId, surah, ayah)
    }
  
    for (let rukuNo = 1; rukuNo <= meta.numRukus; rukuNo++) {
      const ayahId = RukuList[rukuNo]
      const { surah, ayah } = quranCloud.data.rukus.references[rukuNo - 1] as { surah: Surah, ayah: AyahNo }
  
      if (ayahId !== findAyahIdBySurah(surah, ayah)) console.warn("error QuranCloud ruku ", ayahId, surah, ayah)
    }
  
    for (let page = 1; page <= meta.numPages; page++) {
      const ayahId = PageList[page]
      const { surah, ayah } = quranCloud.data.pages.references[page - 1] as { surah: Surah, ayah: AyahNo }
  
      if (ayahId !== findAyahIdBySurah(surah, ayah)) console.warn("error QuranCloud page: ", ayahId, surah, ayah)
    }
  
    for (let sajda = 0; sajda < meta.numSajdas; sajda++) {
      const [ayahId] = SajdaList[sajda]
      const { surah, ayah } = quranCloud.data.sajdas.references[sajda] as { surah: Surah, ayah: AyahNo }
  
      if (ayahId !== findAyahIdBySurah(surah, ayah)) console.warn("error QuranCloud sajda: ", ayahId, surah, ayah)
    }
  }