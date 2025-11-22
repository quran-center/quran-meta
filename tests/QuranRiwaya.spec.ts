import { QuranRiwaya } from "../src/QuranRiwaya"
import { meta } from "../src/types"

describe("QuranRiwaya", () => {
  describe("Factory methods", () => {
    it("should create Hafs instance with hafs() factory", () => {
      const hafs = QuranRiwaya.hafs()
      expect(hafs.getRiwayaName()).toBe("Hafs")
    })

    it("should create Qalun instance with qalun() factory", () => {
      const qalun = QuranRiwaya.qalun()
      expect(qalun.getRiwayaName()).toBe("Qalun")
    })

    it("should create custom instance with create() factory", () => {
      const custom = QuranRiwaya.create("Hafs")
      expect(custom.getRiwayaName()).toBe("Hafs")
    })
  })

  describe("Surah methods", () => {
    const hafs = QuranRiwaya.hafs()

    it("should get surah metadata", () => {
      const meta = hafs.getSurahMeta(1)
      expect(meta.surahNum).toBe(1)
      expect(meta.ayahCount).toBe(7)
      expect(meta.name).toBe("الفَاتِحة")
      expect(meta.isMeccan).toBe(true)
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
    })
  })

  describe("Ayah methods", () => {
    const hafs = QuranRiwaya.hafs()

    it("should find ayah ID by surah and ayah", () => {
      expect(hafs.findAyahIdBySurah(1, 1)).toBe(1)
      expect(hafs.findAyahIdBySurah(2, 1)).toBe(8)
    })

    it("should get ayah metadata", () => {
      const ayahMeta = hafs.getAyahMeta(1)
      expect(ayahMeta.surah).toBe(1)
      expect(ayahMeta.ayah).toBe(1)
      expect(ayahMeta.juz).toBe(1)
      expect(ayahMeta.page).toBe(1)
    })

    it("should get ayah metas for surah", () => {
      const metas = hafs.getAyahMetasForSurah(1)
      expect(metas.length).toBe(7)
      expect(metas[0].surah).toBe(1)
      expect(metas[0].ayah).toBe(1)
    })

    it("should get next ayah", () => {
      expect(hafs.nextAyah(1, 7)).toEqual([2, 1])
      expect(hafs.nextAyah(2, 1)).toEqual([2, 2])
    })

    it("should get previous ayah", () => {
      expect(hafs.prevAyah(2, 1)).toEqual([1, 7])
      expect(hafs.prevAyah(2, 2)).toEqual([2, 1])
    })
  })

  describe("Juz methods", () => {
    const hafs = QuranRiwaya.hafs()

    it("should find juz by surah and ayah", () => {
      expect(hafs.findJuz(1, 1)).toBe(1)
      expect(hafs.findJuz(2, 1)).toBe(1)
      expect(hafs.findJuz(2, 142)).toBe(2)
    })

    it("should find juz by ayah ID", () => {
      expect(hafs.findJuzByAyahId(1)).toBe(1)
      expect(hafs.findJuzByAyahId(149)).toBe(2)
    })

    it("should get juz metadata", () => {
      const juzMeta = hafs.getJuzMeta(1)
      expect(juzMeta.juzNum).toBe(1)
      expect(juzMeta.firstAyahId).toBe(1)
    })

    it("should check if ayah is first in juz", () => {
      expect(hafs.isAyahJuzFirst(1)).toBe(1)
      expect(hafs.isAyahJuzFirst(149)).toBe(2)
      expect(hafs.isAyahJuzFirst(2)).toBeLessThan(0)
    })

    it("should check if surah:ayah is first in juz", () => {
      expect(hafs.isSurahAyahJuzFirst(1, 1)).toBe(1)
      expect(hafs.isSurahAyahJuzFirst(2, 142)).toBe(2)
      expect(hafs.isSurahAyahJuzFirst(2, 1)).toBeLessThan(0)
    })
  })

  describe("Page methods", () => {
    const hafs = QuranRiwaya.hafs()

    it("should find page by surah and ayah", () => {
      expect(hafs.findPage(1, 1)).toBe(1)
      expect(hafs.findPage(2, 1)).toBe(2)
    })

    it("should find page by ayah ID", () => {
      expect(hafs.findPagebyAyahId(1)).toBe(1)
      expect(hafs.findPagebyAyahId(8)).toBe(2)
    })

    it("should get page metadata", () => {
      const pageMeta = hafs.getPageMeta(1)
      expect(pageMeta.pageNum).toBe(1)
      expect(pageMeta.firstAyahId).toBe(1)
    })

    it("should check if ayah is first on page", () => {
      expect(hafs.isAyahPageFirst(1)).toBe(1)
      expect(hafs.isAyahPageFirst(8)).toBe(2)
      expect(hafs.isAyahPageFirst(2)).toBeLessThan(0)
    })
  })

  describe("Manzil methods", () => {
    const hafs = QuranRiwaya.hafs()

    it("should find manzil by surah and ayah", () => {
      expect(hafs.findManzil(1, 1)).toBe(1)
      expect(hafs.findManzil(5, 1)).toBe(2)
    })

    it("should find manzil by ayah ID", () => {
      expect(hafs.findManzilByAyahId(1)).toBe(1)
      expect(hafs.findManzilByAyahId(670)).toBe(2)
    })

    it("should get manzil metadata", () => {
      const manzilMeta = hafs.getManzilMeta(1)
      expect(manzilMeta.manzilNum).toBe(1)
      expect(manzilMeta.firstAyahId).toBe(1)
    })
  })

  describe("Rub al-Hizb methods", () => {
    const hafs = QuranRiwaya.hafs()

    it("should find rub al-hizb by surah and ayah", () => {
      const rub = hafs.findRubAlHizb(1, 1)
      expect(rub).toBe(1)
    })

    it("should find rub al-hizb by ayah ID", () => {
      const rub = hafs.findRubAlHizbByAyahId(1)
      expect(rub).toBe(1)
    })

    it("should get rub al-hizb", () => {
      const rub = hafs.getRubAlHizb(1)
      expect(rub.juz).toBe(1)
      expect(rub.hizbId).toBe(1)
    })

    it("should get rub al-hizb metadata", () => {
      const meta = hafs.getRubAlHizbMeta(1)
      expect(meta.rubAlHizbId).toBe(1)
      expect(meta.firstAyahId).toBe(1)
    })

    it("should get rub al-hizb by ayah ID", () => {
      const rub = hafs.getRubAlHizbByAyahId(1)
      expect(rub.juz).toBe(1)
      expect(rub.hizbId).toBe(1)
    })
  })

  describe("Thumun al-Hizb methods (Qalun only)", () => {
    const qalun = QuranRiwaya.qalun()

    it("should find thumun al-hizb by surah and ayah", () => {
      const thumun = qalun.findThumunAlHizb(1, 1)
      expect(thumun).toBe(1)
    })

    it("should find thumun al-hizb by ayah ID", () => {
      const thumun = qalun.findThumunAlHizbByAyahId(1)
      expect(thumun).toBe(1)
    })

    it("should get thumun al-hizb", () => {
      const thumun = qalun.getThumunAlHizb(1)
      expect(thumun.juz).toBe(1)
      expect(thumun.hizbId).toBe(1)
    })

    it("should get thumun al-hizb by ayah ID", () => {
      const thumun = qalun.getThumunAlHizbByAyahId(1)
      expect(thumun.juz).toBe(1)
    })

    it("should get thumun al-hizb metadata", () => {
      const meta = qalun.getThumunAlHizbMeta(1)
      expect(meta.thumunAlHizbId).toBe(1)
      expect(meta.firstAyahId).toBe(1)
    })

    it("should get thumun al-hizb metadata by ayah ID", () => {
      const meta = qalun.getThumunAlHizbMetaByAyahId(1)
      expect(meta.thumunAlHizbId).toBe(1)
    })
  })

  describe("Ruku methods", () => {
    const hafs = QuranRiwaya.hafs()

    it("should find ruku by ayah ID", () => {
      const ruku = hafs.findRukuByAyahId(1)
      expect(ruku).toBe(1)
    })

    it("should get ruku metadata", () => {
      const rukuMeta = hafs.getRukuMeta(1)
      expect(rukuMeta.rukuNum).toBe(1)
      expect(rukuMeta.firstAyahId).toBe(1)
    })
  })

  describe("Range methods", () => {
    const hafs = QuranRiwaya.hafs()

    it("should find range around ayah - juz mode", () => {
      const range = hafs.findRangeAroundAyah(149, "juz")
      expect(range[0]).toBe(149)
    })

    it("should find range around ayah - surah mode", () => {
      const range = hafs.findRangeAroundAyah(8, "surah")
      expect(range[0]).toBe(8)
      expect(range[1]).toBe(293)
    })

    it("should find range around ayah - ayah mode", () => {
      const range = hafs.findRangeAroundAyah(1, "ayah")
      expect(range).toEqual([1, 1])
    })

    it("should find range around surah:ayah", () => {
      const range = hafs.findRangeAroundSurahAyah(2, 1, "surah")
      expect(range[0]).toBe(8)
      expect(range[1]).toBe(293)
    })
  })

  describe("Utility methods", () => {
    const hafs = QuranRiwaya.hafs()

    it("should generate part blocks", () => {
      const blocks = hafs.generatePartBlocks("juz")
      expect(blocks).toBeDefined()
      expect(blocks.length).toBe(meta.numJuzs)
    })

    it("should get riwaya name", () => {
      expect(hafs.getRiwayaName()).toBe("Hafs")
      expect(QuranRiwaya.qalun().getRiwayaName()).toBe("Qalun")
    })

    it("should get riwaya-specific metadata", () => {
      const hafsMeta = hafs.getMeta()
      expect(hafsMeta.numSurahs).toBe(114)
      expect(hafsMeta.numAyahs).toBe(6236)
      expect(hafsMeta.numJuzs).toBe(30)
      expect(hafsMeta.numSajdas).toBe(15)
      expect(hafsMeta.numThumunAlHizbs).toBe(0) // Hafs doesn't have Thumun al-Hizb
    })

    it("should get Qalun-specific metadata", () => {
      const qalun = QuranRiwaya.qalun()
      const qalunMeta = qalun.getMeta()
      expect(qalunMeta.numSurahs).toBe(114)
      expect(qalunMeta.numAyahs).toBe(6214) // Qalun has 22 fewer ayahs than Hafs
      expect(qalunMeta.numSajdas).toBe(12) // Qalun has fewer sajdas
      expect(qalunMeta.numThumunAlHizbs).toBe(480) // Qalun has Thumun al-Hizb
    })
  })

  describe("Riwaya-specific behavior", () => {
    it("should handle Hafs-specific data", () => {
      const hafs = QuranRiwaya.hafs()
      const meta = hafs.getSurahMeta(1)
      expect(meta).toBeDefined()
      expect(meta.ayahCount).toBe(7)
    })

    it("should handle Qalun-specific data", () => {
      const qalun = QuranRiwaya.qalun()
      const meta = qalun.getSurahMeta(1)
      expect(meta).toBeDefined()
      expect(meta.ayahCount).toBe(7)
    })

    it("should support Qalun thumun al-hizb features", () => {
      const qalun = QuranRiwaya.qalun()
      const thumun = qalun.findThumunAlHizb(1, 1)
      expect(typeof thumun).toBe("number")
    })
  })

  describe("Method chaining compatibility", () => {
    it("should allow sequential method calls", () => {
      const hafs = QuranRiwaya.hafs()
      const surahMeta = hafs.getSurahMeta(2)
      const ayahId = hafs.findAyahIdBySurah(2, 1)
      const juz = hafs.findJuzByAyahId(ayahId)

      expect(surahMeta.surahNum).toBe(2)
      expect(ayahId).toBe(8)
      expect(juz).toBe(1)
    })

    it("should maintain instance state", () => {
      const hafs = QuranRiwaya.hafs()
      expect(hafs.getRiwayaName()).toBe("Hafs")

      hafs.getSurahMeta(1)
      hafs.findJuz(2, 1)

      expect(hafs.getRiwayaName()).toBe("Hafs")
    })
  })
})
