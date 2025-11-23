import type { JuzMeta } from "../src"
import { getJuzMeta } from "../src"
import { HafsLists } from "../src/lists/HafsLists"

describe("getJuzMeta", () => {
  it("should return correct metadata for a valid Juz number", () => {
    const result: JuzMeta = getJuzMeta(1, HafsLists)

    expect(result).toEqual({
      juzNum: 1,
      firstAyahId: 1,
      lastAyahId: 148,
      first: [1, 1],
      last: [2, 141]
    })
  })

  it("should throw RangeError for an invalid Juz number", () => {
    expect(() => getJuzMeta(0, HafsLists)).toThrow(RangeError)
    expect(() => getJuzMeta(31, HafsLists)).toThrow(RangeError)
  })
})
