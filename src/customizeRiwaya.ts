import type { RiwayaData, RiwayaFullData } from "./lists/types"
import type { AyahId, QuranMeta } from "./types"

/** Lists that can be replaced with {@link customizeRiwaya} */
export type RiwayaListOverrides = Partial<Omit<RiwayaFullData, "meta" | "SurahList">>

/** Number of parts in a boundary list, which has a leading 0 and a trailing sentinel */
const partCount = (list: readonly unknown[] | undefined): number => (list ? list.length - 2 : 0)

/**
 * Checks a riwaya data object for structural problems: boundary lists that are not
 * ascending, do not start at ayah 1, do not end right after the last ayah, or whose
 * length does not match the counts in `meta`.
 *
 * Use it to check your own data before passing it to `QuranRiwaya.create` or the
 * functional API.
 *
 * @param data - Riwaya data to check
 * @returns A list of problems, empty when the data is consistent
 *
 * @example
 * ```ts
 * validateRiwayaData(HafsLists) // []
 * ```
 *
 * @category Riwaya Data
 */
export function validateRiwayaData(data: RiwayaData): string[] {
  const { meta } = data
  const problems: string[] = []
  const sentinel = meta.numAyahs + 1

  const { SurahList } = data
  if (SurahList.length !== meta.numSurahs + 2) {
    problems.push(`SurahList has ${SurahList.length - 2} surahs, meta.numSurahs is ${meta.numSurahs}`)
  }
  for (let s = 1; s < SurahList.length - 1; s++) {
    const [start, count] = SurahList[s]
    if (SurahList[s + 1][0] !== start + count) {
      problems.push(`SurahList: surah ${s + 1} does not start right after surah ${s}`)
    }
  }

  const checkBoundaries = (name: string, list: readonly AyahId[] | undefined, count: number) => {
    if (!list) {
      if (count > 0) {
        problems.push(`${name} is missing but meta expects ${count} entries`)
      }
      return
    }
    if (list.length !== count + 2) {
      problems.push(`${name} has ${list.length - 2} entries, meta expects ${count}`)
    }
    if (list[0] !== 0 || list[1] !== 1) {
      problems.push(`${name} must start with [0, 1, ...]`)
    }
    if (list.at(-1) !== sentinel) {
      problems.push(`${name} must end with numAyahs + 1 (${sentinel})`)
    }
    for (let i = 2; i < list.length; i++) {
      if (list[i] <= list[i - 1]) {
        problems.push(`${name} is not ascending at index ${i}`)
        break
      }
    }
  }

  checkBoundaries("JuzList", data.JuzList, meta.numJuzs)
  checkBoundaries("ManzilList", data.ManzilList, meta.numManzils)
  checkBoundaries("PageList", data.PageList, meta.numPages)
  checkBoundaries("HizbQuarterList", data.HizbQuarterList, meta.numRubAlHizbs)
  checkBoundaries("RukuList", data.RukuList, meta.numRukus)
  checkBoundaries("HizbEighthList", "HizbEighthList" in data ? data.HizbEighthList : undefined, meta.numThumunAlHizbs)

  if (data.SajdaList.length !== meta.numSajdas) {
    problems.push(`SajdaList has ${data.SajdaList.length} entries, meta.numSajdas is ${meta.numSajdas}`)
  }
  if (data.SajdaList.some((id, i) => id < 1 || id > meta.numAyahs || (i > 0 && id <= data.SajdaList[i - 1]))) {
    problems.push("SajdaList must be ascending ayah ids within range")
  }

  return problems
}

/**
 * Creates riwaya data that reuses a built-in riwaya but replaces some of its lists,
 * for example a different mushaf page layout (15-line Indo-Pak, Madinah 1405, ...).
 *
 * The counts in `meta` (numPages, numJuzs, ...) are recalculated from the new lists
 * and the result is checked with {@link validateRiwayaData}.
 *
 * Boundary lists use the same layout as the built-in ones:
 * `[0, firstAyahIdOfPart1, firstAyahIdOfPart2, ..., numAyahs + 1]`.
 *
 * @param base - Built-in riwaya data to start from, e.g. `HafsLists`
 * @param overrides - Lists to replace
 * @returns New riwaya data, usable with `QuranRiwaya.create` and the functional API
 * @throws Error If the resulting data is inconsistent, listing every problem found
 *
 * @example
 * ```ts
 * import { QuranRiwaya, customizeRiwaya, getListsOfRiwaya } from "quran-meta"
 *
 * const indoPak = customizeRiwaya(getListsOfRiwaya("Hafs"), { PageList: myIndoPakPageList })
 * const quran = QuranRiwaya.create(indoPak)
 * quran.meta.numPages // length of your page list
 * quran.findPage(2, 255)
 * ```
 *
 * @category Riwaya Data
 */
export function customizeRiwaya<T extends RiwayaData>(base: T, overrides: RiwayaListOverrides): T {
  const merged = { ...base, ...overrides } as T & Partial<RiwayaFullData>

  const meta: QuranMeta = {
    ...base.meta,
    numJuzs: partCount(merged.JuzList),
    numManzils: partCount(merged.ManzilList),
    numPages: partCount(merged.PageList),
    numRubAlHizbs: partCount(merged.HizbQuarterList),
    numHizbs: partCount(merged.HizbQuarterList) / 4,
    numRukus: partCount(merged.RukuList),
    numSajdas: merged.SajdaList.length,
    numThumunAlHizbs: partCount(merged.HizbEighthList)
  }
  const result = { ...merged, meta } as T

  const problems = validateRiwayaData(result)
  if (problems.length > 0) {
    throw new Error(`Invalid riwaya data:\n- ${problems.join("\n- ")}`)
  }
  return result
}
