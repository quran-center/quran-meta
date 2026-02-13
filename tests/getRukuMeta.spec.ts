import { getRukuMeta } from "../src"
import { HafsLists } from "../src/lists/HafsLists"

describe(getRukuMeta, () => {
  it("should return correct metadata for first ruku", () => {
    const result = getRukuMeta(1, HafsLists)
    expect(result).toEqual({
      first: [1, 1],
      firstAyahId: 1,
      last: [1, 7],
      lastAyahId: 7,
      rukuNum: 1
    })
  })

  it("should return correct metadata for second ruku", () => {
    const result = getRukuMeta(2, HafsLists)
    expect(result).toEqual({
      first: [2, 1],
      firstAyahId: 8,
      last: [2, 7],
      lastAyahId: 14,
      rukuNum: 2
    })
  })

  it("should return correct metadata for a middle ruku", () => {
    const result = getRukuMeta(100, HafsLists)
    expect(result).toMatchObject({
      first: expect.any(Object),
      last: expect.any(Object),
      rukuNum: 100
    })
    expect(result.firstAyahId).toBeLessThan(result.lastAyahId)
  })

  it("should throw error for invalid ruku number", () => {
    expect(() => getRukuMeta(0, HafsLists)).toThrow()
    expect(() => getRukuMeta(-1, HafsLists)).toThrow()
    expect(() => getRukuMeta(557, HafsLists)).toThrow()
  })
})
