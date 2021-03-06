export declare type Surah = number;
export declare type AyahNo = number;
export declare type AyahId = number;
export declare type Page = number;
export declare type Juz = number;
export declare type JuzHizb = {
    juz: Juz;
    hizb: number;
    id: number;
};
export declare type SurahAyah = [Surah, AyahNo];
export declare type SurahAyahSegment = [Surah, AyahNo | [AyahNo, AyahNo]];
export declare type PageMeta = {
    pageNum: Page;
    first: SurahAyah;
    last: SurahAyah;
};
export declare type JuzMeta = {
    leftjuz: Juz;
    ayahsBetweenJuzSurah: number;
    rightJuz: Juz;
    leftAyahId: AyahId;
    rightAyahId: AyahId;
};
export declare type SajdaType = "recommended" | "obligatory";
export declare type Sajda = [AyahId, SajdaType];
export declare type SurahMeta = [
    startAyahId: AyahId,
    ayahCount: number,
    surahOrder: number,
    rukuCount: number,
    name: string,
    isMeccan: boolean,
    page: Page
];
export declare type SuraName = [name: string, translitName: string];
