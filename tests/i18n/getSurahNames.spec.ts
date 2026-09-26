import { getSurahNames, languages } from "../../src/i18n"

describe(getSurahNames, () => {
  it("should return arabic surah names when lang is ru", () => {
    const names = getSurahNames("ru")
    expect(Array.isArray(names)).toBeTruthy()
    expect(names.length).toBeGreaterThan(0)
  })

  it("should return english surah names when lang is en", () => {
    const names = getSurahNames("en")
    expect(Array.isArray(names)).toBeTruthy()
    expect(names.length).toBeGreaterThan(0)
  })

  it("should return transliterated surah names when lang is tr", () => {
    const names = getSurahNames("tr")
    expect(Array.isArray(names)).toBeTruthy()
    expect(names.length).toBeGreaterThan(0)
  })

  it.each(languages)("has a trimmed, non-empty name pair for every surah in %s", (lang) => {
    const names = getSurahNames(lang)
    expect(names).toHaveLength(116)
    for (let surah = 1; surah <= 114; surah++) {
      expect(names[surah]).toHaveLength(2)
      for (const name of names[surah]) {
        expect(name).toBe(name.trim())
        expect(name).not.toBe("")
      }
    }
  })
})
