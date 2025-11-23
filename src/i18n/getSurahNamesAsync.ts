import type { Lang, SurahNames } from "./types"

export async function getSurahNamesAsync(lang: Lang): Promise<SurahNames> {
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
