import type { Riwayas } from "./types"
import { HafsLists } from "./HafsLists"
import { QalunLists } from "./QalunLists"

// todo: as the lists are going to be large, consider dynamic import here

const riwayahs: Riwayas = {
  Hafs: HafsLists,
  Qalun: QalunLists
} as const

/**
 * Retrieves the lists associated with a specific Riwaya.
 *
 * @example
 * ```typescript
 * const hafsLists = getListsOfRiwaya('hafs');
 * ```
 */
export function getListsOfRiwaya<R extends keyof Riwayas>(riwaya: R): Riwayas[R] {
  return riwayahs[riwaya]
}

export const getList = <
  R extends keyof Riwayas,
  L extends keyof Riwayas[R]
>(
  listName: L,
  riwaya?: R
): Riwayas[R][L] => {
  if (riwaya) {
    return riwayahs[riwaya][listName]
  }

  // if no riwaya is provided, fallback (choose the first one that has this list)
  for (const r of Object.keys(riwayahs) as (keyof Riwayas)[]) {
    if (listName in riwayahs[r]) {
      return riwayahs[r][listName as keyof Riwayas[typeof r]] as Riwayas[R][L]
    }
  }

  throw new Error(`List ${String(listName)} not found in any riwaya`)
}
