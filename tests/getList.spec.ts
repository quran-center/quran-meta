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
        expect(Array.isArray(generatePartBlocks(part, HafsLists))).toBe(true)
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
        //   const partList = parts[partName]
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
      surah: HafsLists.meta.numSurahs,
      juz: HafsLists.meta.numJuzs,
      rubAlHizb: HafsLists.meta.numRubAlHizbs,
      page: HafsLists.meta.numPages,
      ruku: HafsLists.meta.numRukus,
      manzil: HafsLists.meta.numManzils
    }

    partNames
      .filter((partName) => partName !== "thumunAlHizb")
      .forEach((partName) => {
        // const partList = parts[partName]

        const list = generatePartBlocks(partName, HafsLists)

        expect(list?.length, "check " + partName).toEqual(partLengths[partName])
      })
  })

  it("should return same array on multiple calls", () => {
    const res = generatePartBlocks("surah", HafsLists)
    const res2 = generatePartBlocks("surah", HafsLists)
    expect(res).toEqual(res2)
  })

  // it("should return array in ascending order", () => {
  //   const list = getListOfRiwaya()
  //   const sorted = [...list].sort((a, b) => a - b)
  //   expect(list).toEqual(sorted)
  // })

  //   it("should return same array on multiple calls", () => {
  //     const firstCall = getList()
  //     const secondCall = getList()
  //     expect(firstCall).toEqual(secondCall)
  //   })

  //   it("should return immutable array", () => {
  //     const original = getList()
  //     const copy = [...original]
  //     original.push(999)
  //     expect(getList()).toEqual(copy)
  //   })
})
