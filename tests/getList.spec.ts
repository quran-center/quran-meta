import { generatePartBlocks } from "../src"
import type { PartType } from "../src/lists/types"
import { partNames } from "../src/lists/types"
import { HafsLists } from "../src/lists/HafsLists"
import { QalunLists } from "../src/lists/QalunLists"

describe("getListOfRiwaya", () => {
  it("should return an array", () => {
    partNames
      .filter((partName) => partName !== "thumunAlHizb")
      .forEach((part: PartType) => {
        expect(Array.isArray(generatePartBlocks(part, HafsLists))).toBeTruthy()
      })
  })

  it("should return a non-empty array", () => {
    partNames
      .filter((part) => part !== "thumunAlHizb")
      .forEach((part: PartType) => {
        expect((generatePartBlocks(part, HafsLists) || []).length).toBeGreaterThan(0)
      })
    // Test thumunAlHizb with Qalun
    expect((generatePartBlocks("thumunAlHizb", QalunLists) || []).length).toBeGreaterThan(0)
  })

  it("sum of ayahCount should be 6236", () => {
    partNames
      .filter((partNames) => partNames !== "thumunAlHizb")
      .forEach((partName: PartType) => {
        //   Const partList = parts[partName]
        const list = generatePartBlocks(partName, HafsLists)
        let sum = 0
        if (list) {
          list.forEach((item) => {
            sum += item.ayahCount
          })
        }

        expect(sum).toEqual(HafsLists.meta.numAyahs)
      })
  })

  it("number of items is equal to partition", () => {
    const partLengths = {
      juz: HafsLists.meta.numJuzs,
      manzil: HafsLists.meta.numManzils,
      page: HafsLists.meta.numPages,
      rubAlHizb: HafsLists.meta.numRubAlHizbs,
      ruku: HafsLists.meta.numRukus,
      surah: HafsLists.meta.numSurahs
    }

    partNames
      .filter((partName) => partName !== "thumunAlHizb")
      .forEach((partName) => {
        // Const partList = parts[partName]

        const list = generatePartBlocks(partName, HafsLists)

        expect(list?.length, "check " + partName).toEqual(partLengths[partName])
      })
  })

  it("should return same array on multiple calls", () => {
    const res = generatePartBlocks("surah", HafsLists)
    const res2 = generatePartBlocks("surah", HafsLists)
    expect(res).toEqual(res2)
  })

  // It("should return array in ascending order", () => {
  //   Const list = getListOfRiwaya()
  //   Const sorted = [...list].sort((a, b) => a - b)
  //   Expect(list).toEqual(sorted)
  // })

  //   It("should return same array on multiple calls", () => {
  //     Const firstCall = getList()
  //     Const secondCall = getList()
  //     Expect(firstCall).toEqual(secondCall)
  //   })

  //   It("should return immutable array", () => {
  //     Const original = getList()
  //     Const copy = [...original]
  //     Original.push(999)
  //     Expect(getList()).toEqual(copy)
  //   })
})
