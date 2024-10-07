"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAyaCountinSura = getAyaCountinSura;
var getSurahMeta_1 = require("./getSurahMeta");
/**
 * Get the number of ayahs (verses) in the specified surah.
 * @param surah - The surah number.
 * @returns The number of ayahs in the specified surah.
 */
function getAyaCountinSura(surah) {
    return (0, getSurahMeta_1.getSurahMeta)(surah)[1];
}
//# sourceMappingURL=getAyaCountinSura.js.map