export const meta = {
  numAyahs: 6236,
  numSurahs: 114,
  numPages: 604,
  numJuzs: 30,
  numHizbs: 60,
  numRubAlHizbs: 240,
  numRubsInJuz: 8,
  numSajdas: 15,
  numRukus: 556,
  numManzils: 7
} as const

/**
 * The maximum number of ayahs (verses) that can exist in any surah (chapter) of the Quran.
 * This maximum occurs in Surah Al-Baqarah (2), which has 286 ayahs.
 */
export const maxAyahsInSurah = 286

/**
 * Represents the type derived from the `meta` constant containing Quranic metadata.
 * This type encompasses the structure and properties of Quranic information.
 */
export type QuranMeta = typeof meta
