import { expect, vi } from "vitest"
import { findJuzMetaBySurah } from "../src/findJuzMetaBySurah"
import * as findSurahByAyahIdModule from "../src/findSurahByAyahId"

describe("findJuzMetaBySurah", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("should return correct JuzMeta for first surah", () => {
    const result = findJuzMetaBySurah(1)
    expect(result).toEqual({
      leftjuz: 1,
      ayahsBetweenJuzSurah: 0,
      rightJuz: 1,
      leftAyahId: 1,
      rightAyahId: 149
    })
  })

  it("should return correct JuzMeta for a surah spanning multiple juz", () => {
    const result = findJuzMetaBySurah(2)
    expect(result).toEqual({
      leftjuz: 1,
      ayahsBetweenJuzSurah: 7,
      rightJuz: 3,
      leftAyahId: 1,
      rightAyahId: 386
    })
  })

  it("should handle a surah entirely within one juz", () => {
    const result = findJuzMetaBySurah(114)
    expect(result).toEqual({
      leftjuz: 30,
      ayahsBetweenJuzSurah: 558,
      rightJuz: 30,
      leftAyahId: 5673,
      rightAyahId: 6237
    })
  })

  it("should return correct JuzMeta when ayah is specified", () => {
    const result = findJuzMetaBySurah(2, 150)
    expect(result).toEqual({
      leftjuz: 2,
      ayahsBetweenJuzSurah: -141,
      rightJuz: 3,
      leftAyahId: 149,
      rightAyahId: 386
    })
  })

  it("should handle edge case when ayah is at juz boundary", () => {
    const result = findJuzMetaBySurah(2, 141)
    expect(result).toEqual({
      leftjuz: 1,
      ayahsBetweenJuzSurah: 7,
      rightJuz: 3,
      leftAyahId: 1,
      rightAyahId: 386
    })
  })

  it("should use mocked findSurahByAyahId", () => {
    const mockFindSurahByAyahId = vi.spyOn(findSurahByAyahIdModule, "findSurahByAyahId")
    mockFindSurahByAyahId.mockReturnValue([2, 1])
    const result = findJuzMetaBySurah(2)
    expect(mockFindSurahByAyahId).toHaveBeenCalled()
    expect(result.rightJuz).toBe(30)
  })
})
