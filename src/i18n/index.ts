import { surahNamesEn } from "./surah.en"
import { surahNamesAz } from "./surah.az"
import { surahNamesRu } from "./surah.ru"
import { surahNamesTr } from "./surah.tr"
import { surahNamesUz } from "./surah.uz"

import type { Lang, SurahNames, SurahNamesI18n  } from "./types"
import { surahNamesKk } from "./surah.kk"

export { surahNamesEn, surahNamesAz, surahNamesRu, surahNamesTr }

export const surahNames: SurahNamesI18n = {
  en: surahNamesEn,
  az: surahNamesAz,
  tr: surahNamesTr,
  ru: surahNamesRu,
  uz: surahNamesUz,
  kk: surahNamesKk,
  fr: surahNamesEn,
  lt: surahNamesEn,
  
}

export { getSurahNames } from "./getSurahNames"
export { languages } from "./types"

export type { Lang, SurahNames, SurahNamesI18n }
