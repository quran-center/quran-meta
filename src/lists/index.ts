import type { Riwayas } from "./types"
import { HafsLists } from "./HafsLists"
import { QalunLists } from "./QalunLists"
import { WarshLists } from "./WarshLists"

// Export Meta objects for direct use
export { HafsMeta } from "./HafsLists"
export { QalunMeta } from "./QalunLists"
export { WarshMeta } from "./WarshLists"

/**
 * Retrieves the lists associated with a specific Riwaya.
 * Uses switch statement to enable tree-shaking.
 *
 * @example
 * ```typescript
 * const hafsLists = getListsOfRiwaya('Hafs');
 * ```
 */
export function getListsOfRiwaya<R extends keyof Riwayas>(riwaya: R): Riwayas[R] {
  switch (riwaya) {
    case "Hafs":
      return HafsLists as Riwayas[R]
    case "Qalun":
      return QalunLists as Riwayas[R]
    case "Warsh":
      return WarshLists as Riwayas[R]
    default:
      throw new Error(`Unknown riwaya: ${riwaya}`)
  }
}

export const getListOfRiwaya = <R extends keyof Riwayas, L extends keyof Riwayas[R]>(
  listName: L,
  riwaya?: R
): Riwayas[R][L] => {
  const actualRiwaya = riwaya || "Hafs"
  const lists = getListsOfRiwaya(actualRiwaya)

  if (listName in lists) {
    return lists[listName as keyof typeof lists] as Riwayas[R][L]
  }

  throw new Error(`List ${String(listName)} not found in ${actualRiwaya} riwaya`)
}
