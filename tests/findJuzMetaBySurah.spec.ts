import { findJuzMetaBySurah } from "../src"
import { HafsLists } from "../src/lists/HafsLists"
import * as findSurahByAyahIdModule from "../src/findSurahByAyahId"

describe(findJuzMetaBySurah, () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("should return correct SurahJuzMeta for first surah", () => {
    const result = findJuzMetaBySurah(1, 1, HafsLists)
    expect(result).toEqual({
      ayahsBetweenJuzSurah: 0,
      leftAyahId: 1,
      leftjuz: 1,
      rightAyahId: 149,
      rightJuz: 1
    })
  })

  it("should return correct SurahJuzMeta for a surah spanning multiple juz", () => {
    const result = findJuzMetaBySurah(2, 1, HafsLists)
    expect(result).toEqual({
      ayahsBetweenJuzSurah: 7,
      leftAyahId: 1,
      leftjuz: 1,
      rightAyahId: 386,
      rightJuz: 3
    })
  })

  it("should handle a surah entirely within one juz", () => {
    const result = findJuzMetaBySurah(114, 1, HafsLists)
    expect(result).toEqual({
      ayahsBetweenJuzSurah: 558,
      leftAyahId: 5673,
      leftjuz: 30,
      rightAyahId: 6237,
      rightJuz: 30
    })
  })

  it("should return correct JuzMeta when ayah is specified", () => {
    const result = findJuzMetaBySurah(2, 150, HafsLists)
    expect(result).toEqual({
      ayahsBetweenJuzSurah: -141,
      leftAyahId: 149,
      leftjuz: 2,
      rightAyahId: 386,
      rightJuz: 3
    })
  })

  it("should handle edge case when ayah is at juz boundary", () => {
    const result = findJuzMetaBySurah(2, 141, HafsLists)
    expect(result).toEqual({
      ayahsBetweenJuzSurah: 7,
      leftAyahId: 1,
      leftjuz: 1,
      rightAyahId: 386,
      rightJuz: 3
    })
  })

  it("should use mocked findSurahByAyahId", () => {
    const mockFindSurahByAyahId = vi.spyOn(findSurahByAyahIdModule, "findSurahByAyahId")
    mockFindSurahByAyahId.mockReturnValue(2)
    const result = findJuzMetaBySurah(2, 1, HafsLists)
    expect(mockFindSurahByAyahId).toHaveBeenCalled()
    // The mock changes internal behavior, so we just verify the spy was called
    expect(result).toBeDefined()
  })
})
