"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkValidAyahId = checkValidAyahId;
exports.checkValidSurah = checkValidSurah;
exports.checkValidSurahAyah = checkValidSurahAyah;
var _const = require("./const.cjs");
var _getAyaCountinSura = require("./getAyaCountinSura.cjs");
function checkValidSurah(surah, checkOnly = false) {
  if (typeof surah !== "number" || !Number.isInteger(surah)) {
    if (checkOnly) return false;
    throw new TypeError("Ayah ID must be an integer");
  }
  if (surah < 1 || surah > _const.meta.numSuras) {
    if (checkOnly) return false;
    throw new RangeError("Surah must be between 1 and " + _const.meta.numSuras);
  }
  return true;
}
function checkValidSurahAyah(surah, ayah, checkOnly = false) {
  if (!checkValidSurah(surah, checkOnly)) return false;
  if (ayah < 1 || ayah > (0, _getAyaCountinSura.getAyaCountinSura)(surah)) {
    if (checkOnly) return false;
    throw new RangeError("Ayah must be between 1 and " + (0, _getAyaCountinSura.getAyaCountinSura)(surah));
  }
  return true;
}
function checkValidAyahId(ayahId, checkOnly = false) {
  if (typeof ayahId !== "number" || !Number.isInteger(ayahId)) {
    if (checkOnly) return false;
    throw new TypeError("Ayah ID must be an integer");
  }
  if (ayahId < 1 || ayahId > _const.meta.numAyas) {
    if (checkOnly) return false;
    throw new RangeError("Ayah ID must be between 1 and " + _const.meta.numAyas);
  }
  return true;
}