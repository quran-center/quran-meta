import type { Riwayas, RiwayaData } from "./types"

export const getList = <
  M extends Riwayas,
  R extends keyof M,
  L extends keyof M[R]
>(
  listName: L,
  lists: RiwayaData
): M[R][L] => {
  if (listName in lists) {
    return lists[listName as keyof typeof lists] as M[R][L]
  }

  throw new Error(`List ${String(listName)} not found in ${lists.meta.riwayaName} riwaya`)
}
