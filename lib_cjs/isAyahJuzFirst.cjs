"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAyahJuzFirst = isAyahJuzFirst;
var _findAyaidBySurah = require("./findAyaidBySurah.cjs");
var _juzList = require("./lists/juzList.cjs");
var _utils = require("./utils.cjs");
var _validation = require("./validation.cjs");
function isAyahJuzFirst(surah, ayah, ayahMode = false) {
  const ayahId = ayahMode ? (0, _validation.checkValidAyahId)(ayah) && ayah : (0, _validation.checkValidSurah)(surah) && (0, _findAyaidBySurah.findAyaidBySurah)(surah, ayah);
  return (0, _utils.binarySearch)(_juzList.JuzList, ayahId);
}