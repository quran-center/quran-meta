// surah, ayah
export type Surah = number
export type AyahNo = number
export type AyahId = number
export type Page = number
export type Juz = number
export type JuzHizb = {
  juz: Juz
  juzPart: number // 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  hizbId: number
  rubAlHizbId: number
}
export type SurahAyah = [Surah, AyahNo]
export type SurahAyahSegment = [Surah, AyahNo | [AyahNo, AyahNo]]
export type PageMeta = {
  pageNum: Page
  first: SurahAyah
  last: SurahAyah
}
// [leftjuz, ayahsFromStartOfJuz, rightJuz, ayahsinJuz]
export type JuzMeta = {
  leftjuz: Juz
  ayahsBetweenJuzSurah: number
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
  ayahCount: number,
  surahOrder: number,
  rukuCount: number,
  name: string,
  isMeccan: boolean,
  page: Page
]
export type SurahName = [name: string, translitName: string]

export type AyahMeta = {
  juz: number
  juzPart: number // 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  hizbId: number
  rubAlHizbId: number
  // rub: number
  surah: number
  ayah: number
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
