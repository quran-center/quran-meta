import { describe, it, expect } from "vitest"
import { findRukuByAyahId } from "../src/findRukuByAyahId"

describe("findRukuByAyahId", () => {
  it("should find correct ruku for valid ayah IDs", () => {
    expect(findRukuByAyahId(1)).toBe(1)
    expect(findRukuByAyahId(2)).toBe(1)
    expect(findRukuByAyahId(7)).toBe(1)
    expect(findRukuByAyahId(8)).toBe(2)
    expect(findRukuByAyahId(9)).toBe(2)
    expect(findRukuByAyahId(15)).toBe(3)
    expect(findRukuByAyahId(262)).toBe(35)
    expect(findRukuByAyahId(6236)).toBe(556)
    expect(findRukuByAyahId(6235)).toBe(556)
  })

  it("should throw error for invalid ayah ID format", () => {
    expect(() => findRukuByAyahId(2.3)).toThrow()
    expect(() => findRukuByAyahId(0)).toThrow()
    expect(() => findRukuByAyahId(6237)).toThrow()
  })
})
