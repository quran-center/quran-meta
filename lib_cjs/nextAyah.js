"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextAyah = nextAyah;
var const_1 = require("./const");
var findAyaidBySurah_1 = require("./findAyaidBySurah");
var findSurahByAyaid_1 = require("./findSurahByAyaid");
/**
 * Get the next ayah for the given surah and ayah number.
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @returns The surah and ayah number of the next ayah.
 */
function nextAyah(surah, ayah) {
    if (surah < 1 || surah > const_1.meta.numSuras)
        throw new RangeError("Surah must be between 1 and " + const_1.meta.numSuras);
    var ayaid = (0, findAyaidBySurah_1.findAyaidBySurah)(surah, ayah);
    return (0, findSurahByAyaid_1.findSurahByAyaid)(ayaid == const_1.meta.numAyas ? 1 : ayaid + 1);
}
//# sourceMappingURL=nextAyah.js.map