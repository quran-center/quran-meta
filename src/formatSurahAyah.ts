import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import type { RiwayaData } from "./lists/types"
import type { AyahId, SurahAyah, SurahAyahSegment } from "./types"

/**
 * Formats a surah/ayah reference as a string. This is the inverse of `ayahStringSplitter`.
 *
 * @param ref - `[surah, ayah]` or `[surah, [fromAyah, toAyah]]`
 * @param separator - Text between surah and ayah, `":"` by default
 * @returns The reference as `"surah:ayah"` or `"surah:from-to"`
 *
 * @example
 * ```ts
 * formatSurahAyah([2, 255]) // "2:255"
 * formatSurahAyah([1, [1, 7]]) // "1:1-7"
 * formatSurahAyah([2, 255], ".") // "2.255"
 * formatSurahAyah(ayahStringSplitter("18:1-10")) // "18:1-10"
 * ```
 *
 * @category Parsing & Formatting
 */
export function formatSurahAyah(ref: SurahAyah | SurahAyahSegment, separator = ":"): string {
  const [surah, ayah] = ref
  if (typeof ayah === "number") {
    return `${surah}${separator}${ayah}`
  }
  const [from, to] = ayah
  return from === to ? `${surah}${separator}${from}` : `${surah}${separator}${from}-${to}`
}

/**
 * Formats an ayah id as a `"surah:ayah"` reference.
 *
 * @param ayahId - The ayah id
 * @param data - The Lists object for the riwaya
 * @returns The reference, e.g. `"2:255"`
 * @throws RangeError If the ayah id is out of range
 *
 * @example
 * ```ts
 * formatAyahId(262, HafsLists) // "2:255"
 * ```
 *
 * @category Parsing & Formatting
 */
export function formatAyahId(ayahId: AyahId, data: RiwayaData): string {
  return formatSurahAyah(findSurahAyahByAyahId(ayahId, data))
}
