"use strict";
// Quran Meta
Object.defineProperty(exports, "__esModule", { value: true });
exports.prevAyah = exports.pageMeta = exports.nextAyah = exports.SuraList = exports.SajdaList = exports.PageList = exports.ManzilList = exports.JuzList = exports.HizbQuarterList = exports.isAyahPageFirst = exports.isAyahJuzFirst = exports.getSurahMeta = exports.getAyaCountinSura = exports.findSurahByAyaid = exports.findRangeAroundAyah = exports.findPage = exports.findJuzMetaBySurah = exports.findJuzHizbByAyaid = exports.findJuzHizb = exports.findJuzByAyaid = exports.findJuzAndShift = exports.findJuz = exports.findAyaidBySurah = exports.meta = exports.checkValidSurahAyah = exports.checkValidSurah = exports.checkValidAyahId = exports.ayaStringSplitter = exports.RukuList = exports.suraNamesRu = exports.suraNamesEn = void 0;
// export {
//   AyahId,
//   AyahNo, Juz, JuzMeta, Page, PageMeta, Sajda,
//   Surah, SurahAyah, SurahMeta
// }
//export default QuranMeta;
//------------------ Sura Data ---------------------
var sura_en_1 = require("./i18n/sura.en");
Object.defineProperty(exports, "suraNamesEn", { enumerable: true, get: function () { return sura_en_1.suraNames; } });
var sura_ru_1 = require("./i18n/sura.ru");
Object.defineProperty(exports, "suraNamesRu", { enumerable: true, get: function () { return sura_ru_1.suraNames; } });
//------------------ Ruku Data ---------------------
// export Ruku  from "~/js/qdata-ruku.json"
var rukuList_1 = require("./lists/rukuList");
Object.defineProperty(exports, "RukuList", { enumerable: true, get: function () { return rukuList_1.RukuList; } });
//export default QuranMeta;
var ayaStringSplitter_1 = require("./ayaStringSplitter");
Object.defineProperty(exports, "ayaStringSplitter", { enumerable: true, get: function () { return ayaStringSplitter_1.ayaStringSplitter; } });
var checkValidAyahId_1 = require("./checkValidAyahId");
Object.defineProperty(exports, "checkValidAyahId", { enumerable: true, get: function () { return checkValidAyahId_1.checkValidAyahId; } });
var checkValidSurah_1 = require("./checkValidSurah");
Object.defineProperty(exports, "checkValidSurah", { enumerable: true, get: function () { return checkValidSurah_1.checkValidSurah; } });
var checkValidSurahAyah_1 = require("./checkValidSurahAyah");
Object.defineProperty(exports, "checkValidSurahAyah", { enumerable: true, get: function () { return checkValidSurahAyah_1.checkValidSurahAyah; } });
var const_1 = require("./const");
Object.defineProperty(exports, "meta", { enumerable: true, get: function () { return const_1.meta; } });
var findAyaidBySurah_1 = require("./findAyaidBySurah");
Object.defineProperty(exports, "findAyaidBySurah", { enumerable: true, get: function () { return findAyaidBySurah_1.findAyaidBySurah; } });
var findJuz_1 = require("./findJuz");
Object.defineProperty(exports, "findJuz", { enumerable: true, get: function () { return findJuz_1.findJuz; } });
var findJuzAndShift_1 = require("./findJuzAndShift");
Object.defineProperty(exports, "findJuzAndShift", { enumerable: true, get: function () { return findJuzAndShift_1.findJuzAndShift; } });
var findJuzByAyaid_1 = require("./findJuzByAyaid");
Object.defineProperty(exports, "findJuzByAyaid", { enumerable: true, get: function () { return findJuzByAyaid_1.findJuzByAyaid; } });
var findJuzHizb_1 = require("./findJuzHizb");
Object.defineProperty(exports, "findJuzHizb", { enumerable: true, get: function () { return findJuzHizb_1.findJuzHizb; } });
var findJuzHizbByAyaid_1 = require("./findJuzHizbByAyaid");
Object.defineProperty(exports, "findJuzHizbByAyaid", { enumerable: true, get: function () { return findJuzHizbByAyaid_1.findJuzHizbByAyaid; } });
var findJuzMetaBySurah_1 = require("./findJuzMetaBySurah");
Object.defineProperty(exports, "findJuzMetaBySurah", { enumerable: true, get: function () { return findJuzMetaBySurah_1.findJuzMetaBySurah; } });
var findPage_1 = require("./findPage");
Object.defineProperty(exports, "findPage", { enumerable: true, get: function () { return findPage_1.findPage; } });
var findRangeAroundAyah_1 = require("./findRangeAroundAyah");
Object.defineProperty(exports, "findRangeAroundAyah", { enumerable: true, get: function () { return findRangeAroundAyah_1.findRangeAroundAyah; } });
var findSurahByAyaid_1 = require("./findSurahByAyaid");
Object.defineProperty(exports, "findSurahByAyaid", { enumerable: true, get: function () { return findSurahByAyaid_1.findSurahByAyaid; } });
var getAyaCountinSura_1 = require("./getAyaCountinSura");
Object.defineProperty(exports, "getAyaCountinSura", { enumerable: true, get: function () { return getAyaCountinSura_1.getAyaCountinSura; } });
var getSurahMeta_1 = require("./getSurahMeta");
Object.defineProperty(exports, "getSurahMeta", { enumerable: true, get: function () { return getSurahMeta_1.getSurahMeta; } });
var isAyahJuzFirst_1 = require("./isAyahJuzFirst");
Object.defineProperty(exports, "isAyahJuzFirst", { enumerable: true, get: function () { return isAyahJuzFirst_1.isAyahJuzFirst; } });
var isAyahPageFirst_1 = require("./isAyahPageFirst");
Object.defineProperty(exports, "isAyahPageFirst", { enumerable: true, get: function () { return isAyahPageFirst_1.isAyahPageFirst; } });
var hizbList_1 = require("./lists/hizbList");
Object.defineProperty(exports, "HizbQuarterList", { enumerable: true, get: function () { return hizbList_1.HizbQuarterList; } });
var juzList_1 = require("./lists/juzList");
Object.defineProperty(exports, "JuzList", { enumerable: true, get: function () { return juzList_1.JuzList; } });
var manzilList_1 = require("./lists/manzilList");
Object.defineProperty(exports, "ManzilList", { enumerable: true, get: function () { return manzilList_1.ManzilList; } });
var pageList_1 = require("./lists/pageList");
Object.defineProperty(exports, "PageList", { enumerable: true, get: function () { return pageList_1.PageList; } });
var sajdaList_1 = require("./lists/sajdaList");
Object.defineProperty(exports, "SajdaList", { enumerable: true, get: function () { return sajdaList_1.SajdaList; } });
var surahList_1 = require("./lists/surahList");
Object.defineProperty(exports, "SuraList", { enumerable: true, get: function () { return surahList_1.SuraList; } });
var nextAyah_1 = require("./nextAyah");
Object.defineProperty(exports, "nextAyah", { enumerable: true, get: function () { return nextAyah_1.nextAyah; } });
var pageMeta_1 = require("./pageMeta");
Object.defineProperty(exports, "pageMeta", { enumerable: true, get: function () { return pageMeta_1.pageMeta; } });
var prevAyah_1 = require("./prevAyah");
Object.defineProperty(exports, "prevAyah", { enumerable: true, get: function () { return prevAyah_1.prevAyah; } });
//# sourceMappingURL=index.js.map