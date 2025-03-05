import { getAyahMeta, meta } from "../src"

describe("ayahMeta", () => {
  it("should return correct metadata for the first ayah", () => {
    const result = getAyahMeta(1)
    expect(result.isStartOfSurah).toBeTruthy()
    expect(result.isStartOfPage).toBeTruthy()
    expect(result.isStartOfJuz).toBeTruthy()
    expect(result.isStartOfQuarter).toBeTruthy()
    expect(result.isEndOfSurah).toBeFalsy()
    expect(result.isEndOfPage).toBeFalsy()
    expect(result.isEndOfJuz).toBeFalsy()
    expect(result.isEndOfQuarter).toBeFalsy()
    expect(result.isSajdahAyah).toBeFalsy()
    expect(result.isEndOfRuku).toBeFalsy()
    expect(result.isStartOfRuku).toBeTruthy()
    expect(result.ruku).toBe(1)
  })

  it("should return correct metadata for the 7th ayah", () => {
    const result = getAyahMeta(7)
    expect(result.isStartOfSurah).toBeFalsy()
    expect(result.isStartOfPage).toBeFalsy()
    expect(result.isStartOfJuz).toBeFalsy()
    expect(result.isEndOfSurah).toBeTruthy()
    expect(result.isEndOfPage).toBeTruthy()
    expect(result.isEndOfJuz).toBeFalsy()
    expect(result.isSajdahAyah).toBeFalsy()
    expect(result.isStartOfRuku).toBeFalsy()
    expect(result.isEndOfRuku).toBeTruthy()
    expect(result.ruku).toBe(1)
  })

  it("should return correct metadata for the 8th ayah", () => {
    const result = getAyahMeta(8)
    expect(result.isStartOfSurah).toBeTruthy()
    expect(result.isStartOfPage).toBeTruthy()
    expect(result.isStartOfJuz).toBeFalsy()
    expect(result.isEndOfSurah).toBeFalsy()
    expect(result.isEndOfPage).toBeFalsy()
    expect(result.isEndOfJuz).toBeFalsy()
    expect(result.isEndOfRuku).toBeFalsy()
    expect(result.isStartOfRuku).toBeTruthy()
    expect(result.ruku).toBe(2)
    expect(result.isSajdahAyah).toBeFalsy()
  })

  it("should return correct metadata for the 14th ayah", () => {
    const result = getAyahMeta(14)
    expect(result.isStartOfSurah).toBeFalsy()
    // expect(result.isStartOfPage).toBeTruthy()
    expect(result.isStartOfJuz).toBeFalsy()
    expect(result.isEndOfSurah).toBeFalsy()
    expect(result.isEndOfPage).toBeFalsy()
    expect(result.isEndOfJuz).toBeFalsy()
    expect(result.isEndOfRuku).toBeTruthy()
    expect(result.isStartOfRuku).toBeFalsy()
    expect(result.ruku).toBe(2)
    expect(result.isSajdahAyah).toBeFalsy()
  })
  it("should return correct metadata for the 15th ayah", () => {
    const result = getAyahMeta(15)
    expect(result.isStartOfSurah).toBeFalsy()
    // expect(result.isStartOfPage).toBeTruthy()
    expect(result.isStartOfJuz).toBeFalsy()
    expect(result.isEndOfSurah).toBeFalsy()
    expect(result.isEndOfPage).toBeFalsy()
    expect(result.isEndOfJuz).toBeFalsy()
    expect(result.isEndOfRuku).toBeFalsy()
    expect(result.isStartOfRuku).toBeTruthy()
    expect(result.ruku).toBe(3)
    expect(result.isSajdahAyah).toBeFalsy()
  })

  it("should return correct metadata for the last ayah", () => {
    const result = getAyahMeta(meta.numAyahs)
    expect(result.isStartOfSurah).toBeFalsy()
    expect(result.isStartOfPage).toBeFalsy()
    expect(result.isStartOfJuz).toBeFalsy()
    expect(result.isEndOfSurah).toBeTruthy()
    expect(result.isEndOfPage).toBeTruthy()
    expect(result.isEndOfJuz).toBeTruthy()
    expect(result.isSajdahAyah).toBeFalsy()
    expect(result.isEndOfRuku).toBeTruthy()
    expect(result.isEndOfQuarter).toBeTruthy()
    expect(result.ruku).toBe(meta.numRukus)
  })

  it("1160 is SajdahAyah", () => {
    const result = getAyahMeta(1160)
    expect(result.isSajdahAyah).toBeTruthy()
  })

  it("1161 is not SajdahAyah", () => {
    const result = getAyahMeta(1161)
    expect(result.isSajdahAyah).toBeFalsy()
  })

  it("should throw RangeError for ayah number below 1", () => {
    expect(() => getAyahMeta(0)).toThrow(RangeError)
  })

  it("should throw RangeError for ayah number above numAyahs", () => {
    expect(() => getAyahMeta(meta.numAyahs + 1)).toThrow(RangeError)
  })

  it("should return correct metadata for ayah 6235", () => {
    const result = getAyahMeta(6235)
    expect(result.isStartOfRuku).toBeFalsy()
    expect(result.isEndOfRuku).toBeFalsy()
    expect(result.isEndOfQuarter).toBeFalsy()
    expect(result.ruku).toBe(meta.numRukus)
  })
})
