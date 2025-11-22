import type { RiwayaName } from "./lists/types"
import { HafsMeta } from "./lists/HafsLists"
import { QalunMeta } from "./lists/QalunLists"

/**
 * Default metadata (uses Hafs as default)
 */
export const meta = HafsMeta

/**
 * Riwaya-specific metadata
 */
export const riwayaMeta: Record<RiwayaName, QuranMeta> = {
  Hafs: HafsMeta,
  Qalun: QalunMeta
}

/**
 * The maximum number of ayahs (verses) that can exist in any surah (chapter) of the Quran.
 * This maximum occurs in Surah Al-Baqarah (2), which has 286 ayahs.
 */
export const maxAyahsInSurah = 286

/**
 * Represents the type derived from the `meta` constant containing Quranic metadata.
 * This type encompasses the structure and properties of Quranic information.
 */
export type QuranMeta = {
  numAyahs: number
  numSurahs: number
  numPages: number
  numJuzs: number
  numHizbs: number
  numRubAlHizbs: number
  numThumunAlHizbs: number
  numRubsInJuz: number
  numSajdas: number
  numRukus: number
  numManzils: number
}
