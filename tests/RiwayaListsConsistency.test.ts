import { describe, expect, test } from "vitest"
import { getListsOfRiwaya } from "../src/lists"
import type { RiwayaName } from "../src/lists/types"

const riwayaNames: RiwayaName[] = ["Bazzi", "Douri", "Hafs", "Qalun", "Qunbul", "Shuba", "Sousi", "Warsh"]

describe.each(riwayaNames)("%s lists consistency", (riwaya) => {
  const lists = getListsOfRiwaya(riwaya)
  const { meta } = lists
  const sentinel = meta.numAyahs + 1

  test("meta.riwayaName matches the riwaya", () => {
    expect(meta.riwayaName).toBe(riwaya)
  })

  test("has the expected structural constants", () => {
    expect(meta.numSurahs).toBe(114)
    expect(meta.numJuzs).toBe(30)
    expect(meta.numManzils).toBe(7)
    expect(meta.numPages).toBe(604)
    expect(meta.numHizbs).toBe(60)
    expect(meta.numRubAlHizbs).toBe(240)
    expect(meta.numRubsInJuz).toBe(8)
    expect(meta.numRukus).toBe(556)
  })

  test("SurahList entries are contiguous and cover all ayahs", () => {
    expect(lists.SurahList.length).toBe(116)
    expect(lists.SurahList[1][0]).toBe(1)
    for (let s = 1; s <= 114; s++) {
      const [start, ayahCount] = lists.SurahList[s]
      expect(ayahCount).toBeGreaterThan(0)
      expect(lists.SurahList[s + 1][0]).toBe(start + ayahCount)
    }
    // The closing sentinel starts right after the last ayah
    expect(lists.SurahList[115][0]).toBe(sentinel)
    const lastSurah = lists.SurahList[114]
    expect(lastSurah[0] + lastSurah[1] - 1).toBe(meta.numAyahs)
  })

  const boundaryLists = [
    ["JuzList", meta.numJuzs],
    ["ManzilList", meta.numManzils],
    ["PageList", meta.numPages],
    ["HizbQuarterList", meta.numRubAlHizbs],
    ["RukuList", meta.numRukus]
  ] as const

  test.each(boundaryLists)("%s is a valid ascending boundary list", (listName, count) => {
    const list = lists[listName]
    expect(list.length).toBe(count + 2)
    expect(list[0]).toBe(0)
    expect(list[1]).toBe(1)
    for (let i = 2; i < list.length; i++) {
      expect(list[i]).toBeGreaterThan(list[i - 1])
    }
    expect(list.at(-1)).toBe(sentinel)
  })

  test("SajdaList matches numSajdas and is ascending within range", () => {
    expect(lists.SajdaList.length).toBe(meta.numSajdas)
    for (const [i, ayahId] of lists.SajdaList.entries()) {
      expect(ayahId).toBeGreaterThanOrEqual(1)
      expect(ayahId).toBeLessThanOrEqual(meta.numAyahs)
      if (i > 0) {
        expect(ayahId).toBeGreaterThan(lists.SajdaList[i - 1])
      }
    }
  })

  test("thumun al-hizb data is consistent with meta", () => {
    if ("HizbEighthList" in lists) {
      expect(lists.HizbEighthList.length).toBe(meta.numThumunAlHizbs + 2)
      // Every rub-al-hizb quarter start is also a thumun (eighth) start
      for (let i = 1; i <= meta.numRubAlHizbs; i++) {
        expect(lists.HizbEighthList[2 * i - 1]).toBe(lists.HizbQuarterList[i])
      }
    } else {
      expect(meta.numThumunAlHizbs).toBe(0)
    }
  })
})
