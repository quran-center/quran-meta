import { expect, vi } from "vitest"
import { findJuzByAyahId, getRubAlHizbMetaByAyahId, HizbQuarterList, JuzList, meta } from "../src"
import { getRubAlHizbMeta } from "../src/getRubAlHizbMeta"
import * as module from "../src/validation"

describe("getRubAlHizbMetaByAyahId", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("basic", () => {
    expect(getRubAlHizbMetaByAyahId(1)).toEqual({ hizbId: 1,
      juz: 1,
      juzPart: 1,
      rubAlHizbId: 1 })
    expect(getRubAlHizbMetaByAyahId(32)).toEqual({ hizbId: 1,
      juz: 1,
      juzPart: 1,
      rubAlHizbId: 1 })
    expect(getRubAlHizbMetaByAyahId(33)).toEqual({ hizbId: 1,
      juz: 1,
      juzPart: 2,
      rubAlHizbId: 2 })
    expect(getRubAlHizbMetaByAyahId(148)).toEqual({ hizbId: 2,
      juz: 1,
      juzPart: 8,
      rubAlHizbId: 8 })
    expect(getRubAlHizbMetaByAyahId(149)).toEqual({ hizbId: 3,
      juz: 2,
      juzPart: 1,
      rubAlHizbId: 9 })
    expect(getRubAlHizbMetaByAyahId(meta.numAyahs)).toEqual({
      hizbId: 60,
      juzPart: 8,
      rubAlHizbId: 240,
      juz: 30
    })
  })

  it("should return correct JuzHizb for first ayah", () => {
    const result = getRubAlHizbMetaByAyahId(1)
    expect(result).toEqual({ hizbId: 1,
      juz: 1,
      juzPart: 1,
      rubAlHizbId: 1 })
  })

  it("should return correct JuzHizb for last ayah", () => {
    const result = getRubAlHizbMetaByAyahId(6236)
    expect(result).toEqual({ hizbId: 60,
      juzPart: 8,
      rubAlHizbId: 240,
      juz: 30 })
  })

  it("should return correct JuzHizb for ayah 3000", () => {
    const result = getRubAlHizbMetaByAyahId(3000)
    expect(result).toEqual({ hizbId: 37,
      juzPart: 4,
      rubAlHizbId: 148,
      juz: 19 })
  })

  it("Each Rub Ul Hizb should have a corresponding Juz", () => {
    for (let rubAlHizbId = 1; rubAlHizbId <= meta.numRubAlHizbs; rubAlHizbId++) {
      const juzAyahId = JuzList[Math.ceil(rubAlHizbId / 8)]
      const rubulHizbAyahId = HizbQuarterList[rubAlHizbId]
      const rubMeta = getRubAlHizbMetaByAyahId(rubulHizbAyahId)
      const hizbAyahId = HizbQuarterList[Math.ceil((rubAlHizbId) / 4) * 4 - 3]
      // console.log("Maqra:", rubAlHizbId, "Maqra Ayah:", rubulHizbAyahId, findSurahByAyahId(rubulHizbAyahId), "hizb Ayah id", hizbAyahId, `Juz Ayah:`, juzAyahId, rubMeta)
      expect(rubMeta.juz).toEqual(findJuzByAyahId(juzAyahId))
      expect(rubAlHizbId).toEqual(rubMeta.rubAlHizbId)
      expect(getRubAlHizbMeta(rubAlHizbId)).toEqual(rubMeta)
      expect(getRubAlHizbMetaByAyahId(hizbAyahId).hizbId).toEqual(rubMeta.hizbId)
      expect(getRubAlHizbMetaByAyahId(juzAyahId).hizbId).toEqual(rubMeta.juzPart <= 4 ? rubMeta.hizbId : rubMeta.hizbId - 1)
    }
  })

  it("should call checkValidAyahId with correct argument", () => {
    const spy = vi.spyOn(module, "checkValidAyahId")

    getRubAlHizbMetaByAyahId(100)
    expect(spy).toHaveBeenCalledWith(100)
  })

  describe("getRubAlHizbMetaByAyahId error handling", () => {
    it("should throw an error for invalid Ayah ID", () => {
      expect(() => getRubAlHizbMetaByAyahId(6237)).toThrow()
      expect(() => getRubAlHizbMetaByAyahId(0)).toThrow()
    })
  })

  it("should handle edge case when ayahId is at hizb boundary", () => {
    const result = getRubAlHizbMetaByAyahId(148)
    expect(result).toEqual({ hizbId: 2,
      juzPart: 8,
      rubAlHizbId: 8,
      juz: 1 })
  })
})
