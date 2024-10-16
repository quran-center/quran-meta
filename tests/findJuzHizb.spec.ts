import { findJuzHizb, HizbQuarterList, JuzList, meta } from "../src"

describe("findJuzHizb", () => {
  it("should return correct JuzHizb for first surah and ayah", () => {
    expect(findJuzHizb(1, 1)).toEqual({ hizbId: 1,
      juz: 1,
      juzPart: 1,
      maqraId: 1 })
  })

  it("should return correct JuzHizb for a middle surah and ayah", () => {
    expect(findJuzHizb(18, 1)).toEqual({ hizbId: 30,
      juz: 15,
      juzPart: 5,
      maqraId: 117 })
  })

  it("should return correct JuzHizb for a last surah and ayah", () => {
    expect(findJuzHizb(114, 6)).toEqual({
      juz: meta.numJuzs,
      juzPart: 8,
      hizbId: meta.numHizbs,
      maqraId: meta.numMaqras })

    expect(findJuzHizb(114, 6)).toEqual({ hizbId: 60,
      juzPart: 8,
      maqraId: 240,
      juz: 30 })
  })

  it("should handle ayahMode correctly", () => {
    expect(findJuzHizb(2, 286, true)).toEqual({ hizbId: 5,
      juzPart: 3,
      maqraId: 19,
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
    expect(() => findJuzHizb(0)).toThrow()
    expect(() => findJuzHizb(115)).toThrow()
  })

  it("should handle edge cases", () => {
    expect(findJuzHizb(2, 1)).toEqual({ hizbId: 1,
      juz: 1,
      juzPart: 1,
      maqraId: 1 })
    expect(findJuzHizb(2, 142)).toEqual({ hizbId: 3,
      juz: 2,
      juzPart: 1,
      maqraId: 9 })
  })
})
