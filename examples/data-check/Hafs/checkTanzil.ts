/**
 * Test Tanzil data from
 * https://tanzil.net/res/text/metadata/quran-data.js
 */

import {
  HizbQuarterList,
  JuzList,
  ManzilList,
  PageList,
  RukuList,
  SajdaList,
  SurahList
} from "../../../src/lists/HafsLists"
import { createHafs, meta } from "../../../src/hafs"
import type { Juz, Surah, SurahInfo } from "../../../src/types"

import tanzilData from "./../data/tanzil-data.js"

const quran = createHafs()

export function checkTanzil() {
  console.log("=====================================")
  console.log("\x1b[32mChecking against Tanzil data\x1b[0m")
  console.log("-------------------------------------")

  for (let surahNo: Surah = 1; surahNo <= meta.numSurahs; surahNo++) {
    const [startAyahId, ayahCount, surahOrder, rukuCount, _name, _isMeccan]: SurahInfo = SurahList[surahNo]
    const sura = tanzilData.Sura[surahNo]

    if (startAyahId !== sura[0] + 1) {
      console.warn("Error: Tanzil surah: ", startAyahId, sura)
    }
    if (ayahCount !== sura[1]) {
      console.warn("Error: Tanzil surah: ", ayahCount, sura)
    }
    if (surahOrder !== sura[2]) {
      console.warn("Error: Tanzil surah: ", surahOrder, sura)
    }
    if (rukuCount !== sura[3]) {
      console.warn("Error: Tanzil surah: ", rukuCount, sura)
    }
  }

  for (let juzNo: Juz = 1; juzNo <= meta.numJuzs; juzNo++) {
    const ayahId = JuzList[juzNo]
    const [sura, ayah] = tanzilData.Juz[juzNo]

    if (juzNo !== quran.findJuz(sura, ayah)) {
      console.warn("Error: Tanzil juz: ", ayahId, sura, ayah)
    }
    if (ayahId !== quran.findAyahIdBySurah(sura, ayah)) {
      console.warn("Error: Tanzil juz: ", ayahId, sura, ayah)
    }
  }

  for (let rubHizb: Juz = 1; rubHizb <= meta.numRubAlHizbs; rubHizb++) {
    const ayahId = HizbQuarterList[rubHizb]
    const [sura, ayah] = tanzilData.HizbQaurter[rubHizb]

    if (rubHizb !== quran.findRubAlHizb(sura, ayah)) {
      console.warn("Error: Tanzil rubAlHizb: ", ayahId, sura, ayah)
    }
    if (ayahId !== quran.findAyahIdBySurah(sura, ayah)) {
      console.warn("Error: Tanzil findRubAlHizb: ", ayahId, sura, ayah)
    }
  }

  for (let manzil = 1; manzil <= meta.numManzils; manzil++) {
    const ayahId = ManzilList[manzil]
    const [sura, ayah] = tanzilData.Manzil[manzil]

    if (ayahId !== quran.findAyahIdBySurah(sura, ayah)) {
      console.warn("Error: Tanzil manzil: ", ayahId, sura, ayah)
    }
  }

  for (let rukuNo = 1; rukuNo <= meta.numRukus; rukuNo++) {
    const ayahId = RukuList[rukuNo]
    const [sura, ayah] = tanzilData.Ruku[rukuNo]

    if (ayahId !== quran.findAyahIdBySurah(sura, ayah)) {
      console.warn("Error: Tanzil ruku ", ayahId, sura, ayah)
    }
  }

  for (let page = 1; page <= meta.numPages; page++) {
    const ayahId = PageList[page]
    const [sura, ayah] = tanzilData.Page[page]

    if (ayahId !== quran.findAyahIdBySurah(sura, ayah)) {
      console.warn("Error: Tanzil page: ", ayahId, sura, ayah)
    }
  }

  for (let sajda = 0; sajda < meta.numSajdas; sajda++) {
    const ayahId = SajdaList[sajda]
    const [sura, ayah] = tanzilData.Sajda[sajda + 1]

    if (ayahId !== quran.findAyahIdBySurah(sura, ayah)) {
      console.warn("Error: Tanzil sajda: ", ayahId, sura, ayah)
    }
  }
}
