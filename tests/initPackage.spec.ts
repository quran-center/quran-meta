import { quranMeta } from "../src/initPackage"

describe("quranMeta factory", () => {
  describe("Default Hafs riwaya", () => {
    it("should create API with default Hafs riwaya", () => {
      const api = quranMeta()
      expect(api.getSurahMeta).toBeDefined()
      expect(api.getAyahMeta).toBeDefined()
      expect(api.findJuz).toBeDefined()
    })

    it("should use Hafs as default when no config provided", () => {
      const api = quranMeta()
      const surah = api.getSurahMeta(1)
      expect(surah).toBeDefined()
      expect(surah.ayahCount).toBe(7)
    })

    it("should use Hafs when riwaya parameter is undefined", () => {
      const api = quranMeta()
      const meta = api.getAyahMeta(1, undefined)
      expect(meta.surah).toBe(1)
    })

    it("should not include ThumunAlHizb methods for Hafs", () => {
      const api = quranMeta()
      // TypeScript correctly prevents access to ThumunAlHizb methods on Hafs API
      // @ts-expect-error - Testing that method does not exist
      expect(api.findThumunAlHizb).toBeUndefined()
      // @ts-expect-error - Testing that method does not exist
      expect(api.findThumunAlHizbByAyahId).toBeUndefined()
      // @ts-expect-error - Testing that method does not exist
      expect(api.getThumunAlHizb).toBeUndefined()
      // @ts-expect-error - Testing that method does not exist
      expect(api.getThumunAlHizbMeta).toBeUndefined()
    })
  })

  describe("Qalun riwaya", () => {
    it("should create API with Qalun riwaya", () => {
      const api = quranMeta({ riwaya: "Qalun" })
      expect(api.getSurahMeta).toBeDefined()
      expect(api.getAyahMeta).toBeDefined()
      expect(api.findJuz).toBeDefined()
    })

    it("should use Qalun as default when configured", () => {
      const api = quranMeta({ riwaya: "Qalun" })
      const surah = api.getSurahMeta(1)
      expect(surah).toBeDefined()
      expect(surah.ayahCount).toBe(7)
    })

    it("should include ThumunAlHizb methods for Qalun", () => {
      const api = quranMeta({ riwaya: "Qalun" })
      expect(api.findThumunAlHizb).toBeDefined()
      expect(api.findThumunAlHizbByAyahId).toBeDefined()
      expect(api.getThumunAlHizb).toBeDefined()
      expect(api.getThumunAlHizbMeta).toBeDefined()
    })

    it("should call ThumunAlHizb methods successfully", () => {
      const api = quranMeta({ riwaya: "Qalun" })
      const thumun = api.findThumunAlHizb(1, 1)
      expect(thumun).toBe(1)
    })

    it("should use Qalun when riwaya parameter is explicitly provided", () => {
      const api = quranMeta({ riwaya: "Qalun" })
      // Note: Due to JavaScript function.length behavior with default parameters,
      // the wrapper cannot automatically inject defaults for optional parameters.
      // Users must explicitly pass the riwaya when needed.
      const meta = api.getAyahMeta(1, "Qalun")
      expect(meta.thumunAlHizbId).toBeDefined()
    })
  })

  describe("Function wrapping", () => {
    it("should wrap functions with default riwaya", () => {
      const api = quranMeta({ riwaya: "Hafs" })
      // Call without explicit riwaya - should use default
      const juz = api.findJuz(1, 1)
      expect(juz).toBe(1)
    })

    it("should allow explicit riwaya override", () => {
      const api = quranMeta({ riwaya: "Hafs" })
      // Explicitly pass Qalun to override default
      const meta = api.getAyahMeta(1, "Qalun")
      expect(meta.thumunAlHizbId).toBeDefined()
    })

    it("should handle functions with no riwaya parameter", () => {
      const api = quranMeta()
      const surahMeta = api.getSurahMeta(1)
      expect(surahMeta.ayahCount).toBe(7)
    })
  })
})
