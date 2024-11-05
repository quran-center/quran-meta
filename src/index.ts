// Quran Meta

export type { QuranMeta } from "./const"
export type {
  AyahId, AyahMeta, AyahNo, Juz, JuzHizb, JuzMeta, Page, PageMeta, Sajda, SajdaType, Surah, SurahAyah, SurahAyahSegment, SurahMeta, SurahName
} from "./types"

export { ayaStringSplitter } from "./ayaStringSplitter"
export { meta } from "./const"
export { findAyaidBySurah } from "./findAyaidBySurah"
export { findJuz } from "./findJuz"
export { findJuzAndShift } from "./findJuzAndShift"
export { findJuzByAyaid } from "./findJuzByAyaid"
export { findJuzMetaBySurah as findJuzMetaBySurah } from "./findJuzMetaBySurah"
export { findPage } from "./findPage"
export { findRangeAroundAyah } from "./findRangeAroundAyah"
export { findRubAlHizb } from "./findRubAlHizb"
export { findRubAlHizbByAyaid } from "./findRubAlHizbByAyaid"
export { findSurahByAyaid } from "./findSurahByAyaid"
export { getAyahCountinSura as getAyahCountinSura } from "./getAyahCountinSura"
export { getAyahMeta } from "./getAyahMeta"
export { getPageMeta } from "./getPageMeta"
export { getRubAlHizbMeta } from "./getRubAlHizbMeta"
export { getRubAlHizbMetaByAyaid } from "./getRubAlHizbMetaByAyaid"
export { getSurahMeta } from "./getSurahMeta"
export { isAyahJuzFirst } from "./isAyahJuzFirst"
export { isAyahPageFirst } from "./isAyahPageFirst"
export { HizbQuarterList } from "./lists/hizbList"
export { JuzList } from "./lists/juzList"
export { ManzilList } from "./lists/manzilList"
export { PageList } from "./lists/pageList"
export { RukuList } from "./lists/rukuList"
export { SajdaList } from "./lists/sajdaList"
export { SurahList } from "./lists/surahList"
export { nextAyah } from "./nextAyah"
export { prevAyah } from "./prevAyah"
export { checkValidAyahId, checkValidSurah, checkValidSurahAyah } from "./validation"

// ------------------ Sura i18 Data ---------------------

export { surahNames as surahNamesEn } from "./i18n/sura.en"
export { surahNames as surahNamesRu } from "./i18n/sura.ru"
