import { type Riwayas, type RiwayaData, type PartType, parts } from "./types"

export const getList = <
  P extends PartType,
  M extends Riwayas,
  R extends keyof M,
  L extends keyof M[R]
>(
  name: P,
  lists: RiwayaData
): M[R][L] => {
  if (!parts[name]) throw new Error(`Invalid list name: ${name}`)

  const listName = parts[name] as keyof RiwayaData
  if (listName in lists) {
    return lists[listName as keyof typeof lists] as M[R][L]
  }

  throw new Error(`List ${String(listName)} not found in ${lists.meta.riwayaName} riwaya`)
}
