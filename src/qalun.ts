/**
 * Qalun-specific entry point
 *
 * This module provides metadata for the Qalun riwaya only.
 * For a class-based API with all riwayas, use 'quran-meta' instead.
 *
 * @example
 * ```typescript
 * import { meta } from 'quran-meta/qalun'
 *
 * console.log(meta.numAyahs)  // 6214
 * console.log(meta.numThumunAlHizbs)  // 480
 * ```
 */

/**
 * Qalun-specific entry point
 *
 * This module provides metadata for the Qalun riwaya only.
 * For the QuranRiwaya class API, use the main 'quran-meta' entry point.
 *
 * @example
 * ```typescript
 * import { meta } from 'quran-meta/qalun'
 *
 * console.log(meta.numAyahs)  // 6214
 * console.log(meta.numThumunAlHizbs)  // 480
 * ```
 */

/**
 * Qalun-specific entry point
 *
 * This module provides metadata and QuranRiwaya instance for Qalun riwaya only.
 *
 * @example
 * ```typescript
 * // Metadata only (minimal bundle)
 * import { meta } from 'quran-meta/qalun'
 * console.log(meta.numAyahs)  // 6214
 *
 * // With QuranRiwaya class
 * import { quran } from 'quran-meta/qalun'
 * const thumun = quran.findThumunAlHizb(1, 1)
 * ```
 */

import { QuranRiwaya } from "./QuranRiwaya"
import { QalunLists } from "./lists/QalunLists"

// Re-export all types
export type * from "./types"
export type { PartType } from "./generatePartBlocks"

/**
 * Pre-initialized QuranRiwaya instance for Qalun
 */
export default QuranRiwaya.create(QalunLists)
