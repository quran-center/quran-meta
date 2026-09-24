/**
 * Lazy-loading entry for Surah names: `import { getSurahNamesAsync } from "quran-meta/i18n/async"`.
 *
 * @module
 */
import type { Lang, SurahNames } from "./types"

export type { Lang, SurahNames } from "./types"

/**
 * Loads the Surah names for one language on demand, so only that language ends up in
 * your bundle (bundlers split each language into its own chunk).
 *
 * @param lang - The language code, unknown codes fall back to English
 * @returns The Surah names in that language, see {@link SurahNames}
 *
 * @example
 * ```typescript
 * const names = await getSurahNamesAsync("fr")
 * names[1] // ["Al Fâtiha", "L'ouverture"]
 * ```
 *
 * @category Surah Names
 */
export async function getSurahNamesAsync(lang: Lang): Promise<SurahNames> {
  switch (lang) {
    case "ar": {
      return (await import("./surah.ar")).surahNamesAr
    }
    case "ru": {
      return (await import("./surah.ru")).surahNamesRu
    }
    case "uz": {
      return (await import("./surah.uz")).surahNamesUz
    }
    case "tr": {
      return (await import("./surah.tr")).surahNamesTr
    }
    case "az": {
      return (await import("./surah.az")).surahNamesAz
    }
    case "kk": {
      return (await import("./surah.kk")).surahNamesKk
    }
    case "fr": {
      return (await import("./surah.fr")).surahNamesFr
    }
    case "lt": {
      return (await import("./surah.lt")).surahNamesLt
    }
    case "tg": {
      return (await import("./surah.tg")).surahNamesTg
    }
    case "ky": {
      return (await import("./surah.ky")).surahNamesKy
    }
    case "bs": {
      return (await import("./surah.bs")).surahNamesBs
    }
    case "en":
    default: {
      return (await import("./surah.en")).surahNamesEn
    } // Fallback to English
  }
}
