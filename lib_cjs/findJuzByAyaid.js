"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findJuzByAyaid = findJuzByAyaid;
var checkValidAyahId_1 = require("./checkValidAyahId");
var juzList_1 = require("./lists/juzList");
/**
 * Finds the Juz (part) of the Quran that contains the given Ayah (verse) ID.
 *
 * @param ayaId - The ID of the Ayah (verse) to find the Juz for.
 * @returns The Juz (part) of the Quran that contains the given Ayah ID.
 */
function findJuzByAyaid(ayaId) {
    (0, checkValidAyahId_1.checkValidAyahId)(ayaId);
    return juzList_1.JuzList.findIndex(function (x) { return x > ayaId; }) - 1;
}
//# sourceMappingURL=findJuzByAyaid.js.map