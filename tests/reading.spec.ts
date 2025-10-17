import { describe, it, expect, beforeEach } from "vitest"
import { 
  getCurrentReading, 
  setCurrentReading, 
  withReading, 
  DEFAULT_READING,
  getMeta,
  getReadingMeta,
  hafsReadingMeta,
  warshReadingMeta
} from "../src"

describe("Reading configuration", () => {
  beforeEach(() => {
    // Reset to default before each test
    setCurrentReading(DEFAULT_READING)
  })

  it("should have hafs as default reading", () => {
    expect(DEFAULT_READING).toBe("hafs")
    expect(getCurrentReading()).toBe("hafs")
  })

  it("should allow changing current reading", () => {
    setCurrentReading("warsh")
    expect(getCurrentReading()).toBe("warsh")
    
    setCurrentReading("hafs")
    expect(getCurrentReading()).toBe("hafs")
  })

  it("should provide reading-specific metadata", () => {
    const hafsMeta = getReadingMeta("hafs")
    expect(hafsMeta.numAyahs).toBe(6236)
    expect(hafsMeta.numSurahs).toBe(114)
    expect(hafsMeta.numPages).toBe(604)
    
    const warshMeta = getReadingMeta("warsh")
    expect(warshMeta.numAyahs).toBe(6214) // 22 fewer than Hafs
    expect(warshMeta.numSurahs).toBe(114)
  })

  it("getMeta should return metadata for current reading", () => {
    setCurrentReading("hafs")
    let meta = getMeta()
    expect(meta.numAyahs).toBe(6236)
    
    setCurrentReading("warsh")
    meta = getMeta()
    expect(meta.numAyahs).toBe(6214)
  })

  it("withReading should temporarily switch reading", () => {
    setCurrentReading("hafs")
    expect(getCurrentReading()).toBe("hafs")
    
    const result = withReading("warsh", () => {
      expect(getCurrentReading()).toBe("warsh")
      return getMeta().numAyahs
    })
    
    expect(result).toBe(6214) // Warsh ayah count
    expect(getCurrentReading()).toBe("hafs") // Should restore
  })

  it("withReading should restore reading even on error", () => {
    setCurrentReading("hafs")
    
    try {
      withReading("warsh", () => {
        throw new Error("Test error")
      })
    }
    catch (e) {
      // Expected error
    }
    
    expect(getCurrentReading()).toBe("hafs") // Should still restore
  })

  it("should export hafsReadingMeta", () => {
    expect(hafsReadingMeta).toBeDefined()
    expect(hafsReadingMeta.numAyahs).toBe(6236)
  })

  it("should export warshReadingMeta", () => {
    expect(warshReadingMeta).toBeDefined()
    expect(warshReadingMeta.numAyahs).toBe(6214)
  })
})
