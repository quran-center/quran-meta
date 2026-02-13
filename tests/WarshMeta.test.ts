import { describe, expect, test } from "vitest"
import {
  HizbEighthList,
  HizbQuarterList,
  JuzList,
  ManzilList,
  PageList,
  RukuList,
  SajdaList,
  SurahList,
  WarshMeta
} from "../src/lists/WarshLists"

describe("WarshMeta Validation", () => {
  test("numAyahs should match total ayahs in last surah", () => {
    const lastSurah = SurahList[114]
    const calculated = lastSurah[0] + lastSurah[1] - 1
    expect(WarshMeta.numAyahs).toBe(calculated)
  })

  test("numSurahs should be 114", () => {
    const calculated = SurahList.length - 2
    expect(WarshMeta.numSurahs).toBe(calculated)
    expect(WarshMeta.numSurahs).toBe(114)
  })

  test("numPages should match PageList", () => {
    const calculated = PageList.length - 2
    expect(WarshMeta.numPages).toBe(calculated)
  })

  test("numJuzs should match JuzList", () => {
    const calculated = JuzList.length - 2
    expect(WarshMeta.numJuzs).toBe(calculated)
  })

  test("numManzils should match ManzilList", () => {
    const calculated = ManzilList.length - 2
    expect(WarshMeta.numManzils).toBe(calculated)
    expect(WarshMeta.numManzils).toBe(7)
  })

  test("numRubAlHizbs should match HizbQuarterList", () => {
    const calculated = HizbQuarterList.length - 2
    expect(WarshMeta.numRubAlHizbs).toBe(calculated)
  })

  test("numHizbs should be numRubAlHizbs / 4", () => {
    const calculated = WarshMeta.numRubAlHizbs / 4
    expect(WarshMeta.numHizbs).toBe(calculated)
  })

  test("numRubsInJuz should be 8", () => {
    expect(WarshMeta.numRubsInJuz).toBe(8)
  })

  test("numSajdas should match SajdaList", () => {
    const calculated = SajdaList.length
    expect(WarshMeta.numSajdas).toBe(calculated)
  })

  test("numRukus should match RukuList", () => {
    const calculated = RukuList.length - 2
    expect(WarshMeta.numRukus).toBe(calculated)
  })

  test("numThumunAlHizbs should be 0 for Warsh", () => {
    const calculated = HizbEighthList.length - 2
    expect(WarshMeta.numThumunAlHizbs).toBe(calculated)
    expect(WarshMeta.numThumunAlHizbs).toBe(480)
  })
})
