import { expect, vi } from "vitest"
import { findJuzByAyaid, findJuzHizbByAyaid, HizbQuarterList, JuzList, meta } from "../src"
import { getMaqraMeta } from "../src/getMaqraMeta"
import * as module from "../src/validation"

describe("findJuzHizbByAyaid", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("basic", () => {
    expect(findJuzHizbByAyaid(1)).toEqual({ hizbId: 1,
      juz: 1,
      juzPart: 1,
      maqraId: 1 })
    expect(findJuzHizbByAyaid(32)).toEqual({ hizbId: 1,
      juz: 1,
      juzPart: 1,
      maqraId: 1 })
    expect(findJuzHizbByAyaid(33)).toEqual({ hizbId: 1,
      juz: 1,
      juzPart: 2,
      maqraId: 2 })
    expect(findJuzHizbByAyaid(148)).toEqual({ hizbId: 2,
      juz: 1,
      juzPart: 8,
      maqraId: 8 })
    expect(findJuzHizbByAyaid(149)).toEqual({ hizbId: 3,
      juz: 2,
      juzPart: 1,
      maqraId: 9 })
    expect(findJuzHizbByAyaid(meta.numAyahs)).toEqual({
      hizbId: 60,
      juzPart: 8,
      maqraId: 240,
      juz: 30
    })
  })

  it("should return correct JuzHizb for first ayah", () => {
    const result = findJuzHizbByAyaid(1)
    expect(result).toEqual({ hizbId: 1,
      juz: 1,
      juzPart: 1,
      maqraId: 1 })
  })

  it("should return correct JuzHizb for last ayah", () => {
    const result = findJuzHizbByAyaid(6236)
    expect(result).toEqual({ hizbId: 60,
      juzPart: 8,
      maqraId: 240,
      juz: 30 })
  })

  it("should return correct JuzHizb for ayah 3000", () => {
    const result = findJuzHizbByAyaid(3000)
    expect(result).toEqual({ hizbId: 37,
      juzPart: 4,
      maqraId: 148,
      juz: 19 })
  })

  it("Each Rub Ul Hizb should have a corresponding Juz", () => {
    for (let maqraId = 1; maqraId <= meta.numMaqras; maqraId++) {
      const juzAyahId = JuzList[Math.ceil(maqraId / 8)]
      const rubulHizbAyahId = HizbQuarterList[maqraId]
      const rubMeta = findJuzHizbByAyaid(rubulHizbAyahId)
      const hizbAyahId = HizbQuarterList[Math.ceil((maqraId) / 4) * 4 - 3]
      // console.log("Maqra:", maqraId, "Maqra Ayah:", rubulHizbAyahId, findSurahByAyaid(rubulHizbAyahId), "hizb Ayah id", hizbAyahId, `Juz Ayah:`, juzAyahId, rubMeta)
      expect(rubMeta.juz).toEqual(findJuzByAyaid(juzAyahId))
      expect(maqraId).toEqual(rubMeta.maqraId)
      expect(getMaqraMeta(maqraId)).toEqual(rubMeta)
      expect(findJuzHizbByAyaid(hizbAyahId).hizbId).toEqual(rubMeta.hizbId)
      expect(findJuzHizbByAyaid(juzAyahId).hizbId).toEqual(rubMeta.juzPart <= 4 ? rubMeta.hizbId : rubMeta.hizbId - 1)
    }
  })

  it("should call checkValidAyahId with correct argument", () => {
    const spy = vi.spyOn(module, "checkValidAyahId")

    findJuzHizbByAyaid(100)
    expect(spy).toHaveBeenCalledWith(100)
  })

  describe("findJuzHizbByAyaid error handling", () => {
    it("should throw an error for invalid Ayah ID", () => {
      expect(() => findJuzHizbByAyaid(6237)).toThrow()
      expect(() => findJuzHizbByAyaid(0)).toThrow()
    })
  })

  it("should handle edge case when ayaId is at hizb boundary", () => {
    const result = findJuzHizbByAyaid(148)
    expect(result).toEqual({ hizbId: 2,
      juzPart: 8,
      maqraId: 8,
      juz: 1 })
  })
})
