import { meta } from "../src"
import { findSurahByAyahId } from "../src/findSurahByAyahId"

describe("findSurahByAyahId", () => {
  it("surah of ayahId 1", () => {
    expect(findSurahByAyahId(1)).toEqual(expect.arrayContaining([1, 1]))
    expect(findSurahByAyahId(2)).toEqual(expect.arrayContaining([1, 2]))
    expect(findSurahByAyahId(7)).toEqual(expect.arrayContaining([1, 7]))
    expect(findSurahByAyahId(8)).toEqual(expect.arrayContaining([2, 1]))
    expect(findSurahByAyahId(6231)).toEqual(expect.arrayContaining([114, 1]))
    expect(findSurahByAyahId(6230)).toEqual(expect.arrayContaining([113, 5]))
    expect(findSurahByAyahId(meta.numAyahs)).toEqual(
      expect.arrayContaining([114, 6])
    )
  })

  it("should return correct surah and ayah for first ayah", () => {
    expect(findSurahByAyahId(1)).toEqual([1, 1])
  })

  it("should return correct surah and ayah for last ayah", () => {
    expect(findSurahByAyahId(meta.numAyahs)).toEqual([114, 6])
  })

  it("should return correct surah and ayah for middle ayah", () => {
    const middleAyah = Math.floor(meta.numAyahs / 2)
    expect(findSurahByAyahId(middleAyah)).toEqual([26, 186])
  })

  it("should return correct surah and ayah for ayah at surah boundary", () => {
    expect(findSurahByAyahId(7)).toEqual([1, 7])
    expect(findSurahByAyahId(8)).toEqual([2, 1])
  })

  it("should throw RangeError for invalid ayah id", () => {
    expect(() => findSurahByAyahId(0)).toThrow(RangeError)
    expect(() => findSurahByAyahId(meta.numAyahs + 1)).toThrow(RangeError)
  })
})
