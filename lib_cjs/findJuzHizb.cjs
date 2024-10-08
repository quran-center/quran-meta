"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findJuzHizb = findJuzHizb;
var _findAyaidBySurah = require("./findAyaidBySurah.cjs");
var _findJuzHizbByAyaid = require("./findJuzHizbByAyaid.cjs");
var _validation = require("./validation.cjs");
function findJuzHizb(surah, ayah = 1, ayahMode = false) {
  const ayahId = ayahMode ? ayah : (0, _validation.checkValidSurah)(surah) && (0, _findAyaidBySurah.findAyaidBySurah)(surah, ayah);
  return (0, _findJuzHizbByAyaid.findJuzHizbByAyaid)(ayahId);
}