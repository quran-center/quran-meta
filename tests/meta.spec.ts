import { generatePartBlocks } from "../src"
import { getListsOfRiwaya } from "../src/lists"
import { maxAyahsInSurah } from "../src/types"
import { getSurahInfo } from "../src/getSurahInfo"
import { HafsLists, HafsMeta } from "../src/lists/aHafsLists"
const { HizbQuarterList, JuzList, ManzilList, PageList, RukuList, SajdaList, SurahList } = getListsOfRiwaya("Hafs")

describe("Meta constants", () => {
  it("should return correct numSurahs", () => {
    expect(HafsMeta.numSurahs).toEqual(SurahList.length - 2)
    expect(HafsMeta.numSurahs).toBe(114)
    expect(HafsMeta.numSurahs).toBe(generatePartBlocks("surah", HafsLists).length)
  })

  it("should return correct numAyahs", () => {
    expect(HafsMeta.numAyahs).toEqual(6236)
    expect(HafsMeta.numAyahs).toEqual(SurahList[HafsMeta.numSurahs + 1][0] - 1)
  })

  it("should have correct number of rubs in a juz", () => {
    expect(HafsMeta.numRubsInJuz).toBe(8)
  })

  it("should return correct numManzils", () => {
    expect(HafsMeta.numManzils).toBe(7)
    expect(HafsMeta.numManzils).toBe(generatePartBlocks("manzil", HafsLists).length)
    expect(HafsMeta.numManzils).toEqual(ManzilList.length - 2)
  })

  it("should return correct numSajdas", () => {
    expect(HafsMeta.numSajdas).toBe(15)
    expect(HafsMeta.numSajdas).toEqual(SajdaList.length)
  })

  it("should return correct numPages", () => {
    expect(HafsMeta.numPages).toBe(604)
    expect(HafsMeta.numPages).toBe(generatePartBlocks("page", HafsLists).length)
    expect(HafsMeta.numPages).toEqual(PageList.length - 2)
  })

  it("should return correct numJuzs", () => {
    expect(HafsMeta.numJuzs).toBe(30)
    expect(HafsMeta.numJuzs).toBe(generatePartBlocks("juz", HafsLists).length)
    expect(HafsMeta.numJuzs).toEqual(JuzList.length - 2)
  })

  it("should return correct numRubAlHizbs", () => {
    expect(HafsMeta.numRubAlHizbs).toBe(240)
    expect(HafsMeta.numRubAlHizbs).toBe(generatePartBlocks("rubAlHizb", HafsLists).length)
    expect(HafsMeta.numRubAlHizbs).toEqual(HizbQuarterList.length - 2)
  })

  it("should return correct numHizbs", () => {
    expect(HafsMeta.numHizbs).toBe(60)
    expect(HafsMeta.numHizbs).toBe(generatePartBlocks("rubAlHizb", HafsLists).length / 4)
    expect(HafsMeta.numHizbs).toEqual(HafsMeta.numRubAlHizbs / 4)
  })

  it("should return correct numRukus", () => {
    expect(HafsMeta.numRukus).toBe(556)
    expect(HafsMeta.numRukus).toBe(generatePartBlocks("ruku", HafsLists).length)
    expect(HafsMeta.numRukus).toEqual(RukuList.length - 2)
  })

  it("should have correct maximum number of ayahs in a surah", () => {
    expect(maxAyahsInSurah).toBe(286)
    expect(maxAyahsInSurah).toBe(getSurahInfo(2, HafsLists)[1])
  })
})
