import { nextAyah } from "../src"
import { HafsMeta, HafsLists } from "../src/lists/HafsLists"

const meta = HafsMeta

describe("nextAyah", () => {
  it("should return the next ayah within the same surah", () => {
    expect(nextAyah(1, 1, HafsLists)).toEqual(expect.arrayContaining([1, 2]))
    expect(nextAyah(2, 285, HafsLists)).toEqual(expect.arrayContaining([2, 286]))
  })

  it("should return the first ayah of the next surah when at the end of a surah", () => {
    expect(nextAyah(1, 7, HafsLists)).toEqual(expect.arrayContaining([2, 1]))
    expect(nextAyah(113, 5, HafsLists)).toEqual(expect.arrayContaining([114, 1]))
  })

  it("should wrap around to the first ayah of the first surah when at the end of the Quran", () => {
    expect(nextAyah(114, 6, HafsLists)).toEqual(expect.arrayContaining([1, 1]))
  })

  it("should throw RangeError for invalid surah", () => {
    expect(() => nextAyah(0, 1, HafsLists)).toThrow(RangeError)
    expect(() => nextAyah(115, 1, HafsLists)).toThrow(RangeError)
  })

  it("should throw RangeError with correct message for invalid surah", () => {
    expect(() => nextAyah(0, 1, HafsLists)).toThrow(`Surah must be between 1 and ${meta.numSurahs}`)
    expect(() => nextAyah(115, 1, HafsLists)).toThrow(`Surah must be between 1 and ${meta.numSurahs}`)
  })

  it("should handle edge cases", () => {
    expect(nextAyah(9, 127, HafsLists)).toEqual(expect.arrayContaining([9, 128]))
    expect(nextAyah(2, 286, HafsLists)).toEqual(expect.arrayContaining([3, 1]))
  })
})
