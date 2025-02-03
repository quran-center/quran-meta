import { maxAyahsBetweenJuzSurah, maxAyahsInSurah, meta } from "./const"

// Utility type for numeric range
type LessThan<TNumber extends number, TArray extends unknown[] = []> = TNumber extends TArray["length"] ? TArray[number] : LessThan<TNumber, [...TArray, TArray["length"]]>
export type NumericRange<TStart extends number, TEnd extends number> = Exclude<TEnd | LessThan<TEnd>, LessThan<TStart>>

// surah, ayah
export type Surah = NumericRange<1, typeof meta.numSurahs>
export type AyahNo = NumericRange<1, typeof maxAyahsInSurah>
export type RubAlHizbId = NumericRange<0, typeof meta.numRubAlHizbs>
export type HizbId = NumericRange<0, typeof meta.numHizbs>
export type AyahId = number // NumericRange<0, meta.numAyahs>
export type Page = NumericRange<0, typeof meta.numPages>
export type Manzil = NumericRange<0, typeof meta.numManzils>
export type Ruku = NumericRange<0, typeof meta.numRukus>
export type Juz = NumericRange<0, typeof meta.numJuzs>
export type JuzPart = NumericRange<1, typeof meta.numRubsInJuz>
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
// [leftjuz, ayahsFromStartOfJuz, rightJuz, ayahsinJuz]
export type AyahCountBetweenJuzSurah = NumericRange<0, typeof maxAyahsBetweenJuzSurah>
export type JuzMeta = {
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
  rukuCount: number,
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
