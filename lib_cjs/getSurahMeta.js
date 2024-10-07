"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSurahMeta = getSurahMeta;
var checkValidSurah_1 = require("./checkValidSurah");
var surahList_1 = require("./lists/surahList");
/**
 * Gets the metadata for the specified Surah.
 *
 * @param surah - The Surah to get the metadata for.
 * @returns The metadata for the specified Surah.
 */
function getSurahMeta(surah) {
    (0, checkValidSurah_1.checkValidSurah)(surah);
    return surahList_1.SuraList[surah];
}
//# sourceMappingURL=getSurahMeta.js.map