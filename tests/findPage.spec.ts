import { findPage, findPagebyAyahId } from "../src"
import { HafsLists } from "../src/lists/HafsLists"
import * as ayahIdModule from "../src/findAyahIdBySurah"
import * as module from "../src/validation"

describe("findPage", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("basic", () => {
    expect(findPage(1, 1, HafsLists)).toEqual(1)
    expect(findPage(1, 2, HafsLists)).toEqual(1)
    expect(findPage(2, 1, HafsLists)).toEqual(2)
    expect(findPage(114, 1, HafsLists)).toEqual(604)
  })

  it("should return correct page for first surah and ayah", () => {
    const result = findPage(1, 1, HafsLists)
    expect(result).toBe(1)
  })

  it("should return correct page for last surah and ayah", () => {
    const result = findPage(114, 6, HafsLists)
    expect(result).toBe(604)
  })

  it("should return correct page for middle surah and ayah", () => {
    const result = findPage(56, 50, HafsLists)
    expect(result).toBe(535)
  })

  it("should handle ayahMode correctly", () => {
    const spy = vi.spyOn(module, "checkValidAyahId")
    const result = findPagebyAyahId(100, HafsLists)
    expect(spy).toHaveBeenCalledWith(100, HafsLists.meta)
    expect(result).toBe(14)
  })

  it("should call checkValidSurah and findAyahIdBySurah when not in ayahMode", () => {
    const surahSpy = vi.spyOn(module, "checkValidSurah")
    const ayahIdSpy = vi.spyOn(ayahIdModule, "findAyahIdBySurah")
    const result = findPage(5, 10, HafsLists)
    expect(surahSpy).toHaveBeenCalledWith(5, HafsLists.meta)
    expect(ayahIdSpy).toHaveBeenCalledWith(5, 10, HafsLists)
    expect(result).toBe(109)
  })

  it("should handle edge case when ayahId is at page boundary", () => {
    const result = findPage(2, 141, HafsLists)
    expect(result).toBe(21)
  })
})
