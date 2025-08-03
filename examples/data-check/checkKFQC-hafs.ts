/**
 *  Checking data from
 *  https://qurancomplex.gov.sa/en/techquran/dev/
 */

import { findPagebyAyahId, findAyahIdBySurah, findJuz, findRubAlHizb, getAyahMeta, getSurahMeta, getRubAlHizbMetaByAyahId, HizbQuarterList, Juz, JuzList, ManzilList, meta, PageList, RukuList, SajdaList, Surah, SurahList, SurahInfo } from "../../src"
import { AyahNo, AyahId, Manzil, Page, Ruku } from "../../src/types"

import hafsData from "./data/hafsData_v2-0.json"


export function checkKFQCHafs() {
    console.log("=====================================")
    console.log("\x1b[35mChecking KFQC HAFS data\x1b[0m")
   console.log("-------------------------------------")
  
    // Ayah Checks
    for (let ayahId: AyahId = 1; ayahId <= meta.numAyahs; ayahId++) {
      const ayahMeta = getAyahMeta(ayahId)
      const hfMeta = hafsData[ayahId - 1]
      const page = findPagebyAyahId(ayahId)
      const rub = getRubAlHizbMetaByAyahId(ayahId)

      // Commented  as KFQC  data is using different page numbering which Quran Meta does not support
      // if (page !== hfMeta.page) console.log("Error page: ", ayahMeta, hfMeta)
      if (ayahId!== hfMeta.id) console.warn("Error: ayahId of Ayah are not matching: ", ayahMeta, hfMeta)
      if (rub.rubAlHizbId !== ayahMeta.rubAlHizbId) console.warn("Error: rub of Ayah are not matching: ", rub, ayahMeta)
      if (ayahMeta.juz !== hfMeta.jozz) console.warn("Error: juz of Ayah are not matching: ", ayahMeta, hfMeta)
      if (ayahMeta.surah !== hfMeta.sura_no) console.warn("Error: surah of Ayah are not matching: ", ayahMeta, hfMeta)
      if (ayahMeta.ayah !== hfMeta.aya_no) console.warn("Error: ayah of Ayah are not matching: ", ayahMeta, hfMeta)
      if (ayahMeta.ayah === 1 && hfMeta.sura_name_ar !== getSurahMeta(ayahMeta.surah).name) console.warn("Error: name of Surah are not matching: ", getSurahMeta(ayahMeta.surah).name, hfMeta)
    }
  }

