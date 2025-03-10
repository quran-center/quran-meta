import {
  findAyahIdBySurah,
  findJuzMetaBySurah,
  findPage,
  findSurahAyahByAyahId,
  findSurahByAyahId,
  getPageMeta,
  isAyahJuzFirst,
  JuzList,
  meta
} from "../src"
import { getSurahInfo } from "../src/getSurahInfo"
import { AyahId, AyahNo, Surah } from "../src/types"

console.log("STARING")
console.log(1, findSurahByAyahId(1))
console.log(2, findSurahByAyahId(8))
console.log("findSurahByAyahId 6216", findSurahByAyahId(6216))
console.log("findSurahByAyahId 6217", findSurahByAyahId(6217))
console.log("findSurahByAyahId 6226", findSurahByAyahId(6226))
console.log(meta.numAyahs, findSurahByAyahId(meta.numAyahs))
// console.log(6237, findSurahByAyahId(6237))
console.log("findSurahByAyahId 1", findSurahByAyahId(1))
console.log("findSurahByAyahId 147", findSurahByAyahId(149))
console.log("isAyahJuzFirst 1", isAyahJuzFirst(1, 1))
console.log("isAyahJuzFirst -1", isAyahJuzFirst(2, 2))
console.log("isAyahJuzFirst -1", isAyahJuzFirst(2, 141))
console.log("isAyahJuzFirst 2", isAyahJuzFirst(2, 142))
console.log("isAyahJuzFirst -1", isAyahJuzFirst(2, 143))
console.log("findAyahIdBySurah 110.3", findAyahIdBySurah(110, 3))
console.log("findAyahIdBySurah 114.6", findAyahIdBySurah(114, 6))

console.log("JuzList 6237", JuzList[31])
console.log("findJuzMetaBySurah 1,1", findJuzMetaBySurah(1, 1))
console.log("findJuzMetaBySurah 2,1", findJuzMetaBySurah(2, 1))
console.log("findJuzMetaBySurah 114,1", findJuzMetaBySurah(114, 1))
console.log("findJuzMetaBySurah 114,5", findJuzMetaBySurah(114, 5))
console.log("findPage 604", findPage(114, 1))
console.log("SurahInfo 1", getSurahInfo(1))
console.log("SurahInfo 114", getSurahInfo(114))
console.log("pageMeta 604", getPageMeta(604))
// console.log("pmeta", pageMetaOld(604))
console.log("pmeta", getPageMeta(1))
// console.log("pmeta", pageMetaOld(1))

const f = (i: AyahId) =>
  expect(findAyahIdBySurah(...findSurahAyahByAyahId(i))).toEqual(i)
const xf = (i: Surah, j: AyahNo) =>
  expect(findSurahAyahByAyahId(findAyahIdBySurah(i, j))).toEqual([i, j])

describe("crossTest", () => {
  it("ayahId of surah of Ayah", () => {
    for (let i = 1; i <= meta.numAyahs; i++) {
      f(i)
    }
    f(meta.numAyahs)
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
