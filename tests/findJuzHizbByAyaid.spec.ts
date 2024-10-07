import { expect, vi } from 'vitest';
import { findJuzHizbByAyaid, meta } from '../src';
import * as module from "../src/checkValidAyahId";

describe("findJuzHizbByAyaid", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("basic", () => {
        expect(findJuzHizbByAyaid(1)).toEqual({ hizb: 1, id: 1, juz: 1 })
        expect(findJuzHizbByAyaid(32)).toEqual({ hizb: 1, id: 1, juz: 1 })
        expect(findJuzHizbByAyaid(33)).toEqual({ hizb: 2, id: 2, juz: 1 })
        expect(findJuzHizbByAyaid(148)).toEqual({ hizb: 8, id: 8, juz: 1 })
        expect(findJuzHizbByAyaid(149)).toEqual({ hizb: 1, id: 9, juz: 2 })
        expect(findJuzHizbByAyaid(meta.numAyas)).toEqual({
            hizb: 8,
            id: 240,
            juz: 30,
        })
    })

    it("should return correct JuzHizb for first ayah", () => {
        const result = findJuzHizbByAyaid(1);
        expect(result).toEqual({ juz: 1, hizb: 1, id: 1 });
    });

    it("should return correct JuzHizb for last ayah", () => {
        const result = findJuzHizbByAyaid(6236);
        expect(result).toEqual({ juz: 30, hizb: 8, id: 240 });
    });

    it("should return correct JuzHizb for middle ayah", () => {
        const result = findJuzHizbByAyaid(3000);
        expect(result).toEqual({ juz: 19, hizb: 4, id: 148 });
    });

    it("should call checkValidAyahId with correct argument", () => {
        const spy = vi.spyOn(module, "checkValidAyahId");

        findJuzHizbByAyaid(100);
        expect(spy).toHaveBeenCalledWith(100);
    });

    it("should handle edge case when ayaId is at hizb boundary", () => {

        const result = findJuzHizbByAyaid(148);
        expect(result).toEqual({ juz: 1, hizb: 8, id: 8 });
    });
});
