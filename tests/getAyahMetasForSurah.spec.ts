import { getAyahMetasForSurah, getAyahMeta } from "../src"
import { HafsLists } from "../src/lists/HafsLists"
import type { Surah } from "../src"
import { getListOfRiwaya } from "../src/lists"

const SurahList = getListOfRiwaya("SurahList")

describe("getAyahMetasForSurah", () => {
  it("should return correct number of ayahs for Al-Fatiha (surah 1)", () => {
    const result = getAyahMetasForSurah(1, HafsLists)
    expect(result).toHaveLength(7)
    expect(result).toBeInstanceOf(Array)
    expect(result[0]).toBeInstanceOf(Object)
  })

  it("should return correct number of ayahs for Al-Fatiha (surah 1)", () => {
    const result = getAyahMetasForSurah(1, HafsLists)

    expect(result).toHaveLength(7)
    expect(result).toBeInstanceOf(Array)
    expect(result[0]).toBeInstanceOf(Object)
    for (let id = 1; id <= 7; id++) {
      expect(result[id - 1]).toEqual(getAyahMeta(id, HafsLists))
    }
  })

  it("should return correct number of ayahs for Al-Fatiha (surah 1)", () => {
    for (let i = 1 as Surah; i <= 114; i++ as Surah) {
      const result = getAyahMetasForSurah(i, HafsLists)
      const [startAyahId, ayahCount] = SurahList[i]
      for (let id = 1; id <= ayahCount; id++) {
        expect(result[id - 1]).toEqual(getAyahMeta(id + startAyahId - 1, HafsLists))
      }
    }
  })

  it("should return array of AyahMeta objects with required properties", () => {
    const result = getAyahMetasForSurah(1, HafsLists)
    const firstAyah = result[0]
    // console.log(firstAyah)
    expect(firstAyah).toHaveProperty("ayah")
    expect(firstAyah).toHaveProperty("surah")
    expect(firstAyah).toHaveProperty("page")
    expect(firstAyah).toHaveProperty("juz")
  })

  it("should throw RangeError for invalid surah number 0", () => {
    expect(() => getAyahMetasForSurah(0 as any, HafsLists)).toThrow(RangeError)
  })

  it("should throw RangeError for invalid surah number 115", () => {
    expect(() => getAyahMetasForSurah(115 as any, HafsLists)).toThrow(RangeError)
  })

  it("should return correct metadata for last surah (114)", () => {
    const result = getAyahMetasForSurah(114, HafsLists)
    expect(result).toHaveLength(6)
    expect(result[0].surah).toBe(114)
  })
})
