import { describe, it, expect } from "vitest"
import { surahStringParser } from "../src"

describe("surahStringParser", () => {
  it("should parse valid surah numbers", () => {
    expect(surahStringParser("1")).toBe(1)
    expect(surahStringParser("114")).toBe(114)
    expect(surahStringParser("1 14")).toBe(1)
    expect(surahStringParser("1 aaa")).toBe(1)
    expect(surahStringParser(" 55 ")).toBe(55)
  })

  it("should parse strictly valid surah numbers", () => {
    expect(surahStringParser("1", true)).toBe(1)
    expect(surahStringParser("114", true)).toBe(114)
    expect(surahStringParser(" 55 ", true)).toBe(55)
  })

  it("should throw error for non-numeric strings", () => {
    expect(() => surahStringParser("aa 1 aaa")).toThrow("Error in surah format")
    expect(() => surahStringParser("abc")).toThrow("Error in surah format abc")
    expect(() => surahStringParser("")).toThrow("Error in surah format")
    expect(() => surahStringParser(" ")).toThrow("Error in surah format  ")
  })

  it("should throw error for non-numeric strings in strict mode", () => {
    expect(() => surahStringParser("1 14", true)).toThrow("Error in surah format 1 14")
    expect(() => surahStringParser("1 aaa", true)).toThrow("Error in surah format 1 aaa")
    expect(() => surahStringParser("aa 1 aaa", true)).toThrow("Error in surah format")
    expect(() => surahStringParser("abc", true)).toThrow("Error in surah format abc")
    expect(() => surahStringParser("", true)).toThrow("Error in surah number")
    expect(() => surahStringParser(" ", true)).toThrow("Error in surah number  ")
  })

  it("should throw error for invalid surah numbers", () => {
    expect(() => surahStringParser("0")).toThrow("Error in surah number 0")
    expect(() => surahStringParser("115")).toThrow("Error in surah number 115")
    expect(() => surahStringParser("-1")).toThrow("Error in surah number -1")
  })
})
