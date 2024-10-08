"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findJuz = findJuz;
var _findAyaidBySurah = require("./findAyaidBySurah.cjs");
var _findJuzByAyaid = require("./findJuzByAyaid.cjs");
var _validation = require("./validation.cjs");
function findJuz(surah, ayah = 1, ayahMode = false) {
  const ayahId = ayahMode ? ayah : (0, _validation.checkValidSurahAyah)(surah, ayah) && (0, _findAyaidBySurah.findAyaidBySurah)(surah, ayah);
  return (0, _findJuzByAyaid.findJuzByAyaid)(ayahId);
}