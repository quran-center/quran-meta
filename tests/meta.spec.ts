import { HizbQuarterList, JuzList, ManzilList, meta, PageList, RukuList, SajdaList, SurahList } from "../src"

describe("Meta constants", () => {
  it("should return correct numSuras", () => {
    expect(meta.numSuras).toEqual(SurahList.length - 2)
  })

  it("should return correct numAyahs", () => {
    expect(meta.numAyahs).toEqual(SurahList[meta.numSuras + 1][0])
  })

  it("should return correct numManzils", () => {
    expect(meta.numManzils).toEqual(ManzilList.length - 2)
  })

  it("should return correct numSajdas", () => {
    expect(meta.numSajdas).toEqual(SajdaList.length)
  })

  it("should return correct numPages", () => {
    expect(meta.numPages).toEqual(PageList.length - 2)
  })

  it("should return correct numJuzs", () => {
    expect(meta.numJuzs).toEqual(JuzList.length - 2)
  })

  it("should return correct numRubAlHizbs", () => {
    expect(meta.numRubAlHizbs).toEqual(HizbQuarterList.length - 2)
  })

  it("should return correct numHizbs", () => {
    expect(meta.numHizbs).toEqual(meta.numRubAlHizbs / 4)
  })

  it("should return correct numRukus", () => {
    expect(meta.numRukus).toEqual(RukuList.length - 2)
  })
})
