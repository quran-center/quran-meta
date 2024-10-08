"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prevAyah = prevAyah;
var _const = require("./const.cjs");
var _findAyaidBySurah = require("./findAyaidBySurah.cjs");
var _findSurahByAyaid = require("./findSurahByAyaid.cjs");
var _validation = require("./validation.cjs");
function prevAyah(surah, ayah) {
  (0, _validation.checkValidSurah)(surah);
  const ayaid = (0, _findAyaidBySurah.findAyaidBySurah)(surah, ayah);
  return (0, _findSurahByAyaid.findSurahByAyaid)(ayaid == 1 ? _const.meta.numAyas : ayaid - 1);
}