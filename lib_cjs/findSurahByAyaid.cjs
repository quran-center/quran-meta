"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findSurahByAyaid = findSurahByAyaid;
var _surahList = require("./lists/surahList.cjs");
var _validation = require("./validation.cjs");
function findSurahByAyaid(ayaId) {
  (0, _validation.checkValidAyahId)(ayaId);
  const suraNum = _surahList.SuraList.findIndex(x => x[0] >= ayaId) - 1;
  return [suraNum, ayaId - _surahList.SuraList[suraNum][0]];
}