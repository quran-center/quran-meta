import { expect, vi } from "vitest"
import { findJuzByAyaid, getRubAlHizbMetaByAyaid, HizbQuarterList, JuzList, meta } from "../src"
import { getRubAlHizbMeta } from "../src/getRubAlHizbMeta"
import * as module from "../src/validation"

describe("getRubAlHizbMetaByAyaid", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("basic", () => {
    expect(getRubAlHizbMetaByAyaid(1)).toEqual({ hizbId: 1,
      juz: 1,
      juzPart: 1,
      rubAlHizbId: 1 })
    expect(getRubAlHizbMetaByAyaid(32)).toEqual({ hizbId: 1,
      juz: 1,
      juzPart: 1,
      rubAlHizbId: 1 })
    expect(getRubAlHizbMetaByAyaid(33)).toEqual({ hizbId: 1,
      juz: 1,
      juzPart: 2,
      rubAlHizbId: 2 })
    expect(getRubAlHizbMetaByAyaid(148)).toEqual({ hizbId: 2,
      juz: 1,
      juzPart: 8,
      rubAlHizbId: 8 })
    expect(getRubAlHizbMetaByAyaid(149)).toEqual({ hizbId: 3,
      juz: 2,
      juzPart: 1,
      rubAlHizbId: 9 })
    expect(getRubAlHizbMetaByAyaid(meta.numAyahs)).toEqual({
      hizbId: 60,
      juzPart: 8,
      rubAlHizbId: 240,
      juz: 30
    })
  })

  it("should return correct JuzHizb for first ayah", () => {
    const result = getRubAlHizbMetaByAyaid(1)
    expect(result).toEqual({ hizbId: 1,
      juz: 1,
      juzPart: 1,
      rubAlHizbId: 1 })
  })

  it("should return correct JuzHizb for last ayah", () => {
    const result = getRubAlHizbMetaByAyaid(6236)
    expect(result).toEqual({ hizbId: 60,
      juzPart: 8,
      rubAlHizbId: 240,
      juz: 30 })
  })

  it("should return correct JuzHizb for ayah 3000", () => {
    const result = getRubAlHizbMetaByAyaid(3000)
    expect(result).toEqual({ hizbId: 37,
      juzPart: 4,
      rubAlHizbId: 148,
      juz: 19 })
  })

  it("Each Rub Ul Hizb should have a corresponding Juz", () => {
    for (let rubAlHizbId = 1; rubAlHizbId <= meta.numRubAlHizbs; rubAlHizbId++) {
      const juzAyahId = JuzList[Math.ceil(rubAlHizbId / 8)]
      const rubulHizbAyahId = HizbQuarterList[rubAlHizbId]
      const rubMeta = getRubAlHizbMetaByAyaid(rubulHizbAyahId)
      const hizbAyahId = HizbQuarterList[Math.ceil((rubAlHizbId) / 4) * 4 - 3]
      // console.log("Maqra:", rubAlHizbId, "Maqra Ayah:", rubulHizbAyahId, findSurahByAyaid(rubulHizbAyahId), "hizb Ayah id", hizbAyahId, `Juz Ayah:`, juzAyahId, rubMeta)
      expect(rubMeta.juz).toEqual(findJuzByAyaid(juzAyahId))
      expect(rubAlHizbId).toEqual(rubMeta.rubAlHizbId)
      expect(getRubAlHizbMeta(rubAlHizbId)).toEqual(rubMeta)
      expect(getRubAlHizbMetaByAyaid(hizbAyahId).hizbId).toEqual(rubMeta.hizbId)
      expect(getRubAlHizbMetaByAyaid(juzAyahId).hizbId).toEqual(rubMeta.juzPart <= 4 ? rubMeta.hizbId : rubMeta.hizbId - 1)
    }
  })

  it("should call checkValidAyahId with correct argument", () => {
    const spy = vi.spyOn(module, "checkValidAyahId")

    getRubAlHizbMetaByAyaid(100)
    expect(spy).toHaveBeenCalledWith(100)
  })

  describe("getRubAlHizbMetaByAyaid error handling", () => {
    it("should throw an error for invalid Ayah ID", () => {
      expect(() => getRubAlHizbMetaByAyaid(6237)).toThrow()
      expect(() => getRubAlHizbMetaByAyaid(0)).toThrow()
    })
  })

  it("should handle edge case when ayaId is at hizb boundary", () => {
    const result = getRubAlHizbMetaByAyaid(148)
    expect(result).toEqual({ hizbId: 2,
      juzPart: 8,
      rubAlHizbId: 8,
      juz: 1 })
  })
})
