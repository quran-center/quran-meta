import { getRubAlHizbMetaByAyahId } from "../src"
import { HafsLists } from "../src/lists/HafsLists"

describe(getRubAlHizbMetaByAyahId, () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("should return correct RubAlHizbMeta for first ayah", () => {
    const result = getRubAlHizbMetaByAyahId(1, HafsLists)
    expect(result).toEqual({
      first: [1, 1],
      firstAyahId: 1,
      hizbId: 1,
      juz: 1,
      juzPart: 1,
      last: [2, 25],
      lastAyahId: 32,
      rubAlHizbId: 1
    })
  })

  it("should return correct RubAlHizbMeta for middle ayah", () => {
    const result = getRubAlHizbMetaByAyahId(81, HafsLists)
    expect(result).toEqual({
      first: [2, 60],
      firstAyahId: 67,
      hizbId: 1,
      juz: 1,
      juzPart: 4,
      last: [2, 74],
      lastAyahId: 81,
      rubAlHizbId: 4
    })
  })

  it("should return correct RubAlHizbMeta for last ayah", () => {
    const result = getRubAlHizbMetaByAyahId(6236, HafsLists)
    expect(result).toEqual({
      first: [100, 9],
      firstAyahId: 6155,
      hizbId: 60,
      juz: 30,
      juzPart: 8,
      last: [114, 6],
      lastAyahId: 6236,
      rubAlHizbId: 240
    })
  })
})
