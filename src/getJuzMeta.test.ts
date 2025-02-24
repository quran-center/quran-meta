import { describe, it, expect } from "vitest"
import { getJuzMeta } from "./getJuzMeta"
import { JuzMeta } from "./types"

describe("getJuzMeta", () => {
  it("should return correct metadata for a valid Juz number", () => {
    const result: JuzMeta = getJuzMeta(1)

    expect(result).toEqual({
      juzNum: 1,
      first: [1, 1],
      last: [2, 141]
    })
  })

  it("should throw RangeError for an invalid Juz number", () => {
    expect(() => getJuzMeta(0)).toThrow(RangeError)
    expect(() => getJuzMeta(31)).toThrow(RangeError)
  })
})
