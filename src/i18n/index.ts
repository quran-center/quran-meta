import { surahNamesEn } from "./surah.en"
import { surahNamesAz } from "./surah.az"
import { surahNamesRu } from "./surah.ru"
import { surahNamesTr } from "./surah.tr"
import { surahNamesUz } from "./surah.uz"
import { surahNamesKk } from "./surah.kk"
import { surahNamesBs } from "./surah.bs"
import { surahNamesFr } from "./surah.fr"
import { surahNamesLt } from "./surah.lt"
import { surahNamesKy } from "./surah.ky"
import { surahNamesTg } from "./surah.tg"

import type { Lang, SurahNames, SurahNamesI18n } from "./types"

export {
  surahNamesEn,
  surahNamesAz,
  surahNamesTr,
  surahNamesRu,
  surahNamesUz,
  surahNamesKk,
  surahNamesFr,
  surahNamesLt,
  surahNamesTg,
  surahNamesKy,
  surahNamesBs
}

export const surahNames: SurahNamesI18n = {
  az: surahNamesAz,
  bs: surahNamesBs,
  en: surahNamesEn,
  fr: surahNamesFr,
  kk: surahNamesKk,
  ky: surahNamesKy,
  lt: surahNamesLt,
  ru: surahNamesRu,
  tg: surahNamesTg,
  tr: surahNamesTr,
  uz: surahNamesUz
}

export { getSurahNames } from "./getSurahNames"
export { languages } from "./types"

export type { Lang, SurahNames, SurahNamesI18n }
