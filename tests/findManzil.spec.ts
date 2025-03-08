import { findManzil } from "../src"

describe("findManzil", () => {
  it("should return correct manzil for surah 1", () => {
    expect(findManzil(1)).toBe(1)
  })

  it("should return correct manzil for surah 6", () => {
    expect(findManzil(6)).toBe(2)
  })

  it("should return correct manzil for surah 17", () => {
    expect(findManzil(17)).toBe(4)
  })

  it("should return correct manzil for surah 26", () => {
    expect(findManzil(26)).toBe(5)
  })

  it("should return correct manzil for surah 37", () => {
    expect(findManzil(37)).toBe(6)
  })

  it("should return correct manzil for surah 50", () => {
    expect(findManzil(50)).toBe(7)
  })

  it("should return correct manzil for surah 67", () => {
    expect(findManzil(67)).toBe(7)
  })

  it("should handle specific ayah numbers", () => {
    expect(findManzil(2, 142)).toBe(1)
    expect(findManzil(4, 24)).toBe(1)
  })
})
