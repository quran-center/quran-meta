import type { Surah, SurahName } from "../types"
import { surahNamesEn } from "./surah.en"
import type { SurahNames } from "./types"

/**
 * Returns the name of one Surah from a names table, falling back to English when the
 * table has no entry for it.
 *
 * Only the table you pass ends up in your bundle: English and Arabic come with the main
 * entry, the other languages from `quran-meta/i18n` or `getSurahNamesAsync`.
 *
 * @param surah - The surah number
 * @param names - The names table, {@link surahNamesEn} by default
 * @returns `[name, translation]`, e.g. `["Al-Baqara", "The Cow"]`. For Arabic it is
 *   `[name with tashkeel, name without tashkeel]`.
 * @throws RangeError If the surah number is not between 1 and 114
 *
 * @example
 * ```typescript
 * import { getSurahName, surahNamesAr } from "quran-meta"
 * import { surahNamesFr } from "quran-meta/i18n"
 *
 * getSurahName(2) // ["Al-Baqara", "The Cow"]
 * getSurahName(2, surahNamesAr) // ["البَقَرَة", "البقرة"]
 * getSurahName(2, surahNamesFr) // ["Al Baqarah", "La vache"]
 * ```
 *
 * @category Surah Names
 */
export function getSurahName(surah: Surah, names: SurahNames = surahNamesEn): SurahName {
  if (!Number.isInteger(surah) || surah < 1 || surah > 114) {
    throw new RangeError("Surah must be between 1 and 114")
  }
  const name = names[surah]
  return name?.length === 2 ? name : (surahNamesEn[surah] as SurahName)
}
