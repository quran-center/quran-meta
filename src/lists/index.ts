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
 *
 * @category Riwaya Data
 */
export function getListsOfRiwaya<R extends keyof Riwayas>(riwaya: R): Riwayas[R] {
  switch (riwaya) {
    case "Bazzi": {
      return BazziLists as Riwayas[R]
    }
    case "Douri": {
      return DouriLists as Riwayas[R]
    }
    case "Hafs": {
      return HafsLists as Riwayas[R]
    }
    case "Qalun": {
      return QalunLists
    }
    case "Qunbul": {
      return QunbulLists as Riwayas[R]
    }
    case "Shuba": {
      return ShubaLists as Riwayas[R]
    }
    case "Sousi": {
      return SousiLists as Riwayas[R]
    }
    case "Warsh": {
      return WarshLists as Riwayas[R]
    }
    default: {
      throw new Error(`Unknown riwaya: ${riwaya}`)
    }
  }
}

/**
 * Returns one list (e.g. `"PageList"`) of a riwaya, Hafs by default.
 *
 * @example
 * ```typescript
 * const warshPages = getListOfRiwaya("PageList", "Warsh")
 * ```
 *
 * @category Riwaya Data
 */
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
