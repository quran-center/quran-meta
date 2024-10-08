"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findPage = findPage;
var _findAyaidBySurah = require("./findAyaidBySurah.cjs");
var _pageList = require("./lists/pageList.cjs");
var _validation = require("./validation.cjs");
function findPage(surah, ayah, ayahMode = false) {
  const ayahId = ayahMode ? (0, _validation.checkValidAyahId)(ayah) && ayah : (0, _validation.checkValidSurah)(surah) && (0, _findAyaidBySurah.findAyaidBySurah)(surah, ayah);
  return _pageList.PageList.findIndex(x => x > ayahId) - 1;
}