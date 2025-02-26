import { ayahStringSplitter, string2NumberSplitter, string2NumberSplitterStrict } from "../src/ayahStringSplitter"

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
    expect(() => ayahStringSplitter("1")).toThrow()
    expect(() => ayahStringSplitter("1:")).toThrow()
    expect(() => ayahStringSplitter("1:300")).toThrow()
  })

  it("throws error for invalid range format", () => {
    expect(() => ayahStringSplitter("1:5-3")).toThrow()
    expect(() => ayahStringSplitter("1:5-")).toThrow()
    expect(() => ayahStringSplitter("1:5-a")).toThrow()
    expect(() => ayahStringSplitter("1:1-dd")).toThrow()
    expect(() => ayahStringSplitter("1:a-5")).toThrow()
    expect(() => ayahStringSplitter("1:-5")).toThrow()
  })

  it("throws error for non-numeric input", () => {
    expect(() => ayahStringSplitter("1:a")).toThrow()
    expect(() => ayahStringSplitter("a:1")).toThrow()
  })

  it("handles whitespace in input", () => {
    expect(ayahStringSplitter(" 1:1 ")).toEqual([1, 1])
    expect(ayahStringSplitter("2:3  ")).toEqual([2, 3])
    expect(ayahStringSplitter("  7:26-30")).toEqual([7, [26, 30]])
    expect(ayahStringSplitter("9:5\t")).toEqual([9, 5])
  })
})

describe("stringNumberSplitter", () => {
  it("parses simple surah:ayah format", () => {
    expect(string2NumberSplitter("2:255")).toEqual({
      surahOrAyah: 2,
      ayah: 255,
      ayahTo: 0
    })
  })

  it("parses surah:ayah-ayahTo format", () => {
    expect(string2NumberSplitter("2:255-260")).toEqual({
      surahOrAyah: 2,
      ayah: 255,
      ayahTo: 260
    })
  })

  it("handles different delimiters", () => {
    expect(string2NumberSplitter("2 255")).toEqual({
      surahOrAyah: 2,
      ayah: 255,
      ayahTo: 0
    })
    expect(string2NumberSplitter("2-255")).toEqual({
      surahOrAyah: 2,
      ayah: 255,
      ayahTo: 0
    })
  })

  it("returns null for invalid input", () => {
    expect(string2NumberSplitter("invalid")).toBeNull()
    expect(string2NumberSplitter("a:b")).toBeNull()
    expect(string2NumberSplitter("")).toBeNull()
  })

  it("handles surah numbers only", () => {
    expect(string2NumberSplitter("2")).toEqual({
      surahOrAyah: 2,
      ayah: 0,
      ayahTo: 0
    })
  })

  it("handles whitespace", () => {
    expect(string2NumberSplitter(" 2:255 ")).toEqual({
      surahOrAyah: 2,
      ayah: 255,
      ayahTo: 0
    })
  })

  it("handles non-strict mode parsing", () => {
    expect(ayahStringSplitter("2 255", false)).toEqual([2, 255])
    expect(ayahStringSplitter("2dddd255", false)).toEqual([2, 255])
    expect(ayahStringSplitter("2ddd-ddd255dddd", false)).toEqual([2, 255])
    expect(ayahStringSplitter("2:255-260", false)).toEqual([2, [255, 260]])
    expect(ayahStringSplitter("2dd   ddd255dddddd260", false)).toEqual([2, [255, 260]])
    expect(ayahStringSplitter("1:5-", false)).toEqual([1, 5])
    expect(ayahStringSplitter("1:5-a", false)).toEqual([1, 5])
    expect(ayahStringSplitter("1:1-dd", false)).toEqual([1, 1])
    expect(ayahStringSplitter("1:a-5", false)).toEqual([1, 5])
    expect(() => ayahStringSplitter("1:-5")).toThrow()
    expect(() => ayahStringSplitter("invalid", false)).toThrow()
    expect(() => ayahStringSplitter("115:1", false)).toThrow()
    expect(() => ayahStringSplitter("1:300", false)).toThrow()
    expect(() => ayahStringSplitter("1:5-3", false)).toThrow()
  })
})

describe("string2NumberSplitterStrict", () => {
  it("parses simple surah:ayah format", () => {
    expect(string2NumberSplitterStrict("2:255")).toEqual({
      surahOrAyah: 2,
      ayah: 255,
      ayahTo: NaN
    })
  })

  it("parses surah:ayah-ayahTo format", () => {
    expect(string2NumberSplitterStrict("2:255-260")).toEqual({
      surahOrAyah: 2,
      ayah: 255,
      ayahTo: 260
    })
  })

  it("throws error for invalid surah format", () => {
    expect(() => string2NumberSplitterStrict("abc:255")).toThrow("Error in surah format")
    expect(() => string2NumberSplitterStrict(":255")).toThrow("Error in surah format")
  })

  it("throws error for missing ayah data", () => {
    expect(() => string2NumberSplitterStrict("2")).toThrow()
    expect(() => string2NumberSplitterStrict("2:")).toThrow()
  })

  it("throws error for invalid ayah format", () => {
    expect(() => string2NumberSplitterStrict("2:abc")).toThrow("Error in surah format")
    expect(() => string2NumberSplitterStrict("2:255-abc")).toThrow("Error in surah format")
    expect(() => string2NumberSplitterStrict("2:abc-255")).toThrow("Error in surah format")
  })

  it("handles whitespace", () => {
    expect(string2NumberSplitterStrict(" 2:255 ")).toEqual({
      surahOrAyah: 2,
      ayah: 255,
      ayahTo: NaN
    })
  })
})
