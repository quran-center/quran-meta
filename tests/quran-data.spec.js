import  {
  findAyaidBySurah,
  findSurahByAyaid,
  isAyahJuzFirst,
  findJuz,
  findJuzMetaBySurah,
  findPage,
  nextAyah,
  prevAyah,
  pageMetaOld,
  pageMeta
} from "../src/"

console.log(1, findSurahByAyaid(1))
console.log(6216, findSurahByAyaid(6216))
console.log(6217, findSurahByAyaid(6217))
console.log(6226, findSurahByAyaid(6226))
console.log(6236, findSurahByAyaid(6236))
console.log(6237, findSurahByAyaid(6237))
console.log(1, findSurahByAyaid(1))
console.log(147, findSurahByAyaid(149))
console.log("1", isAyahJuzFirst(1, 1))
console.log("-1", isAyahJuzFirst(2, 2))
console.log("-1", isAyahJuzFirst(2, 141))
console.log("2", isAyahJuzFirst(2, 142))
console.log("-1", isAyahJuzFirst(2, 143))
console.log("110.3", findAyaidBySurah(110, 3))
console.log("114.6", findAyaidBySurah(114, 6))
console.log("1,1", findJuzMetaBySurah(1, 1))
console.log("2,1", findJuzMetaBySurah(2, 1))
console.log("2,1", findJuz(2, 1))
console.log("114,1", findJuzMetaBySurah(114, 1))
console.log("604", findPage(114, 1))
console.log("pmeta", pageMeta(604))
console.log("pmeta", pageMetaOld(604))
console.log("pmeta", pageMeta(1))
console.log("pmeta", pageMetaOld(1))

describe("nextAyah", () => {
  it("true", () => {
    expect(nextAyah(1, 1)).toEqual(expect.arrayContaining([1, 2]))
    expect(nextAyah(1, 7)).toEqual(expect.arrayContaining([2, 1]))
    expect(nextAyah(113, 5)).toEqual(expect.arrayContaining([114, 1]))
    expect(nextAyah(114, 6)).toEqual(expect.arrayContaining([1, 1]))
  })
})

describe("nextAyah", () => {
  it("true", () => {
    expect(prevAyah(1, 2)).toEqual(expect.arrayContaining([1, 1]))
    expect(prevAyah(1, 6)).toEqual(expect.arrayContaining([1, 5]))
    expect(prevAyah(113, 1)).toEqual(expect.arrayContaining([112, 4]))
    expect(prevAyah(1, 1)).toEqual(expect.arrayContaining([114, 6]))
  })
})

describe("findPage", () => {
  it("true", () => {
    expect(findPage(1, 1)).toEqual(1)
    expect(findPage(1, 2)).toEqual(1)
    expect(findPage(114, 1)).toEqual(604)
  })
})

describe("findJuz", () => {
  it("true", () => {
    expect(findJuz(1, 1)).toEqual(1)
    expect(findJuz(1, 2)).toEqual(1)
    expect(findJuz(114, 1)).toEqual(30)
  })
})

describe("isAyahJuzFirst", () => {
  it("true", () => {
    expect(isAyahJuzFirst(1, 1)).toEqual(1)
  })

  it("false", () => {
    expect(isAyahJuzFirst(2, 1)).toEqual(-1)
    expect(isAyahJuzFirst(114, 1)).toEqual(-1)
    expect(isAyahJuzFirst(1, 114)).toEqual(-1)
  })
})

describe("findSurahByAyaid", () => {
  it("surah of ayaid 1", () => {
    expect(findSurahByAyaid(1)).toEqual(expect.arrayContaining([1, 1]))
    expect(findSurahByAyaid(2)).toEqual(expect.arrayContaining([1, 2]))
    expect(findSurahByAyaid(6236)).toEqual(expect.arrayContaining([114, 6]))
  })
})

describe("findAyaidBySurah", () => {
  it("ayaid of surah 1", () => {
    expect(findAyaidBySurah(1, 1)).toEqual(1)
    expect(findAyaidBySurah(1, 2)).toEqual(2)
  })
})

let f = i => expect(findAyaidBySurah(...findSurahByAyaid(i))).toEqual(i)
let xf = (i, j) =>
  expect(findSurahByAyaid(findAyaidBySurah(i, j))).toEqual([i, j])

describe("crossTest", () => {
  it("ayaid of surah of Ayah", () => {
    for (let i = 1; i <= 6236; i++) {
      f(i)
    }
    f(6236)
    f(6230)
    f(6226)
    xf(1, 2)
    xf(110, 1)
    xf(110, 3)
    xf(111, 1)
    xf(111, 5)
    xf(112, 1)
  })
})
