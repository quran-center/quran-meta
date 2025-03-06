import { meta, getList, getSurahMeta, HizbQuarterList, JuzList, ManzilList, PageList, RukuList, SajdaList, SurahList } from "../src"
import { maxAyahsInSurah } from "../src/const"

describe("Meta constants", () => {
  it("should return correct numSurahs", () => {
    expect(meta.numSurahs).toEqual(SurahList.length - 2)
    expect(meta.numSurahs).toBe(114)
    expect(meta.numSurahs).toBe(getList("surah").length)
  })

  it("should return correct numAyahs", () => {
    expect(meta.numAyahs).toEqual(6236)
    expect(meta.numAyahs).toEqual(SurahList[meta.numSurahs + 1][0] - 1)
  })

  it("should have correct number of rubs in a juz", () => {
    expect(meta.numRubsInJuz).toBe(8)
  })

  it("should return correct numManzils", () => {
    expect(meta.numManzils).toBe(7)
    expect(meta.numManzils).toBe(getList("manzil").length)
    expect(meta.numManzils).toEqual(ManzilList.length - 2)
  })

  it("should return correct numSajdas", () => {
    expect(meta.numSajdas).toBe(15)
    expect(meta.numSajdas).toEqual(SajdaList.length)
  })

  it("should return correct numPages", () => {
    expect(meta.numPages).toBe(604)
    expect(meta.numPages).toBe(getList("page").length)
    expect(meta.numPages).toEqual(PageList.length - 2)
  })

  it("should return correct numJuzs", () => {
    expect(meta.numJuzs).toBe(30)
    expect(meta.numJuzs).toBe(getList("juz").length)
    expect(meta.numJuzs).toEqual(JuzList.length - 2)
  })

  it("should return correct numRubAlHizbs", () => {
    expect(meta.numRubAlHizbs).toBe(240)
    expect(meta.numRubAlHizbs).toBe(getList("rubAlHizb").length)
    expect(meta.numRubAlHizbs).toEqual(HizbQuarterList.length - 2)
  })

  it("should return correct numHizbs", () => {
    expect(meta.numHizbs).toBe(60)
    expect(meta.numHizbs).toBe(getList("rubAlHizb").length / 4)
    expect(meta.numHizbs).toEqual(meta.numRubAlHizbs / 4)
  })

  it("should return correct numRukus", () => {
    expect(meta.numRukus).toBe(556)
    expect(meta.numRukus).toBe(getList("ruku").length)
    expect(meta.numRukus).toEqual(RukuList.length - 2)
  })

  it("should have correct maximum number of ayahs in a surah", () => {
    expect(maxAyahsInSurah).toBe(286)
    expect(maxAyahsInSurah).toBe(getSurahMeta(2)[1])
  })
})
