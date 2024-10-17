import { meta } from "../src"
import { findSurahByAyaid } from "../src/findSurahByAyaid"

describe("findSurahByAyaid", () => {
  it("surah of ayaid 1", () => {
    expect(findSurahByAyaid(1)).toEqual(expect.arrayContaining([1, 1]))
    expect(findSurahByAyaid(2)).toEqual(expect.arrayContaining([1, 2]))
    expect(findSurahByAyaid(7)).toEqual(expect.arrayContaining([1, 7]))
    expect(findSurahByAyaid(8)).toEqual(expect.arrayContaining([2, 1]))
    expect(findSurahByAyaid(6231)).toEqual(expect.arrayContaining([114, 1]))
    expect(findSurahByAyaid(6230)).toEqual(expect.arrayContaining([113, 5]))
    expect(findSurahByAyaid(meta.numAyahs)).toEqual(
      expect.arrayContaining([114, 6])
    )
  })

  it("should return correct surah and ayah for first ayah", () => {
    expect(findSurahByAyaid(1)).toEqual([1, 1])
  })

  it("should return correct surah and ayah for last ayah", () => {
    expect(findSurahByAyaid(meta.numAyahs)).toEqual([114, 6])
  })

  it("should return correct surah and ayah for middle ayah", () => {
    const middleAyah = Math.floor(meta.numAyahs / 2)
    expect(findSurahByAyaid(middleAyah)).toEqual([26, 186])
  })

  it("should return correct surah and ayah for ayah at surah boundary", () => {
    expect(findSurahByAyaid(7)).toEqual([1, 7])
    expect(findSurahByAyaid(8)).toEqual([2, 1])
  })

  it("should throw RangeError for invalid ayah id", () => {
    expect(() => findSurahByAyaid(0)).toThrow(RangeError)
    expect(() => findSurahByAyaid(meta.numAyahs + 1)).toThrow(RangeError)
  })
})
