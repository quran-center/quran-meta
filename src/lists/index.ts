import type {Riwayas} from "./types"
import {HafsLists} from "./HafsLists"
import { QalunLists } from "./QalunLists";


const riwayahs: Riwayas = {
Hafs : HafsLists,
Qalun : QalunLists
}

const getList = <R extends keyof Riwayas, L extends keyof Riwayas[R]>(riwaya:R, listName:L): Riwayas[R][L] => {
    return riwayahs[riwaya][listName]   
};
getList("Hafs","HizbQuarterList")