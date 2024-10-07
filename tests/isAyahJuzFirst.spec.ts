import { isAyahJuzFirst } from "../src/isAyahJuzFirst";

describe("isAyahJuzFirst", () => {

    it("basic", () => {
        expect(isAyahJuzFirst(1, 1)).toEqual(1)
        expect(isAyahJuzFirst(-1, 1, true)).toEqual(1)
        expect(isAyahJuzFirst(2, 142)).toEqual(2)
        expect(isAyahJuzFirst(-1, 149, true)).toEqual(2)

        expect(isAyahJuzFirst(2, 1)).toEqual(-3)
        expect(isAyahJuzFirst(114, 1)).toEqual(-32)
        // expect(isAyahJuzFirst(1, 114)).toEqual(-3)
    })

    it("should return correct Juz for the first ayah of a Juz", () => {
        expect(isAyahJuzFirst(2, 142)).toBe(2);
        expect(isAyahJuzFirst(4, 1)).toBeLessThan(0);
        expect(isAyahJuzFirst(6, 111)).toBe(8);
    });

    it("should return correct Juz for non-first ayah of a Juz", () => {
        expect(isAyahJuzFirst(2, 143)).toBeLessThan(0);
        expect(isAyahJuzFirst(4, 2)).toBeLessThan(0);
        expect(isAyahJuzFirst(6, 112)).toBeLessThan(0);
    });

    it("should handle ayahMode correctly", () => {
        expect(isAyahJuzFirst(0, 2142, true)).toBeLessThan(0);
        expect(isAyahJuzFirst(0, 4001, true)).toBeLessThan(0);
        expect(isAyahJuzFirst(0, 5673, true)).toBe(30);
    });

    it("should throw an error for invalid surah", () => {
        expect(() => isAyahJuzFirst(0, 1)).toThrow();
        expect(() => isAyahJuzFirst(115, 1)).toThrow();
    });

    it("should throw an error for invalid ayah", () => {
        expect(() => isAyahJuzFirst(1, 0)).toThrow();
        expect(() => isAyahJuzFirst(1, 8)).toThrow();
    });

    it("should handle edge cases", () => {
        expect(isAyahJuzFirst(1, 1)).toBe(1);
        expect(isAyahJuzFirst(114, 6)).toBeLessThan(0);
    });
});
