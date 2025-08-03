/**
 *  Checking data from
 *  https://qurancomplex.gov.sa/en/techquran/dev/
 */

import { findPagebyAyahId, findAyahIdBySurah, findJuz, findRubAlHizb, getAyahMeta, getRubAlHizbMetaByAyahId, HizbQuarterList, Juz, JuzList, ManzilList, meta, PageList, RukuList, SajdaList, Surah, SurahList, SurahInfo } from "../../src"
import { AyahNo, AyahId, Manzil, Page, Ruku } from "../../src/types"

import hafsData from "./data/hafsData_v2-0.json"

export function checkKFQC() {
    console.log("=====================================")
    console.log("\x1b[35mChecking KFQC data\x1b[0m")
   console.log("-------------------------------------")
  
    // Ayah Checks
    for (let ayah: AyahId = 1; ayah <= meta.numAyahs; ayah++) {
      const ayahMeta = getAyahMeta(ayah)
      const hfMeta = hafsData[ayah - 1]
      const page = findPagebyAyahId(ayah)
      const rub = getRubAlHizbMetaByAyahId(ayah)

      // Commented  as KFQC  data is using different page numbering which Quran Meta does not support
      // if (page !== hfMeta.page) console.log("Error page: ", ayahMeta, hfMeta)
      if (rub.rubAlHizbId !== ayahMeta.rubAlHizbId) console.warn("Error: rub of Ayah are not matching: ", rub, ayahMeta)
      if (ayahMeta.juz !== hfMeta.jozz) console.warn("Error: juz of Ayah are not matching: ", ayahMeta, hfMeta)
      if (ayahMeta.surah !== hfMeta.sura_no) console.warn("Error: surah of Ayah are not matching: ", ayahMeta, hfMeta)
      if (ayahMeta.ayah !== hfMeta.aya_no) console.warn("Error: ayah of Ayah are not matching: ", ayahMeta, hfMeta)
    }
  
  }