import type { JuzMeta } from "../src"
import { getJuzMeta } from "../src"
import { HafsLists } from "../src/lists/HafsLists"

describe(getJuzMeta, () => {
  it("should return correct metadata for a valid Juz number", () => {
    const result: JuzMeta = getJuzMeta(1, HafsLists)

    expect(result).toEqual({
      first: [1, 1],
      firstAyahId: 1,
      juzNum: 1,
      last: [2, 141],
      lastAyahId: 148
    })
  })

  it("should throw RangeError for an invalid Juz number", () => {
    // @ts-expect-error out-of-range value on purpose
    expect(() => getJuzMeta(0, HafsLists)).toThrow(RangeError)
    // @ts-expect-error out-of-range value on purpose
    expect(() => getJuzMeta(31, HafsLists)).toThrow(RangeError)
  })
})
