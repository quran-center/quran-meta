import { findManzil } from "../src"
import { HafsLists } from "../src/lists/HafsLists"

describe("findManzil", () => {
  it("should return correct manzil for surah 1", () => {
    expect(findManzil(1, 1, HafsLists)).toBe(1)
  })

  it("should return correct manzil for surah 6", () => {
    expect(findManzil(6, 1, HafsLists)).toBe(2)
  })

  it("should return correct manzil for surah 17", () => {
    expect(findManzil(17, 1, HafsLists)).toBe(4)
  })

  it("should return correct manzil for surah 26", () => {
    expect(findManzil(26, 1, HafsLists)).toBe(5)
  })

  it("should return correct manzil for surah 37", () => {
    expect(findManzil(37, 1, HafsLists)).toBe(6)
  })

  it("should return correct manzil for surah 50", () => {
    expect(findManzil(50, 1, HafsLists)).toBe(7)
  })

  it("should return correct manzil for surah 67", () => {
    expect(findManzil(67, 1, HafsLists)).toBe(7)
  })

  it("should handle specific ayah numbers", () => {
    expect(findManzil(2, 142, HafsLists)).toBe(1)
    expect(findManzil(4, 24, HafsLists)).toBe(1)
  })
})
