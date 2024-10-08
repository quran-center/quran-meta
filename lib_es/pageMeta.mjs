import { meta } from "./const.mjs";
import { findSurahByAyaid } from "./findSurahByAyaid.mjs";
import { PageList } from "./lists/pageList.mjs";
export function pageMeta(pageNum) {
  if (pageNum < 1 || pageNum > meta.numPages)
    throw new RangeError("pagenum must be between 1 and " + meta.numPages);
  const [curPage, nextPage] = [
    PageList[pageNum],
    PageList[pageNum + 1]
  ];
  return {
    pageNum,
    first: findSurahByAyaid(curPage),
    last: [...findSurahByAyaid(nextPage - 1)]
  };
}
