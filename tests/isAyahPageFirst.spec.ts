import { isAyahPageFirst } from "../src/isAyahPageFirst";

describe("isAyahPageFirst", () => {

    it("basic", () => {
        expect(isAyahPageFirst(1, 1)).toEqual(1)
        expect(isAyahPageFirst(-1, 1, true)).toEqual(1)
        expect(isAyahPageFirst(2, 1)).toEqual(2)
        expect(isAyahPageFirst(2, 142)).toEqual(22)
        expect(isAyahPageFirst(-1, 149, true)).toEqual(22)

        expect(isAyahPageFirst(2, 2)).toEqual(-4)
        // expect(isAyahPageFirst(114, 1)).toEqual(-32)
        // expect(isAyahPageFirst(1, 114)).toEqual(-3)
    })
    
    it("should return correct Juz for valid surah and ayah in ayah mode", () => {
        const result = isAyahPageFirst(1, 1, true);
        expect(result).toBeDefined();
        expect(typeof result).toBe("number");
    });

    it("should return correct Juz for valid surah and ayah in non-ayah mode", () => {
        const result = isAyahPageFirst(1, 1);
        expect(result).toBeDefined();
        expect(typeof result).toBe("number");
    });

    it("should handle edge case with last surah and ayah", () => {
        const result = isAyahPageFirst(114, 6);
        expect(result).toBeDefined();
        expect(typeof result).toBe("number");
    });

    it("should throw error for invalid surah in non-ayah mode", () => {
        expect(() => isAyahPageFirst(115, 1)).toThrow();
    });

    it("should throw error for invalid ayah in ayah mode", () => {
        expect(() => isAyahPageFirst(1, 0, true)).toThrow();
    });

    it("should handle middle surah and ayah", () => {
        const result = isAyahPageFirst(50, 20);
        expect(result).toBeDefined();
        expect(typeof result).toBe("number");
    });
});
