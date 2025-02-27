import {
  meta,
  surahNamesAz,
  surahNamesEn,
  surahNamesRu,
  surahNamesTr
} from "../src"

const languages = {
  en: surahNamesEn,
  ru: surahNamesRu,
  az: surahNamesAz,
  tr: surahNamesTr
}

describe("getAyahCountInSurah", () => {
  it("should return correct ayah count for first surah", () => {
    Object.values(languages).forEach((language) => {
      expect(language.length).toBe(meta.numSurahs + 1)
    })
  })
})
