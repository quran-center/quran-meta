import { AyahId, SurahInfo } from "../types"
import { FixedArray } from "../ts-utils"

type allLists = {
    HizbEighthList: AyahId[],
    HizbQuarterList: AyahId[],
    JuzList: AyahId[],
    ManzilList: AyahId[],
    PageList: AyahId[],
    RukuList: AyahId[],
    SajdaList: AyahId[],
    SurahList: FixedArray<SurahInfo, 116>
}

type missingListsPerRiwaya ={
    Hafs : "HizbEighthList",
    Qalun : never
}
export type Riwayas = {
    [k in keyof missingListsPerRiwaya] : Omit<allLists,missingListsPerRiwaya[k]>
} 
/* // Get all list keys available in a specific riwaya
export type ListsInRiwaya<R extends keyof Riwayas> = keyof Riwayas[R] */

export type RiwayahsWith<L extends keyof allLists> = {
  [R in keyof Riwayas]: L extends keyof Riwayas[R] ? R : never
}[keyof Riwayas]

export type RiwayahsWithAll<L extends (keyof allLists)[]>={
      [R in keyof Riwayas] : L[number] extends keyof Riwayas[R] ? R : never
}[keyof Riwayas]


export type riwayaName = keyof Riwayas
 export type allListsNames = keyof allLists 

