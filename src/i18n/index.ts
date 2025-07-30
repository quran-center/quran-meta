import { surahNamesEn } from "./surah.en"
import { surahNamesAz } from "./surah.az"
import { surahNamesRu } from "./surah.ru"
import { surahNamesTr } from "./surah.tr"
import type { Lang, SurahNames, SurahNamesI18n } from "./types"

export { surahNamesEn, surahNamesAz, surahNamesRu, surahNamesTr }

export const surahNames: SurahNamesI18n = {
  en: surahNamesEn,
  az: surahNamesAz,
  tr: surahNamesTr,
  ru: surahNamesRu
}

export { getSurahNames } from "./getSurahNames"

export type { Lang, SurahNames, SurahNamesI18n }
