import { getSurahNamesAsync } from "../../src/i18n/getSurahNamesAsync"
import type { Lang } from "../../src"
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

  it("falls back to English for unknown language", async () => {
    // @ts-expect-error testing fallback
    const names = await getSurahNamesAsync("xx")
    expect(Array.isArray(names)).toBeTruthy()
    expect(names).toHaveLength(meta.numSurahs + 2)
    expect(Array.isArray(names[1])).toBeTruthy()
  })
})
