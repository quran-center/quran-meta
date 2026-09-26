import { surahNames } from "./index"
import type { Lang, SurahNames } from "./types"

/**
 * Retrieves the list of Surah names in the specified language.
 *
 * This bundles every language. To ship only one, import its table (`surahNamesFr`) or
 * load it with `getSurahNamesAsync` from `quran-meta/i18n/async`.
 *
 * @param lang - The language code for which to retrieve the Surah names
 * @returns An array indexed by surah number of `[name, translation]` pairs
 *
 * @example
 * ```typescript
 * const arabicNames = getSurahNames("ar")
 * const englishNames = getSurahNames("en")
 * englishNames[2] // ["Al-Baqara", "The Cow"]
 * ```
 *
 * @category Surah Names
 */
export function getSurahNames(lang: Lang): SurahNames {
  return surahNames[lang]
}
