"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextAyah = nextAyah;
var _const = require("./const.cjs");
var _findAyaidBySurah = require("./findAyaidBySurah.cjs");
var _findSurahByAyaid = require("./findSurahByAyaid.cjs");
function nextAyah(surah, ayah) {
  if (surah < 1 || surah > _const.meta.numSuras) throw new RangeError("Surah must be between 1 and " + _const.meta.numSuras);
  const ayaid = (0, _findAyaidBySurah.findAyaidBySurah)(surah, ayah);
  return (0, _findSurahByAyaid.findSurahByAyaid)(ayaid == _const.meta.numAyas ? 1 : ayaid + 1);
}