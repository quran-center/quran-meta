"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkValidAyahId = checkValidAyahId;
var const_1 = require("./const");
/**
 * Checks if the given Ayah (verse) ID is valid.
 *
 * @param ayaId - The Ayah (verse) ID to check.
 * @returns True if the Ayah ID is valid, otherwise throws a RangeError.
 */
function checkValidAyahId(ayaId) {
    if (ayaId < 1 || ayaId > const_1.meta.numAyas)
        throw new RangeError("ayaid must be between 1 and " + const_1.meta.numAyas);
    return true;
}
//# sourceMappingURL=checkValidAyahId.js.map