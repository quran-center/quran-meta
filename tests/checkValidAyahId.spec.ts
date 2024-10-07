import { checkValidAyahId, meta } from "../src";

describe("checkValidAyahId", () => {
  it("should return true for valid ayah id", () => {
    expect(checkValidAyahId(1)).toBe(true);
    expect(checkValidAyahId(meta.numAyas)).toBe(true);
    expect(checkValidAyahId(Math.floor(meta.numAyas / 2))).toBe(true);
  });

  it("should throw RangeError for ayah id less than 1", () => {
    expect(() => checkValidAyahId(0)).toThrow(RangeError);
    expect(() => checkValidAyahId(-1)).toThrow(RangeError);
  });

  it("should throw RangeError for ayah id greater than total number of ayas", () => {
    expect(() => checkValidAyahId(meta.numAyas + 1)).toThrow(RangeError);
    expect(() => checkValidAyahId(Number.MAX_SAFE_INTEGER)).toThrow(RangeError);
  });

//   it("should throw RangeError for non-integer ayah id", () => {
//     expect(() => checkValidAyahId(1.5)).toThrow(RangeError);
//     expect(() => checkValidAyahId(2.99)).toThrow(RangeError);
//   });

//   it("should throw TypeError for non-number ayah id", () => {
//     expect(() => checkValidAyahId("1" as any)).toThrow(TypeError);
//     expect(() => checkValidAyahId(null as any)).toThrow(TypeError);
//     expect(() => checkValidAyahId(undefined as any)).toThrow(TypeError);
//   });
});
