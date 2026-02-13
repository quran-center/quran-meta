import { findRukuByAyahId } from "../src"
import { HafsLists } from "../src/lists/HafsLists"

describe(findRukuByAyahId, () => {
  it("should find correct ruku for valid ayah IDs", () => {
    expect(findRukuByAyahId(1, HafsLists)).toBe(1)
    expect(findRukuByAyahId(2, HafsLists)).toBe(1)
    expect(findRukuByAyahId(7, HafsLists)).toBe(1)
    expect(findRukuByAyahId(8, HafsLists)).toBe(2)
    expect(findRukuByAyahId(9, HafsLists)).toBe(2)
    expect(findRukuByAyahId(15, HafsLists)).toBe(3)
    expect(findRukuByAyahId(262, HafsLists)).toBe(35)
    expect(findRukuByAyahId(6236, HafsLists)).toBe(556)
    expect(findRukuByAyahId(6235, HafsLists)).toBe(556)
  })

  it("should throw error for invalid ayah ID format", () => {
    expect(() => findRukuByAyahId(2.3, HafsLists)).toThrow()
    expect(() => findRukuByAyahId(0, HafsLists)).toThrow()
    expect(() => findRukuByAyahId(6237, HafsLists)).toThrow()
  })
})
