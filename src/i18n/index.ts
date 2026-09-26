/**
 * Surah names in every language: `import { surahNamesFr, getSurahName } from "quran-meta/i18n"`.
 *
 * Importing one table (`surahNamesFr`) bundles only that language. `surahNames` and
 * `getSurahNames` pick the language at runtime, so they bundle all of them. English and
 * Arabic are also exported from the main entry.
 *
 * @module
 */
import { surahNamesEn } from "./surah.en"
import { surahNamesAr } from "./surah.ar"
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
import { surahNamesBn } from "./surah.bn"
import { surahNamesEs } from "./surah.es"
import { surahNamesId } from "./surah.id"
import { surahNamesIt } from "./surah.it"
import { surahNamesMl } from "./surah.ml"
import { surahNamesMs } from "./surah.ms"
import { surahNamesNl } from "./surah.nl"
import { surahNamesSv } from "./surah.sv"
import { surahNamesUr } from "./surah.ur"
import { surahNamesZh } from "./surah.zh"

import type { Lang, SurahNames, SurahNamesI18n } from "./types"

export {
  surahNamesEn,
  surahNamesAr,
  surahNamesAz,
  surahNamesTr,
  surahNamesRu,
  surahNamesUz,
  surahNamesKk,
  surahNamesFr,
  surahNamesLt,
  surahNamesTg,
  surahNamesKy,
  surahNamesBs,
  surahNamesBn,
  surahNamesEs,
  surahNamesId,
  surahNamesIt,
  surahNamesMl,
  surahNamesMs,
  surahNamesNl,
  surahNamesSv,
  surahNamesUr,
  surahNamesZh
}

export const surahNames: SurahNamesI18n = {
  ar: surahNamesAr,
  az: surahNamesAz,
  bn: surahNamesBn,
  bs: surahNamesBs,
  en: surahNamesEn,
  es: surahNamesEs,
  fr: surahNamesFr,
  id: surahNamesId,
  it: surahNamesIt,
  kk: surahNamesKk,
  ky: surahNamesKy,
  lt: surahNamesLt,
  ml: surahNamesMl,
  ms: surahNamesMs,
  nl: surahNamesNl,
  ru: surahNamesRu,
  sv: surahNamesSv,
  tg: surahNamesTg,
  tr: surahNamesTr,
  ur: surahNamesUr,
  uz: surahNamesUz,
  zh: surahNamesZh
}

export { getSurahName } from "./getSurahName"
export { getSurahNames } from "./getSurahNames"
export { languages } from "./types"

export type { Lang, SurahNames, SurahNamesI18n }
