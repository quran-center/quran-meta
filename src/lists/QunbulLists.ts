import type { AyahId, QuranMeta, SurahInfo } from "../types"
import type { FixedArray } from "../ts-utils"
import type { Riwayas } from "./types"
import { BazziLists } from "./BazziLists"

// Qunbul and Bazzi (both narrate from Ibn Kathir) have identical SurahList, JuzList, HizbQuarterList, ManzilList, PageList, RukuList, SajdaList.
// They are shared instead of duplicated; `pnpm verify:lists` still checks them against
// the Qunbul source data.

// Lists generated from examples/data-check/data/quranpedia/qunbul-data.json by examples/data-check/generate-riwayah-lists.ts
// Note: Qunbul has no HizbEighthList (thumun al-hizb) - no verified source data is available for it.

// ------------------ Hizb Quarter (Rub-ul-Hizb) Data ---------------------

export const HizbQuarterList: AyahId[] = BazziLists.HizbQuarterList

// ------------------ Juz Data ---------------------

export const JuzList: AyahId[] = BazziLists.JuzList

// ------------------ Manzil Data ---------------------
export const ManzilList: AyahId[] = BazziLists.ManzilList

// ------------------ Page Data ---------------------
export const PageList: AyahId[] = BazziLists.PageList

// ------------------ Sajda Data ---------------------
export const SajdaList: AyahId[] = BazziLists.SajdaList

// ------------------ Surah Data ---------------------
export const SurahList: FixedArray<SurahInfo, 116> = BazziLists.SurahList

// ------------------ Ruku Data ---------------------
export const RukuList: AyahId[] = BazziLists.RukuList

/**
 * Qunbul riwaya metadata
 */
export const QunbulMeta: QuranMeta = {
  riwayaName: "Qunbul",
  numAyahs: 6221,
  numSurahs: 114,
  numPages: 604,
  numJuzs: 30,
  numHizbs: 60,
  numRubAlHizbs: 240,
  numThumunAlHizbs: 0, // Qunbul doesn't have Thumun al-Hizb data
  numRubsInJuz: 8,
  numSajdas: 15,
  numRukus: 556,
  numManzils: 7
} as const

export const QunbulLists: Riwayas["Qunbul"] = {
  HizbQuarterList,
  JuzList,
  ManzilList,
  PageList,
  RukuList,
  SajdaList,
  SurahList,
  meta: QunbulMeta
}
