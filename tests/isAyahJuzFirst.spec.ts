import { isAyahJuzFirst } from "../src/isAyahJuzFirst"

describe("isAyahJuzFirst", () => {
  it("basic", () => {
    expect(isAyahJuzFirst(1)).toEqual(1)
    expect(isAyahJuzFirst(149)).toEqual(2)
  })

  it("should handle ayahMode correctly", () => {
    expect(isAyahJuzFirst(2142)).toBeLessThan(0)
    expect(isAyahJuzFirst(4001)).toBeLessThan(0)
    expect(isAyahJuzFirst(5673)).toBe(30)
  })
})
