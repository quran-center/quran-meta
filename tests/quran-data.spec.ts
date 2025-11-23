import {
  findAyahIdBySurah,
  findJuzMetaBySurah,
  findPage,
  findSurahAyahByAyahId,
  findSurahByAyahId,
  getPageMeta,
  isAyahJuzFirst
} from "../src"
import { meta as HafsMeta } from "../src/hafs"
import { getSurahInfo } from "../src/getSurahInfo"
import { HafsLists } from "../src/lists/aHafsLists"
import type { AyahId, AyahNo, Surah } from "../src/types"

const JuzList = HafsLists.JuzList

console.log("STARING")
console.log(1, findSurahByAyahId(1, HafsLists))
console.log(2, findSurahByAyahId(8, HafsLists))
console.log("findSurahByAyahId 6216", findSurahByAyahId(6216, HafsLists))
console.log("findSurahByAyahId 6217", findSurahByAyahId(6217, HafsLists))
console.log("findSurahByAyahId 6226", findSurahByAyahId(6226, HafsLists))
console.log(HafsMeta.numAyahs, findSurahByAyahId(HafsMeta.numAyahs, HafsLists))
// console.log(6237, findSurahByAyahId(6237, HafsLists))
console.log("findSurahByAyahId 1", findSurahByAyahId(1, HafsLists))
console.log("findSurahByAyahId 147", findSurahByAyahId(149, HafsLists))
console.log("isAyahJuzFirst 1", isAyahJuzFirst(findAyahIdBySurah(1, 1, HafsLists), HafsLists))
console.log("isAyahJuzFirst -1", isAyahJuzFirst(findAyahIdBySurah(2, 2, HafsLists), HafsLists))
console.log("isAyahJuzFirst -1", isAyahJuzFirst(findAyahIdBySurah(2, 141, HafsLists), HafsLists))
console.log("isAyahJuzFirst 2", isAyahJuzFirst(findAyahIdBySurah(2, 142, HafsLists), HafsLists))
console.log("isAyahJuzFirst -1", isAyahJuzFirst(findAyahIdBySurah(2, 143, HafsLists), HafsLists))
console.log("findAyahIdBySurah 110.3", findAyahIdBySurah(110, 3, HafsLists))
console.log("findAyahIdBySurah 114.6", findAyahIdBySurah(114, 6, HafsLists))

console.log("JuzList 6237", JuzList[31])
console.log("findJuzMetaBySurah 1,1", findJuzMetaBySurah(1, 1, HafsLists))
console.log("findJuzMetaBySurah 2,1", findJuzMetaBySurah(2, 1, HafsLists))
console.log("findJuzMetaBySurah 114,1", findJuzMetaBySurah(114, 1, HafsLists))
console.log("findJuzMetaBySurah 114,5", findJuzMetaBySurah(114, 5, HafsLists))
console.log("findPage 604", findPage(114, 1, HafsLists))
console.log("SurahInfo 1", getSurahInfo(1, HafsLists))
console.log("SurahInfo 114", getSurahInfo(114, HafsLists))
console.log("pageMeta 604", getPageMeta(604, HafsLists))
// console.log("pmeta", pageMetaOld(604))
console.log("pmeta", getPageMeta(1, HafsLists))
// console.log("pmeta", pageMetaOld(1))

const f = (i: AyahId) =>
  expect(findAyahIdBySurah(...findSurahAyahByAyahId(i, HafsLists), HafsLists)).toEqual(i)
const xf = (i: Surah, j: AyahNo) =>
  expect(findSurahAyahByAyahId(findAyahIdBySurah(i, j, HafsLists), HafsLists)).toEqual([i, j])

describe("crossTest", () => {
  it("ayahId of surah of Ayah", () => {
    for (let i = 1; i <= HafsMeta.numAyahs; i++) {
      f(i)
    }
    f(HafsMeta.numAyahs)
    f(6230)
    f(6226)
    xf(1, 2)
    xf(2, 1)
    xf(3, 1)
    xf(110, 1)
    xf(110, 3)
    xf(111, 1)
    xf(111, 5)
    xf(112, 1)
  })
})
