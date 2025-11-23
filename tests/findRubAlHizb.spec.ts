import { findRubAlHizb, findRubAlHizbByAyahId } from "../src"
import { HafsLists, HafsMeta } from "../src/lists/aHafsLists"

const JuzList = HafsLists.JuzList
const HizbQuarterList = HafsLists.HizbQuarterList

describe("findRubAlHizb", () => {
  it("should return correct RubAlHizb for first surah and ayah", () => {
    expect(findRubAlHizb(1, 1, HafsLists)).toEqual(1)
  })

  it("should return correct RubAlHizb for a middle surah and ayah", () => {
    expect(findRubAlHizb(18, 1, HafsLists)).toEqual(117)
  })

  it("should return correct RubAlHizb for a last surah and ayah", () => {
    expect(findRubAlHizb(114, 6, HafsLists)).toEqual(HafsMeta.numRubAlHizbs)

    expect(findRubAlHizb(114, 6, HafsLists)).toEqual(240)
  })

  it("should handle ayahMode correctly", () => {
    expect(findRubAlHizbByAyahId(286, HafsLists)).toEqual(19)
  })

  it("Each Juz should have a corresponding Rub Ul Hizb", () => {
    for (let i = 0; i < HafsMeta.numJuzs; i++) {
      const juzAyahId = JuzList[i + 1]
      const rubulHizbAyahId = HizbQuarterList[i * 8 + 1]
      // console.log(`Juz`, juzAyahId, rubulHizbAyahId)
      expect(juzAyahId).toEqual(rubulHizbAyahId)
    }
  })

  it("should throw an error for invalid surah number", () => {
    expect(() => findRubAlHizb(0, 1, HafsLists)).toThrow()
    expect(() => findRubAlHizb(115, 1, HafsLists)).toThrow()
  })

  it("should handle edge cases", () => {
    expect(findRubAlHizb(2, 1, HafsLists)).toEqual(1)
    expect(findRubAlHizb(2, 142, HafsLists)).toEqual(9)
  })
})
