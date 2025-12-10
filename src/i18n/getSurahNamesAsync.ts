import type { Lang, SurahNames } from "./types"

export async function getSurahNamesAsync(lang: Lang): Promise<SurahNames> {
  switch (lang) {
    case "ru":
      return (await import("./surah.ru")).surahNamesRu    
    case "uz":
      return (await import("./surah.uz")).surahNamesUz
    case "tr":
      return (await import("./surah.tr")).surahNamesTr
    case "az":
      return (await import("./surah.az")).surahNamesAz
    case "kk":
      return (await import("./surah.kk")).surahNamesKk
    case "fr":
      return (await import("./surah.fr")).surahNamesFr
    case "lt":
      return (await import("./surah.lt")).surahNamesLt   
    case "en":
    default:
      return (await import("./surah.en")).surahNamesEn // fallback to English
  }
}
