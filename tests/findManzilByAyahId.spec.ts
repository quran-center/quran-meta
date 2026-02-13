import { findManzilByAyahId } from "../src"
import { HafsLists } from "../src/lists/HafsLists"

describe(findManzilByAyahId, () => {
  it("should return correct manzil for beginning of Quran", () => {
    expect(findManzilByAyahId(1, HafsLists)).toBe(1)
  })

  it("should return correct manzil for middle ayahs", () => {
    expect(findManzilByAyahId(1000, HafsLists)).toBe(2)
    expect(findManzilByAyahId(2000, HafsLists)).toBe(3)
    expect(findManzilByAyahId(3000, HafsLists)).toBe(5)
  })

  it("should return correct manzil for end of Quran", () => {
    expect(findManzilByAyahId(6236, HafsLists)).toBe(7)
  })

  it("should throw error for invalid ayah IDs", () => {
    expect(() => findManzilByAyahId(0, HafsLists)).toThrow()
    expect(() => findManzilByAyahId(-1, HafsLists)).toThrow()
    expect(() => findManzilByAyahId(6237, HafsLists)).toThrow()
  })

  it("should handle boundary cases between manzils", () => {
    expect(findManzilByAyahId(670, HafsLists)).toBe(2)
    expect(findManzilByAyahId(671, HafsLists)).toBe(2)
    expect(findManzilByAyahId(1365, HafsLists)).toBe(3)
    expect(findManzilByAyahId(1366, HafsLists)).toBe(3)
  })
})
