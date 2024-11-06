import { ayahStringSplitter } from "../src/ayahStringSplitter"

describe("ayaStringSplitter", () => {
  it("basic tests", () => {
    expect(ayahStringSplitter("1:1")).toEqual([1, 1])
    expect(ayahStringSplitter("1:1-5")).toEqual([1, [1, 5]])
    expect(ayahStringSplitter("114:1")).toEqual([114, 1])
    // expect(ayaStringSplitter("115:1")).toEqual([115,1])
  })

  it("error checks", () => {
    expect(() => ayahStringSplitter("1")).toThrow()
    expect(() => ayahStringSplitter("")).toThrow()
    expect(() => ayahStringSplitter("sdsgw")).toThrow()
    expect(() => ayahStringSplitter("sd:sgw")).toThrow()
    expect(() => ayahStringSplitter("34:sgw")).toThrow()
  })

  it("handles single-digit surah and ayah numbers", () => {
    expect(ayahStringSplitter("2:3")).toEqual([2, 3])
    expect(ayahStringSplitter("9:5")).toEqual([9, 5])
  })

  it("handles multi-digit surah and ayah numbers", () => {
    expect(ayahStringSplitter("110:3")).toEqual([110, 3])
    expect(ayahStringSplitter("2:255")).toEqual([2, 255])
  })

  it("handles ayah ranges with multi-digit numbers", () => {
    expect(ayahStringSplitter("7:26-30")).toEqual([7, [26, 30]])
    expect(ayahStringSplitter("18:1-10")).toEqual([18, [1, 10]])
  })

  it("throws error for invalid surah numbers", () => {
    expect(() => ayahStringSplitter("0:1")).toThrow()
    expect(() => ayahStringSplitter("115:1")).toThrow()
  })

  it("throws error for invalid ayah numbers", () => {
    expect(() => ayahStringSplitter("1:0")).toThrow()
    expect(() => ayahStringSplitter("1:300")).toThrow()
  })

  it("throws error for invalid range format", () => {
    expect(() => ayahStringSplitter("1:5-3")).toThrow()
    expect(() => ayahStringSplitter("1:5-")).toThrow()
    expect(() => ayahStringSplitter("1:-5")).toThrow()
  })

  it("throws error for non-numeric input", () => {
    expect(() => ayahStringSplitter("1:a")).toThrow()
    expect(() => ayahStringSplitter("a:1")).toThrow()
    expect(() => ayahStringSplitter("1:1-a")).toThrow()
  })
})
