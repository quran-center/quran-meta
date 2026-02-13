import { findSurahAyahByAyahId } from "../src"
import { HafsLists, HafsMeta } from "../src/lists/HafsLists"

describe("findSurahByAyahId", () => {
  it("surah of ayahId 1", () => {
    expect(findSurahAyahByAyahId(1, HafsLists)).toEqual(expect.arrayContaining([1, 1]))
    expect(findSurahAyahByAyahId(2, HafsLists)).toEqual(expect.arrayContaining([1, 2]))
    expect(findSurahAyahByAyahId(7, HafsLists)).toEqual(expect.arrayContaining([1, 7]))
    expect(findSurahAyahByAyahId(8, HafsLists)).toEqual(expect.arrayContaining([2, 1]))
    expect(findSurahAyahByAyahId(6231, HafsLists)).toEqual(expect.arrayContaining([114, 1]))
    expect(findSurahAyahByAyahId(6230, HafsLists)).toEqual(expect.arrayContaining([113, 5]))
    expect(findSurahAyahByAyahId(HafsMeta.numAyahs, HafsLists)).toEqual(expect.arrayContaining([114, 6]))
  })

  it("should return correct surah and ayah for first ayah", () => {
    expect(findSurahAyahByAyahId(1, HafsLists)).toEqual([1, 1])
  })

  it("should return correct surah and ayah for last ayah", () => {
    expect(findSurahAyahByAyahId(HafsMeta.numAyahs, HafsLists)).toEqual([114, 6])
  })

  it("should return correct surah and ayah for middle ayah", () => {
    const middleAyah = Math.floor(HafsMeta.numAyahs / 2)
    expect(findSurahAyahByAyahId(middleAyah, HafsLists)).toEqual([26, 186])
  })

  it("should return correct surah and ayah for ayah at surah boundary", () => {
    expect(findSurahAyahByAyahId(7, HafsLists)).toEqual([1, 7])
    expect(findSurahAyahByAyahId(8, HafsLists)).toEqual([2, 1])
  })

  it("should throw RangeError for invalid ayah id", () => {
    expect(() => findSurahAyahByAyahId(0, HafsLists)).toThrow(RangeError)
    expect(() => findSurahAyahByAyahId(HafsMeta.numAyahs + 1, HafsLists)).toThrow(RangeError)
  })
})
