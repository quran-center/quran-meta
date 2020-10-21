// surah, ayah
export type Surah = number
export type AyahNo = number
export type AyahId = number
export type Page = number
export type Juz = number
export type SurahAyah = [Surah, AyahNo]
export type SurahAyahSegment = [Surah, AyahNo | [AyahNo, AyahNo]]
export type PageMeta = {
  pageNum: Page
  first: SurahAyah
  last: SurahAyah
}
//[leftjuz, ayahsFromStartOfJuz, rightJuz, ayahsinSurah]
export type JuzMeta = [Juz, number, Juz, number]
export type SajdaType = "recommended" | "obligatory"
export type Sajda = [AyahId, SajdaType]
// [start, ayas, order, rukus, name,  isMeccan, page ]
export type SurahMeta = [AyahId, number, number, number, string, boolean, Page]