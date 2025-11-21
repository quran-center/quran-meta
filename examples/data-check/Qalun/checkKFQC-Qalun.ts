/**
 *  Checking data from
 *  https://qurancomplex.gov.sa/en/techquran/dev/
 */

  import { HizbQuarterList, JuzList, ManzilList, PageList, RukuList, SajdaList, SurahList } from "../../../src/lists/QalunLists"
  import { meta } from "../../../src"
  import {quranMeta} from "../../../src"
  import { AyahNo, AyahId, Manzil, Page, Ruku,SurahInfo,Juz } from "../../../src/types"
  const { findPagebyAyahId,findAyahIdBySurah, findJuz, findRubAlHizb, getAyahMeta, getRubAlHizbMetaByAyahId,getSurahMeta } = quranMeta({riwaya: "Qalun"})
  
import QalunData from "../data/QalounData_v2-1.json"

const ayahCount = 6214

export function checkKFQCQalun() {
    console.log("=====================================")
    console.log("\x1b[35mChecking KFQC Qalun data\x1b[0m")
   console.log("-------------------------------------")
  
    // Ayah Checks
    for (let ayahId: AyahId = 1; ayahId <= ayahCount; ayahId++) {
      
      const ayahMeta = getAyahMeta(ayahId,"Qalun")
      const hfMeta = QalunData[ayahId - 1]
      const page = findPagebyAyahId(ayahId)
      const rub = getRubAlHizbMetaByAyahId(ayahId)


      // Commented  as KFQC  data is using different page numbering which Quran Meta does not support
      // if (page !== Number.parseInt(hfMeta.page)) console.log("Error page: ",page, hfMeta.page, ayahMeta, hfMeta)
     if (ayahId!== hfMeta.id) console.warn("Error: ayahId of Ayah are not matching: ", ayahMeta, hfMeta)
      //  if (rub.rubAlHizbId !== ayahMeta.rubAlHizbId) console.warn("Error: rub of Ayah are not matching: ", rub, ayahMeta)
      // if (ayahMeta.juz !== hfMeta.jozz) console.warn("Error: juz of Ayah are not matching: ", ayahMeta, hfMeta)
      if (ayahMeta.surah !== hfMeta.sura_no) console.warn("Error: surah of Ayah are not matching: ", ayahMeta, hfMeta)
      if (ayahMeta.ayah !== hfMeta.aya_no) console.warn("Error: ayah of Ayah are not matching: ", ayahMeta, hfMeta)
       if (ayahMeta.ayah === 1 && hfMeta.sura_name_ar.trim() !== getSurahMeta(ayahMeta.surah).name.trim()) console.warn("Error: name of Surah are not matching: ", getSurahMeta(ayahMeta.surah).name, hfMeta)
     }
  }

  /* 
  The Juz checks shows a warning at: 
  AyahId (3211 to 3213) | Juz 20 instead of 19 | Error from the dataset
  AyahId (3558 to 3561) | Juz 22 instead of 21 | Error from the dataset
  */
