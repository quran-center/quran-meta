import type { RiwayaName } from "../lists/types"
import type { AyahNo, Surah, SurahAyah, SurahAyahSegment } from "../types"
import { numSurahs } from "../types"
import { ayahBoundaryDiffs, hafsAyahCounts } from "./ayahMapData"

/** Where an ayah starts, in Hafs coordinates: [hafsAyah, wordIndexWithinHafsAyah] */
type Boundary = readonly [number, number]

const cache = new Map<string, readonly Boundary[]>()

const compare = (a: Boundary, b: Boundary) => a[0] - b[0] || a[1] - b[1]

/**
 * Returns the ayah start positions of a surah in the given riwaya, in Hafs coordinates.
 */
function boundaries(riwaya: RiwayaName, surah: number): readonly Boundary[] {
  const key = `${riwaya}:${surah}`
  const cached = cache.get(key)
  if (cached) {
    return cached
  }

  const hafs: Boundary[] = Array.from({ length: hafsAyahCounts[surah] }, (_, i) => [i + 1, 0] as const)
  const diff = riwaya === "Hafs" ? undefined : ayahBoundaryDiffs[riwaya][surah]
  const result = diff ? [...hafs.filter(([a]) => !diff[0].includes(a)), ...diff[1]].sort(compare) : hafs

  cache.set(key, result)
  return result
}

/** Number of boundaries at or before `pos` (or strictly before it when `strict` is set) */
function countUpTo(list: readonly Boundary[], pos: Boundary, strict = false): number {
  let lo = 0
  let hi = list.length
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    const cmp = compare(list[mid], pos)
    if (cmp < 0 || (!strict && cmp === 0)) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }
  return lo
}

function startOf(surah: Surah, ayah: AyahNo, from: RiwayaName): { list: readonly Boundary[]; index: number } {
  if (!Number.isInteger(surah) || surah < 1 || surah > numSurahs) {
    throw new RangeError(`Surah must be between 1 and ${numSurahs}`)
  }
  const list = boundaries(from, surah)
  if (!Number.isInteger(ayah) || ayah < 1 || ayah > list.length) {
    throw new RangeError(`Ayah must be between 1 and ${list.length} for surah ${surah} in ${from}`)
  }
  return { index: ayah - 1, list }
}

/**
 * Converts an ayah reference from one riwaya's numbering to another's.
 *
 * Riwayas follow different counting traditions (Kufi, Madani, Makki, Basri), so the same
 * text can be numbered differently: `الم` is ayah 2:1 in Hafs but part of 2:1 together with
 * Hafs 2:2 in Warsh. The result is the ayah in `to` that contains the first word of the
 * given ayah. Surah numbers never change between riwayas.
 *
 * The basmala of Al-Fatiha, which only some riwayas count as an ayah, maps to the first ayah.
 *
 * @param surah - Surah number
 * @param ayah - Ayah number in the `from` riwaya
 * @param from - Riwaya the reference is written in
 * @param to - Riwaya to convert to
 * @returns The `[surah, ayah]` in the `to` riwaya
 * @throws RangeError If the surah or ayah does not exist in the `from` riwaya
 *
 * @example
 * ```ts
 * convertAyah(2, 2, "Hafs", "Warsh") // [2, 1]
 * convertAyah(2, 255, "Hafs", "Warsh") // [2, 253]
 * convertAyah(1, 1, "Warsh", "Hafs") // [1, 2]
 * ```
 *
 * @category Riwaya Conversion
 */
export function convertAyah(surah: Surah, ayah: AyahNo, from: RiwayaName, to: RiwayaName): SurahAyah {
  const { list, index } = startOf(surah, ayah, from)
  if (from === to) {
    return [surah, ayah]
  }
  const n = countUpTo(boundaries(to, surah), list[index])
  return [surah, Math.max(1, n) as AyahNo]
}

/**
 * Converts an ayah to all ayahs of another riwaya that share any of its text.
 *
 * Where `to` splits the ayah into several, the result is a range; where both
 * riwayas agree it is a single ayah, like {@link convertAyah}.
 *
 * @param surah - Surah number
 * @param ayah - Ayah number in the `from` riwaya
 * @param from - Riwaya the reference is written in
 * @param to - Riwaya to convert to
 * @returns `[surah, ayah]` or `[surah, [firstAyah, lastAyah]]` in the `to` riwaya
 * @throws RangeError If the surah or ayah does not exist in the `from` riwaya
 *
 * @example
 * ```ts
 * convertAyahSpan(2, 1, "Warsh", "Hafs") // [2, [1, 2]]
 * convertAyahSpan(1, 7, "Hafs", "Warsh") // [1, [6, 7]]
 * convertAyahSpan(2, 3, "Hafs", "Warsh") // [2, 2]
 * ```
 *
 * @category Riwaya Conversion
 */
export function convertAyahSpan(surah: Surah, ayah: AyahNo, from: RiwayaName, to: RiwayaName): SurahAyahSegment {
  const [, first] = convertAyah(surah, ayah, from, to)
  if (from === to) {
    return [surah, first]
  }
  const { list, index } = startOf(surah, ayah, from)
  const target = boundaries(to, surah)
  const last = index + 1 < list.length ? countUpTo(target, list[index + 1], true) : target.length
  return last > first ? [surah, [first, last as AyahNo]] : [surah, first]
}

/**
 * Number of ayahs in a surah for the given riwaya, taken from the conversion table.
 * Mainly useful for checking the table against the riwaya lists.
 *
 * @internal
 */
export function ayahCountForConversion(surah: Surah, riwaya: RiwayaName): number {
  return boundaries(riwaya, surah).length
}
