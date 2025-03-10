/**
 * test Tanzil data from 
 * https://tanzil.net/res/text/metadata/quran-data.js
 */

import { findPagebyAyahId, findAyahIdBySurah, findJuz, findRubAlHizb, getAyahMeta, getRubAlHizbMetaByAyahId, HizbQuarterList, Juz, JuzList, ManzilList, meta, PageList, RukuList, SajdaList, Surah, SurahList, SurahInfo } from "../../src"
import { AyahNo, AyahId, Manzil, Page, Ruku } from "../../src/types"

import tanzilData from "./data/tanzil-data.js";

export function checkTanzil() {
  console.log("Checking against Tanzil data");


  for (let surahNo: Surah = 1; surahNo <= meta.numSurahs; surahNo++) {
    const [
      startAyahId, ayahCount, surahOrder, rukuCount, name, isMeccan, page
    ]: SurahInfo = SurahList[surahNo];
    const sura = tanzilData.Sura[surahNo];

    if (startAyahId !== sura[0] + 1) console.warn("error Tanzil surah: ", startAyahId, sura);
    if (ayahCount !== sura[1]) console.warn("error Tanzil surah: ", ayahCount, sura);
    if (surahOrder !== sura[2]) console.warn("error Tanzil surah: ", surahOrder, sura);
    if (rukuCount !== sura[3]) console.warn("error Tanzil surah: ", rukuCount, sura);

  }

  for (let juzNo: Juz = 1; juzNo <= meta.numJuzs; juzNo++) {
    const ayahId = JuzList[juzNo];
    const [sura, ayah] = tanzilData.Juz[juzNo];

    if (juzNo !== findJuz(sura, ayah)) console.warn("error Tanzil juz: ", ayahId, sura, ayah);
    if (ayahId !== findAyahIdBySurah(sura, ayah)) console.warn("error Tanzil juz: ", ayahId, sura, ayah);
  }


  for (let rubHizb: Juz = 1; rubHizb <= meta.numRubAlHizbs; rubHizb++) {
    const ayahId = HizbQuarterList[rubHizb];
    const [sura, ayah] = tanzilData.HizbQaurter[rubHizb];

    if (rubHizb !== findRubAlHizb(sura, ayah)) console.warn("error Tanzil rubAlHizb: ", ayahId, sura, ayah);
    if (ayahId !== findAyahIdBySurah(sura, ayah)) console.warn("error Tanzil findRubAlHizb: ", ayahId, sura, ayah);
  }


  for (let manzil = 1; manzil <= meta.numManzils; manzil++) {
    const ayahId = ManzilList[manzil];
    const [sura, ayah] = tanzilData.Manzil[manzil];

    if (ayahId !== findAyahIdBySurah(sura, ayah)) console.warn("error Tanzil manzil: ", ayahId, sura, ayah);
  }


  for (let rukuNo = 1; rukuNo <= meta.numRukus; rukuNo++) {
    const ayahId = RukuList[rukuNo];
    const [sura, ayah] = tanzilData.Ruku[rukuNo];

    if (ayahId !== findAyahIdBySurah(sura, ayah)) console.warn("error Tanzil ruku ", ayahId, sura, ayah);
  }

  for (let page = 1; page <= meta.numPages; page++) {
    const ayahId = PageList[page];
    const [sura, ayah] = tanzilData.Page[page];

    if (ayahId !== findAyahIdBySurah(sura, ayah)) console.warn("error Tanzil page: ", ayahId, sura, ayah);
  }

  for (let sajda = 0; sajda < meta.numSajdas; sajda++) {
    const [ayahId] = SajdaList[sajda];
    const [sura, ayah] = tanzilData.Sajda[sajda + 1];

    if (ayahId !== findAyahIdBySurah(sura, ayah)) console.warn("error Tanzil sajda: ", ayahId, sura, ayah);
  }

}
