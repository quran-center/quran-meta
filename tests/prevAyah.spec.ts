import { prevAyah } from "../src"
import { HafsLists, HafsMeta } from "../src/lists/HafsLists"

const meta = HafsMeta

describe(prevAyah, () => {
  it("basic", () => {
    expect(prevAyah(1, 6, HafsLists)).toEqual([1, 5])
    expect(prevAyah(113, 1, HafsLists)).toEqual([112, 4])
  })

  it("should return the previous ayah within the same surah", () => {
    expect(prevAyah(1, 2, HafsLists)).toEqual([1, 1])
    expect(prevAyah(2, 286, HafsLists)).toEqual([2, 285])
  })

  it("should return the last ayah of the previous surah when at the beginning of a surah", () => {
    expect(prevAyah(2, 1, HafsLists)).toEqual([1, 7])
    expect(prevAyah(114, 1, HafsLists)).toEqual([113, 5])
  })

  it("should wrap around to the last ayah of the last surah when at the beginning of the Quran", () => {
    expect(prevAyah(1, 1, HafsLists)).toEqual([114, 6])
  })

  it("should throw RangeError for invalid surah", () => {
    // @ts-expect-error out-of-range value on purpose
    expect(() => prevAyah(0, 1, HafsLists)).toThrow(RangeError)
    // @ts-expect-error out-of-range value on purpose
    expect(() => prevAyah(115, 1, HafsLists)).toThrow(RangeError)
  })

  it("should throw RangeError with correct message for invalid surah", () => {
    // @ts-expect-error out-of-range value on purpose
    expect(() => prevAyah(0, 1, HafsLists)).toThrow(`Surah must be between 1 and ${meta.numSurahs}`)
    // @ts-expect-error out-of-range value on purpose
    expect(() => prevAyah(115, 1, HafsLists)).toThrow(`Surah must be between 1 and ${meta.numSurahs}`)
  })

  it("should handle edge cases", () => {
    expect(prevAyah(9, 128, HafsLists)).toEqual([9, 127])
    expect(prevAyah(3, 1, HafsLists)).toEqual([2, 286])
  })

  it("returns undefined at the edge of the Quran when wrap is false", () => {
    expect(prevAyah(1, 1, HafsLists, { wrap: false })).toBeUndefined()
    expect(prevAyah(1, 1, HafsLists, { wrap: true })).toEqual([114, 6])
    expect(prevAyah(2, 5, HafsLists, { wrap: false })).toEqual([2, 4])
  })
})
