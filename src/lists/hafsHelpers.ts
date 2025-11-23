/**
 * Hafs-specific list helpers
 * This file provides list access functions that only bundle Hafs data
 */

import type { Riwayas } from "./types"
import { HafsLists } from "./HafsLists"

/**
 * Get Hafs lists (tree-shakeable)
 */
export function getListsOfRiwaya(): Riwayas["Hafs"] {
  return HafsLists
}

/**
 * Get a specific list from Hafs riwaya
 */
export function getList<L extends keyof Riwayas["Hafs"]>(listName: L): Riwayas["Hafs"][L] {
  return HafsLists[listName]
}
