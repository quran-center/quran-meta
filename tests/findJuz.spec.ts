import { findJuz } from "../src";

describe("findJuz", () => {

    it("basic", () => {
        expect(findJuz(1, 2)).toEqual(1)
        expect(findJuz(2, 1)).toEqual(1)
        expect(findJuz(3, 1)).toEqual(3)
    })

    it("should return correct juz for first ayah of first surah", () => {
        expect(findJuz(1, 1)).toEqual(1);
    });

    it("should return correct juz for first ayah of first surah", () => {
        expect(findJuz(0, 1, true)).toEqual(1);
        expect(findJuz(0, 6236, true)).toEqual(30);
    });
    it("should return correct juz for last surah", () => {
        expect(findJuz(114, 1)).toEqual(30);
    });

    it("should return correct juz for middle of Quran", () => {
        expect(findJuz(18, 1)).toEqual(15);
    });

    it("should return correct juz when ayah is not specified", () => {
        expect(findJuz(2)).toEqual(1);
    });

    it("should handle juz change within a surah", () => {
        expect(findJuz(2, 141)).toEqual(1);
        expect(findJuz(2, 142)).toEqual(2);
    });

    it("should return correct juz for last ayah of Quran", () => {
        expect(findJuz(114, 6)).toEqual(30);
    });

    it("should handle invalid surah numbers", () => {
        expect(() => findJuz(115, 1)).toThrow();
    });

    it("should handle invalid ayah numbers", () => {
        expect(() => findJuz(1, 8)).toThrow();
    });
});
