import { findJuzByAyaid } from "../src";

describe("findJuzByAyaid", () => {
    it("basic", () => {
        expect(findJuzByAyaid(2)).toEqual(1)
        expect(findJuzByAyaid(100)).toEqual(1)
        expect(findJuzByAyaid(200)).toEqual(2)
      })

  it("should return correct Juz for first ayah", () => {
    expect(findJuzByAyaid(1)).toBe(1);
  });

  it("should return correct Juz for last ayah", () => {
    expect(findJuzByAyaid(6236)).toBe(30);
  });

  it("should return correct Juz for ayah at Juz boundary", () => {
    expect(findJuzByAyaid(148)).toBe(1);
    expect(findJuzByAyaid(149)).toBe(2);
  });

  it("should return correct Juz for middle ayah", () => {
    expect(findJuzByAyaid(3000)).toBe(19);
  });

  it("should throw error for invalid ayah id", () => {
    expect(() => findJuzByAyaid(0)).toThrow();
    expect(() => findJuzByAyaid(6237)).toThrow();
  });

  it("should handle edge cases", () => {
    expect(findJuzByAyaid(2)).toBe(1);
    expect(findJuzByAyaid(6235)).toBe(30);
  });
});
