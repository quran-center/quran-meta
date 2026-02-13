import { meta } from "../src/hafs"
import { surahNamesAz } from "../src/i18n/surah.az"
import { surahNamesEn } from "../src/i18n/surah.en"
import { surahNamesRu } from "../src/i18n/surah.ru"
import { surahNamesTr } from "../src/i18n/surah.tr"

const languages = {
  az: surahNamesAz,
  en: surahNamesEn,
  ru: surahNamesRu,
  tr: surahNamesTr
}

describe("getAyahCountInSurah", () => {
  it("should return correct ayah count for first surah", () => {
    Object.values(languages).forEach((language) => {
      expect(language.length).toBe(meta.numSurahs + 2)
    })
  })
})
