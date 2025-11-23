/**
 * Hafs-specific entry point
 *
 * This module provides metadata for the Hafs riwaya only.
 * For a class-based API with all riwayas, use 'quran-meta' instead.
 *
 * @example
 * ```typescript
 * import { meta } from 'quran-meta/hafs'
 *
 * console.log(meta.numAyahs)  // 6236
 * console.log(meta.numPages)  // 604
 * ```
 */

/**
 * Hafs-specific entry point
 *
 * This module provides metadata for the Hafs riwaya only.
 * For the QuranRiwaya class API, use the main 'quran-meta' entry point.
 *
 * @example
 * ```typescript
 * import { meta } from 'quran-meta/hafs'
 *
 * console.log(meta.numAyahs)  // 6236
 * console.log(meta.numPages)  // 604
 * ```
 */

/**
 * Hafs-specific entry point
 *
 * This module provides metadata and QuranRiwaya instance for Hafs riwaya only.
 *
 * @example
 * ```typescript
 * // Metadata only (minimal bundle)
 * import { meta } from 'quran-meta/hafs'
 * console.log(meta.numAyahs)  // 6236
 *
 * // With QuranRiwaya class
 * import { quran } from 'quran-meta/hafs'
 * const ayahMeta = quran.getAyahMeta(1)
 * ```
 */

import { QuranRiwaya } from "./QuranRiwaya"
import { HafsMeta, HafsLists } from "./lists/HafsLists"

// Re-export all types
export type * from "./types"
export type { QuranPackageConfig } from "./initPackage"
export type { PartType } from "./generatePartBlocks"

// Re-export utilities
export { surahStringParser } from "./surahStringParser"
export * from "./i18n"

/**
 * Metadata constants for Hafs riwaya
 */
export const meta = HafsMeta

/**
 * Pre-initialized QuranRiwaya instance for Hafs
 *
 * @example
 * ```typescript
 * import { quran } from 'quran-meta/hafs'
 *
 * const ayahMeta = quran.getAyahMeta(1)
 * const juz = quran.findJuz(1, 1)
 * ```
 */
export const quran = QuranRiwaya.create(HafsLists)
