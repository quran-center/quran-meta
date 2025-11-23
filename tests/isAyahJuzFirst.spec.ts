import { isAyahJuzFirst } from "../src"
import { HafsLists } from "../src/lists/HafsLists"

describe("isAyahJuzFirst", () => {
  it("basic", () => {
    expect(isAyahJuzFirst(1, HafsLists)).toEqual(1)
    expect(isAyahJuzFirst(149, HafsLists)).toEqual(2)
  })

  it("should handle ayahMode correctly", () => {
    expect(isAyahJuzFirst(2142, HafsLists)).toBeLessThan(0)
    expect(isAyahJuzFirst(4001, HafsLists)).toBeLessThan(0)
    expect(isAyahJuzFirst(5673, HafsLists)).toBe(30)
  })
})
