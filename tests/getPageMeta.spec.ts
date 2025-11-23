import type { Page } from "../src"
import { getPageMeta } from "../src"
import { HafsLists, HafsMeta } from "../src/lists/aHafsLists"

describe("pageMeta", () => {
  it("should return correct metadata for the first page", () => {
    const result = getPageMeta(1, HafsLists)
    expect(result.pageNum).toBe(1)
    expect(result.first).toEqual([1, 1])
    expect(result.last).toEqual([1, 7])
  })

  it("should return correct metadata for the last page", () => {
    const result = getPageMeta(HafsMeta.numPages as Page, HafsLists)
    expect(result.pageNum).toBe(HafsMeta.numPages)
    expect(result.first).toEqual([112, 1])
    expect(result.last).toEqual([114, 6])
  })

  it("should return correct metadata for a middle page", () => {
    const result = getPageMeta(300, HafsLists)
    expect(result.pageNum).toBe(300)
    expect(result.first).toEqual([18, 54])
    expect(result.last).toEqual([18, 61])
  })

  it("should throw RangeError for page number below 1", () => {
    expect(() => getPageMeta(0, HafsLists)).toThrow(RangeError)
  })

  it("should throw RangeError for page number above numPages", () => {
    expect(() => getPageMeta(HafsMeta.numPages + 1, HafsLists)).toThrow(RangeError)
  })
})
