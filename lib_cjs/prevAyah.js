"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prevAyah = prevAyah;
var checkValidSurah_1 = require("./checkValidSurah");
var const_1 = require("./const");
var findAyaidBySurah_1 = require("./findAyaidBySurah");
var findSurahByAyaid_1 = require("./findSurahByAyaid");
/**
 * Get the previous ayah for the given surah and ayah number.
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @returns The surah and ayah number of the previous ayah.
 */
function prevAyah(surah, ayah) {
    (0, checkValidSurah_1.checkValidSurah)(surah);
    var ayaid = (0, findAyaidBySurah_1.findAyaidBySurah)(surah, ayah);
    return (0, findSurahByAyaid_1.findSurahByAyaid)(ayaid == 1 ? const_1.meta.numAyas : ayaid - 1);
}
//# sourceMappingURL=prevAyah.js.map