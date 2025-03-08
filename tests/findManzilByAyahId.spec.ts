import { findManzilByAyahId } from "../src"

describe("findManzilByAyahId", () => {
  it("should return correct manzil for beginning of Quran", () => {
    expect(findManzilByAyahId(1)).toBe(1)
  })

  it("should return correct manzil for middle ayahs", () => {
    expect(findManzilByAyahId(1000)).toBe(2)
    expect(findManzilByAyahId(2000)).toBe(3)
    expect(findManzilByAyahId(3000)).toBe(5)
  })

  it("should return correct manzil for end of Quran", () => {
    expect(findManzilByAyahId(6236)).toBe(7)
  })

  it("should throw error for invalid ayah IDs", () => {
    expect(() => findManzilByAyahId(0)).toThrow()
    expect(() => findManzilByAyahId(-1)).toThrow()
    expect(() => findManzilByAyahId(6237)).toThrow()
  })

  it("should handle boundary cases between manzils", () => {
    expect(findManzilByAyahId(670)).toBe(2)
    expect(findManzilByAyahId(671)).toBe(2)
    expect(findManzilByAyahId(1365)).toBe(3)
    expect(findManzilByAyahId(1366)).toBe(3)
  })
})
