import { getSurahInfo } from "../src/getSurahInfo"
import { HafsLists } from "../src/lists/aHafsLists"

const SurahList = HafsLists.SurahList

describe("getSurahInfo", () => {
  it("should return correct metadata for first surah", () => {
    const result = getSurahInfo(1, HafsLists)
    expect(result).toEqual(SurahList[1])
  })

  it("should return correct metadata for last surah", () => {
    const result = getSurahInfo(114, HafsLists)
    expect(result).toEqual(SurahList[114])
  })

  it("should return correct metadata for a middle surah", () => {
    const result = getSurahInfo(57, HafsLists)
    expect(result).toEqual(SurahList[57])
  })

  it("should throw an error for surah number 0", () => {
    expect(() => getSurahInfo(0, HafsLists)).toThrow()
  })

  it("should throw an error for surah number 115", () => {
    expect(() => getSurahInfo(115, HafsLists)).toThrow()
  })
})
