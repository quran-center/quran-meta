import { isAyahPageFirst } from "../src"

describe("isAyahPageFirst", () => {
  it("basic", () => {
    expect(isAyahPageFirst(1)).toEqual(1)
    expect(isAyahPageFirst(149)).toEqual(22)
  })

  it("should return correct Juz for valid surah and ayah in ayah mode", () => {
    const result = isAyahPageFirst(1)
    expect(result).toBeDefined()
    expect(typeof result).toBe("number")
  })

  it("should throw error for invalid ayah in ayah mode", () => {
    expect(() => isAyahPageFirst(0)).toThrow()
  })
})
