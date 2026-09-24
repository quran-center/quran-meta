import type { AyahId, QuranMeta, SurahInfo } from "../types"
import type { FixedArray } from "../ts-utils"

export interface RiwayaFullData {
  HizbEighthList: AyahId[]
  HizbQuarterList: AyahId[]
  JuzList: AyahId[]
  ManzilList: AyahId[]
  PageList: AyahId[]
  RukuList: AyahId[]
  SajdaList: AyahId[]
  SurahList: FixedArray<SurahInfo, 116>
  meta: QuranMeta
}
export type RiwayasNames = ["Bazzi", "Douri", "Hafs", "Qalun", "Qunbul", "Shuba", "Sousi", "Warsh"]
export type RiwayaName = RiwayasNames[number]
export type AllListsNames = keyof Omit<RiwayaFullData, "meta">

export interface MissingListsPerRiwaya {
  Bazzi: ["HizbEighthList"]
  Douri: ["HizbEighthList"]
  Hafs: ["HizbEighthList"]
  Qalun: []
  Qunbul: ["HizbEighthList"]
  Shuba: ["HizbEighthList"]
  Sousi: ["HizbEighthList"]
  Warsh: ["HizbEighthList"]
}
export type Riwayas = {
  [k in RiwayaName]: Omit<RiwayaFullData, MissingListsPerRiwaya[k][number]> & { meta: QuranMeta }
}
export type RiwayaData = Riwayas[RiwayaName]

/** Riwayas that have thumun al-hizb (HizbEighthList) data */
export type ThumunRiwayaName = {
  [R in RiwayaName]: MissingListsPerRiwaya[R] extends [] ? R : never
}[RiwayaName]
/* // Get all list keys available in a specific riwaya

export type ListsInRiwaya<R extends keyof Riwayas> = keyof Riwayas[R] */

export type RiwayahsWith<L extends AllListsNames> = {
  [R in RiwayaName]: L extends keyof Riwayas[R] ? Riwayas[R] : never
}[RiwayaName]

export type RiwayahsWithAll<L extends AllListsNames[]> = {
  [R in RiwayaName]: L[number] extends keyof Riwayas[R] ? Riwayas[R] : never
}[RiwayaName]

/* A map of readable parameters that can be used in the function and their corresponding list name */

export const partNames = ["surah", "juz", "rubAlHizb", "thumunAlHizb", "page", "manzil", "ruku"] as const
export type PartType = (typeof partNames)[number]

/** Maps each {@link PartType} to the name of the list that holds its boundaries */
export interface PartListNames {
  readonly juz: "JuzList"
  readonly manzil: "ManzilList"
  readonly page: "PageList"
  readonly rubAlHizb: "HizbQuarterList"
  readonly ruku: "RukuList"
  readonly surah: "SurahList"
  readonly thumunAlHizb: "HizbEighthList"
}

export const parts: PartListNames = {
  juz: "JuzList",
  manzil: "ManzilList",
  page: "PageList",
  rubAlHizb: "HizbQuarterList",
  ruku: "RukuList",
  surah: "SurahList",
  thumunAlHizb: "HizbEighthList"
} as const satisfies Record<PartType, AllListsNames>
