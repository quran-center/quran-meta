import { getSurahNames } from "../../src/i18n"

describe("getSurahNames", () => {
  it("should return arabic surah names when lang is ru", () => {
    const names = getSurahNames("ru")
    expect(Array.isArray(names)).toBe(true)
    expect(names.length).toBeGreaterThan(0)
  })

  it("should return english surah names when lang is en", () => {
    const names = getSurahNames("en")
    expect(Array.isArray(names)).toBe(true)
    expect(names.length).toBeGreaterThan(0)
  })

  it("should return transliterated surah names when lang is tr", () => {
    const names = getSurahNames("tr")
    expect(Array.isArray(names)).toBe(true)
    expect(names.length).toBeGreaterThan(0)
  })
})
