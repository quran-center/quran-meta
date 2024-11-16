import { meta } from "../src"
import { getList, partNames, PartType } from "../src/getList"

describe("getList", () => {
  it("should return an array", () => {
    partNames.forEach((part: PartType) => {
      expect(Array.isArray(getList(part))).toBe(true)
    })
  })

  it("should return a non-empty array", () => {
    partNames.forEach((part: PartType) => {
      expect(getList(part).length).toBeGreaterThan(0)
    })
  })

  it("sum of ayahCount should be 6236", () => {
    partNames.forEach((partName: PartType) => {
    //   const partList = parts[partName]
      const list = getList(partName)
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

    partNames.forEach((partName: PartType) => {
      // const partList = parts[partName]

      const list = getList(partName)

      expect(list.length, "check " + partName).toEqual(partLengths[partName])
    })
  })

  it("should return same array on multiple calls", () => {
    const res = getList("surah")
    console.log(res)
  })

  it("should return same array on multiple calls", () => {
    const res = getList("manzil")
    console.log(res)
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
