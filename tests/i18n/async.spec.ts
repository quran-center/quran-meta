import { getSurahNamesAsync, languages as asyncLanguages } from "../../src/i18n/async"
import type { Lang } from "../../src/i18n"
import { languages, surahNames } from "../../src/i18n"
import { meta } from "../../src/hafs"

describe(getSurahNamesAsync, () => {
  const langs: Lang[] = ["en", "az", "ru", "tr"]

  it.each(langs)("returns surah names for %s", async (lang) => {
    const names = await getSurahNamesAsync(lang)
    expect(Array.isArray(names)).toBeTruthy()
    expect(names).toHaveLength(meta.numSurahs + 2)
    expectTypeOf(names[1]).toBeObject()
    expect(Array.isArray(names[1])).toBeTruthy()
  })

  it.each(languages)("loads the same names as the static table for %s", async (lang) => {
    expect(await getSurahNamesAsync(lang)).toStrictEqual(surahNames[lang])
  })

  it("exports the same languages as quran-meta/i18n", () => {
    expect(asyncLanguages).toBe(languages)
  })

  it("falls back to English for unknown language", async () => {
    // @ts-expect-error testing fallback
    const names = await getSurahNamesAsync("xx")
    expect(Array.isArray(names)).toBeTruthy()
    expect(names).toHaveLength(meta.numSurahs + 2)
    expect(Array.isArray(names[1])).toBeTruthy()
  })
})
