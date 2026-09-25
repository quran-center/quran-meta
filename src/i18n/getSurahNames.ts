import type { Surah, SurahName } from "../types"
import { surahNames } from "./index"
import type { Lang, SurahNames } from "./types"

/**
 * Retrieves the list of Surah names in the specified language.
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

/**
 * Returns the name of one Surah in the given language, falling back to English when the
 * language has no entry for it.
 *
 * @param surah - The surah number
 * @param lang - The language code, `"en"` by default
 * @returns `[name, translation]`, e.g. `["Al-Baqara", "The Cow"]`. For `"ar"` it is
 *   `[name with tashkeel, name without tashkeel]`.
 * @throws RangeError If the surah number is not between 1 and 114
 *
 * @example
 * ```typescript
 * getSurahName(2) // ["Al-Baqara", "The Cow"]
 * getSurahName(2, "ar") // ["البَقَرَة", "البقرة"]
 * ```
 *
 * @category Surah Names
 */
export function getSurahName(surah: Surah, lang: Lang = "en"): SurahName {
  if (!Number.isInteger(surah) || surah < 1 || surah > 114) {
    throw new RangeError("Surah must be between 1 and 114")
  }
  const name = surahNames[lang]?.[surah]
  return name?.length === 2 ? name : (surahNames.en[surah] as SurahName)
}
