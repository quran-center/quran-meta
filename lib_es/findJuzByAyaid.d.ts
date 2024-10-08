import { AyahId, Juz } from "./types";
/**
 * Finds the Juz (part) of the Quran that contains the given Ayah (verse) ID.
 *
 * @param ayaId - The ID of the Ayah (verse) to find the Juz for.
 * @returns The Juz (part) of the Quran that contains the given Ayah ID.
 */
export declare function findJuzByAyaid(ayaId: AyahId): Juz;
