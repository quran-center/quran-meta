"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findRangeAroundAyah = findRangeAroundAyah;
var _const = require("./const.cjs");
var _findAyaidBySurah = require("./findAyaidBySurah.cjs");
var _findJuzByAyaid = require("./findJuzByAyaid.cjs");
var _findPage = require("./findPage.cjs");
var _juzList = require("./lists/juzList.cjs");
var _pageList = require("./lists/pageList.cjs");
var _surahList = require("./lists/surahList.cjs");
var _validation = require("./validation.cjs");
function findRangeAroundAyah(surah, ayah, mode, ayahMode = false) {
  const ayahId = ayahMode ? ayah : (0, _validation.checkValidSurah)(surah) && (0, _findAyaidBySurah.findAyaidBySurah)(surah, ayah);
  switch (mode) {
    case "juz":
      {
        const juz = (0, _findJuzByAyaid.findJuzByAyaid)(ayahId);
        return [_juzList.JuzList[juz], _juzList.JuzList[juz + 1] - 1];
      }
    case "surah":
      {
        return [_surahList.SuraList[surah][0] + 1, _surahList.SuraList[surah + 1][0]];
      }
    case "ayah":
      {
        return [ayahId, ayahId];
      }
    case "page":
      {
        const page = (0, _findPage.findPage)(-1, ayahId, true);
        return [_pageList.PageList[page], _pageList.PageList[page + 1] - 1];
      }
    case "all":
    default:
      return [1, _const.meta.numAyas];
  }
}