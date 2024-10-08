"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findJuzAndShift = findJuzAndShift;
var _findAyaidBySurah = require("./findAyaidBySurah.cjs");
var _findJuzByAyaid = require("./findJuzByAyaid.cjs");
var _findSurahByAyaid = require("./findSurahByAyaid.cjs");
var _juzList = require("./lists/juzList.cjs");
var _surahList = require("./lists/surahList.cjs");
var _validation = require("./validation.cjs");
function findJuzAndShift(surah, ayah, ayahMode = false) {
  const ayahId = ayahMode ? (0, _validation.checkValidAyahId)(ayah) && ayah : (0, _validation.checkValidSurah)(surah) && (0, _findAyaidBySurah.findAyaidBySurah)(surah, ayah);
  const juz = (0, _findJuzByAyaid.findJuzByAyaid)(ayahId);
  const leftAyahId = _juzList.JuzList[juz];
  if (ayahMode) [surah] = (0, _findSurahByAyaid.findSurahByAyaid)(ayahId);
  const [surahStartAyahId] = _surahList.SuraList[surah];
  return {
    juz,
    ayahsBetweenJuzSurah: surahStartAyahId - leftAyahId + 1,
    leftAyahId
  };
}