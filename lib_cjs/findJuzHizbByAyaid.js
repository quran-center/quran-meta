"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findJuzHizbByAyaid = findJuzHizbByAyaid;
var checkValidAyahId_1 = require("./checkValidAyahId");
var findJuzByAyaid_1 = require("./findJuzByAyaid");
var hizbList_1 = require("./lists/hizbList");
/**
 * Finds the Juz, Hizb, and Hizb ID for the given Ayah ID.
 *
 * @param ayaId - The Ayah ID to find the Juz, Hizb, and Hizb ID for.
 * @returns An object containing the Juz, Hizb, and Hizb ID for the given Ayah ID.
 */
function findJuzHizbByAyaid(ayaId) {
    (0, checkValidAyahId_1.checkValidAyahId)(ayaId);
    var juz = (0, findJuzByAyaid_1.findJuzByAyaid)(ayaId);
    var id = hizbList_1.HizbQuarterList.findIndex(function (x) { return x > ayaId; }) - 1;
    return { juz: juz, hizb: id % 8 || 8, id: id };
}
//# sourceMappingURL=findJuzHizbByAyaid.js.map