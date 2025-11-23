import { findJuz, findJuzByAyahId } from "../src"
import { HafsLists } from "../src/lists/HafsLists"

describe("findJuz", () => {
  it("basic", () => {
    expect(findJuz(1, 2, HafsLists)).toEqual(1)
    expect(findJuz(2, 1, HafsLists)).toEqual(1)
    expect(findJuz(3, 1, HafsLists)).toEqual(3)
  })

  it("should return correct juz for first ayah of first surah", () => {
    expect(findJuz(1, 1, HafsLists)).toEqual(1)
  })

  it("should return correct juz for first ayah of first surah", () => {
    expect(findJuzByAyahId(1, HafsLists, HafsLists)).toEqual(1)
    expect(findJuzByAyahId(6236, HafsLists, HafsLists)).toEqual(30)
  })

  it("should return correct juz for first ayah of first surah", () => {
    expect(findJuzByAyahId(5672, HafsLists, HafsLists)).toEqual(29)
    expect(findJuzByAyahId(5673, HafsLists, HafsLists)).toEqual(30)
    expect(findJuzByAyahId(6236, HafsLists, HafsLists)).toEqual(30)
  })

  it("should return correct juz for last surah", () => {
    expect(findJuz(114, 1, HafsLists)).toEqual(30)
  })

  it("should return correct juz for middle of Quran", () => {
    expect(findJuz(18, 1, HafsLists)).toEqual(15)
  })

  it("should return correct juz when ayah is not specified", () => {
    expect(findJuz(2, 1, HafsLists)).toEqual(1)
  })

  it("should handle juz change within a surah", () => {
    expect(findJuz(2, 141, HafsLists)).toEqual(1)
    expect(findJuz(2, 142, HafsLists)).toEqual(2)
  })

  it("should return correct juz for last ayah of Quran", () => {
    expect(findJuz(114, 6, HafsLists)).toEqual(30)
  })

  it("should handle invalid surah numbers", () => {
    expect(() => findJuz(115, 1, HafsLists)).toThrow()

    expect(() => findJuzByAyahId(6237, HafsLists)).toThrow()
  })

  it("should handle invalid ayah numbers", () => {
    expect(() => findJuz(1, 8, HafsLists)).toThrow()
  })
})
