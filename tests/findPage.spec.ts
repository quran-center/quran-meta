import { expect, vi } from "vitest"
import { findPage } from "../src"
import * as ayahIdModule from "../src/findAyahIdBySurah"
import * as module from "../src/validation"

describe("findPage", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("basic", () => {
    expect(findPage(1, 1)).toEqual(1)
    expect(findPage(1, 2)).toEqual(1)
    expect(findPage(2, 1)).toEqual(2)
    expect(findPage(114, 1)).toEqual(604)
  })

  it("should return correct page for first surah and ayah", () => {
    const result = findPage(1, 1)
    expect(result).toBe(1)
  })

  it("should return correct page for last surah and ayah", () => {
    const result = findPage(114, 6)
    expect(result).toBe(604)
  })

  it("should return correct page for middle surah and ayah", () => {
    const result = findPage(56, 50)
    expect(result).toBe(535)
  })

  it("should handle ayahMode correctly", () => {
    const spy = vi.spyOn(module, "checkValidAyahId")
    const result = findPage(0, 100, true)
    expect(spy).toHaveBeenCalledWith(100)
    expect(result).toBe(14)
  })

  it("should call checkValidSurah and findAyahIdBySurah when not in ayahMode", () => {
    const surahSpy = vi.spyOn(module, "checkValidSurah")
    const ayahIdSpy = vi.spyOn(ayahIdModule, "findAyahIdBySurah")
    const result = findPage(5, 10)
    expect(surahSpy).toHaveBeenCalledWith(5)
    expect(ayahIdSpy).toHaveBeenCalledWith(5, 10)
    expect(result).toBe(109)
  })

  it("should handle edge case when ayahId is at page boundary", () => {
    const result = findPage(2, 141)
    expect(result).toBe(21)
  })
})
