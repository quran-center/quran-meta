/**
 * Warsh-specific list helpers
 * This file provides list access functions that only bundle Warsh data
 */

import type { Riwayas } from "./types"
import { WarshLists } from "./WarshLists"

/**
 * Get Warsh lists (tree-shakeable)
 */
export function getListsOfRiwaya(): Riwayas["Warsh"] {
  return WarshLists
}

/**
 * Get a specific list from Warsh riwaya
 */
export function getList<L extends keyof Riwayas["Warsh"]>(listName: L): Riwayas["Warsh"][L] {
  return WarshLists[listName]
}
