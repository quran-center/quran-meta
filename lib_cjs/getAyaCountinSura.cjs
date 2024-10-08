"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAyaCountinSura = getAyaCountinSura;
var _getSurahMeta = require("./getSurahMeta.cjs");
function getAyaCountinSura(surah) {
  return (0, _getSurahMeta.getSurahMeta)(surah)[1];
}