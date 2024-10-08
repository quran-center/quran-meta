import { meta } from "./const"
import { findSurahByAyaid } from "./findSurahByAyaid"
import { PageList } from "./lists/pageList"
import { AyahId, Page, PageMeta } from "./types"

/**
 * Retrieves metadata for a specific page of the Quran.
 *
 * @param pageNum - The page number to retrieve metadata for (1-604)
 * @returns An object containing the page number, first ayah, and last ayah on the page
 * @throws RangeError If the page number is not between 1 and 604
 */
export function pageMeta(pageNum: Page): PageMeta {
  // todo rename to getPageMeta in next major version
  if (pageNum < 1 || pageNum > meta.numPages)
    throw new RangeError("pagenum must be between 1 and " + meta.numPages)

  const [curPage, nextPage]: [AyahId, AyahId] = [
    PageList[pageNum],
    PageList[pageNum + 1]
  ]

  return {
    pageNum,
    first: findSurahByAyaid(curPage),
    last: [...findSurahByAyaid(nextPage - 1)]
  }
}
