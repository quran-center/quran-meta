// surah, ayah
export type Surah = number
export type AyahNo = number
export type AyahId = number
export type Page = number
export type Juz = number
export type JuzHizb = {
  juz: Juz
  hizb: number // 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  id: number
}
export type SurahAyah = [Surah, AyahNo]
export type SurahAyahSegment = [Surah, AyahNo | [AyahNo, AyahNo]]
export type PageMeta = {
  pageNum: Page
  first: SurahAyah
  last: SurahAyah
}
//[leftjuz, ayahsFromStartOfJuz, rightJuz, ayahsinJuz]
export type JuzMeta = [
  leftjuz: Juz,
  ayahsFromStartOfJuz: number,
  rightJuz: Juz,
  ayahCount: number
]
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
export type SuraName = [name: string, translitName: string]
