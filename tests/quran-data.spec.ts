import {
  findAyaidBySurah,
  findJuzMetaBySurah,
  findPage,
  findSurahByAyaid,
  getSurahMeta,
  isAyahJuzFirst,
  JuzList,
  meta,
  pageMeta
} from "../src/"
import { AyahId, AyahNo, Surah } from "../src/types"

console.log("STARING")
console.log(1, findSurahByAyaid(1))
console.log(2, findSurahByAyaid(8))
console.log("findSurahByAyaid 6216", findSurahByAyaid(6216))
console.log("findSurahByAyaid 6217", findSurahByAyaid(6217))
console.log("findSurahByAyaid 6226", findSurahByAyaid(6226))
console.log(meta.numAyas, findSurahByAyaid(meta.numAyas))
// console.log(6237, findSurahByAyaid(6237))
console.log("findSurahByAyaid 1", findSurahByAyaid(1))
console.log("findSurahByAyaid 147", findSurahByAyaid(149))
console.log("isAyahJuzFirst 1", isAyahJuzFirst(1, 1))
console.log("isAyahJuzFirst -1", isAyahJuzFirst(2, 2))
console.log("isAyahJuzFirst -1", isAyahJuzFirst(2, 141))
console.log("isAyahJuzFirst 2", isAyahJuzFirst(2, 142))
console.log("isAyahJuzFirst -1", isAyahJuzFirst(2, 143))
console.log("findAyaidBySurah 110.3", findAyaidBySurah(110, 3))
console.log("findAyaidBySurah 114.6", findAyaidBySurah(114, 6))

console.log("JuzList 6237", JuzList[31])
console.log("findJuzMetaBySurah 1,1", findJuzMetaBySurah(1, 1))
console.log("findJuzMetaBySurah 2,1", findJuzMetaBySurah(2, 1))
console.log("findJuzMetaBySurah 114,1", findJuzMetaBySurah(114, 1))
console.log("findJuzMetaBySurah 114,5", findJuzMetaBySurah(114, 5))
console.log("findPage 604", findPage(114, 1))
console.log("surahMeta 1", getSurahMeta(1))
console.log("surahMeta 114", getSurahMeta(114))
console.log("pageMeta 604", pageMeta(604))
// console.log("pmeta", pageMetaOld(604))
console.log("pmeta", pageMeta(1))
// console.log("pmeta", pageMetaOld(1))

const f = (i: AyahId) =>
  expect(findAyaidBySurah(...findSurahByAyaid(i))).toEqual(i)
const xf = (i: Surah, j: AyahNo) =>
  expect(findSurahByAyaid(findAyaidBySurah(i, j))).toEqual([i, j])

describe("crossTest", () => {
  it("ayaid of surah of Ayah", () => {
    for (let i = 1; i <= meta.numAyas; i++) {
      f(i)
    }
    f(meta.numAyas)
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
