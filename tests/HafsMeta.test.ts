import { describe, it, expect } from "vitest"
import { HafsLists, HafsMeta } from "../src/lists/HafsLists"
import type { Riwayas } from "../src/lists/types"

const hafsLists: Riwayas["Hafs"] = HafsLists

describe("HafsMeta validation", () => {
  it("should have correct numSurahs", () => {
    expect(HafsMeta.numSurahs).toBe(114)
  })

  it("should have correct numAyahs calculated from SurahList", () => {
    // Last real surah is at index 114 (An-Nas), SurahList[115] is just a sentinel
    const lastSurah = hafsLists.SurahList[114]
    const calculated = lastSurah[0] + lastSurah[1] - 1
    expect(HafsMeta.numAyahs).toBe(calculated)
    expect(HafsMeta.numAyahs).toBe(6236)
  })

  it("should have correct numJuzs calculated from JuzList", () => {
    // JuzList has: [0, juz1Start, juz2Start, ..., juz30Start, endSentinel] = 32 items
    // So numJuzs = length - 2 (excluding 0 and end sentinel)
    const calculated = hafsLists.JuzList.length - 2
    expect(HafsMeta.numJuzs).toBe(calculated)
    expect(HafsMeta.numJuzs).toBe(30)
  })

  it("should have correct numPages calculated from PageList", () => {
    const calculated = hafsLists.PageList.length - 2
    expect(HafsMeta.numPages).toBe(calculated)
    expect(HafsMeta.numPages).toBe(604)
  })

  it("should have correct numManzils calculated from ManzilList", () => {
    const calculated = hafsLists.ManzilList.length - 2
    expect(HafsMeta.numManzils).toBe(calculated)
    expect(HafsMeta.numManzils).toBe(7)
  })

  it("should have correct numRubAlHizbs calculated from HizbQuarterList", () => {
    const calculated = hafsLists.HizbQuarterList.length - 2
    expect(HafsMeta.numRubAlHizbs).toBe(calculated)
    expect(HafsMeta.numRubAlHizbs).toBe(240)
  })

  it("should have correct numHizbs calculated from HizbQuarterList", () => {
    const calculated = (hafsLists.HizbQuarterList.length - 2) / 4
    expect(HafsMeta.numHizbs).toBe(calculated)
    expect(HafsMeta.numHizbs).toBe(60)
  })

  it("should have correct numRukus calculated from RukuList", () => {
    const calculated = hafsLists.RukuList.length - 2
    expect(HafsMeta.numRukus).toBe(calculated)
    expect(HafsMeta.numRukus).toBe(556)
  })

  it("should have correct numSajdas calculated from SajdaList", () => {
    const calculated = hafsLists.SajdaList.length
    expect(HafsMeta.numSajdas).toBe(calculated)
    expect(HafsMeta.numSajdas).toBe(15)
  })

  it("should have correct numThumunAlHizbs (Hafs doesn't have Thumun al-Hizb)", () => {
    expect(HafsMeta.numThumunAlHizbs).toBe(0)
  })

  it("should have correct numRubsInJuz", () => {
    expect(HafsMeta.numRubsInJuz).toBe(8)
  })
})
