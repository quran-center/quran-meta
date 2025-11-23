import type { Riwayas, RiwayaData } from "./types"

export const getList = <
  R extends keyof Riwayas,
  L extends keyof Riwayas[R]
>(
  listName: L,
  lists: RiwayaData
): Riwayas[R][L] => {
  if (listName in lists) {
    return lists[listName as keyof typeof lists] as Riwayas[R][L]
  }

  throw new Error(`List ${String(listName)} not found in ${lists.meta.riwayaName} riwaya`)
}
