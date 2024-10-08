"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageMeta = pageMeta;
var _const = require("./const.cjs");
var _findSurahByAyaid = require("./findSurahByAyaid.cjs");
var _pageList = require("./lists/pageList.cjs");
function pageMeta(pageNum) {
  if (pageNum < 1 || pageNum > _const.meta.numPages) throw new RangeError("pagenum must be between 1 and " + _const.meta.numPages);
  const [curPage, nextPage] = [_pageList.PageList[pageNum], _pageList.PageList[pageNum + 1]];
  return {
    pageNum,
    first: (0, _findSurahByAyaid.findSurahByAyaid)(curPage),
    last: [...(0, _findSurahByAyaid.findSurahByAyaid)(nextPage - 1)]
  };
}