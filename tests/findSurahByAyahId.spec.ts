import { meta, findSurahAyahByAyahId } from "../src"

describe("findSurahByAyahId", () => {
  it("surah of ayahId 1", () => {
    expect(findSurahAyahByAyahId(1)).toEqual(expect.arrayContaining([1, 1]))
    expect(findSurahAyahByAyahId(2)).toEqual(expect.arrayContaining([1, 2]))
    expect(findSurahAyahByAyahId(7)).toEqual(expect.arrayContaining([1, 7]))
    expect(findSurahAyahByAyahId(8)).toEqual(expect.arrayContaining([2, 1]))
    expect(findSurahAyahByAyahId(6231)).toEqual(expect.arrayContaining([114, 1]))
    expect(findSurahAyahByAyahId(6230)).toEqual(expect.arrayContaining([113, 5]))
    expect(findSurahAyahByAyahId(meta.numAyahs)).toEqual(
      expect.arrayContaining([114, 6])
    )
  })

  it("should return correct surah and ayah for first ayah", () => {
    expect(findSurahAyahByAyahId(1)).toEqual([1, 1])
  })

  it("should return correct surah and ayah for last ayah", () => {
    expect(findSurahAyahByAyahId(meta.numAyahs)).toEqual([114, 6])
  })

  it("should return correct surah and ayah for middle ayah", () => {
    const middleAyah = Math.floor(meta.numAyahs / 2)
    expect(findSurahAyahByAyahId(middleAyah)).toEqual([26, 186])
  })

  it("should return correct surah and ayah for ayah at surah boundary", () => {
    expect(findSurahAyahByAyahId(7)).toEqual([1, 7])
    expect(findSurahAyahByAyahId(8)).toEqual([2, 1])
  })

  it("should throw RangeError for invalid ayah id", () => {
    expect(() => findSurahAyahByAyahId(0)).toThrow(RangeError)
    expect(() => findSurahAyahByAyahId(meta.numAyahs + 1)).toThrow(RangeError)
  })
})
