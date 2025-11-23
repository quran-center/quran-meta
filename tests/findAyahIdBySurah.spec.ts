import { findAyahIdBySurah } from "../src"
import { HafsMeta, HafsLists } from "../src/lists/aHafsLists"

describe("findAyahIdBySurah", () => {
  it("should return correct AyahId for first ayah of first surah", () => {
    expect(findAyahIdBySurah(1, 1, HafsLists)).toEqual(1)
  })

  it("should return correct AyahId for last ayah of first surah", () => {
    expect(findAyahIdBySurah(1, 7, HafsLists)).toEqual(7)
  })

  it("should return correct AyahId for first ayah of second surah", () => {
    expect(findAyahIdBySurah(2, 1, HafsLists)).toEqual(8)
  })

  it("should return correct AyahId for middle of a surah", () => {
    expect(findAyahIdBySurah(3, 60, HafsLists)).toEqual(353)
  })

  it("should return correct AyahId for last surah", () => {
    expect(findAyahIdBySurah(114, 1, HafsLists)).toEqual(6231)
  })

  it("should return correct AyahId for last ayah of last surah", () => {
    expect(findAyahIdBySurah(114, 6, HafsLists)).toEqual(6236)
  })

  it("should handle edge cases", () => {
    expect(findAyahIdBySurah(1, 2, HafsLists)).toEqual(2)
    expect(findAyahIdBySurah(114, 6, HafsLists)).toEqual(HafsMeta.numAyahs)
    expect(findAyahIdBySurah(9, 51, HafsLists)).toEqual(1286)
    expect(findAyahIdBySurah(9, 1, HafsLists)).toEqual(1236)
    expect(findAyahIdBySurah(10, 50, HafsLists)).toEqual(1414)
  })

  it("should throw error for invalid surah", () => {
    expect(() => findAyahIdBySurah(115, 1, HafsLists)).toThrow()
  })

  it("should throw error for invalid ayah", () => {
    expect(() => findAyahIdBySurah(1, 8, HafsLists)).toThrow()
  })
})
