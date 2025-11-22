import { meta, generatePartBlocks } from "../src"
import { partNames, PartType } from "../src/generatePartBlocks"

describe("getList", () => {
  it("should return an array", () => {
    partNames.filter(partName => partName !== "thumunAlHizb").forEach((part: PartType) => {
      expect(Array.isArray(generatePartBlocks(part, "Hafs"))).toBe(true)
    })
  })

  it("should return a non-empty array", () => {
    partNames.forEach((part: PartType) => {
      expect(generatePartBlocks(part).length).toBeGreaterThan(0)
    })
  })

  it("sum of ayahCount should be 6236", () => {
    partNames.filter(partNames => partNames !== "thumunAlHizb").forEach((partName: PartType) => {
    //   const partList = parts[partName]
      const list = generatePartBlocks(partName, "Hafs")
      let sum = 0
      list.forEach((item) => {
        sum += item.ayahCount
      })

      expect(sum).toEqual(meta.numAyahs)
    })
  })

  it("number of items is equal to partition", () => {
    const partLengths = {
      surah: meta.numSurahs,
      juz: meta.numJuzs,
      rubAlHizb: meta.numRubAlHizbs,
      page: meta.numPages,
      ruku: meta.numRukus,
      manzil: meta.numManzils
    }

    partNames.filter(partName => partName !== "thumunAlHizb").forEach((partName) => {
      // const partList = parts[partName]

      const list = generatePartBlocks(partName, "Hafs")

      expect(list.length, "check " + partName).toEqual(partLengths[partName])
    })
  })

  it("should return same array on multiple calls", () => {
    const res = generatePartBlocks("surah")
    const res2 = generatePartBlocks("surah")
    expect(res).toEqual(res2)
  })

  //   it("should return array in ascending order", () => {
  //     const list = getList()
  //     const sorted = [...list].sort((a, b) => a - b)
  //     expect(list).toEqual(sorted)
  //   })

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
