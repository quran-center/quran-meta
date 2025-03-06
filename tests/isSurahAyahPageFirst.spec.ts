import { isSurahAyahPageFirst } from "../src"

describe("isSurahAyahPageFirst", () => {
  it("basic", () => {
    expect(isSurahAyahPageFirst(1, 1)).toEqual(1)
    expect(isSurahAyahPageFirst(2, 1)).toEqual(2)
    expect(isSurahAyahPageFirst(2, 142)).toEqual(22)

    expect(isSurahAyahPageFirst(2, 2)).toEqual(-4)
    // expect(isSurahAyahPageFirst(114, 1)).toEqual(-32)
    // expect(isSurahAyahPageFirst(1, 114)).toEqual(-3)
  })

  it("should return correct Juz for valid surah and ayah in non-ayah mode", () => {
    const result = isSurahAyahPageFirst(1, 1)
    expect(result).toBeDefined()
    expect(typeof result).toBe("number")
  })

  it("should handle edge case with last surah and ayah", () => {
    const result = isSurahAyahPageFirst(114, 6)
    expect(result).toBeDefined()
    expect(typeof result).toBe("number")
  })

  it("should throw error for invalid surah in non-ayah mode", () => {
    expect(() => isSurahAyahPageFirst(115, 1)).toThrow()
  })

  it("should handle middle surah and ayah", () => {
    const result = isSurahAyahPageFirst(50, 20)
    expect(result).toBeDefined()
    expect(typeof result).toBe("number")
  })
})
