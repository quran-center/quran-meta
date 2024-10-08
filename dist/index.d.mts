type QuranMeta = {
    numAyas: number;
    numSuras: number;
    numPages: number;
    numJuzs: number;
    manzilCount: number;
};
declare const meta: Readonly<QuranMeta>;

type Surah = number;
type AyahNo = number;
type AyahId = number;
type Page = number;
type Juz = number;
type JuzHizb = {
    juz: Juz;
    hizb: number;
    id: number;
};
type SurahAyah = [Surah, AyahNo];
type SurahAyahSegment = [Surah, AyahNo | [AyahNo, AyahNo]];
type PageMeta = {
    pageNum: Page;
    first: SurahAyah;
    last: SurahAyah;
};
type JuzMeta = {
    leftjuz: Juz;
    ayahsBetweenJuzSurah: number;
    rightJuz: Juz;
    leftAyahId: AyahId;
    rightAyahId: AyahId;
};
type SajdaType = "recommended" | "obligatory";
type Sajda = [AyahId, SajdaType];
type SurahMeta = [
    startAyahId: AyahId,
    ayahCount: number,
    surahOrder: number,
    rukuCount: number,
    name: string,
    isMeccan: boolean,
    page: Page
];
type SuraName = [name: string, translitName: string];

/**
 *  Turns String of type "x:y" or "x:y1-y2" to array [x,y] or [x,[y1,y2]] respectively
 * @param str - String of type "x:y" or "x:y1-y2"
 * @returns array [x,y] or [x,[y1,y2]] respectively
 */
declare function ayaStringSplitter(str: string): SurahAyahSegment;

/**
 * Get the ayah ID for the given surah and ayah number.
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @returns The ayah ID for the given surah and ayah number.
 */
declare function findAyaidBySurah(surah: Surah, ayah: AyahNo): AyahId;

/**
 * Finds the Juz (part) of the Quran that the given Ayah (verse) belongs to.
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number. Defaults to 1 if not provided.
 * @param ayahMode - If true, the `ayah` parameter is treated as an Ayah ID instead of a Surah and Ayah number.
 * @returns The Juz (part) number that the given Ayah belongs to.
 */
declare function findJuz(surah: Surah, ayah?: AyahNo, ayahMode?: boolean): Juz;

/**
 * Finds the juz (section) that contains the specified ayah (verse) and calculates the number of ayahs between the start of the juz and the start of the surah (chapter) that contains the ayah.
 *
 * @param surah - The surah (chapter) that contains the ayah.
 * @param ayah - The ayah (verse) number.
 * @param ayahMode - A boolean flag indicating whether the `ayah` parameter represents an ayah number or an ayah ID.
 * @returns An object containing the following properties:
 *   - `juz`: The juz (section) that contains the ayah.
 *   - `leftAyahId`: The ayah ID of the first ayah in the juz.
 *   - `ayahsBetweenJuzSurah`: The number of ayahs between the start of the juz and the start of the surah (positive if the surah starts is in the juz, negative if the surah starts before the juz).
 */
declare function findJuzAndShift(surah: Surah, ayah: AyahNo, ayahMode?: boolean): {
    juz: Juz;
    leftAyahId: AyahId;
    ayahsBetweenJuzSurah: number;
};

/**
 * Finds the Juz (part) of the Quran that contains the given Ayah (verse) ID.
 *
 * @param ayaId - The ID of the Ayah (verse) to find the Juz for.
 * @returns The Juz (part) of the Quran that contains the given Ayah ID.
 */
declare function findJuzByAyaid(ayaId: AyahId): Juz;

/**
 * Finds the Juz (part) and Hizb (section) of the Quran that the given Ayah (verse) belongs to.
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number. Defaults to 1 if not provided.
 * @param ayahMode - If true, the `ayah` parameter is treated as an Ayah ID instead of a Surah and Ayah number.
 * @returns An object containing the Juz (part) number, Hizb (section) number, and the index of the Hizb that the given Ayah belongs to.
 */
declare function findJuzHizb(surah: Surah, ayah?: AyahNo, ayahMode?: boolean): JuzHizb;

/**
 * Finds the Juz, Hizb, and Hizb ID for the given Ayah ID.
 *
 * @param ayaId - The Ayah ID to find the Juz, Hizb, and Hizb ID for.
 * @returns An object containing the Juz, Hizb, and Hizb ID for the given Ayah ID.
 */
declare function findJuzHizbByAyaid(ayaId: AyahId): JuzHizb;

/**
 * Finds the JuzMeta for a given Surah and Ayah.
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number.
 * @returns The JuzMeta object containing the left juz, ayahs between juz and surah, right juz, left ayah ID, and right ayah ID.
 */
declare function findJuzMetaBySurah(surah: Surah, ayah?: AyahNo): JuzMeta;

/**
 * Finds the page number for the given Surah and Ayah number.
 *
 * @param surah - The Surah to find the page for.
 * @param ayah - The Ayah number to find the page for.
 * @param ayahMode - If true, the `ayah` parameter is treated as an AyahId instead of an AyahNo.
 * @returns The page number for the given Surah and Ayah.
 */
declare function findPage(surah: Surah, ayah: AyahNo, ayahMode?: boolean): Page;

/**
 * Finds a range of ayahs around a given ayah based on the specified mode.
 *
 * @param surah - The surah number (1-114)
 * @param ayah - The ayah number within the surah, or the absolute ayah ID if ayahMode is true
 * @param mode - The range mode: "juz", "surah", "ayah", "page", or "all"
 * @param ayahMode - If true, treats the ayah parameter as an absolute ayah ID
 * @returns A tuple containing the start and end ayah IDs of the range
 */
declare function findRangeAroundAyah(surah: Surah, ayah: AyahNo, mode: "juz" | "surah" | "ayah" | "page" | "all", ayahMode?: boolean): SurahAyah;

/**
 * Finds the Surah (chapter) and Ayah (verse) numbers that the given Ayah ID belongs to.
 *
 * @param ayaId - The Ayah ID to find the Surah and Ayah numbers for.
 * @returns An array containing the Surah number and the Ayah number within that Surah.
 */
declare function findSurahByAyaid(ayaId: AyahId): SurahAyah;

/**
 * Get the number of ayahs (verses) in the specified surah.
 * @param surah - The surah number.
 * @returns The number of ayahs in the specified surah.
 */
declare function getAyaCountinSura(surah: Surah): number;

/**
 * Gets the metadata for the specified Surah.
 *
 * @param surah - The Surah to get the metadata for.
 * @returns The metadata for the specified Surah.
 */
declare function getSurahMeta(surah: Surah): SurahMeta;

/**
 * Returns the Juz (part) number that the given Ayah (verse) belongs to.
 *
 *
 * @param surah - The Surah (chapter) number.
 * @param ayah - The Ayah (verse) number.
 * @param ayahMode - If true, the `ayah` parameter is treated as an Ayah ID instead of a Surah and Ayah number.
 * @returns The Juz (part) number that the given Ayah belongs to. Returns Positive number if aya is first ayah of juz, number is juz number
 */
declare function isAyahJuzFirst(surah: Surah, ayah: AyahNo, ayahMode?: boolean): Juz;

/**
 * Determines if the given ayah is the first ayah of a juz.
 *
 * @param surah - The surah number.
 * @param ayah - The ayah number.
 * @param ayahMode - Optional flag to indicate if the ayah number is already a valid ayah ID.
 * @returns The juz number if the ayah is the first ayah of the juz, otherwise -1.
 */
declare function isAyahPageFirst(surah: Surah, ayah: AyahNo, ayahMode?: boolean): Juz;

declare const HizbQuarterList: AyahId[];

declare const JuzList: AyahId[];

declare const ManzilList: AyahId[];

declare const PageList: AyahId[];

declare const RukuList: AyahId[];

declare const SajdaList: Sajda[];

declare const SuraList: SurahMeta[];

/**
 * Get the next ayah for the given surah and ayah number.
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @returns The surah and ayah number of the next ayah.
 */
declare function nextAyah(surah: Surah, ayah: AyahNo): SurahAyah;

/**
 * Retrieves metadata for a specific page of the Quran.
 *
 * @param pageNum - The page number to retrieve metadata for (1-604)
 * @returns An object containing the page number, first ayah, and last ayah on the page
 * @throws RangeError If the page number is not between 1 and 604
 */
declare function pageMeta(pageNum: Page): PageMeta;

/**
 * Get the previous ayah for the given surah and ayah number.
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @returns The surah and ayah number of the previous ayah.
 */
declare function prevAyah(surah: Surah, ayah: AyahNo): SurahAyah;

/**
 * Checks if the given Surah (chapter) number is valid.
 *
 * @param surah - The Surah (chapter) number to check.
 * @param checkOnly - If true, the function will only check the validity and not throw an error.
 * @returns True if the Surah number is valid, false otherwise.
 */
declare function checkValidSurah(surah: number, checkOnly?: boolean): boolean;
/**
 * Checks if the given Surah and Ayah (verse) numbers are valid.
 *
 * @param surah - The Surah (chapter) number to check.
 * @param ayah - The Ayah (verse) number to check.
 * @param checkOnly - If true, the function will only check the validity and not throw an error.
 * @returns True if the Surah and Ayah numbers are valid, false otherwise.
 */
declare function checkValidSurahAyah(surah: number, ayah: number, checkOnly?: boolean): boolean;
/**
 * Checks if the given Ayah (verse) ID is valid.
 *
 * @param ayahId - The Ayah (verse) ID to check.
 * @param checkOnly - If true, the function will only check the validity and not throw an error.
 * @returns True if the Ayah ID is valid, otherwise throws a RangeError.
 */
declare function checkValidAyahId(ayahId: number, checkOnly?: boolean): boolean;

declare const suraNames$1: (SuraName | [])[];

declare const suraNames: (SuraName | [])[];

export { type AyahId, type AyahNo, HizbQuarterList, type Juz, type JuzHizb, JuzList, type JuzMeta, ManzilList, type Page, PageList, type PageMeta, type QuranMeta, RukuList, type Sajda, SajdaList, type SajdaType, SuraList, type SuraName, type Surah, type SurahAyah, type SurahAyahSegment, type SurahMeta, ayaStringSplitter, checkValidAyahId, checkValidSurah, checkValidSurahAyah, findAyaidBySurah, findJuz, findJuzAndShift, findJuzByAyaid, findJuzHizb, findJuzHizbByAyaid, findJuzMetaBySurah, findPage, findRangeAroundAyah, findSurahByAyaid, getAyaCountinSura, getSurahMeta, isAyahJuzFirst, isAyahPageFirst, meta, nextAyah, pageMeta, prevAyah, suraNames$1 as suraNamesEn, suraNames as suraNamesRu };
