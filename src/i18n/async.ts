/**
 * Lazy-loading entry for Surah names: `import { getSurahNamesAsync } from "quran-meta/i18n/async"`.
 * Also exports `languages`, so a language picker does not need the full `quran-meta/i18n`.
 *
 * @module
 */
import type { Lang, SurahNames } from "./types"

export { languages } from "./types"
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
    case "bn": {
      return (await import("./surah.bn")).surahNamesBn
    }
    case "es": {
      return (await import("./surah.es")).surahNamesEs
    }
    case "id": {
      return (await import("./surah.id")).surahNamesId
    }
    case "it": {
      return (await import("./surah.it")).surahNamesIt
    }
    case "ml": {
      return (await import("./surah.ml")).surahNamesMl
    }
    case "ms": {
      return (await import("./surah.ms")).surahNamesMs
    }
    case "nl": {
      return (await import("./surah.nl")).surahNamesNl
    }
    case "sv": {
      return (await import("./surah.sv")).surahNamesSv
    }
    case "ur": {
      return (await import("./surah.ur")).surahNamesUr
    }
    case "zh": {
      return (await import("./surah.zh")).surahNamesZh
    }
    case "en":
    default: {
      return (await import("./surah.en")).surahNamesEn
    } // Fallback to English
  }
}
