import { ayahStringSplitter, string2NumberSplitter, string2NumberSplitterStrict } from "../src/ayahStringSplitter"
import { HafsLists as data } from "../src/lists/HafsLists"

describe("ayaStringSplitter", () => {
  it("basic tests", () => {
    expect(ayahStringSplitter("1:1", true, data)).toEqual([1, 1])
    expect(ayahStringSplitter("1:1-5", true, data)).toEqual([1, [1, 5]])
    expect(ayahStringSplitter("114:1", true, data)).toEqual([114, 1])
    // Expect(ayaStringSplitter("115:1")).toEqual([115,1])
  })

  it("error checks", () => {
    expect(() => ayahStringSplitter("1", true, data)).toThrow()
    expect(() => ayahStringSplitter("", true, data)).toThrow()
    expect(() => ayahStringSplitter("sdsgw", true, data)).toThrow()
    expect(() => ayahStringSplitter("sd:sgw", true, data)).toThrow()
    expect(() => ayahStringSplitter("34:sgw", true, data)).toThrow()
  })

  it("handles single-digit surah and ayah numbers", () => {
    expect(ayahStringSplitter("2:3", true, data)).toEqual([2, 3])
    expect(ayahStringSplitter("9:5", true, data)).toEqual([9, 5])
  })

  it("handles multi-digit surah and ayah numbers", () => {
    expect(ayahStringSplitter("110:3", true, data)).toEqual([110, 3])
    expect(ayahStringSplitter("2:255", true, data)).toEqual([2, 255])
  })

  it("handles ayah ranges with multi-digit numbers", () => {
    expect(ayahStringSplitter("7:26-30", true, data)).toEqual([7, [26, 30]])
    expect(ayahStringSplitter("18:1-10", true, data)).toEqual([18, [1, 10]])
  })

  it("throws error for invalid surah numbers", () => {
    expect(() => ayahStringSplitter("0:1", true, data)).toThrow()
    expect(() => ayahStringSplitter("115:1", true, data)).toThrow()
  })

  it("throws error for invalid ayah numbers", () => {
    expect(() => ayahStringSplitter("1:0", true, data)).toThrow()
    expect(() => ayahStringSplitter("1", true, data)).toThrow()
    expect(() => ayahStringSplitter("1:", true, data)).toThrow()
    expect(() => ayahStringSplitter("1:300", true, data)).toThrow()
  })

  it("throws error for invalid range format", () => {
    expect(() => ayahStringSplitter("1:5-3", true, data)).toThrow()
    expect(() => ayahStringSplitter("1:5-", true, data)).toThrow()
    expect(() => ayahStringSplitter("1:5-a", true, data)).toThrow()
    expect(() => ayahStringSplitter("1:1-dd", true, data)).toThrow()
    expect(() => ayahStringSplitter("1:a-5", true, data)).toThrow()
    expect(() => ayahStringSplitter("1:-5", true, data)).toThrow()
  })

  it("throws error for non-numeric input", () => {
    expect(() => ayahStringSplitter("1:a", true, data)).toThrow()
    expect(() => ayahStringSplitter("a:1", true, data)).toThrow()
  })

  it("handles whitespace in input", () => {
    expect(ayahStringSplitter(" 1:1 ", true, data)).toEqual([1, 1])
    expect(ayahStringSplitter("2:3  ", true, data)).toEqual([2, 3])
    expect(ayahStringSplitter("  7:26-30", true, data)).toEqual([7, [26, 30]])
    expect(ayahStringSplitter("9:5\t", true, data)).toEqual([9, 5])
  })
})

describe("stringNumberSplitter", () => {
  it("parses simple surah:ayah format", () => {
    expect(string2NumberSplitter("2:255")).toEqual({
      ayah: 255,
      ayahTo: 0,
      surahOrAyah: 2
    })
  })

  it("parses surah:ayah-ayahTo format", () => {
    expect(string2NumberSplitter("2:255-260")).toEqual({
      ayah: 255,
      ayahTo: 260,
      surahOrAyah: 2
    })
  })

  it("handles different delimiters", () => {
    expect(string2NumberSplitter("2 255")).toEqual({
      ayah: 255,
      ayahTo: 0,
      surahOrAyah: 2
    })
    expect(string2NumberSplitter("2-255")).toEqual({
      ayah: 255,
      ayahTo: 0,
      surahOrAyah: 2
    })
  })

  it("returns null for invalid input", () => {
    expect(string2NumberSplitter("invalid")).toBeNull()
    expect(string2NumberSplitter("a:b")).toBeNull()
    expect(string2NumberSplitter("")).toBeNull()
  })

  it("handles surah numbers only", () => {
    expect(string2NumberSplitter("2")).toEqual({
      ayah: 0,
      ayahTo: 0,
      surahOrAyah: 2
    })
  })

  it("handles whitespace", () => {
    expect(string2NumberSplitter(" 2:255 ")).toEqual({
      ayah: 255,
      ayahTo: 0,
      surahOrAyah: 2
    })
  })

  it("handles non-strict mode parsing", () => {
    expect(ayahStringSplitter("2 255", false, data)).toEqual([2, 255])
    expect(ayahStringSplitter("2dddd255", false, data)).toEqual([2, 255])
    expect(ayahStringSplitter("2ddd-ddd255dddd", false, data)).toEqual([2, 255])
    expect(ayahStringSplitter("2:255-260", false, data)).toEqual([2, [255, 260]])
    expect(ayahStringSplitter("2dd   ddd255dddddd260", false, data)).toEqual([2, [255, 260]])
    expect(ayahStringSplitter("1:5-", false, data)).toEqual([1, 5])
    expect(ayahStringSplitter("1:5-a", false, data)).toEqual([1, 5])
    expect(ayahStringSplitter("1:1-dd", false, data)).toEqual([1, 1])
    expect(ayahStringSplitter("1:a-5", false, data)).toEqual([1, 5])
    expect(() => ayahStringSplitter("1:-5", true, data)).toThrow()
    expect(() => ayahStringSplitter("invalid", false, data)).toThrow()
    expect(() => ayahStringSplitter("115:1", false, data)).toThrow()
    expect(() => ayahStringSplitter("1:300", false, data)).toThrow()
    expect(() => ayahStringSplitter("1:5-3", false, data)).toThrow()
  })
})

describe(string2NumberSplitterStrict, () => {
  it("parses simple surah:ayah format", () => {
    expect(string2NumberSplitterStrict("2:255")).toEqual({
      ayah: 255,
      ayahTo: Number.NaN,
      surahOrAyah: 2
    })
  })

  it("parses surah:ayah-ayahTo format", () => {
    expect(string2NumberSplitterStrict("2:255-260")).toEqual({
      ayah: 255,
      ayahTo: 260,
      surahOrAyah: 2
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
      ayah: 255,
      ayahTo: Number.NaN,
      surahOrAyah: 2
    })
  })
})
