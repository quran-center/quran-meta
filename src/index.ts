// Quran Meta

// export {
//   AyahId,
//   AyahNo, Juz, JuzMeta, Page, PageMeta, Sajda,
//   Surah, SurahAyah, SurahMeta
// }
//export default QuranMeta;
//------------------ Sura Data ---------------------

export { suraNames as suraNamesEn } from "./i18n/sura.en"
export { suraNames as suraNamesRu } from "./i18n/sura.ru"


//------------------ Ruku Data ---------------------
// export Ruku  from "~/js/qdata-ruku.json"
export { RukuList } from "./lists/rukuList"

//export default QuranMeta;
export { ayaStringSplitter } from "./ayaStringSplitter"
export { checkValidAyahId } from "./checkValidAyahId"
export { checkValidSurah } from "./checkValidSurah"
export { checkValidSurahAyah } from "./checkValidSurahAyah"
export { meta } from "./const"
export { findAyaidBySurah } from "./findAyaidBySurah"
export { findJuz } from "./findJuz"
export { findJuzAndShift } from "./findJuzAndShift"
export { findJuzByAyaid } from "./findJuzByAyaid"
export { findJuzHizb } from "./findJuzHizb"
export { findJuzHizbByAyaid } from "./findJuzHizbByAyaid"
export { findJuzMetaBySurah } from "./findJuzMetaBySurah"
export { findPage } from "./findPage"
export { findRangeAroundAyah } from "./findRangeAroundAyah"
export { findSurahByAyaid } from "./findSurahByAyaid"
export { getAyaCountinSura } from "./getAyaCountinSura"
export { getSurahMeta } from "./getSurahMeta"
export { isAyahJuzFirst } from "./isAyahJuzFirst"
export { isAyahPageFirst } from "./isAyahPageFirst"
export { HizbQuarterList } from "./lists/hizbList"
export { JuzList } from "./lists/juzList"
export { ManzilList } from "./lists/manzilList"
export { PageList } from "./lists/pageList"
export { SajdaList } from "./lists/sajdaList"
export { SuraList } from "./lists/surahList"
export { nextAyah } from "./nextAyah"
export { pageMeta } from "./pageMeta"
export { prevAyah } from "./prevAyah"




