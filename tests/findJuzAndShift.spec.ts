import { meta } from "../src";
import { findJuzAndShift } from "../src/findJuzAndShift";

describe("findJuzAndShift", () => {

    it("basic", () => {
        expect(findJuzAndShift(1, 1)).toEqual({
            juz: 1,
            leftAyahId: 1,
            ayahsBetweenJuzSurah: 0,
        })
        expect(findJuzAndShift(1, 1, true)).toEqual({
            juz: 1,
            leftAyahId: 1,
            ayahsBetweenJuzSurah: 0,
        })

        expect(findJuzAndShift(1, 2)).toEqual({
            juz: 1,
            leftAyahId: 1,
            ayahsBetweenJuzSurah: 0,
        })

        expect(findJuzAndShift(2, 141)).toEqual({
            juz: 1,
            leftAyahId: 1,
            ayahsBetweenJuzSurah: 7,
        })

        expect(findJuzAndShift(2, 142)).toEqual({
            juz: 2,
            leftAyahId: 149,
            ayahsBetweenJuzSurah: -141,
        })
        expect(findJuzAndShift(2, 143)).toEqual({
            juz: 2,
            leftAyahId: 149,
            ayahsBetweenJuzSurah: -141,
        })
        expect(findJuzAndShift(2, 150)).toEqual({
            juz: 2,
            leftAyahId: 149,
            ayahsBetweenJuzSurah: -141,
        })

        expect(findJuzAndShift(2, 252)).toEqual({
            juz: 2,
            leftAyahId: 149,
            ayahsBetweenJuzSurah: -141,
        })

        expect(findJuzAndShift(2, 253)).toEqual({
            juz: 3,
            leftAyahId: 260,
            ayahsBetweenJuzSurah: -252,
        })

        expect(findJuzAndShift(3, 1)).toEqual({
            juz: 3,
            leftAyahId: 260,
            ayahsBetweenJuzSurah: 34,
        })
    })

    it("should return correct juz, leftAyahId, and ayahsBetweenJuzSurah for valid input in surah mode", () => {
        const result = findJuzAndShift(2, 1);
        expect(result).toEqual({
            juz: 1,
            leftAyahId: 1,
            ayahsBetweenJuzSurah: 7,
        });
    });

    it("should return correct juz, leftAyahId, and ayahsBetweenJuzSurah for valid input in ayah mode", () => {

        expect(findJuzAndShift(0, 8, true)).toEqual({
            juz: 1,
            leftAyahId: 1,
            ayahsBetweenJuzSurah: 7,
        });

        expect(findJuzAndShift(0, 10, true)).toEqual({
            juz: 1,
            leftAyahId: 1,
            ayahsBetweenJuzSurah: 7,
        });
    });

    it("should handle edge case at the end of a juz", () => {
        const result = findJuzAndShift(2, 141);
        expect(result.juz).toBe(1);
    });

    it("should handle edge case at the start of a juz", () => {
        const result = findJuzAndShift(2, 142);
        expect(result.juz).toBe(2);
    });

    it("should throw RangeError for invalid surah in surah mode", () => {
        expect(() => findJuzAndShift(115, 1)).toThrow(RangeError);
    });

    it("should throw RangeError for invalid ayah in ayah mode", () => {
        expect(() => findJuzAndShift(0, meta.numAyas + 1, true)).toThrow(RangeError);
    });

    it("should ignore surah number if yahmmode is true", () => {
        const result = findJuzAndShift(-1, 1, true);
        expect(result.juz).toBeGreaterThan(0);
        expect(result.juz).toBeLessThanOrEqual(30);
    });
});
