import { findRubAlHizb, findRubAlHizbByAyahId, meta } from "../src"
import { getList } from "../src/lists"

const JuzList = getList("JuzList")
const HizbQuarterList = getList("HizbQuarterList")

describe("findRubAlHizb", () => {
  it("should return correct RubAlHizb for first surah and ayah", () => {
    expect(findRubAlHizb(1, 1)).toEqual(1)
  })

  it("should return correct RubAlHizb for a middle surah and ayah", () => {
    expect(findRubAlHizb(18, 1)).toEqual(117)
  })

  it("should return correct RubAlHizb for a last surah and ayah", () => {
    expect(findRubAlHizb(114, 6)).toEqual(meta.numRubAlHizbs)

    expect(findRubAlHizb(114, 6)).toEqual(240)
  })

  it("should handle ayahMode correctly", () => {
    expect(findRubAlHizbByAyahId(286)).toEqual(19)
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
    expect(findRubAlHizb(2, 1)).toEqual(1)
    expect(findRubAlHizb(2, 142)).toEqual(9)
  })
})
