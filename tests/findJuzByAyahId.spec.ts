import { findJuzByAyahId } from "../src"

describe("findJuzByAyahId", () => {
  it("basic", () => {
    expect(findJuzByAyahId(2)).toEqual(1)
    expect(findJuzByAyahId(100)).toEqual(1)
    expect(findJuzByAyahId(200)).toEqual(2)
  })

  it("should return correct Juz for first ayah", () => {
    expect(findJuzByAyahId(1)).toBe(1)
  })

  it("should return correct Juz for last ayah", () => {
    expect(findJuzByAyahId(6236)).toBe(30)
  })

  it("should return correct Juz for ayah at Juz boundary", () => {
    expect(findJuzByAyahId(148)).toBe(1)
    expect(findJuzByAyahId(149)).toBe(2)
    expect(findJuzByAyahId(1327)).toBe(10)
    expect(findJuzByAyahId(1328)).toBe(11)
  })

  it("should return correct Juz for middle ayah", () => {
    expect(findJuzByAyahId(3000)).toBe(19)
  })

  it("should throw error for invalid ayah id", () => {
    expect(() => findJuzByAyahId(0)).toThrow()
    expect(() => findJuzByAyahId(6237)).toThrow()
  })

  it("should handle edge cases", () => {
    expect(findJuzByAyahId(2)).toBe(1)
    expect(findJuzByAyahId(6235)).toBe(30)
  })
})
