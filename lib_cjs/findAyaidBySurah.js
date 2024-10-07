"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAyaidBySurah = findAyaidBySurah;
var checkValidSurahAyah_1 = require("./checkValidSurahAyah");
var getSurahMeta_1 = require("./getSurahMeta");
/**
 * Get the ayah ID for the given surah and ayah number.
 * @param surah - The surah number.
 * @param ayah - The ayah number within the surah.
 * @returns The ayah ID for the given surah and ayah number.
 */
function findAyaidBySurah(surah, ayah) {
    (0, checkValidSurahAyah_1.checkValidSurahAyah)(surah, ayah);
    var startAyahId = (0, getSurahMeta_1.getSurahMeta)(surah)[0];
    return startAyahId + ayah;
}
//# sourceMappingURL=findAyaidBySurah.js.map