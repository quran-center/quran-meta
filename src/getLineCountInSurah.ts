import { meta } from "./const";
import { findPagebyAyahId } from "./findPagebyAyahId";
import { getSurahMeta } from "./getSurahMeta";
import { LineList } from "./lists/lineList";
import { Line, Page, Surah, SurahMeta } from "./types";

/**
 * Get the number of lines in the specified surah.
 * @param surah - The surah number.
 * @returns The number of lines in the specified surah.
 */
export function getLineCountInSurah(surah: Surah): Line {
  const surahMeta: SurahMeta = getSurahMeta(surah);
  const [startLineInPage, endLineInPage] = LineList[surah];

  const firstPage: Page = findPagebyAyahId(surahMeta.firstAyahId);
  const lastPage: Page = findPagebyAyahId(surahMeta.lastAyahId);

  if (firstPage === lastPage) {
    return endLineInPage - startLineInPage + 1;
  }

  // The first and second page are special cases where there are only 8 lines.
  const firstPageLines = (firstPage === 2 ? 8 : meta.numLinesPerPage) - startLineInPage + 1;
  const lastPageLines = endLineInPage;

  if (firstPage + 1 === lastPage) {
    return firstPageLines + lastPageLines;
  }

  const middlePages = (lastPage - firstPage - 1) * meta.numLinesPerPage;

  return firstPageLines + middlePages + lastPageLines;
}
