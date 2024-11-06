/**
 * This script checks data in this library against other sources
 */
// pnpx jiti data-check

import { AyahId, findAyahIdBySurah, findJuz, findPage, findRubAlHizb, getAyahMeta, getRubAlHizbMetaByAyahId, HizbQuarterList, Juz, JuzList, ManzilList, meta, PageList, RukuList, SajdaList, Surah, SurahList, SurahMeta } from "../src/index"
// https://qurancomplex.gov.sa/en/techquran/dev/
import hafsData from "./data/hafsData_v2-0.json"
import hafsSmartData from "./data/hafs_smart_v8.json"
// https://api.alquran.cloud/v1/meta
import quranCloud from "./data/qcloud-meta.json"
// https://github.com/fawazahmed0/quran-api
import quranApi from "./data/quran-api.json"
// https://tanzil.net/res/text/metadata/quran-data.js
import tanzilData from "./data/tanzil-data.js"

console.log(`Running data-checks against various data sources`)

function checkKFQC() {
  console.log("Checking KFQC data")

  // Ayah Checks
  for (let ayah: AyahId = 1; ayah <= meta.numAyahs; ayah++) {
    const ayahMeta = getAyahMeta(ayah)
    const hfMeta = hafsData[ayah - 1]
    // const hfMeta = hafsData[ayah - 1]
    const page = findPage(0, ayah, true)
    const rub = getRubAlHizbMetaByAyahId(ayah)
    // if (page !== hfMeta.page) console.log("error page: ", ayahMeta, hfMeta)
    if (rub.rubAlHizbId !== ayahMeta.rubAlHizbId) console.warn("error rub: ", rub, ayahMeta)
    if (ayahMeta.juz !== hfMeta.jozz) console.warn("error juz: ", ayahMeta, hfMeta)
    if (ayahMeta.surah !== hfMeta.sura_no) console.warn("error surah: ", ayahMeta, hfMeta)
    if (ayahMeta.ayah !== hfMeta.aya_no) console.warn("error ayah: ", ayahMeta, hfMeta)
    if (ayahMeta.ayah !== hfMeta.aya_no) console.warn("error ayah: ", ayahMeta, hfMeta)
    // if(ayahMeta.ayah!==hfMeta.aya_no) console.log("error: ", ayahMeta,hfMeta)
  }

}

function checkKFQCSmart() {
  console.log("Checking against KFQC Smart data")

  // Ayah Checks
  for (let ayah: AyahId = 1; ayah <= meta.numAyahs; ayah++) {
    const ayahMeta = getAyahMeta(ayah)
    const hfMeta = hafsSmartData[ayah - 1]
    const page = findPage(0, ayah, true)
    const rub = getRubAlHizbMetaByAyahId(ayah)
    if (rub.rubAlHizbId !== ayahMeta.rubAlHizbId) console.warn("error rub: ", rub, ayahMeta)
    if (ayahMeta.juz !== hfMeta.jozz) console.warn("error juz: ", ayahMeta, hfMeta)
    if (ayahMeta.surah !== hfMeta.sura_no) console.warn("error surah: ", ayahMeta, hfMeta)
    if (ayahMeta.ayah !== hfMeta.aya_no) console.warn("error ayah: ", ayahMeta, hfMeta)
    if (ayahMeta.ayah !== hfMeta.aya_no) console.warn("error ayah: ", ayahMeta, hfMeta)

  }

}


function checkQuranApi() {
  console.log("Checking against Quran-Api data")

  for (let ayah: AyahId = 1; ayah <= meta.numAyahs; ayah++) {
    const ayahMeta = getAyahMeta(ayah)
    const pageNo = findPage(0, ayah, true)
    const { verse, line, juz, manzil, page, ruku, maqra, sajda } = quranApi.chapters[ayahMeta.surah - 1].verses[ayahMeta.ayah - 1]

    if (line !== ayah) console.log("error ayah: ", ayahMeta, line)
    if (verse !== ayahMeta.ayah) console.log("error ayah: ", ayahMeta, verse)
    if (maqra !== ayahMeta.rubAlHizbId) console.warn("error maqra: ", maqra, ayahMeta)
    if (ayahMeta.juz !== juz) console.warn("error ayah: ", ayahMeta, juz)
    if (ayahMeta.isSajdahAyah !== !!sajda) console.warn("error sajada ayah: ", ayahMeta, sajda)
    if (pageNo !== page) console.warn("error page: ", ayahMeta, pageNo, page)
  }

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
    const { chapter, name: oName, englishname, arabicname, revelation, verses } = quranApi.chapters[surahNo - 1]

    if (surahNo !== chapter) console.warn("error QuranApi surah: ", surahNo, chapter)
    if (startAyahId  !== verses[0].line) console.warn("error QuranApi surah: ", startAyahId, verses[0].line)
    if (ayahCount !== verses.length) console.warn("error QuranApi surah: ", ayahCount, verses.length)
  }

  for (let juzNo: Juz = 1; juzNo <= meta.numJuzs; juzNo++) {
    const ayahId = JuzList[juzNo]
    const { juz, start, end } = quranApi.juzs.references[juzNo - 1]

    if (juzNo !== juz) console.warn("error QuranApi juz: ", juzNo, juz)
    if (juzNo !== findJuz(start.chapter, start.verse)) console.warn("error QuranApi juz: ", ayahId, start)
    if (ayahId !== findAyahIdBySurah(start.chapter, start.verse)) console.warn("error QuranApi juz: ", ayahId, start)
  }


  for (let rubHizb: Juz = 1; rubHizb <= meta.numRubAlHizbs; rubHizb++) {
    const ayahId = HizbQuarterList[rubHizb]
    const { maqra, start, end } = quranApi.maqras.references[rubHizb - 1]

    if (maqra !== rubHizb) console.warn("error QuranApi rubAlHizb: ", maqra, rubHizb)
    if (rubHizb !== findRubAlHizb(start.chapter, start.verse).rubAlHizbId) console.warn("error QuranApi rubAlHizb: ", ayahId, start)
    if (ayahId !== findAyahIdBySurah(start.chapter, start.verse)) console.warn("error QuranApi rubAlHizb: ", ayahId, start)
  }


  for (let manzilNo = 1; manzilNo <= meta.numManzils; manzilNo++) {
    const ayahId = ManzilList[manzilNo]
    const { manzil, start, end } = quranApi.manzils.references[manzilNo - 1]

    if (manzil !== manzilNo) console.warn("error QuranApi manzil: ", manzilNo, manzil)
    if (ayahId !== findAyahIdBySurah(start.chapter, start.verse)) console.warn("error QuranApi manzil: ", ayahId, start)
  }

  for (let rukuNo = 1; rukuNo <= meta.numRukus; rukuNo++) {
    const ayahId = RukuList[rukuNo]
    const { ruku, start, end } = quranApi.rukus.references[rukuNo - 1]

    if (ruku !== rukuNo) console.warn("error QuranApi ruku: ", rukuNo, ruku)
    if (ayahId !== findAyahIdBySurah(start.chapter, start.verse)) console.warn("error QuranApi ruku ", ayahId, start)
  }


  for (let pageNo = 1; pageNo <= meta.numPages; pageNo++) {
    const ayahId = PageList[pageNo]
    const { page, start, end } = quranApi.pages.references[pageNo - 1]
    if (page !== pageNo) console.warn("error QuranApi page: ", pageNo, page)
    if (ayahId !== findAyahIdBySurah(start.chapter, start.verse)) console.warn("error QuranApi page: ", ayahId, start)
  }

  for (let sajdaId = 0; sajdaId < meta.numSajdas; sajdaId++) {
    const [ayahId, recommended] = SajdaList[sajdaId]
    const { sajda, chapter, verse, recommended: isRecommended, obligatory: isObligatory } = quranApi.sajdas.references[sajdaId]

    if (ayahId !== findAyahIdBySurah(chapter, verse)) console.warn("error QuranApi sajda: ", ayahId, chapter, verse)
    if (isRecommended && "recommended" !== recommended) console.warn("error QuranApi sajda: ", isRecommended, recommended)
    if (isObligatory && "obligatory" !== recommended) console.warn("error QuranApi sajda: ", isObligatory, recommended)
  }

}

function checkTanzil() {
  console.log("Checking against Tanzil data")


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
    const sura = tanzilData.Sura[surahNo]

    if (startAyahId !== sura[0]+1) console.warn("error Tanzil surah: ", startAyahId, sura)
    if (ayahCount !== sura[1]) console.warn("error Tanzil surah: ", ayahCount, sura)
    if (surahOrder !== sura[2]) console.warn("error Tanzil surah: ", surahOrder, sura)
    if (rukuCount !== sura[3]) console.warn("error Tanzil surah: ", rukuCount, sura)

  }

  for (let juzNo: Juz = 1; juzNo <= meta.numJuzs; juzNo++) {
    const ayahId = JuzList[juzNo]
    const [sura, ayah] = tanzilData.Juz[juzNo]

    if (juzNo !== findJuz(sura, ayah)) console.warn("error Tanzil juz: ", ayahId, sura, ayah)
    if (ayahId !== findAyahIdBySurah(sura, ayah)) console.warn("error Tanzil juz: ", ayahId, sura, ayah)
  }


  for (let rubHizb: Juz = 1; rubHizb <= meta.numRubAlHizbs; rubHizb++) {
    const ayahId = HizbQuarterList[rubHizb]
    const [sura, ayah] = tanzilData.HizbQaurter[rubHizb]

    if (rubHizb !== findRubAlHizb(sura, ayah).rubAlHizbId) console.warn("error Tanzil rubAlHizb: ", ayahId, sura, ayah)
    if (ayahId !== findAyahIdBySurah(sura, ayah)) console.warn("error Tanzil findRubAlHizb: ", ayahId, sura, ayah)
  }


  for (let manzil = 1; manzil <= meta.numManzils; manzil++) {
    const ayahId = ManzilList[manzil]
    const [sura, ayah] = tanzilData.Manzil[manzil]

    if (ayahId !== findAyahIdBySurah(sura, ayah)) console.warn("error Tanzil manzil: ", ayahId, sura, ayah)
  }


  for (let rukuNo = 1; rukuNo <= meta.numRukus; rukuNo++) {
    const ayahId = RukuList[rukuNo]
    const [sura, ayah] = tanzilData.Ruku[rukuNo]

    if (ayahId !== findAyahIdBySurah(sura, ayah)) console.warn("error Tanzil ruku ", ayahId, sura, ayah)
  }

  for (let page = 1; page <= meta.numPages; page++) {
    const ayahId = PageList[page]
    const [sura, ayah] = tanzilData.Page[page]

    if (ayahId !== findAyahIdBySurah(sura, ayah)) console.warn("error Tanzil page: ", ayahId, sura, ayah)
  }

  for (let sajda = 0; sajda < meta.numSajdas; sajda++) {
    const [ayahId] = SajdaList[sajda]
    const [sura, ayah] = tanzilData.Sajda[sajda + 1]

    if (ayahId !== findAyahIdBySurah(sura, ayah)) console.warn("error Tanzil sajda: ", ayahId, sura, ayah)
  }

}


function checkQuranCloud() {
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
    const { surah, ayah } = quranCloud.data.juzs.references[juzNo - 1]

    if (juzNo !== findJuz(surah, ayah)) console.warn("error QuranCloud juz: ", ayahId, surah, ayah)
    if (ayahId !== findAyahIdBySurah(surah, ayah)) console.warn("error QuranCloud juz: ", ayahId, surah, ayah)
  }

  for (let rubHizb: Juz = 1; rubHizb <= meta.numRubAlHizbs; rubHizb++) {
    const ayahId = HizbQuarterList[rubHizb]
    const { surah, ayah } = quranCloud.data.hizbQuarters.references[rubHizb - 1]

    if (rubHizb !== findRubAlHizb(surah, ayah).rubAlHizbId) console.warn("error QuranCloud rubAlHizb: ", ayahId, surah, ayah)
    if (ayahId !== findAyahIdBySurah(surah, ayah)) console.warn("error QuranCloud findRubAlHizb: ", ayahId, surah, ayah)
  }

  for (let manzil = 1; manzil <= meta.numManzils; manzil++) {
    const ayahId = ManzilList[manzil]
    const { surah, ayah } = quranCloud.data.manzils.references[manzil - 1]

    if (ayahId !== findAyahIdBySurah(surah, ayah)) console.warn("error QuranCloud manzil: ", ayahId, surah, ayah)
  }

  for (let rukuNo = 1; rukuNo <= meta.numRukus; rukuNo++) {
    const ayahId = RukuList[rukuNo]
    const { surah, ayah } = quranCloud.data.rukus.references[rukuNo - 1]

    if (ayahId !== findAyahIdBySurah(surah, ayah)) console.warn("error QuranCloud ruku ", ayahId, surah, ayah)
  }

  for (let page = 1; page <= meta.numPages; page++) {
    const ayahId = PageList[page]
    const { surah, ayah } = quranCloud.data.pages.references[page - 1]

    if (ayahId !== findAyahIdBySurah(surah, ayah)) console.warn("error QuranCloud page: ", ayahId, surah, ayah)
  }

  for (let sajda = 0; sajda < meta.numSajdas; sajda++) {
    const [ayahId] = SajdaList[sajda]
    const { surah, ayah } = quranCloud.data.sajdas.references[sajda]

    if (ayahId !== findAyahIdBySurah(surah, ayah)) console.warn("error QuranCloud sajda: ", ayahId, surah, ayah)
  }
}

checkQuranApi()
checkTanzil()
checkQuranCloud()
// checkKFQCSmart()
// checkKFQC()