import { SurahListType } from "../lists/surahList"
import { ArrayOfSameLength } from "../ts-utils"
import { SurahName } from "../types"
// import { surahNamesEn } from "./surah.en"
// import { surahNamesRu } from "./surah.ru"
// import { surahNamesTr } from "./surah.tr"

export type SurahNames = ArrayOfSameLength<SurahListType, SurahName | []>

export const languages = ["en", "az", "ru", "tr"] as const
type Lang = typeof languages[number]

// type SurahNamesI18n = {
//   [K in Lang]: SurahNames
// }

// export const surahNames: SurahNamesI18n = {
//   en: surahNamesEn,
//   az: surahNamesRu,
//   tr: surahNamesTr,
//   ru: surahNamesRu
// }

// export function getTranslation(lang: Lang) {
//   return surahNames[lang]
// }

export async function getSurahNames(lang: Lang): Promise<SurahNames> {
  switch (lang) {
    case "ru":
      return (await import("./surah.ru")).surahNamesRu
    case "tr":
      return (await import("./surah.tr")).surahNamesTr
    case "az":
      return (await import("./surah.az")).surahNamesAz
    case "en":
    default:
      return (await import("./surah.en")).surahNamesEn // fallback to English
  }
}
