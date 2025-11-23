import { isSurahAyahPageFirst } from "../src"
import { HafsLists } from "../src/lists/aHafsLists"

describe("isSurahAyahPageFirst", () => {
  it("basic", () => {
    expect(isSurahAyahPageFirst(1, 1, HafsLists)).toEqual(1)
    expect(isSurahAyahPageFirst(2, 1, HafsLists)).toEqual(2)
    expect(isSurahAyahPageFirst(2, 142, HafsLists)).toEqual(22)

    expect(isSurahAyahPageFirst(2, 2, HafsLists)).toEqual(-4)
    // expect(isSurahAyahPageFirst(114, 1, HafsLists)).toEqual(-32)
    // expect(isSurahAyahPageFirst(1, 114, HafsLists)).toEqual(-3)
  })

  it("should return correct Juz for valid surah and ayah in non-ayah mode", () => {
    const result = isSurahAyahPageFirst(1, 1, HafsLists)
    expect(result).toBeDefined()
    expect(typeof result).toBe("number")
  })

  it("should handle edge case with last surah and ayah", () => {
    const result = isSurahAyahPageFirst(114, 6, HafsLists)
    expect(result).toBeDefined()
    expect(typeof result).toBe("number")
  })

  it("should throw error for invalid surah in non-ayah mode", () => {
    expect(() => isSurahAyahPageFirst(115, 1, HafsLists)).toThrow()
  })

  it("should handle middle surah and ayah", () => {
    const result = isSurahAyahPageFirst(50, 20, HafsLists)
    expect(result).toBeDefined()
    expect(typeof result).toBe("number")
  })
})
