import { getAyahMeta } from "../src"
import { HafsLists, HafsMeta } from "../src/lists/aHafsLists"
import { QalunLists } from "../src/lists/QalunLists"

describe("ayahMeta", () => {
  it("should return correct metadata for the first ayah", () => {
    const result = getAyahMeta(1, HafsLists)
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
    const result = getAyahMeta(7, HafsLists)
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
    const result = getAyahMeta(8, HafsLists)
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
    const result = getAyahMeta(14, HafsLists)
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
    const result = getAyahMeta(15, HafsLists)
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
    const result = getAyahMeta(HafsMeta.numAyahs, HafsLists)
    expect(result.isStartOfSurah).toBeFalsy()
    expect(result.isStartOfPage).toBeFalsy()
    expect(result.isStartOfJuz).toBeFalsy()
    expect(result.isEndOfSurah).toBeTruthy()
    expect(result.isEndOfPage).toBeTruthy()
    expect(result.isEndOfJuz).toBeTruthy()
    expect(result.isSajdahAyah).toBeFalsy()
    expect(result.isEndOfRuku).toBeTruthy()
    expect(result.isEndOfQuarter).toBeTruthy()
    expect(result.ruku).toBe(HafsMeta.numRukus)
  })

  it("1160 is SajdahAyah", () => {
    const result = getAyahMeta(1160, HafsLists)
    expect(result.isSajdahAyah).toBeTruthy()
  })

  it("1161 is not SajdahAyah", () => {
    const result = getAyahMeta(1161, HafsLists)
    expect(result.isSajdahAyah).toBeFalsy()
  })

  it("should throw RangeError for ayah number below 1", () => {
    expect(() => getAyahMeta(0, HafsLists)).toThrow(RangeError)
  })

  it("should throw RangeError for ayah number above numAyahs", () => {
    expect(() => getAyahMeta(HafsMeta.numAyahs + 1, HafsLists)).toThrow(RangeError)
  })

  it("should return correct metadata for ayah 6235", () => {
    const result = getAyahMeta(6235, HafsLists)
    expect(result.isStartOfRuku).toBeFalsy()
    expect(result.isEndOfRuku).toBeFalsy()
    expect(result.isEndOfQuarter).toBeFalsy()
    expect(result.ruku).toBe(HafsMeta.numRukus)
  })

  it("should include thumunAlHizbId for Qalun riwaya", () => {
    const result = getAyahMeta(1, QalunLists)
    expect(result.thumunAlHizbId).toBeDefined()
    expect(result.thumunAlHizbId).toBeGreaterThanOrEqual(1)
    expect(result.thumunAlHizbId).toBeLessThanOrEqual(480)
  })
})
