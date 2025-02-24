import { maxAyahsBetweenJuzSurah, maxAyahsInSurah, meta } from "./const"

// Utility type for numeric range
type LessThan<TNumber extends number, TArray extends unknown[] = []> = TNumber extends TArray["length"] ? TArray[number] : LessThan<TNumber, [...TArray, TArray["length"]]>

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
 * A type that ensures the number is within the valid range of Surahs (1 to the total number of Surahs).
 */
export type Surah = NumericRange<1, typeof meta.numSurahs>

/**
 * Represents the number of an ayah (verse) within a surah.
 * Valid values are between 1 and the maximum number of ayahs in any surah.
 *
 */
export type AyahNo = NumericRange<1, typeof maxAyahsInSurah>

/**
 * Represents a valid Rub al-Hizb (quarter of a Hizb) identifier.
 * The value must be a number between 0 and the total number of Rub al-Hizbs in the Quran.
 */
export type RubAlHizbId = NumericRange<0, typeof meta.numRubAlHizbs>

/**
 * Represents a valid Hizb number in the Quran.
 * A Hizb is one of 60 equal divisions of the Quran.
 * A number between 0 and the total number of Hizbs in the Quran
 */
export type HizbId = NumericRange<0, typeof meta.numHizbs>

/**
 * Represents a numeric identifier for an Ayah (verse) in the Quran.
 * The value should be between 0 and the total number of Ayahs.
 */
export type AyahId = number // NumericRange<0, meta.numAyahs>

/**
 * Represents a valid page number within the Quran.
 * The value must be within the range of 0 to the total number of pages (inclusive).
 *
 */
export type Page = NumericRange<0, typeof meta.numPages>

/**
 * Represents a Manzil number in the Quran.
 * A Manzil is one of seven roughly equal parts of the Quran used for sequential reading over seven days.
 * A number between 0 and the total number of Manzils (7)
 */
export type Manzil = NumericRange<0, typeof meta.numManzils>

/**
 * A type representing a valid Ruku (section) number in the Quran.
 * The value must be a number between 0 and the total number of Rukus defined in meta.
 */
export type Ruku = NumericRange<0, typeof meta.numRukus>

/**
 * Represents a Juz (part) number in the Quran.
 * A numeric value ranging from 0 to the total number of Juzs in the Quran.
 * The Quran is traditionally divided into 30 Juzs for ease of recitation and memorization.
 *
 */
export type Juz = NumericRange<0, typeof meta.numJuzs>

/**
 * Represents a part (rub') number within a Juz.
 * A numeric value ranging from 1 to the total number of rub's (quarters) in a Juz.
 * A number constrained between 1 and the total number of rub's in a Juz
 */
export type JuzPart = NumericRange<1, typeof meta.numRubsInJuz>

/**
 * Represents the structure of a Juz and Hizb combination in the Quran
 */
export type JuzHizb = {
  juz: Juz
  juzPart: JuzPart
  hizbId: HizbId
  rubAlHizbId: RubAlHizbId
}
export type SurahAyah = [Surah, AyahNo]
export type AyahRange = [AyahId, AyahId]
export type SurahAyahSegment = [Surah, AyahNo | [AyahNo, AyahNo]]
export type PageMeta = {
  pageNum: Page
  first: SurahAyah
  last: SurahAyah
}

export type JuzMeta = {
  juzNum: Juz
  first: SurahAyah
  last: SurahAyah
}
// [leftjuz, ayahsFromStartOfJuz, rightJuz, ayahsinJuz]
export type AyahCountBetweenJuzSurah = NumericRange<0, typeof maxAyahsBetweenJuzSurah>
export type SurahJuzMeta = {
  leftjuz: Juz
  ayahsBetweenJuzSurah: AyahCountBetweenJuzSurah
  rightJuz: Juz
  // ayahCount: number,
  leftAyahId: AyahId
  rightAyahId: AyahId
}
export type SajdaType = "recommended" | "obligatory"
export type Sajda = [AyahId, SajdaType]
// [start, ayas, order, rukus, name,  isMeccan, page ]
export type SurahMeta = [
  startAyahId: AyahId,
  ayahCount: AyahNo,
  surahOrder: Surah,
  rukuCount: Ruku,
  name: string,
  isMeccan: boolean,
  page: Page
]
export type SurahName = [name: string, translitName: string]

export type AyahMeta = {
  juz: Juz
  juzPart: JuzPart // 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  hizbId: HizbId
  rubAlHizbId: RubAlHizbId
  // rub: number
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
}
