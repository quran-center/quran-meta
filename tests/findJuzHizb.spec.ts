import { findRubAlHizb, HizbQuarterList, JuzList, meta } from "../src"

describe("findRubAlHizb", () => {
  it("should return correct JuzHizb for first surah and ayah", () => {
    expect(findRubAlHizb(1, 1)).toEqual({ hizbId: 1,
      juz: 1,
      juzPart: 1,
      rubAlHizbId: 1 })
  })

  it("should return correct JuzHizb for a middle surah and ayah", () => {
    expect(findRubAlHizb(18, 1)).toEqual({ hizbId: 30,
      juz: 15,
      juzPart: 5,
      rubAlHizbId: 117 })
  })

  it("should return correct JuzHizb for a last surah and ayah", () => {
    expect(findRubAlHizb(114, 6)).toEqual({
      juz: meta.numJuzs,
      juzPart: 8,
      hizbId: meta.numHizbs,
      rubAlHizbId: meta.numRubAlHizbs })

    expect(findRubAlHizb(114, 6)).toEqual({ hizbId: 60,
      juzPart: 8,
      rubAlHizbId: 240,
      juz: 30 })
  })

  it("should handle ayahMode correctly", () => {
    expect(findRubAlHizb(2, 286, true)).toEqual({ hizbId: 5,
      juzPart: 3,
      rubAlHizbId: 19,
      juz: 3 })
  })

  it("Each Juz should have a corresponding Rub Ul Hizb", () => {
    for (let i = 0; i < meta.numJuzs; i++) {
      const juzAyahId = JuzList[i + 1]
      const rubulHizbAyahId = HizbQuarterList[i * 8 + 1]
      // console.log(`Juz`, juzAyahId, rubulHizbAyahId)
      expect(juzAyahId).toEqual(rubulHizbAyahId)
    }
  })

  it("should throw an error for invalid surah number", () => {
    expect(() => findRubAlHizb(0)).toThrow()
    expect(() => findRubAlHizb(115)).toThrow()
  })

  it("should handle edge cases", () => {
    expect(findRubAlHizb(2, 1)).toEqual({ hizbId: 1,
      juz: 1,
      juzPart: 1,
      rubAlHizbId: 1 })
    expect(findRubAlHizb(2, 142)).toEqual({ hizbId: 3,
      juz: 2,
      juzPart: 1,
      rubAlHizbId: 9 })
  })
})
