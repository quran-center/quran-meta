import { isAyahPageFirst } from "../src"
import { HafsLists } from "../src/lists/HafsLists"

describe("isAyahPageFirst", () => {
  it("basic", () => {
    expect(isAyahPageFirst(1, HafsLists)).toEqual(1)
    expect(isAyahPageFirst(149, HafsLists)).toEqual(22)
  })

  it("should return correct Juz for valid surah and ayah in ayah mode", () => {
    const result = isAyahPageFirst(1, HafsLists)
    expect(result).toBeDefined()
    expect(typeof result).toBe("number")
  })

  it("should throw error for invalid ayah in ayah mode", () => {
    expect(() => isAyahPageFirst(0, HafsLists)).toThrow()
  })
})
