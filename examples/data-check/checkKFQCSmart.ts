import { findPagebyAyahId, findAyahIdBySurah, findJuz, findRubAlHizb, getAyahMeta, getRubAlHizbMetaByAyahId, HizbQuarterList, Juz, JuzList, ManzilList, meta, PageList, RukuList, SajdaList, Surah, SurahList, SurahInfo } from "../../src"
import { AyahNo, AyahId, Manzil, Page, Ruku } from "../../src/types"


import hafsSmartData from "./data/hafs_smart_v8.json"

export function checkKFQCSmart() {
  console.log("Checking against KFQC Smart data")

  // Ayah Checks
  for (let ayah: AyahId = 1; ayah <= meta.numAyahs; ayah++) {
    const ayahMeta = getAyahMeta(ayah)
    const hfMeta = hafsSmartData[ayah - 1]
    const page = findPagebyAyahId(ayah)
    const rub = getRubAlHizbMetaByAyahId(ayah)
    if (rub.rubAlHizbId !== ayahMeta.rubAlHizbId) console.warn("error rub: ", rub, ayahMeta)
    if (ayahMeta.juz !== hfMeta.jozz) console.warn("error juz: ", ayahMeta, hfMeta)
    if (ayahMeta.surah !== hfMeta.sura_no) console.warn("error surah: ", ayahMeta, hfMeta)
    if (ayahMeta.ayah !== hfMeta.aya_no) console.warn("error ayah: ", ayahMeta, hfMeta)
    if (ayahMeta.ayah !== hfMeta.aya_no) console.warn("error ayah: ", ayahMeta, hfMeta)

  }

}