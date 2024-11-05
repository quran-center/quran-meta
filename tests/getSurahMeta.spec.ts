import { getSurahMeta } from "../src/getSurahMeta"
import { SurahList } from "../src/lists/surahList"

describe("getSurahMeta", () => {
  it("should return correct metadata for first surah", () => {
    const result = getSurahMeta(1)
    expect(result).toEqual(SurahList[1])
  })

  it("should return correct metadata for last surah", () => {
    const result = getSurahMeta(114)
    expect(result).toEqual(SurahList[114])
  })

  it("should return correct metadata for a middle surah", () => {
    const result = getSurahMeta(57)
    expect(result).toEqual(SurahList[57])
  })

  it("should throw an error for surah number 0", () => {
    expect(() => getSurahMeta(0)).toThrow()
  })

  it("should throw an error for surah number 115", () => {
    expect(() => getSurahMeta(115)).toThrow()
  })
})
