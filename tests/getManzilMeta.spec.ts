import { describe, it, expect } from "vitest"
import { getManzilMeta } from "../src/getManzilMeta"

describe("getManzilMeta", () => {
  it("should return correct metadata for Manzil 1", () => {
    const result = getManzilMeta(1)
    expect(result).toEqual({
      manzilNum: 1,
      firstAyahId: 1,
      lastAyahId: 669,
      first: [1, 1],
      last: [4, 176]
    })
  })

  it("should return correct metadata for Manzil 4", () => {
    const result = getManzilMeta(4)
    expect(result).toEqual({
      manzilNum: 4,
      firstAyahId: 2030,
      lastAyahId: 2932,
      first: [17, 1],
      last: [25, 77]
    })
  })

  it("should return correct metadata for Manzil 8", () => {
    const result = getManzilMeta(7)
    expect(result).toEqual({
      manzilNum: 7,
      firstAyahId: 4631,
      lastAyahId: 6236,
      first: [50, 1],
      last: [114, 6]
    })
  })

  it("should throw error for invalid Manzil number 0", () => {
    expect(() => getManzilMeta(0)).toThrow()
  })

  it("should throw error for invalid Manzil number 8", () => {
    expect(() => getManzilMeta(8)).toThrow()
  })
})
