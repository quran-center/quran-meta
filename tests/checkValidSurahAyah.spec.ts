import { checkValidSurahAyah } from "../src";

describe("checkValidSurahAyah", () => {
  it("should return true for valid surah and ayah", () => {
    expect(checkValidSurahAyah(1, 1)).toBe(true);
    expect(checkValidSurahAyah(114, 6)).toBe(true);
  });

  it("should return false for invalid surah", () => {
    expect(checkValidSurahAyah(0, 1, true)).toBe(false);
    expect(checkValidSurahAyah(115, 1, true)).toBe(false);
  });

  it("should return false for invalid ayah when checkOnly is true", () => {
    expect(checkValidSurahAyah(1, 0, true)).toBe(false);
    expect(checkValidSurahAyah(1, 8, true)).toBe(false);
  });

  it("should throw RangeError for invalid ayah when checkOnly is false", () => {
    expect(() => checkValidSurahAyah(1, 0)).toThrow(RangeError);
    expect(() => checkValidSurahAyah(1, 8)).toThrow(RangeError);
  });

  it("should throw RangeError with correct message for invalid ayah", () => {
    expect(() => checkValidSurahAyah(1, 8)).toThrow("Ayah must be between 1 and 7");
    expect(() => checkValidSurahAyah(2, 287)).toThrow("Ayah must be between 1 and 286");
  });

  it("should handle edge cases", () => {
    expect(checkValidSurahAyah(1, 7)).toBe(true);
    expect(checkValidSurahAyah(2, 286)).toBe(true);
    expect(checkValidSurahAyah(114, 1)).toBe(true);
  });
});
