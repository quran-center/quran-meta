import type { Riwayas, allListsNames } from "./lists/types";
import { riwayahs } from "./lists/index";
import { findAyahIdBySurah } from "./findAyahIdBySurah";
import { findJuz } from "./findJuz";
import { findJuzAndShift, findJuzAndShiftByAyahId } from "./findJuzAndShift";
import { findJuzByAyahId } from "./findJuzByAyahId";
import { findJuzMetaBySurah } from "./findJuzMetaBySurah";
import { findManzil } from "./findManzil";
import { findManzilByAyahId } from "./findManzilByAyahId";
import { findPage } from "./findPage";
import { findPagebyAyahId } from "./findPagebyAyahId";
import { findRangeAroundAyah } from "./findRangeAroundAyah";
import { findRangeAroundSurahAyah } from "./findRangeAroundSurahAyah";
import { findRubAlHizb } from "./findRubAlHizb";
import { findRubAlHizbByAyahId } from "./findRubAlHizbByAyahId";
import { findRukuByAyahId } from "./findRukuByAyahId";
import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId";
import { findSurahByAyahId } from "./findSurahByAyahId";
import { findThumunAlHizb } from "./findThumunAlHizb";
import { findThumunAlHizbByAyahId } from "./findThumunAlHizbByAyahId";
import { getAyahCountInSurah } from "./getAyahCountInSurah";
import { getAyahMeta } from "./getAyahMeta";
import { getAyahMetasForSurah } from "./getAyahMetasForSurah";
import { getJuzMeta } from "./getJuzMeta";
import { generatePartBlocks, type PartType } from "./generatePartBlocks";
import { getManzilMeta } from "./getManzilMeta";
import { getPageMeta } from "./getPageMeta";
import { getRukuMeta } from "./getRukuMeta";
import { getRubAlHizb } from "./getRubAlHizb";
import { getRubAlHizbMeta } from "./getRubAlHizbMeta";
import { getRubAlHizbMetaByAyahId } from "./getRubAlHizbMetaByAyahId";
import { getRubAlHizbByAyahId } from "./getRubAlHizbByAyahId";
import { getSurahMeta } from "./getSurahMeta";
import { getThumunAlHizb } from "./getThumunAlHizb";
import { getThumunAlHizbByAyahId } from "./getThumunAlHizbByAyahId";
import { getThumunAlHizbMeta } from "./getThumunAlHizbMeta";
import { getThumunAlHizbMetaByAyahId } from "./getThumunAlHizbMetaByAyahId";
import { isAyahJuzFirst } from "./isAyahJuzFirst";
import { isAyahPageFirst } from "./isAyahPageFirst";
import { isSurahAyahJuzFirst } from "./isSurahAyahJuzFirst";
import { isSurahAyahPageFirst } from "./isSurahAyahPageFirst";
import { nextAyah } from "./nextAyah";
import { prevAyah } from "./prevAyah";

// Map functions to their required lists
const functionListMap = {
  // Always available (no list requirement)
  findAyahIdBySurah: null,
  findSurahAyahByAyahId: null,
  findSurahByAyahId: null,
  getAyahCountInSurah: null,
  getAyahMeta: null,
  getAyahMetasForSurah: null,
  getSurahMeta: null,
  nextAyah: null,
  prevAyah: null,
  findRangeAroundAyah: null,
  findRangeAroundSurahAyah: null,
  generatePartBlocks: null,

  // Juz functions
  findJuz: "JuzList",
  findJuzAndShift: "JuzList",
  findJuzAndShiftByAyahId: "JuzList",
  findJuzByAyahId: "JuzList",
  findJuzMetaBySurah: "JuzList",
  getJuzMeta: "JuzList",
  isAyahJuzFirst: "JuzList",
  isSurahAyahJuzFirst: "JuzList",

  // Manzil functions
  findManzil: "ManzilList",
  findManzilByAyahId: "ManzilList",
  getManzilMeta: "ManzilList",

  // Page functions
  findPage: "PageList",
  findPagebyAyahId: "PageList",
  getPageMeta: "PageList",
  isAyahPageFirst: "PageList",
  isSurahAyahPageFirst: "PageList",

  // RubAlHizb functions
  findRubAlHizb: "HizbQuarterList",
  findRubAlHizbByAyahId: "HizbQuarterList",
  getRubAlHizb: "HizbQuarterList",
  getRubAlHizbMeta: "HizbQuarterList",
  getRubAlHizbMetaByAyahId: "HizbQuarterList",
  getRubAlHizbByAyahId: "HizbQuarterList",

  // ThumunAlHizb functions
  findThumunAlHizb: "HizbEighthList",
  findThumunAlHizbByAyahId: "HizbEighthList",
  getThumunAlHizb: "HizbEighthList",
  getThumunAlHizbByAyahId: "HizbEighthList",
  getThumunAlHizbMeta: "HizbEighthList",
  getThumunAlHizbMetaByAyahId: "HizbEighthList",
  // Ruku functions
  findRukuByAyahId: "RukuList",
  getRukuMeta: "RukuList",
} as const;

// Import all functions in one place
const allFunctions = {
  findAyahIdBySurah,
  findSurahAyahByAyahId,
  findSurahByAyahId,
  getAyahCountInSurah,
  getAyahMeta,
  getAyahMetasForSurah,
  getSurahMeta,
  nextAyah,
  prevAyah,
  findRangeAroundAyah,
  findRangeAroundSurahAyah,
  findJuz,
  findJuzAndShift,
  findJuzAndShiftByAyahId,
  findJuzByAyahId,
  findJuzMetaBySurah,
  getJuzMeta,
  isAyahJuzFirst,
  isSurahAyahJuzFirst,
  findManzil,
  findManzilByAyahId,
  getManzilMeta,
  findPage,
  findPagebyAyahId,
  getPageMeta,
  isAyahPageFirst,
  isSurahAyahPageFirst,
  findRubAlHizb,
  findRubAlHizbByAyahId,
  getRubAlHizb,
  getRubAlHizbMeta,
  getRubAlHizbMetaByAyahId,
  getRubAlHizbByAyahId,
  generatePartBlocks,
  findRukuByAyahId,
  getRukuMeta,
  findThumunAlHizb,
  findThumunAlHizbByAyahId,
  getThumunAlHizb,
  getThumunAlHizbByAyahId,
  getThumunAlHizbMeta,
  getThumunAlHizbMetaByAyahId,
};
type FunctionListMap = typeof functionListMap;
type AllFunctions = typeof allFunctions;

// Generate the conditional API type
type QuranPackageAPI<R extends keyof Riwayas> = {
  [K in keyof FunctionListMap as FunctionListMap[K] extends allListsNames
    ? FunctionListMap[K] extends keyof Riwayas[R]
      ? K
      : never
    : K]: K extends keyof AllFunctions ? AllFunctions[K] : never;
};

// Helper type to add default riwaya parameter
type WithDefaultRiwaya<
  F extends (...args: any[]) => any,
  R extends keyof Riwayas
> = F extends (...args: infer Args) => infer Return
  ? Args extends [...infer Rest, infer Last]
    ? (...args: [...Rest, R?]) => Return
    : F
  : F;

export type QuranPackageConfig<R extends keyof Riwayas = "Hafs"> = {
  riwaya?: R;
};

export function quranMeta<R extends keyof Riwayas = "Hafs">(
  config?: QuranPackageConfig<R>
): QuranPackageAPI<R> {
  const defaultRiwaya = (config?.riwaya ?? "Hafs") as R;

  //Wrap the function with the default riwaya parameter
  const wrap = <F extends (...args: any[]) => any>(
    fn: F
  ): WithDefaultRiwaya<F, R> => {
    const paramCount = fn.length;

    return ((...args: any[]) => {
      const finalArgs = [...args];

      if (
        finalArgs.length < paramCount ||
        finalArgs[paramCount - 1] === undefined
      ) {
        finalArgs[paramCount - 1] = defaultRiwaya;
      }

      return fn(...finalArgs);
    }) as WithDefaultRiwaya<F, R>;
  };

  const availableLists = Object.keys(
    riwayahs[defaultRiwaya]
  ) as allListsNames[];

  const api: any = {};

  // Generate API by iterating through the function map
  for (const [functionName, requiredList] of Object.entries(functionListMap)) {
    // Include function if:
    // 1. It requires no list (requiredList is null), OR
    // 2. The required list is available in this riwaya
    if (
      requiredList === null ||
      availableLists.includes(requiredList as allListsNames)
    ) {
      const fn = allFunctions[functionName as keyof AllFunctions];
      if (fn) {
        api[functionName] = wrap(fn);
      }
    }
  }

  return api as QuranPackageAPI<R>;
}

//Usage example
const quran = quranMeta({ riwaya: "Hafs" }).generatePartBlocks(
  "Hafs",
  "rubAlHizb"
);
