"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "HizbQuarterList", {
  enumerable: true,
  get: function () {
    return _hizbList.HizbQuarterList;
  }
});
Object.defineProperty(exports, "JuzList", {
  enumerable: true,
  get: function () {
    return _juzList.JuzList;
  }
});
Object.defineProperty(exports, "ManzilList", {
  enumerable: true,
  get: function () {
    return _manzilList.ManzilList;
  }
});
Object.defineProperty(exports, "PageList", {
  enumerable: true,
  get: function () {
    return _pageList.PageList;
  }
});
Object.defineProperty(exports, "RukuList", {
  enumerable: true,
  get: function () {
    return _rukuList.RukuList;
  }
});
Object.defineProperty(exports, "SajdaList", {
  enumerable: true,
  get: function () {
    return _sajdaList.SajdaList;
  }
});
Object.defineProperty(exports, "SuraList", {
  enumerable: true,
  get: function () {
    return _surahList.SuraList;
  }
});
Object.defineProperty(exports, "ayaStringSplitter", {
  enumerable: true,
  get: function () {
    return _ayaStringSplitter.ayaStringSplitter;
  }
});
Object.defineProperty(exports, "checkValidAyahId", {
  enumerable: true,
  get: function () {
    return _validation.checkValidAyahId;
  }
});
Object.defineProperty(exports, "checkValidSurah", {
  enumerable: true,
  get: function () {
    return _validation.checkValidSurah;
  }
});
Object.defineProperty(exports, "checkValidSurahAyah", {
  enumerable: true,
  get: function () {
    return _validation.checkValidSurahAyah;
  }
});
Object.defineProperty(exports, "findAyaidBySurah", {
  enumerable: true,
  get: function () {
    return _findAyaidBySurah.findAyaidBySurah;
  }
});
Object.defineProperty(exports, "findJuz", {
  enumerable: true,
  get: function () {
    return _findJuz.findJuz;
  }
});
Object.defineProperty(exports, "findJuzAndShift", {
  enumerable: true,
  get: function () {
    return _findJuzAndShift.findJuzAndShift;
  }
});
Object.defineProperty(exports, "findJuzByAyaid", {
  enumerable: true,
  get: function () {
    return _findJuzByAyaid.findJuzByAyaid;
  }
});
Object.defineProperty(exports, "findJuzHizb", {
  enumerable: true,
  get: function () {
    return _findJuzHizb.findJuzHizb;
  }
});
Object.defineProperty(exports, "findJuzHizbByAyaid", {
  enumerable: true,
  get: function () {
    return _findJuzHizbByAyaid.findJuzHizbByAyaid;
  }
});
Object.defineProperty(exports, "findJuzMetaBySurah", {
  enumerable: true,
  get: function () {
    return _findJuzMetaBySurah.findJuzMetaBySurah;
  }
});
Object.defineProperty(exports, "findPage", {
  enumerable: true,
  get: function () {
    return _findPage.findPage;
  }
});
Object.defineProperty(exports, "findRangeAroundAyah", {
  enumerable: true,
  get: function () {
    return _findRangeAroundAyah.findRangeAroundAyah;
  }
});
Object.defineProperty(exports, "findSurahByAyaid", {
  enumerable: true,
  get: function () {
    return _findSurahByAyaid.findSurahByAyaid;
  }
});
Object.defineProperty(exports, "getAyaCountinSura", {
  enumerable: true,
  get: function () {
    return _getAyaCountinSura.getAyaCountinSura;
  }
});
Object.defineProperty(exports, "getSurahMeta", {
  enumerable: true,
  get: function () {
    return _getSurahMeta.getSurahMeta;
  }
});
Object.defineProperty(exports, "isAyahJuzFirst", {
  enumerable: true,
  get: function () {
    return _isAyahJuzFirst.isAyahJuzFirst;
  }
});
Object.defineProperty(exports, "isAyahPageFirst", {
  enumerable: true,
  get: function () {
    return _isAyahPageFirst.isAyahPageFirst;
  }
});
Object.defineProperty(exports, "meta", {
  enumerable: true,
  get: function () {
    return _const.meta;
  }
});
Object.defineProperty(exports, "nextAyah", {
  enumerable: true,
  get: function () {
    return _nextAyah.nextAyah;
  }
});
Object.defineProperty(exports, "pageMeta", {
  enumerable: true,
  get: function () {
    return _pageMeta.pageMeta;
  }
});
Object.defineProperty(exports, "prevAyah", {
  enumerable: true,
  get: function () {
    return _prevAyah.prevAyah;
  }
});
Object.defineProperty(exports, "suraNamesEn", {
  enumerable: true,
  get: function () {
    return _sura.suraNames;
  }
});
Object.defineProperty(exports, "suraNamesRu", {
  enumerable: true,
  get: function () {
    return _sura2.suraNames;
  }
});
var _ayaStringSplitter = require("./ayaStringSplitter.cjs");
var _const = require("./const.cjs");
var _findAyaidBySurah = require("./findAyaidBySurah.cjs");
var _findJuz = require("./findJuz.cjs");
var _findJuzAndShift = require("./findJuzAndShift.cjs");
var _findJuzByAyaid = require("./findJuzByAyaid.cjs");
var _findJuzHizb = require("./findJuzHizb.cjs");
var _findJuzHizbByAyaid = require("./findJuzHizbByAyaid.cjs");
var _findJuzMetaBySurah = require("./findJuzMetaBySurah.cjs");
var _findPage = require("./findPage.cjs");
var _findRangeAroundAyah = require("./findRangeAroundAyah.cjs");
var _findSurahByAyaid = require("./findSurahByAyaid.cjs");
var _getAyaCountinSura = require("./getAyaCountinSura.cjs");
var _getSurahMeta = require("./getSurahMeta.cjs");
var _isAyahJuzFirst = require("./isAyahJuzFirst.cjs");
var _isAyahPageFirst = require("./isAyahPageFirst.cjs");
var _hizbList = require("./lists/hizbList.cjs");
var _juzList = require("./lists/juzList.cjs");
var _manzilList = require("./lists/manzilList.cjs");
var _pageList = require("./lists/pageList.cjs");
var _rukuList = require("./lists/rukuList.cjs");
var _sajdaList = require("./lists/sajdaList.cjs");
var _surahList = require("./lists/surahList.cjs");
var _nextAyah = require("./nextAyah.cjs");
var _pageMeta = require("./pageMeta.cjs");
var _prevAyah = require("./prevAyah.cjs");
var _validation = require("./validation.cjs");
var _sura = require("./i18n/sura.en.cjs");
var _sura2 = require("./i18n/sura.ru.cjs");