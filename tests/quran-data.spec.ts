import {
  findAyaidBySurah,
  findSurahByAyaid,
  isAyahJuzFirst,
  findJuz,
  findJuzHizbByAyaid,
  findJuzMetaBySurah,
  findPage,
  nextAyah,
  prevAyah,
  ayaStringSplitter,
  // pageMetaOld,
  JuzList,
  pageMeta,
  SuraList,
  SajdaList,
  HizbQuarterList,
  ManzilList,
  PageList,
  RukuList,
  getSurahMeta,
  meta,
  findJuzByAyaid,
  isAyahPageFirst,
} from "../src/"
import { AyahNo, AyahId, Surah } from "../src/types"

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
console.log("2,1", findJuz(2, 1))
console.log("114,1", findJuz(114, 1))
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

describe("nextAyah", () => {
  it("true", () => {
    expect(nextAyah(1, 1)).toEqual(expect.arrayContaining([1, 2]))
    expect(nextAyah(1, 7)).toEqual(expect.arrayContaining([2, 1]))
    expect(nextAyah(113, 5)).toEqual(expect.arrayContaining([114, 1]))
    expect(nextAyah(114, 6)).toEqual(expect.arrayContaining([1, 1]))
  })
})

describe("prevAyah", () => {
  it("true", () => {
    expect(prevAyah(1, 2)).toEqual(expect.arrayContaining([1, 1]))
    expect(prevAyah(1, 6)).toEqual(expect.arrayContaining([1, 5]))
    expect(prevAyah(2, 1)).toEqual(expect.arrayContaining([1, 7]))
    expect(prevAyah(113, 1)).toEqual(expect.arrayContaining([112, 4]))
    expect(prevAyah(1, 1)).toEqual(expect.arrayContaining([114, 6]))
  })
})

describe("ayaStringSplitter", () => {
  it("true", () => {
    expect(ayaStringSplitter("1:1")).toEqual([1, 1])
    expect(ayaStringSplitter("1:1-5")).toEqual([1, [1, 5]])
    expect(ayaStringSplitter("114:1")).toEqual([114, 1])
    // expect(ayaStringSplitter("115:1")).toEqual([115,1])
  })
})

describe("findPage", () => {
  it("true", () => {
    expect(findPage(1, 1)).toEqual(1)
    expect(findPage(1, 2)).toEqual(1)
    expect(findPage(2, 1)).toEqual(2)
    expect(findPage(114, 1)).toEqual(604)
  })
})

describe("findJuzByAyaid", () => {
  it("true", () => {
    expect(findJuzByAyaid(1)).toEqual(1)
    expect(findJuzByAyaid(2)).toEqual(1)
    expect(findJuzByAyaid(100)).toEqual(1)
    expect(findJuzByAyaid(148)).toEqual(1)
    expect(findJuzByAyaid(149)).toEqual(2)
    expect(findJuzByAyaid(200)).toEqual(2)
    expect(findJuzByAyaid(6236)).toEqual(30)
  })
})

describe("findJuz", () => {
  it("true", () => {
    expect(findJuz(1, 1)).toEqual(1)
    expect(findJuz(1, 2)).toEqual(1)
    expect(findJuz(2, 1)).toEqual(1)
    expect(findJuz(3, 1)).toEqual(3)
    expect(findJuz(114, 1)).toEqual(30)
  })
})

describe("findJuzHizbByAyaid", () => {
  it("true", () => {
    expect(findJuzHizbByAyaid(1)).toEqual({ hizb: 1, id: 1, juz: 1 })
    expect(findJuzHizbByAyaid(32)).toEqual({ hizb: 1, id: 1, juz: 1 })
    expect(findJuzHizbByAyaid(33)).toEqual({ hizb: 2, id: 2, juz: 1 })
    expect(findJuzHizbByAyaid(148)).toEqual({ hizb: 8, id: 8, juz: 1 })
    expect(findJuzHizbByAyaid(149)).toEqual({ hizb: 1, id: 9, juz: 2 })
    expect(findJuzHizbByAyaid(meta.numAyas)).toEqual({
      hizb: 8,
      id: 240,
      juz: 30,
    })
  })
})

describe("isAyahJuzFirst", () => {
  it("true", () => {
    expect(isAyahJuzFirst(1, 1)).toEqual(1)
    expect(isAyahJuzFirst(-1, 1, true)).toEqual(1)
    expect(isAyahJuzFirst(2, 142)).toEqual(2)
    expect(isAyahJuzFirst(-1, 149, true)).toEqual(2)
  })

  it("false", () => {
    expect(isAyahJuzFirst(2, 1)).toEqual(-3)
    expect(isAyahJuzFirst(114, 1)).toEqual(-32)
    expect(isAyahJuzFirst(1, 114)).toEqual(-3)
  })
})


describe("isAyahPageFirst", () => {
  it("true", () => {
    expect(isAyahPageFirst(1, 1)).toEqual(1)
    expect(isAyahPageFirst(-1, 1, true)).toEqual(1)
    expect(isAyahPageFirst(2, 1)).toEqual(2)
    expect(isAyahPageFirst(2, 142)).toEqual(22)
    expect(isAyahPageFirst(-1, 149, true)).toEqual(22)
  })

  it("false", () => {
    expect(isAyahPageFirst(2, 2)).toEqual(-4)
    // expect(isAyahPageFirst(114, 1)).toEqual(-32)
    // expect(isAyahPageFirst(1, 114)).toEqual(-3)
  })
})

describe("findSurahByAyaid", () => {
  it("surah of ayaid 1", () => {
    expect(findSurahByAyaid(1)).toEqual(expect.arrayContaining([1, 1]))
    expect(findSurahByAyaid(2)).toEqual(expect.arrayContaining([1, 2]))
    expect(findSurahByAyaid(7)).toEqual(expect.arrayContaining([1, 7]))
    expect(findSurahByAyaid(8)).toEqual(expect.arrayContaining([2, 1]))
    expect(findSurahByAyaid(meta.numAyas)).toEqual(
      expect.arrayContaining([114, 6])
    )
  })
})

describe("findAyaidBySurah", () => {
  it("ayaid of surah 1", () => {
    expect(findAyaidBySurah(1, 1)).toEqual(1)
    expect(findAyaidBySurah(1, 2)).toEqual(2)
    expect(findAyaidBySurah(2, 1)).toEqual(8)
    expect(findAyaidBySurah(114, 6)).toEqual(meta.numAyas)
  })
})

let f = (i: AyahId) =>
  expect(findAyaidBySurah(...findSurahByAyaid(i))).toEqual(i)
let xf = (i: Surah, j: AyahNo) =>
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
