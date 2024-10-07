"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageMeta = pageMeta;
var const_1 = require("./const");
var findSurahByAyaid_1 = require("./findSurahByAyaid");
var pageList_1 = require("./lists/pageList");
/**
 * Retrieves the page metadata for the specified page number.
 *
 * @param pageNum - The page number to retrieve metadata for.
 * @returns The page metadata, including the first and last ayah IDs on the page.
 * @throws {RangeError} If the page number is out of the valid range (1 to `meta.numPages`).
 */
function pageMeta(pageNum) {
    // todo rename to getPageMeta in next major version
    if (pageNum < 1 || pageNum > const_1.meta.numPages)
        throw new RangeError("pagenum must be between 1 and " + const_1.meta.numPages);
    var _a = [
        pageList_1.PageList[pageNum],
        pageList_1.PageList[pageNum + 1],
    ], curPage = _a[0], nextPage = _a[1];
    return {
        pageNum: pageNum,
        first: (0, findSurahByAyaid_1.findSurahByAyaid)(curPage),
        last: __spreadArray([], (0, findSurahByAyaid_1.findSurahByAyaid)(nextPage - 1), true),
    };
}
//# sourceMappingURL=pageMeta.js.map