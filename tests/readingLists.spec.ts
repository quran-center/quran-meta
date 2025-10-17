import { describe, it, expect, beforeEach } from "vitest"
import { 
  setCurrentReading, 
  DEFAULT_READING,
  getPageList,
  getJuzList,
  getSurahList,
  getPageListForReading,
  getJuzListForReading,
  getSurahListForReading
} from "../src"

describe("Reading-aware lists", () => {
  beforeEach(() => {
    // Reset to default before each test
    setCurrentReading(DEFAULT_READING)
  })

  it("should return hafs lists by default", () => {
    const pageList = getPageList()
    const juzList = getJuzList()
    const surahList = getSurahList()
    
    expect(pageList.length).toBeGreaterThan(0)
    expect(juzList.length).toBe(32) // 0 + 30 juzs + end marker
    expect(surahList.length).toBe(116) // -1 padding + 114 surahs + end marker
  })

  it("should return different lists for warsh reading", () => {
    const hafsPageList = getPageList()
    const hafsSurahList = getSurahList()
    
    setCurrentReading("warsh")
    const warshPageList = getPageList()
    const warshSurahList = getSurahList()
    
    // Page lists should differ
    expect(warshPageList).not.toEqual(hafsPageList)
    
    // Surah lists should have different ayah counts for some surahs
    expect(warshSurahList).not.toEqual(hafsSurahList)
  })

  it("should get lists for specific reading without changing context", () => {
    setCurrentReading("hafs")
    
    const warshPageList = getPageListForReading("warsh")
    const warshJuzList = getJuzListForReading("warsh")
    const warshSurahList = getSurahListForReading("warsh")
    
    expect(warshPageList.length).toBeGreaterThan(0)
    expect(warshJuzList.length).toBe(31) // Different count for warsh
    expect(warshSurahList.length).toBe(116)
    
    // Context should still be hafs
    expect(getPageList()).not.toEqual(warshPageList)
  })

  it("should return correct ayah counts for different readings", () => {
    const hafsLastSurah = getSurahListForReading("hafs")[114]
    const warshLastSurah = getSurahListForReading("warsh")[114]
    const shubaLastSurah = getSurahListForReading("shuba")[114]
    
    // Hafs: 6236 ayahs, last surah starts at 6231
    expect(hafsLastSurah[0]).toBe(6231) // Start of last surah
    
    // Warsh: 6214 ayahs, last surah starts at 6209
    expect(warshLastSurah[0]).toBe(6209)
    
    // Shuba: 6236 ayahs (same as Hafs)
    expect(shubaLastSurah[0]).toBe(6231)
  })

  it("should work with all supported readings", () => {
    const readings = ["hafs", "warsh", "qaloun", "douri", "sousi", "shuba"] as const
    
    for (const reading of readings) {
      setCurrentReading(reading)
      const pageList = getPageList()
      const juzList = getJuzList()
      const surahList = getSurahList()
      
      expect(pageList.length).toBeGreaterThan(0)
      expect(juzList.length).toBeGreaterThan(0)
      expect(surahList.length).toBe(116)
    }
  })

  it("should have consistent list structures", () => {
    const readings = ["hafs", "warsh", "qaloun", "douri", "sousi", "shuba"] as const
    
    for (const reading of readings) {
      const pageList = getPageListForReading(reading)
      const juzList = getJuzListForReading(reading)
      const surahList = getSurahListForReading(reading)
      
      // All lists should start with 0
      expect(pageList[0]).toBe(0)
      expect(juzList[0]).toBe(0)
      
      // Surah list should have padding at index 0
      expect(surahList[0][0]).toBe(-1)
    }
  })
})
