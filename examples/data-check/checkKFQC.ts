/**
 *  Checking data from
 *  https://qurancomplex.gov.sa/en/techquran/dev/
 */

import { findPagebyAyahId, findAyahIdBySurah, findJuz, findRubAlHizb, getAyahMeta, getRubAlHizbMetaByAyahId, HizbQuarterList, Juz, JuzList, ManzilList, meta, PageList, RukuList, SajdaList, Surah, SurahList, SurahMeta } from "../../src"
import { AyahNo, AyahId, Manzil, Page, Ruku } from "../../src/types"

import hafsData from "./data/hafsData_v2-0.json"

export function checkKFQC() {
    console.log("Checking KFQC data")
  
    // Ayah Checks
    for (let ayah: AyahId = 1; ayah <= meta.numAyahs; ayah++) {
      const ayahMeta = getAyahMeta(ayah)
      const hfMeta = hafsData[ayah - 1]
      // const hfMeta = hafsData[ayah - 1]
      const page = findPagebyAyahId(ayah)
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