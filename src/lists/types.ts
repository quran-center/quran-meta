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


export type RiwayahsWith<L extends keyof allLists> = {
  [R in keyof Riwayas]: L extends keyof Riwayas[R] ? R : never
}[keyof Riwayas]




export type riwayaName = keyof Riwayas

