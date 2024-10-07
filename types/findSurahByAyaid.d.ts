import { AyahId, SurahAyah } from "./types";
/**
 * Finds the Surah (chapter) and Ayah (verse) numbers that the given Ayah ID belongs to.
 *
 * @param ayaId - The Ayah ID to find the Surah and Ayah numbers for.
 * @returns An array containing the Surah number and the Ayah number within that Surah.
 */
export declare function findSurahByAyaid(ayaId: AyahId): SurahAyah;
