import { getRubAlHizbMetaByAyahId } from "../src"

describe("getRubAlHizbMetaByAyahId", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("should return correct RubAlHizbMeta for first ayah", () => {
    const result = getRubAlHizbMetaByAyahId(1)
    expect(result).toEqual({
      hizbId: 1,
      juz: 1,
      juzPart: 1,
      rubAlHizbId: 1,
      first: [
        1,
        1
      ],
      firstAyahId: 1,
      last: [
        2,
        25
      ],
      lastAyahId: 32
    })
  })

  it("should return correct RubAlHizbMeta for middle ayah", () => {
    const result = getRubAlHizbMetaByAyahId(81)
    expect(result).toEqual({
      hizbId: 1,
      juz: 1,
      juzPart: 4,
      rubAlHizbId: 4,
      first: [
        2,
        60
      ],
      firstAyahId: 67,
      last: [
        2,
        74
      ],
      lastAyahId: 81
    })
  })

  it("should return correct RubAlHizbMeta for last ayah", () => {
    const result = getRubAlHizbMetaByAyahId(6236)
    expect(result).toEqual({
      hizbId: 60,
      juz: 30,
      juzPart: 8,
      rubAlHizbId: 240,
      first: [
        100,
        9
      ],
      firstAyahId: 6155,
      last: [
        114,
        6
      ],
      lastAyahId: 6236
    })
  })
})
