"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findJuzMetaBySurah = findJuzMetaBySurah;
var _const = require("./const.cjs");
var _findJuzAndShift = require("./findJuzAndShift.cjs");
var _findSurahByAyaid = require("./findSurahByAyaid.cjs");
var _juzList = require("./lists/juzList.cjs");
function findJuzMetaBySurah(surah, ayah = 1) {
  const {
    juz: leftjuz,
    ayahsBetweenJuzSurah,
    leftAyahId
  } = (0, _findJuzAndShift.findJuzAndShift)(surah, ayah);
  let rightJuz = leftjuz;
  while (rightJuz < _const.meta.numJuzs && (0, _findSurahByAyaid.findSurahByAyaid)(_juzList.JuzList[rightJuz + 1])[0] === surah) {
    rightJuz++;
  }
  return {
    leftjuz,
    ayahsBetweenJuzSurah,
    rightJuz,
    leftAyahId,
    rightAyahId: _juzList.JuzList[rightJuz + 1]
  };
}