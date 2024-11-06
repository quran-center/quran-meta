import { findAyahIdBySurah, meta } from "../src"

describe("findAyahIdBySurah", () => {
  it("should return correct AyahId for first ayah of first surah", () => {
    expect(findAyahIdBySurah(1, 1)).toEqual(1)
  })

  it("should return correct AyahId for last ayah of first surah", () => {
    expect(findAyahIdBySurah(1, 7)).toEqual(7)
  })

  it("should return correct AyahId for first ayah of second surah", () => {
    expect(findAyahIdBySurah(2, 1)).toEqual(8)
  })

  it("should return correct AyahId for middle of a surah", () => {
    expect(findAyahIdBySurah(3, 60)).toEqual(353)
  })

  it("should return correct AyahId for last surah", () => {
    expect(findAyahIdBySurah(114, 1)).toEqual(6231)
  })

  it("should return correct AyahId for last ayah of last surah", () => {
    expect(findAyahIdBySurah(114, 6)).toEqual(6236)
  })

  it("should handle edge cases", () => {
    expect(findAyahIdBySurah(1, 2)).toEqual(2)
    expect(findAyahIdBySurah(114, 6)).toEqual(meta.numAyahs)
    expect(findAyahIdBySurah(9, 51)).toEqual(1286)
    expect(findAyahIdBySurah(9, 1)).toEqual(1236)
    expect(findAyahIdBySurah(10, 50)).toEqual(1414)
  })

  it("should throw error for invalid surah", () => {
    expect(() => findAyahIdBySurah(115, 1)).toThrow()
  })

  it("should throw error for invalid ayah", () => {
    expect(() => findAyahIdBySurah(1, 8)).toThrow()
  })
})
