import type { AyahId, QuranMeta, SurahInfo } from "../types"
import type { FixedArray } from "../ts-utils"
import type { Riwayas } from "./types"
import { DouriLists } from "./DouriLists"

// Sousi and Douri (both narrate from Abu 'Amr) have identical SurahList, JuzList, HizbQuarterList, ManzilList, PageList, RukuList, SajdaList.
// They are shared instead of duplicated; `pnpm verify:lists` still checks them against
// the Sousi source data.

// Lists generated from examples/data-check/data/quranpedia/sousi-data.json by examples/data-check/generate-riwayah-lists.ts
// Note: Sousi has no HizbEighthList (thumun al-hizb) - no verified source data is available for it.

// ------------------ Hizb Quarter (Rub-ul-Hizb) Data ---------------------

export const HizbQuarterList: AyahId[] = DouriLists.HizbQuarterList

// ------------------ Juz Data ---------------------

export const JuzList: AyahId[] = DouriLists.JuzList

// ------------------ Manzil Data ---------------------
export const ManzilList: AyahId[] = DouriLists.ManzilList

// ------------------ Page Data ---------------------
export const PageList: AyahId[] = DouriLists.PageList

// ------------------ Sajda Data ---------------------
export const SajdaList: AyahId[] = DouriLists.SajdaList

// ------------------ Surah Data ---------------------
export const SurahList: FixedArray<SurahInfo, 116> = DouriLists.SurahList

// ------------------ Ruku Data ---------------------
export const RukuList: AyahId[] = DouriLists.RukuList

/**
 * Sousi riwaya metadata
 */
export const SousiMeta: QuranMeta = {
  riwayaName: "Sousi",
  numAyahs: 6217,
  numSurahs: 114,
  numPages: 604,
  numJuzs: 30,
  numHizbs: 60,
  numRubAlHizbs: 240,
  numThumunAlHizbs: 0, // Sousi doesn't have Thumun al-Hizb data
  numRubsInJuz: 8,
  numSajdas: 15,
  numRukus: 556,
  numManzils: 7
} as const

export const SousiLists: Riwayas["Sousi"] = {
  HizbQuarterList,
  JuzList,
  ManzilList,
  PageList,
  RukuList,
  SajdaList,
  SurahList,
  meta: SousiMeta
}
