"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findJuzByAyaid = findJuzByAyaid;
var _juzList = require("./lists/juzList.cjs");
var _validation = require("./validation.cjs");
function findJuzByAyaid(ayaId) {
  (0, _validation.checkValidAyahId)(ayaId);
  return _juzList.JuzList.findIndex(x => x > ayaId) - 1;
}