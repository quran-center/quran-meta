import { type Reading } from "./reading"

/**
 * Metadata for a specific Quranic reading
 */
export interface ReadingMeta {
  /** Total number of ayahs in this reading */
  numAyahs: number
  /** Total number of surahs (always 114) */
  numSurahs: number
  /** Total number of pages in this reading's mushaf */
  numPages: number
  /** Total number of juzs (always 30) */
  numJuzs: number
  /** Total number of hizbs (always 60) */
  numHizbs: number
  /** Total number of rub al-hizbs (always 240) */
  numRubAlHizbs: number
  /** Number of rubs in a juz (always 8) */
  numRubsInJuz: number
  /** Total number of sajdas */
  numSajdas: number
  /** Total number of rukus */
  numRukus: number
  /** Total number of manzils (always 7) */
  numManzils: number
}

/**
 * Metadata for Hafs reading (default)
 * Based on the Medina Mushaf (15-line format)
 */
export const hafsReadingMeta: ReadingMeta = {
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
}

/**
 * Metadata for Warsh reading
 * Note: Warsh has 6214 ayahs (22 fewer than Hafs)
 * Page numbers and divisions may differ
 */
export const warshReadingMeta: ReadingMeta = {
  numAyahs: 6214, // 22 fewer than Hafs
  numSurahs: 114,
  numPages: 603, // Warsh mushaf
  numJuzs: 30,
  numHizbs: 60,
  numRubAlHizbs: 240,
  numRubsInJuz: 8,
  numSajdas: 15,
  numRukus: 556,
  numManzils: 7
}

/**
 * Metadata for Qaloun reading
 * Note: Qaloun has 6214 ayahs (same as Warsh)
 */
export const qalounReadingMeta: ReadingMeta = {
  numAyahs: 6214,
  numSurahs: 114,
  numPages: 603,
  numJuzs: 30,
  numHizbs: 60,
  numRubAlHizbs: 240,
  numRubsInJuz: 8,
  numSajdas: 15,
  numRukus: 556,
  numManzils: 7
}

/**
 * Metadata for Douri reading
 * Note: Douri has 6217 ayahs
 */
export const douriReadingMeta: ReadingMeta = {
  numAyahs: 6217,
  numSurahs: 114,
  numPages: 603,
  numJuzs: 30,
  numHizbs: 60,
  numRubAlHizbs: 240,
  numRubsInJuz: 8,
  numSajdas: 15,
  numRukus: 556,
  numManzils: 7
}

/**
 * Metadata for Sousi reading
 * Note: Sousi has 6217 ayahs (same as Douri)
 */
export const sousiReadingMeta: ReadingMeta = {
  numAyahs: 6217,
  numSurahs: 114,
  numPages: 603,
  numJuzs: 30,
  numHizbs: 60,
  numRubAlHizbs: 240,
  numRubsInJuz: 8,
  numSajdas: 15,
  numRukus: 556,
  numManzils: 7
}

/**
 * Metadata for Shuba reading
 * Note: Shuba has 6236 ayahs (same as Hafs)
 */
export const shubaReadingMeta: ReadingMeta = {
  numAyahs: 6236,
  numSurahs: 114,
  numPages: 603,
  numJuzs: 30,
  numHizbs: 60,
  numRubAlHizbs: 240,
  numRubsInJuz: 8,
  numSajdas: 15,
  numRukus: 556,
  numManzils: 7
}

/**
 * Map of reading names to their metadata
 */
const readingMetaMap: Record<Reading, ReadingMeta> = {
  hafs: hafsReadingMeta,
  warsh: warshReadingMeta,
  qaloun: qalounReadingMeta,
  douri: douriReadingMeta,
  sousi: sousiReadingMeta,
  shuba: shubaReadingMeta
}

/**
 * Gets metadata for a specific reading
 * 
 * @param reading - The reading to get metadata for
 * @returns Metadata for the specified reading
 */
export function getReadingMeta(reading: Reading): ReadingMeta {
  return readingMetaMap[reading]
}
