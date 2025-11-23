import type { RubAlHizbId } from "../src"
import { getRubAlHizb, findJuzByAyahId, getRubAlHizbByAyahId } from "../src"
import { HafsLists, HafsMeta } from "../src/lists/aHafsLists"

import * as module from "../src/validation"

const JuzList = HafsLists.JuzList
const HizbQuarterList = HafsLists.HizbQuarterList

describe("getRubAlHizbByAyahId", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("basic", () => {
    expect(getRubAlHizbByAyahId(1, HafsLists)).toEqual({
      hizbId: 1,
      juz: 1,
      juzPart: 1,
      rubAlHizbId: 1
    })
    expect(getRubAlHizbByAyahId(32, HafsLists)).toEqual({
      hizbId: 1,
      juz: 1,
      juzPart: 1,
      rubAlHizbId: 1
    })
    expect(getRubAlHizbByAyahId(33, HafsLists)).toEqual({
      hizbId: 1,
      juz: 1,
      juzPart: 2,
      rubAlHizbId: 2
    })
    expect(getRubAlHizbByAyahId(148, HafsLists)).toEqual({
      hizbId: 2,
      juz: 1,
      juzPart: 8,
      rubAlHizbId: 8
    })
    expect(getRubAlHizbByAyahId(149, HafsLists)).toEqual({
      hizbId: 3,
      juz: 2,
      juzPart: 1,
      rubAlHizbId: 9
    })
    expect(getRubAlHizbByAyahId(HafsMeta.numAyahs, HafsLists)).toEqual({
      hizbId: 60,
      juzPart: 8,
      rubAlHizbId: 240,
      juz: 30
    })
  })

  it("should return correct RubAlHizb for first ayah", () => {
    const result = getRubAlHizbByAyahId(1, HafsLists)
    expect(result).toEqual({
      hizbId: 1,
      juz: 1,
      juzPart: 1,
      rubAlHizbId: 1
    })
  })

  it("should return correct RubAlHizb for last ayah", () => {
    const result = getRubAlHizbByAyahId(6236, HafsLists)
    expect(result).toEqual({
      hizbId: 60,
      juzPart: 8,
      rubAlHizbId: 240,
      juz: 30
    })
  })

  it("should return correct RubAlHizb for ayah 3000", () => {
    const result = getRubAlHizbByAyahId(3000, HafsLists)
    expect(result).toEqual({
      hizbId: 37,
      juzPart: 4,
      rubAlHizbId: 148,
      juz: 19
    })
  })

  it("Each Rub Ul Hizb should have a corresponding Juz", () => {
    for (let rubAlHizbId = 1 as RubAlHizbId; rubAlHizbId <= HafsMeta.numRubAlHizbs; rubAlHizbId++ as RubAlHizbId) {
      const juzAyahId = JuzList[Math.ceil(rubAlHizbId / 8)]
      const rubulHizbAyahId = HizbQuarterList[rubAlHizbId]
      const rubMeta = getRubAlHizbByAyahId(rubulHizbAyahId, HafsLists)
      const hizbAyahId = HizbQuarterList[Math.ceil((rubAlHizbId) / 4) * 4 - 3]
      // console.log("Maqra:", rubAlHizbId, "Maqra Ayah:", rubulHizbAyahId, findSurahByAyahId(rubulHizbAyahId), "hizb Ayah id", hizbAyahId, `Juz Ayah:`, juzAyahId, rubMeta)
      expect(rubMeta.juz).toEqual(findJuzByAyahId(juzAyahId, HafsLists))
      expect(rubAlHizbId).toEqual(rubMeta.rubAlHizbId)
      expect(getRubAlHizb(rubAlHizbId)).toEqual(rubMeta)
      expect(getRubAlHizbByAyahId(hizbAyahId, HafsLists).hizbId).toEqual(rubMeta.hizbId)
      expect(getRubAlHizbByAyahId(juzAyahId, HafsLists).hizbId).toEqual(rubMeta.juzPart <= 4 ? rubMeta.hizbId : rubMeta.hizbId - 1)
    }
  })

  it("should call checkValidAyahId with correct argument", () => {
    const spy = vi.spyOn(module, "checkValidAyahId")

    getRubAlHizbByAyahId(100, HafsLists)
    expect(spy).toHaveBeenCalledWith(100, HafsLists.meta)
  })

  describe("getRubAlHizbByAyahId error handling", () => {
    it("should throw an error for invalid Ayah ID", () => {
      expect(() => getRubAlHizbByAyahId(6237, HafsLists)).toThrow()
      expect(() => getRubAlHizbByAyahId(0, HafsLists)).toThrow()
    })
  })

  it("should handle edge case when ayahId is at hizb boundary", () => {
    const result = getRubAlHizbByAyahId(148, HafsLists)
    expect(result).toEqual({
      hizbId: 2,
      juzPart: 8,
      rubAlHizbId: 8,
      juz: 1
    })
  })
})
