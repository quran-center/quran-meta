import { meta } from "./const";
/**
 * Checks if the given Ayah (verse) ID is valid.
 *
 * @param ayaId - The Ayah (verse) ID to check.
 * @returns True if the Ayah ID is valid, otherwise throws a RangeError.
 */
export function checkValidAyahId(ayaId) {
    if (ayaId < 1 || ayaId > meta.numAyas)
        throw new RangeError("ayaid must be between 1 and " + meta.numAyas);
    return true;
}
//# sourceMappingURL=checkValidAyahId.js.map