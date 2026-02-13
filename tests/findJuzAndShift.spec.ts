import { findJuzAndShift, findJuzAndShiftByAyahId } from "../src"
import { HafsLists, HafsMeta } from "../src/lists/HafsLists"

describe(findJuzAndShift, () => {
  it("basic", () => {
    expect(findJuzAndShift(1, 1, HafsLists)).toEqual({
      ayahsBetweenJuzSurah: 0,
      juz: 1,
      leftAyahId: 1
    })
    expect(findJuzAndShiftByAyahId(1, HafsLists)).toEqual({
      ayahsBetweenJuzSurah: 0,
      juz: 1,
      leftAyahId: 1
    })

    expect(findJuzAndShift(1, 2, HafsLists)).toEqual({
      ayahsBetweenJuzSurah: 0,
      juz: 1,
      leftAyahId: 1
    })

    expect(findJuzAndShift(2, 141, HafsLists)).toEqual({
      ayahsBetweenJuzSurah: 7,
      juz: 1,
      leftAyahId: 1
    })

    expect(findJuzAndShift(2, 142, HafsLists)).toEqual({
      ayahsBetweenJuzSurah: -141,
      juz: 2,
      leftAyahId: 149
    })
    expect(findJuzAndShift(2, 143, HafsLists)).toEqual({
      ayahsBetweenJuzSurah: -141,
      juz: 2,
      leftAyahId: 149
    })
    expect(findJuzAndShift(2, 150, HafsLists)).toEqual({
      ayahsBetweenJuzSurah: -141,
      juz: 2,
      leftAyahId: 149
    })

    expect(findJuzAndShift(2, 252, HafsLists)).toEqual({
      ayahsBetweenJuzSurah: -141,
      juz: 2,
      leftAyahId: 149
    })

    expect(findJuzAndShift(2, 253, HafsLists)).toEqual({
      ayahsBetweenJuzSurah: -252,
      juz: 3,
      leftAyahId: 260
    })

    expect(findJuzAndShift(3, 1, HafsLists)).toEqual({
      ayahsBetweenJuzSurah: 34,
      juz: 3,
      leftAyahId: 260
    })
  })

  it("should return correct juz, leftAyahId, and ayahsBetweenJuzSurah for valid input in surah mode", () => {
    const result = findJuzAndShift(2, 1, HafsLists)
    expect(result).toEqual({
      ayahsBetweenJuzSurah: 7,
      juz: 1,
      leftAyahId: 1
    })
  })

  it("should return correct juz, leftAyahId, and ayahsBetweenJuzSurah for valid input in ayah mode", () => {
    expect(findJuzAndShiftByAyahId(8, HafsLists)).toEqual({
      ayahsBetweenJuzSurah: 7,
      juz: 1,
      leftAyahId: 1
    })

    expect(findJuzAndShiftByAyahId(10, HafsLists)).toEqual({
      ayahsBetweenJuzSurah: 7,
      juz: 1,
      leftAyahId: 1
    })
  })

  it("should handle edge case at the end of a juz", () => {
    const result = findJuzAndShift(2, 141, HafsLists)
    expect(result.juz).toBe(1)
  })

  it("should handle edge case at the start of a juz", () => {
    const result = findJuzAndShift(2, 142, HafsLists)
    expect(result.juz).toBe(2)
  })

  it("should throw RangeError for invalid surah in surah mode", () => {
    expect(() => findJuzAndShift(115, 1, HafsLists)).toThrow(RangeError)
  })

  it("should throw RangeError for invalid ayah in ayah mode", () => {
    expect(() => findJuzAndShiftByAyahId(HafsMeta.numAyahs + 1, HafsLists)).toThrow(RangeError)
  })

  it("should ignore surah number if ayah mode is true", () => {
    const result = findJuzAndShiftByAyahId(1, HafsLists)
    expect(result.juz).toBeGreaterThan(0)
    expect(result.juz).toBeLessThanOrEqual(30)
  })
})
