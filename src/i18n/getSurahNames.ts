import type { Lang } from "."
import { surahNames } from "."

/**
 * Retrieves the list of Surah names in the specified language.
 *
 * @param lang - The language code for which to retrieve the Surah names
 * @returns An array of Surah names in the specified language
 *
 * @example
 * ```typescript
 * const arabicNames = getSurahNames('ar');
 * const englishNames = getSurahNames('en');
 * ```
 */
export function getSurahNames(lang: Lang) {
  return surahNames[lang]
}
