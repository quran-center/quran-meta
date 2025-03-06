import { getJuzMeta } from "../src/getJuzMeta"
import { JuzMeta } from "../src/types"

describe("getJuzMeta", () => {
  it("should return correct metadata for a valid Juz number", () => {
    const result: JuzMeta = getJuzMeta(1)

    expect(result).toEqual({
      juzNum: 1,
      firstAyahId: 1,
      lastAyahId: 148,
      first: [1, 1],
      last: [2, 141]
    })
  })

  it("should throw RangeError for an invalid Juz number", () => {
    expect(() => getJuzMeta(0)).toThrow(RangeError)
    expect(() => getJuzMeta(31)).toThrow(RangeError)
  })
})
