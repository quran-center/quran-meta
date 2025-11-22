import { AyahId, SurahInfo } from "../types"
import { FixedArray } from "../ts-utils"

type AllLists = {
  HizbEighthList: AyahId[]
  HizbQuarterList: AyahId[]
  JuzList: AyahId[]
  ManzilList: AyahId[]
  PageList: AyahId[]
  RukuList: AyahId[]
  SajdaList: AyahId[]
  SurahList: FixedArray<SurahInfo, 116>
}
type RiwayasNames = ["Hafs", "Qalun", "Warsh"]
export type RiwayaName = RiwayasNames[number]
export type AllListsNames = keyof AllLists

type MissingListsPerRiwaya = {
  Hafs: ["HizbEighthList"]
  Qalun: never
  Warsh: ["HizbEighthList", "RukuList"]
}
export type Riwayas = {
  [k in RiwayaName]: Omit<AllLists, MissingListsPerRiwaya[k][number]>
}

/* // Get all list keys available in a specific riwaya
export type ListsInRiwaya<R extends keyof Riwayas> = keyof Riwayas[R] */

export type RiwayahsWith<L extends AllListsNames> = {
  [R in RiwayaName]: L extends keyof Riwayas[R] ? R : never
}[RiwayaName]

export type RiwayahsWithAll<L extends (AllListsNames)[]> = {
  [R in RiwayaName]: L[number] extends keyof Riwayas[R] ? R : never
}[RiwayaName]
