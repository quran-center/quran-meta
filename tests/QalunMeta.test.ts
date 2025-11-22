import { describe, it, expect } from "vitest"
import { QalunLists, QalunMeta } from "../src/lists/QalunLists"
import type { Riwayas } from "../src/lists/types"

const qalunLists: Riwayas["Qalun"] = QalunLists

describe("QalunMeta validation", () => {
  it("should have correct numSurahs", () => {
    expect(QalunMeta.numSurahs).toBe(114)
  })

  it("should have correct numAyahs calculated from SurahList", () => {
    // Last real surah is at index 114 (An-Nas), SurahList[115] is just a sentinel
    const lastSurah = qalunLists.SurahList[114]
    const calculated = lastSurah[0] + lastSurah[1] - 1
    expect(QalunMeta.numAyahs).toBe(calculated)
    expect(QalunMeta.numAyahs).toBe(6214)
  })

  it("should have correct numJuzs calculated from JuzList", () => {
    // JuzList has: [0, juz1Start, juz2Start, ..., juz30Start, endSentinel] = 32 items
    // So numJuzs = length - 2 (excluding 0 and end sentinel)
    const calculated = qalunLists.JuzList.length - 2
    expect(QalunMeta.numJuzs).toBe(calculated)
    expect(QalunMeta.numJuzs).toBe(30)
  })

  it("should have correct numPages calculated from PageList", () => {
    const calculated = qalunLists.PageList.length - 2
    expect(QalunMeta.numPages).toBe(calculated)
    expect(QalunMeta.numPages).toBe(604)
  })

  it("should have correct numManzils calculated from ManzilList", () => {
    const calculated = qalunLists.ManzilList.length - 2
    expect(QalunMeta.numManzils).toBe(calculated)
    expect(QalunMeta.numManzils).toBe(7)
  })

  it("should have correct numRubAlHizbs calculated from HizbQuarterList", () => {
    const calculated = qalunLists.HizbQuarterList.length - 2
    expect(QalunMeta.numRubAlHizbs).toBe(calculated)
    expect(QalunMeta.numRubAlHizbs).toBe(240)
  })

  it("should have correct numHizbs calculated from HizbQuarterList", () => {
    const calculated = (qalunLists.HizbQuarterList.length - 2) / 4
    expect(QalunMeta.numHizbs).toBe(calculated)
    expect(QalunMeta.numHizbs).toBe(60)
  })

  it("should have correct numRukus calculated from RukuList", () => {
    const calculated = qalunLists.RukuList.length - 2
    expect(QalunMeta.numRukus).toBe(calculated)
    expect(QalunMeta.numRukus).toBe(556)
  })

  it("should have correct numSajdas calculated from SajdaList", () => {
    const calculated = qalunLists.SajdaList.length
    expect(QalunMeta.numSajdas).toBe(calculated)
    expect(QalunMeta.numSajdas).toBe(12)
  })

  it("should have correct numThumunAlHizbs calculated from HizbEighthList", () => {
    const calculated = qalunLists.HizbEighthList.length - 2
    expect(QalunMeta.numThumunAlHizbs).toBe(calculated)
    expect(QalunMeta.numThumunAlHizbs).toBe(480)
  })

  it("should have correct numRubsInJuz", () => {
    expect(QalunMeta.numRubsInJuz).toBe(8)
  })
})
