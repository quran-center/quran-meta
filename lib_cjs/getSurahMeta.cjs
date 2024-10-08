"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSurahMeta = getSurahMeta;
var _surahList = require("./lists/surahList.cjs");
var _validation = require("./validation.cjs");
function getSurahMeta(surah) {
  (0, _validation.checkValidSurah)(surah);
  return _surahList.SuraList[surah];
}