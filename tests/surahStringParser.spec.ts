import { describe, expect, it } from "vitest"
import { surahStringParser } from "../src"
import { HafsMeta as meta } from "../src/lists/HafsLists"

describe(surahStringParser, () => {
  it("should parse valid surah numbers", () => {
    expect(surahStringParser("1", false, meta)).toBe(1)
    expect(surahStringParser("114", false, meta)).toBe(114)
    expect(surahStringParser("1 14", false, meta)).toBe(1)
    expect(surahStringParser("1 aaa", false, meta)).toBe(1)
    expect(surahStringParser(" 55 ", false, meta)).toBe(55)
  })

  it("should parse strictly valid surah numbers", () => {
    expect(surahStringParser("1", true, meta)).toBe(1)
    expect(surahStringParser("114", true, meta)).toBe(114)
    expect(surahStringParser(" 55 ", true, meta)).toBe(55)
  })

  it("should throw error for non-numeric strings", () => {
    expect(() => surahStringParser("aa 1 aaa", false, meta)).toThrow("Error in surah format")
    expect(() => surahStringParser("abc", false, meta)).toThrow("Error in surah format abc")
    expect(() => surahStringParser("", false, meta)).toThrow("Error in surah format")
    expect(() => surahStringParser(" ", false, meta)).toThrow("Error in surah format  ")
  })

  it("should throw error for non-numeric strings in strict mode", () => {
    expect(() => surahStringParser("1 14", true, meta)).toThrow("Error in surah format 1 14")
    expect(() => surahStringParser("1 aaa", true, meta)).toThrow("Error in surah format 1 aaa")
    expect(() => surahStringParser("aa 1 aaa", true, meta)).toThrow("Error in surah format")
    expect(() => surahStringParser("abc", true, meta)).toThrow("Error in surah format abc")
    expect(() => surahStringParser("", true, meta)).toThrow("Error in surah number")
    expect(() => surahStringParser(" ", true, meta)).toThrow("Error in surah number  ")
  })

  it("should throw error for invalid surah numbers", () => {
    expect(() => surahStringParser("0", false, meta)).toThrow("Error in surah number 0")
    expect(() => surahStringParser("115", false, meta)).toThrow("Error in surah number 115")
    expect(() => surahStringParser("-1", false, meta)).toThrow("Error in surah number -1")
  })
})
