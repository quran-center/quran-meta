import { SurahList, checkValidSurah } from "../src";
import { getLineCountInSurah } from "../src/getLineCountInSurah";

describe("getAyahCountInSurah", () => {
  it("should return correct ayah count for each surah", () => {
    SurahList.forEach((surah, index) => {
      try {
        checkValidSurah(index);

        const lineCount = getLineCountInSurah(index);
        expect(lineCount).toBe(surah[4]);
      } catch (e) {
        if (!(e instanceof RangeError)) {
          throw e; // Rethrow if it's not a RangeError
        }
      }
    });
  });
});
