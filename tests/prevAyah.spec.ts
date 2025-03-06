import { meta, prevAyah } from "../src"

describe("prevAyah", () => {
  it("basic", () => {
    expect(prevAyah(1, 6)).toEqual(expect.arrayContaining([1, 5]))
    expect(prevAyah(113, 1)).toEqual(expect.arrayContaining([112, 4]))
  })

  it("should return the previous ayah within the same surah", () => {
    expect(prevAyah(1, 2)).toEqual(expect.arrayContaining([1, 1]))
    expect(prevAyah(2, 286)).toEqual(expect.arrayContaining([2, 285]))
  })

  it("should return the last ayah of the previous surah when at the beginning of a surah", () => {
    expect(prevAyah(2, 1)).toEqual(expect.arrayContaining([1, 7]))
    expect(prevAyah(114, 1)).toEqual(expect.arrayContaining([113, 5]))
  })

  it("should wrap around to the last ayah of the last surah when at the beginning of the Quran", () => {
    expect(prevAyah(1, 1)).toEqual(expect.arrayContaining([114, 6]))
  })

  it("should throw RangeError for invalid surah", () => {
    expect(() => prevAyah(0, 1)).toThrow(RangeError)
    expect(() => prevAyah(115, 1)).toThrow(RangeError)
  })

  it("should throw RangeError with correct message for invalid surah", () => {
    expect(() => prevAyah(0, 1)).toThrow(`Surah must be between 1 and ${meta.numSurahs}`)
    expect(() => prevAyah(115, 1)).toThrow(`Surah must be between 1 and ${meta.numSurahs}`)
  })

  it("should handle edge cases", () => {
    expect(prevAyah(9, 128)).toEqual(expect.arrayContaining([9, 127]))
    expect(prevAyah(3, 1)).toEqual(expect.arrayContaining([2, 286]))
  })
})
