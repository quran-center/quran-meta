"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = binarySearch;
/**
 * Performs a binary search on the given array to find the index of the specified element.
 *
 * @param ar - The array to search.
 * @param el - The element to search for.
 * @param compare_fn - An optional comparison function to use for the search. Defaults to a simple numeric comparison.
 * @returns The index of the element if found, or a negative value indicating the insertion point if not found.
 */
function binarySearch(ar, el, compare_fn) {
    if (compare_fn === void 0) { compare_fn = function (a, b) { return a - b; }; }
    var m = 0;
    var n = ar.length - 1;
    while (m <= n) {
        var k = (n + m) >> 1;
        var cmp = compare_fn(el, ar[k]);
        if (cmp > 0) {
            m = k + 1;
        }
        else if (cmp < 0) {
            n = k - 1;
        }
        else {
            return k;
        }
    }
    return -m - 1;
}
//# sourceMappingURL=utils.js.map