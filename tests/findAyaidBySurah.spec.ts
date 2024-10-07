import { findAyaidBySurah, meta } from "../src";

describe("findAyaidBySurah", () => {


    it("should return correct AyahId for first ayah of first surah", () => {
        expect(findAyaidBySurah(1, 1)).toEqual(1);
    });

    it("should return correct AyahId for last ayah of first surah", () => {
        expect(findAyaidBySurah(1, 7)).toEqual(7);
    });

    it("should return correct AyahId for first ayah of second surah", () => {
        expect(findAyaidBySurah(2, 1)).toEqual(8);
    });

    it("should return correct AyahId for middle of a surah", () => {
        expect(findAyaidBySurah(3, 60)).toEqual(353);
    });

    it("should return correct AyahId for last surah", () => {
        expect(findAyaidBySurah(114, 1)).toEqual(6231);
    });

    it("should return correct AyahId for last ayah of last surah", () => {
        expect(findAyaidBySurah(114, 6)).toEqual(6236);
    });

    it("should handle edge cases", () => {
        expect(findAyaidBySurah(1, 2)).toEqual(2)
        expect(findAyaidBySurah(114, 6)).toEqual(meta.numAyas)
        expect(findAyaidBySurah(9, 51)).toEqual(1286);
        expect(findAyaidBySurah(9, 1)).toEqual(1236);
        expect(findAyaidBySurah(10, 50)).toEqual(1414);
    });

    it("should throw error for invalid surah", () => {
        expect(() => findAyaidBySurah(115, 1)).toThrow();
    });

    it("should throw error for invalid ayah", () => {
        expect(() => findAyaidBySurah(1, 8)).toThrow();
    });
});
