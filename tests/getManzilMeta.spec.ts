import { describe, expect, it } from "vitest"
import { HafsLists } from "../src/lists/HafsLists"
import { getManzilMeta } from "../src/getManzilMeta"

describe(getManzilMeta, () => {
  it("should return correct metadata for Manzil 1", () => {
    const result = getManzilMeta(1, HafsLists)
    expect(result).toEqual({
      first: [1, 1],
      firstAyahId: 1,
      last: [4, 176],
      lastAyahId: 669,
      manzilNum: 1
    })
  })

  it("should return correct metadata for Manzil 4", () => {
    const result = getManzilMeta(4, HafsLists)
    expect(result).toEqual({
      first: [17, 1],
      firstAyahId: 2030,
      last: [25, 77],
      lastAyahId: 2932,
      manzilNum: 4
    })
  })

  it("should return correct metadata for Manzil 8", () => {
    const result = getManzilMeta(7, HafsLists)
    expect(result).toEqual({
      first: [50, 1],
      firstAyahId: 4631,
      last: [114, 6],
      lastAyahId: 6236,
      manzilNum: 7
    })
  })

  it("should throw error for invalid Manzil number 0", () => {
    expect(() => getManzilMeta(0, HafsLists)).toThrow()
  })

  it("should throw error for invalid Manzil number 8", () => {
    expect(() => getManzilMeta(8, HafsLists)).toThrow()
  })
})
