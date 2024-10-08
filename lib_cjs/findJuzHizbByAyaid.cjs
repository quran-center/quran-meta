"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findJuzHizbByAyaid = findJuzHizbByAyaid;
var _findJuzByAyaid = require("./findJuzByAyaid.cjs");
var _hizbList = require("./lists/hizbList.cjs");
var _validation = require("./validation.cjs");
function findJuzHizbByAyaid(ayaId) {
  (0, _validation.checkValidAyahId)(ayaId);
  const juz = (0, _findJuzByAyaid.findJuzByAyaid)(ayaId);
  const quarterIndex = _hizbList.HizbQuarterList.findIndex(x => x > ayaId) - 1;
  const hizb = quarterIndex % 8 || 8;
  return {
    juz,
    hizb,
    id: quarterIndex
  };
}