import { ayaStringSplitter } from "../src/ayaStringSplitter"

describe("ayaStringSplitter", () => {
  it("basic tests", () => {
    expect(ayaStringSplitter("1:1")).toEqual([1, 1])
    expect(ayaStringSplitter("1:1-5")).toEqual([1, [1, 5]])
    expect(ayaStringSplitter("114:1")).toEqual([114, 1])
    // expect(ayaStringSplitter("115:1")).toEqual([115,1])
  })

  it("error checks", () => {
    expect(() => ayaStringSplitter("1")).toThrow()
    expect(() => ayaStringSplitter("")).toThrow()
    expect(() => ayaStringSplitter("sdsgw")).toThrow()
    expect(() => ayaStringSplitter("sd:sgw")).toThrow()
    expect(() => ayaStringSplitter("34:sgw")).toThrow()
  })

  it("handles single-digit sura and aya numbers", () => {
    expect(ayaStringSplitter("2:3")).toEqual([2, 3])
    expect(ayaStringSplitter("9:5")).toEqual([9, 5])
  })

  it("handles multi-digit sura and aya numbers", () => {
    expect(ayaStringSplitter("110:3")).toEqual([110, 3])
    expect(ayaStringSplitter("2:255")).toEqual([2, 255])
  })

  it("handles aya ranges with multi-digit numbers", () => {
    expect(ayaStringSplitter("7:26-30")).toEqual([7, [26, 30]])
    expect(ayaStringSplitter("18:1-10")).toEqual([18, [1, 10]])
  })

  it("throws error for invalid sura numbers", () => {
    expect(() => ayaStringSplitter("0:1")).toThrow()
    expect(() => ayaStringSplitter("115:1")).toThrow()
  })

  it("throws error for invalid aya numbers", () => {
    expect(() => ayaStringSplitter("1:0")).toThrow()
    expect(() => ayaStringSplitter("1:300")).toThrow()
  })

  it("throws error for invalid range format", () => {
    expect(() => ayaStringSplitter("1:5-3")).toThrow()
    expect(() => ayaStringSplitter("1:5-")).toThrow()
    expect(() => ayaStringSplitter("1:-5")).toThrow()
  })

  it("throws error for non-numeric input", () => {
    expect(() => ayaStringSplitter("1:a")).toThrow()
    expect(() => ayaStringSplitter("a:1")).toThrow()
    expect(() => ayaStringSplitter("1:1-a")).toThrow()
  })
})
