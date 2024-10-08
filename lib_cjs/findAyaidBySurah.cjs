"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAyaidBySurah = findAyaidBySurah;
var _getSurahMeta = require("./getSurahMeta.cjs");
var _validation = require("./validation.cjs");
function findAyaidBySurah(surah, ayah) {
  (0, _validation.checkValidSurahAyah)(surah, ayah);
  const [startAyahId] = (0, _getSurahMeta.getSurahMeta)(surah);
  return startAyahId + ayah;
}