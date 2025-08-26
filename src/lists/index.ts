import { HafsLists } from "./hafsLists";
import { QalunLists } from "./QalunLists";
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
    HafsLists : "HizbEighthList",
    QalunLists : never
}

type RiwayaList = {
    [k in keyof missingListsPerRiwaya] : Omit<allLists,missingListsPerRiwaya[k]>
}

export const lists : RiwayaList = {
    HafsLists,
    QalunLists
}
