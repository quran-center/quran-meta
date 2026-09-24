import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import { parts } from "./lists/types"
import type { PartType, RiwayaData } from "./lists/types"
import type { AyahId, AyahNo, AyahRange, Juz, Page, Surah, SurahAyah, SurahInfo } from "./types"

/** First ayah id of a list entry: SurahList entries are tuples, other lists hold ayah ids */
const start = (entry: AyahId | SurahInfo): AyahId => (typeof entry === "number" ? entry : entry[0])

/**
 * Returns the first and last ayah id of a part of the Quran (surah, juz, page, manzil, ruku,
 * rub' al-hizb or thumun al-hizb).
 *
 * @param type - The kind of part
 * @param num - The part number, starting at 1
 * @param data - The Lists object for the riwaya
 * @returns `[firstAyahId, lastAyahId]`
 * @throws RangeError If `num` is outside the parts of that kind
 * @throws Error If the riwaya has no data for that kind of part (e.g. thumun al-hizb in Hafs)
 *
 * @example
 * ```ts
 * getPartRange("juz", 30, HafsLists) // [5673, 6236]
 * getPartRange("surah", 1, HafsLists) // [1, 7]
 * ```
 *
 * @category Ranges & Iteration
 */
export function getPartRange(type: PartType, num: number, data: RiwayaData): AyahRange {
  const listName = parts[type]
  if (!listName) {
    throw new Error(`Invalid part type: ${type}`)
  }
  const list = (data as Partial<Record<typeof listName, AyahId[] | SurahInfo[]>>)[listName]
  if (!list) {
    throw new Error(`${data.meta.riwayaName} has no ${type} data`)
  }

  const count = list.length - 2
  if (!Number.isInteger(num) || num < 1 || num > count) {
    throw new RangeError(`${type} must be between 1 and ${count}`)
  }

  return [start(list[num]), start(list[num + 1]) - 1]
}

/**
 * Iterates over every ayah in a part of the Quran, in order.
 *
 * @param type - The kind of part
 * @param num - The part number, starting at 1
 * @param data - The Lists object for the riwaya
 * @yields `[surah, ayah]` for every ayah of the part
 * @throws RangeError If `num` is outside the parts of that kind
 *
 * @example
 * ```ts
 * for (const [surah, ayah] of ayahsInPart("page", 604, HafsLists)) {
 *   console.log(`${surah}:${ayah}`) // 112:1 ... 114:6
 * }
 * const ayahs = [...ayahsInPart("ruku", 1, HafsLists)]
 * ```
 *
 * @category Ranges & Iteration
 */
export function* ayahsInPart(type: PartType, num: number, data: RiwayaData): Generator<SurahAyah, void, undefined> {
  const [first, last] = getPartRange(type, num, data)
  let [surah, ayah] = findSurahAyahByAyahId(first, data)
  let surahEnd = data.SurahList[surah + 1][0] - 1

  for (let ayahId = first; ayahId <= last; ayahId++) {
    if (ayahId > surahEnd) {
      surah = (surah + 1) as Surah
      ayah = 1
      surahEnd = data.SurahList[surah + 1][0] - 1
    }
    yield [surah, ayah]
    ayah = (ayah + 1) as AyahNo
  }
}

/**
 * Iterates over every ayah on a mushaf page.
 *
 * @param page - Page number
 * @param data - The Lists object for the riwaya
 * @returns A generator of `[surah, ayah]` pairs
 *
 * @example
 * ```ts
 * [...ayahsInPage(1, HafsLists)] // [[1, 1], [1, 2], ..., [1, 7]]
 * ```
 *
 * @category Ranges & Iteration
 */
export function ayahsInPage(page: Page, data: RiwayaData): Generator<SurahAyah, void, undefined> {
  return ayahsInPart("page", page, data)
}

/**
 * Iterates over every ayah in a juz.
 *
 * @param juz - Juz number
 * @param data - The Lists object for the riwaya
 * @returns A generator of `[surah, ayah]` pairs
 *
 * @example
 * ```ts
 * const count = [...ayahsInJuz(30, HafsLists)].length // 564
 * ```
 *
 * @category Ranges & Iteration
 */
export function ayahsInJuz(juz: Juz, data: RiwayaData): Generator<SurahAyah, void, undefined> {
  return ayahsInPart("juz", juz, data)
}
