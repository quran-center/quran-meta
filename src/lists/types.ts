import type { AyahId, QuranMeta, SurahInfo } from "../types"
import type { FixedArray } from "../ts-utils"

export type RiwayaFullData = {
  HizbEighthList?: AyahId[]
  HizbQuarterList: AyahId[]
  JuzList: AyahId[]
  ManzilList: AyahId[]
  PageList: AyahId[]
  RukuList: AyahId[]
  SajdaList: AyahId[]
  SurahList: FixedArray<SurahInfo, 116>
  meta: QuranMeta
}
type RiwayasNames = ["Hafs", "Qalun", "Warsh"]
export type RiwayaName = RiwayasNames[number]
export type AllListsNames = keyof Omit<RiwayaFullData, "meta">

type MissingListsPerRiwaya = {
  Hafs: ["HizbEighthList"]
  Qalun: []
  Warsh: []
}
export type Riwayas = {
  [k in RiwayaName]: Omit<RiwayaFullData, MissingListsPerRiwaya[k][number]> & { meta: QuranMeta }
}
export type RiwayaData = Riwayas[RiwayaName]
/* // Get all list keys available in a specific riwaya
export type ListsInRiwaya<R extends keyof Riwayas> = keyof Riwayas[R] */

export type RiwayahsWith<L extends AllListsNames> = {
  [R in RiwayaName]: L extends keyof Riwayas[R] ? Riwayas[R] : never
}[RiwayaName]

export type RiwayahsWithAll<L extends (AllListsNames)[]> = {
  [R in RiwayaName]: L[number] extends keyof Riwayas[R] ? Riwayas[R] : never
}[RiwayaName]
