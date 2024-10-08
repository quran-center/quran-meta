export type Surah = number;
export type AyahNo = number;
export type AyahId = number;
export type Page = number;
export type Juz = number;
export type JuzHizb = {
    juz: Juz;
    hizb: number;
    id: number;
};
export type SurahAyah = [Surah, AyahNo];
export type SurahAyahSegment = [Surah, AyahNo | [AyahNo, AyahNo]];
export type PageMeta = {
    pageNum: Page;
    first: SurahAyah;
    last: SurahAyah;
};
export type JuzMeta = {
    leftjuz: Juz;
    ayahsBetweenJuzSurah: number;
    rightJuz: Juz;
    leftAyahId: AyahId;
    rightAyahId: AyahId;
};
export type SajdaType = "recommended" | "obligatory";
export type Sajda = [AyahId, SajdaType];
export type SurahMeta = [
    startAyahId: AyahId,
    ayahCount: number,
    surahOrder: number,
    rukuCount: number,
    name: string,
    isMeccan: boolean,
    page: Page
];
export type SuraName = [name: string, translitName: string];
