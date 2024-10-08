import { meta, pageMeta } from "../src"

describe("pageMeta", () => {
  it("should return correct metadata for the first page", () => {
    const result = pageMeta(1)
    expect(result.pageNum).toBe(1)
    expect(result.first).toEqual([1, 1])
    expect(result.last).toEqual([1, 7])
  })

  it("should return correct metadata for the last page", () => {
    const result = pageMeta(meta.numPages)
    expect(result.pageNum).toBe(meta.numPages)
    expect(result.first).toEqual([112, 1])
    expect(result.last).toEqual([114, 6])
  })

  it("should return correct metadata for a middle page", () => {
    const result = pageMeta(300)
    expect(result.pageNum).toBe(300)
    expect(result.first).toEqual([18, 54])
    expect(result.last).toEqual([18, 61])
  })

  it("should throw RangeError for page number below 1", () => {
    expect(() => pageMeta(0)).toThrow(RangeError)
  })

  it("should throw RangeError for page number above numPages", () => {
    expect(() => pageMeta(meta.numPages + 1)).toThrow(RangeError)
  })
})
