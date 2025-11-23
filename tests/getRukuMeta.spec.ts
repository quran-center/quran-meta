import { getRukuMeta } from "../src"
import { HafsLists } from "../src/lists/aHafsLists"

describe("getRukuMeta", () => {
  it("should return correct metadata for first ruku", () => {
    const result = getRukuMeta(1, HafsLists)
    expect(result).toEqual({
      rukuNum: 1,
      firstAyahId: 1,
      lastAyahId: 7,
      first: [1, 1],
      last: [1, 7]
    })
  })

  it("should return correct metadata for second ruku", () => {
    const result = getRukuMeta(2, HafsLists)
    expect(result).toEqual({
      rukuNum: 2,
      firstAyahId: 8,
      lastAyahId: 14,
      first: [2, 1],
      last: [2, 7]
    })
  })

  it("should return correct metadata for a middle ruku", () => {
    const result = getRukuMeta(100, HafsLists)
    expect(result).toMatchObject({
      rukuNum: 100,
      first: expect.any(Object),
      last: expect.any(Object)
    })
    expect(result.firstAyahId).toBeLessThan(result.lastAyahId)
  })

  it("should throw error for invalid ruku number", () => {
    expect(() => getRukuMeta(0, HafsLists)).toThrow()
    expect(() => getRukuMeta(-1, HafsLists)).toThrow()
    expect(() => getRukuMeta(557, HafsLists)).toThrow()
  })
})
