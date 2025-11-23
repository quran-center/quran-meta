/**
 * Qalun-specific list helpers
 * This file provides list access functions that only bundle Qalun data
 */

import type { Riwayas } from "./types"
import { QalunLists } from "./QalunLists"

/**
 * Get Qalun lists (tree-shakeable)
 */
export function getListsOfRiwaya(): Riwayas["Qalun"] {
  return QalunLists
}

/**
 * Get a specific list from Qalun riwaya
 */
export function getList<L extends keyof Riwayas["Qalun"]>(listName: L): Riwayas["Qalun"][L] {
  return QalunLists[listName]
}
