/**
 * Warsh-specific entry point
 *
 * This module provides metadata for the Warsh riwaya only.
 * For a class-based API with all riwayas, use 'quran-meta' instead.
 *
 * @example
 * ```typescript
 * import { meta } from 'quran-meta/warsh'
 *
 * console.log(meta.numAyahs)  // 6214
 * console.log(meta.numPages)  // 603
 * ```
 */

/**
 * Warsh-specific entry point
 *
 * This module provides metadata for the Warsh riwaya only.
 * For the QuranRiwaya class API, use the main 'quran-meta' entry point.
 *
 * @example
 * ```typescript
 * import { meta } from 'quran-meta/warsh'
 *
 * console.log(meta.numAyahs)  // 6214
 * console.log(meta.numPages)  // 603
 * ```
 */

/**
 * Warsh-specific entry point
 *
 * This module provides metadata and QuranRiwaya instance for Warsh riwaya only.
 *
 * @example
 * ```typescript
 * // Metadata only (minimal bundle)
 * import { meta } from 'quran-meta/warsh'
 * console.log(meta.numAyahs)  // 6214
 *
 * // With QuranRiwaya class
 * import { quran } from 'quran-meta/warsh'
 * const ayahMeta = quran.getAyahMeta(1)
 * ```
 */

import { QuranRiwaya } from "./QuranRiwaya"
import { WarshMeta, WarshLists } from "./lists/WarshLists"

// Re-export all types
export type * from "./types"
export type { PartType } from "./generatePartBlocks"

// Re-export utilities
export { surahStringParser } from "./surahStringParser"
export * from "./i18n"

/**
 * Metadata constants for Warsh riwaya
 */
export const meta = WarshMeta

/**
 * Warsh-specific QuranRiwaya instance
 */

/**
 * Pre-initialized QuranRiwaya instance for Warsh
 */
export const quran = QuranRiwaya.create(WarshLists)
