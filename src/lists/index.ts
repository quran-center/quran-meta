import type { Riwayas } from "./types"
import { BazziLists } from "./BazziLists"
import { DouriLists } from "./DouriLists"
import { HafsLists } from "./HafsLists"
import { QalunLists } from "./QalunLists"
import { QunbulLists } from "./QunbulLists"
import { ShubaLists } from "./ShubaLists"
import { SousiLists } from "./SousiLists"
import { WarshLists } from "./WarshLists"

// Export Meta objects for direct use
export { BazziMeta } from "./BazziLists"
export { DouriMeta } from "./DouriLists"
export { HafsMeta } from "./HafsLists"
export { QalunMeta } from "./QalunLists"
export { QunbulMeta } from "./QunbulLists"
export { ShubaMeta } from "./ShubaLists"
export { SousiMeta } from "./SousiLists"
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
    case "Bazzi": {
      return BazziLists
    }
    case "Douri": {
      return DouriLists
    }
    case "Hafs": {
      return HafsLists
    }
    case "Qalun": {
      return QalunLists
    }
    case "Qunbul": {
      return QunbulLists
    }
    case "Shuba": {
      return ShubaLists
    }
    case "Sousi": {
      return SousiLists
    }
    case "Warsh": {
      return WarshLists
    }
    default: {
      throw new Error(`Unknown riwaya: ${riwaya}`)
    }
  }
}

export const getListOfRiwaya = <R extends keyof Riwayas, L extends keyof Riwayas[R]>(
  listName: L,
  riwaya?: R
): Riwayas[R][L] => {
  const actualRiwaya = riwaya ?? "Hafs"
  const lists = getListsOfRiwaya(actualRiwaya)

  if (listName in lists) {
    return lists[listName as keyof typeof lists] as Riwayas[R][L]
  }

  throw new Error(`List ${String(listName)} not found in ${actualRiwaya} riwaya`)
}
