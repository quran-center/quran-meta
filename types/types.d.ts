export declare type Surah = number;
export declare type AyahNo = number;
export declare type AyahId = number;
export declare type Page = number;
export declare type Juz = number;
export declare type SurahAyah = [Surah, AyahNo];
export declare type SurahAyahSegment = [Surah, AyahNo | [AyahNo, AyahNo]];
export declare type PageMeta = {
    pageNum: Page;
    first: SurahAyah;
    last: SurahAyah;
};
export declare type JuzMeta = [Juz, number, Juz, number];
export declare type SajdaType = "recommended" | "obligatory";
export declare type Sajda = [AyahId, SajdaType];
export declare type SurahMeta = [AyahId, number, number, number, string, boolean, Page];
