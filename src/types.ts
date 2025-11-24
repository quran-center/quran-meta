import type { LessThan, FixedArray } from "./ts-utils"
import type { RiwayaName } from "./lists/types"

/**
 * The maximum number of ayahs (verses) that can exist in any surah (chapter) of the Quran.
 * This maximum occurs in Surah Al-Baqarah (2), which has 286 ayahs.
 */
export const maxAyahsInSurah = 286

/**
 * Total number of surahs (chapters) in the Quran.
 * This is constant across all riwayas.
 */
export const numSurahs = 114

/**
 * Number of Rub al-Hizbs (quarters) in each Juz.
 * This is constant across all riwayas.
 */
export const numRubsInJuz = 8

/**
 * Default metadata for the Quran (uses Hafs riwaya as default).
 *
 * @remarks
 * Hafs metadata includes:
 * - 6236 ayahs (verses)
 * - 114 surahs (chapters)
 * - 604 pages
 * - 30 juzs (parts)
 * - 60 hizbs (sections)
 * - 240 rub al-hizbs (quarters)
 * - 0 thumun al-hizbs (eighths) - not used in Hafs
 * - 15 sajdas (prostrations)
 * - 556 rukus
 * - 7 manzils
 *
 * @example
 * ```typescript
 * import { meta } from 'quran-meta/hafs'
 * console.log(meta.numAyahs)  // 6236
 * ```
 */
// Note: meta is defined in index.ts to avoid circular dependency

/**
 * Riwaya-specific metadata type.
 * For tree-shakeable imports, use specific entry points:
 * - 'quran-meta/hafs' for Hafs only
 * - 'quran-meta/qalun' for Qalun only
 * - 'quran-meta/warsh' for Warsh only
 *
 * @example
 * ```typescript
 * import { meta } from 'quran-meta/hafs'  // Only Hafs data bundled
 * import { meta } from 'quran-meta/qalun' // Only Qalun data bundled
 * ```
 */
// riwayaMeta removed to prevent bundling all riwayas - use specific entry points instead

/**
 * Represents the complete metadata structure for Quranic information.
 * Contains counts for all structural divisions of the Quran.
 *
 * @remarks
 * Different riwayas may have different values for these properties.
 * Most notably, Qalun has 6214 ayahs while Hafs has 6236 ayahs.
 *
 * @example
 * ```typescript
 * import { meta, riwayaMeta } from 'quran-meta'
 *
 * // Hafs metadata (default)
 * console.log(meta.numAyahs)  // 6236
 *
 * // Qalun metadata
 * console.log(riwayaMeta.Qalun.numAyahs)  // 6214
 * ```
 */
export type QuranMeta = {
  /** Name of the riwaya (recitation tradition) */
  riwayaName: RiwayaName
  /** Total number of ayahs (verses) in this riwaya */
  numAyahs: number
  /** Total number of surahs (chapters) - always 114 */
  numSurahs: number
  /** Total number of pages - typically 604 */
  numPages: number
  /** Total number of juzs (parts) - always 30 */
  numJuzs: number
  /** Total number of hizbs (sections) - always 60 */
  numHizbs: number
  /** Total number of rub al-hizbs (quarters) - always 240 */
  numRubAlHizbs: number
  /** Total number of thumun al-hizbs (eighths) - 0 for Hafs, 480 for Qalun */
  numThumunAlHizbs: number
  /** Number of rubs (quarters) in each juz - always 8 */
  numRubsInJuz: number
  /** Total number of sajdas (prostrations) - varies by riwaya */
  numSajdas: number
  /** Total number of rukus (sections) - varies by riwaya */
  numRukus: number
  /** Total number of manzils (7-day reading divisions) - always 7 */
  numManzils: number
}

/**
 * Creates a type representing a range of numbers from TStart to TEnd (inclusive).
 *
 * @typeParam TStart - The starting number of the range
 * @typeParam TEnd - The ending number of the range
 *
 *
 * @remarks
 * This type uses the Exclude utility type along with a LessThan helper type
 * to generate a union of all numbers within the specified range.
 */
export type NumericRange<TStart extends number, TEnd extends number> = Exclude<TEnd | LessThan<TEnd>, LessThan<TStart>>

/**
 * Represents a valid Surah number in the Quran.
 * A type that ensures the number is within the valid range of Surahs (1 to 114).
 */
export type Surah = NumericRange<1, typeof numSurahs>

/**
 * Represents the number of an ayah (verse) within a surah.
 * Valid values are between 1 and the maximum number of ayahs in any surah.
 *
 */
export type AyahNo = NumericRange<1, typeof maxAyahsInSurah>
/**
 * Represents a valid thumun al-Hizb (Eighth of a Hizb) identifier.
 * The value must be a number between 1 and 480 (maximum across all riwayas).
 * Uses 1-based indexing where 1 is the first thumun al-hizb.
 *
 * @remarks
 * - Hafs: 0 ThumunAlHizbs (not supported)
 * - Qalun: 480 ThumunAlHizbs
 */
export type ThumunAlHizbId = NumericRange<1, 480>
/**
 * Represents a valid Rub al-Hizb (quarter of a Hizb) identifier.
 * The value must be a number between 1 and 240 (consistent across all riwayas).
 * Uses 1-based indexing where 1 is the first rub al-hizb.
 */
export type RubAlHizbId = NumericRange<1, 240>

/**
 * Represents a valid Hizb number in the Quran.
 * A Hizb is one of 60 equal divisions of the Quran.
 * Uses 1-based indexing where 1 is the first hizb.
 */
export type HizbId = NumericRange<1, 60>

/**
 * Represents a numeric identifier for an Ayah (verse) in the Quran.
 * The value should be between 0 and the total number of Ayahs.
 */
export type AyahId = number // NumericRange<0, meta.numAyahs>

/**
 * Represents a valid page number within the Quran.
 * Uses 1-based indexing where 1 is the first page (typically 604 pages total).
 */
export type Page = NumericRange<1, 604>

/**
 * Represents a Manzil number in the Quran.
 * A Manzil is one of seven roughly equal parts of the Quran used for sequential reading over seven days.
 * Uses 1-based indexing where 1 is the first manzil (1-7).
 */
export type Manzil = NumericRange<1, 7>

/**
 * A type representing a valid Ruku (section) number in the Quran.
 * Uses 1-based indexing where 1 is the first ruku (typically 556 rukus in Hafs).
 */
export type Ruku = NumericRange<1, 556>

/**
 * Represents a Juz (part) number in the Quran.
 * The Quran is traditionally divided into 30 Juzs for ease of recitation and memorization.
 * Uses 1-based indexing where 1 is the first juz (1-30).
 */
export type Juz = NumericRange<1, 30>

/**
 * Represents a part (rub') number within a Juz.
 * A numeric value ranging from 1 to the total number of rub's (quarters) in a Juz.
 * A number constrained between 1 and the total number of rub's in a Juz
 */
export type JuzPart = NumericRange<1, typeof numRubsInJuz>

// [start, ayas, order, rukus, name,  isMeccan, page ]
export type SurahInfo = [
  startAyahId: AyahId,
  ayahCount: AyahNo,
  surahOrder: Surah,
  rukuCount: Ruku,
  name: string,
  isMeccan: boolean
]
export type SurahListType = FixedArray<SurahInfo, 116>
export type SurahName = [name: string, translitName: string]

export type RangeMeta = {
  firstAyahId: AyahId
  lastAyahId: AyahId
  first: SurahAyah
  last: SurahAyah
}

/**
 * Represents the structure of a Juz and Hizb combination in the Quran
 */
export type ThumunAlHizb = {
  juz: Juz
  juzPart: JuzPart
  hizbId: HizbId
  rubAlHizbId: RubAlHizbId
  thumunAlHizbId: ThumunAlHizbId
}
export type ThumunAlHizbMeta = ThumunAlHizb & RangeMeta

/**
 * Represents the structure of a Juz and Hizb combination in the Quran
 */
export type RubAlHizb = {
  juz: Juz
  juzPart: JuzPart
  hizbId: HizbId
  rubAlHizbId: RubAlHizbId
}

export type RubAlHizbMeta = RubAlHizb & RangeMeta

export type SurahAyah = [Surah, AyahNo]
export type AyahRange = [AyahId, AyahId]
export type SurahAyahSegment = [Surah, AyahNo | [AyahNo, AyahNo]]

export type SurahMeta = {
  name: string
  surahNum: Surah
  ayahCount: AyahNo
  surahOrder: Surah
  rukuCount: Ruku
  isMeccan: boolean
} & RangeMeta

export type PageMeta = {
  pageNum: Page
} & RangeMeta

export type ManzilMeta = {
  manzilNum: Manzil
} & RangeMeta

export type JuzMeta = {
  juzNum: Juz
} & RangeMeta

export type RukuMeta = {
  rukuNum: Ruku
} & RangeMeta

// [leftjuz, ayahsFromStartOfJuz, rightJuz, ayahsinJuz]
export type AyahCountBetweenJuzSurah = NumericRange<0, typeof maxAyahsInSurah>
export type SurahJuzMeta = {
  leftjuz: Juz
  ayahsBetweenJuzSurah: AyahCountBetweenJuzSurah
  rightJuz: Juz
  // ayahCount: number,
  leftAyahId: AyahId
  rightAyahId: AyahId
}

export type RangeMode = "juz" | "surah" | "ayah" | "page" | "ruku" | "all"

export type AyahMeta = {
  juz: Juz
  juzPart: JuzPart // 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  hizbId: HizbId
  rubAlHizbId: RubAlHizbId
  thumunAlHizbId?: ThumunAlHizbId
  page: Page
  ruku: number
  surah: Surah
  ayah: AyahNo
  isStartOfQuarter: boolean
  isEndOfQuarter: boolean
  isSajdahAyah: boolean
  isStartOfPage: boolean
  isEndOfPage: boolean
  isStartOfJuz: boolean
  isEndOfJuz: boolean
  isStartOfSurah: boolean
  isEndOfSurah: boolean
  isStartOfRuku: boolean
  isEndOfRuku: boolean
}
