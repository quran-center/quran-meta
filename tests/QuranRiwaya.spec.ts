import { QuranRiwaya } from "../src/QuranRiwaya"
import { HafsLists } from "../src/lists/aHafsLists"
import { QalunLists } from "../src/lists/QalunLists"

describe("QuranRiwaya", () => {
  describe("Factory methods", () => {
    it("should create Hafs instance with create() factory", () => {
      const hafs = QuranRiwaya.create(HafsLists)
      expect(hafs.riwayaName).toBe("Hafs")
    })

    it("should create Qalun instance with create() factory", () => {
      const qalun = QuranRiwaya.create(QalunLists)
      expect(qalun.riwayaName).toBe("Qalun")
    })
  })

  describe("Surah methods", () => {
    const hafs = QuranRiwaya.create(HafsLists)

    it("should get surah metadata", () => {
      const meta = hafs.getSurahMeta(1)
      expect(meta.surahNum).toBe(1)
      expect(meta.ayahCount).toBe(7)
      expect(meta.name).toBe("الفَاتِحة")
      expect(meta.isMeccan).toBe(true)
    })

    it("should get surah info", () => {
      const info = hafs.getSurahInfo(1)
      expect(info[0]).toBe(1) // firstAyahId
      expect(info[1]).toBe(7) // ayahCount
      expect(info[4]).toBe("الفَاتِحة") // name (0-indexed, so index 4)
    })

    it("should get ayah count in surah", () => {
      expect(hafs.getAyahCountInSurah(1)).toBe(7)
      expect(hafs.getAyahCountInSurah(2)).toBe(286)
    })

    it("should find surah by ayah ID", () => {
      expect(hafs.findSurahByAyahId(1)).toBe(1)
      expect(hafs.findSurahByAyahId(8)).toBe(2)
    })

    it("should find surah:ayah by ayah ID", () => {
      expect(hafs.findSurahAyahByAyahId(1)).toEqual([1, 1])
      expect(hafs.findSurahAyahByAyahId(8)).toEqual([2, 1])
      expect(hafs.findSurahAyahByAyahId(100)).toEqual([2, 93])
    })
  })

  describe("Ayah methods", () => {
    const hafs = QuranRiwaya.create(HafsLists)

    it("should find ayah ID by surah and ayah", () => {
      expect(hafs.findAyahIdBySurah(1, 1)).toBe(1)
      expect(hafs.findAyahIdBySurah(2, 1)).toBe(8)
      expect(hafs.findAyahIdBySurah(2, 93)).toBe(100)
    })
  })

  describe("Utility methods", () => {
    it("should get riwaya name", () => {
      const hafs = QuranRiwaya.create(HafsLists)
      expect(hafs.riwayaName).toBe("Hafs")

      const qalun = QuranRiwaya.create(QalunLists)
      expect(qalun.riwayaName).toBe("Qalun")
    })

    it("should get metadata", () => {
      const hafs = QuranRiwaya.create(HafsLists)
      const meta = hafs.meta
      expect(meta.numAyahs).toBe(6236)
      expect(meta.numSurahs).toBe(114)

      const qalun = QuranRiwaya.create(QalunLists)
      const qalunMeta = qalun.meta
      expect(qalunMeta.numAyahs).toBe(6214)
    })
  })
})
