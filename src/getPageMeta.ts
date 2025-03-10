import { findSurahAyahByAyahId } from "./findSurahAyahByAyahId"
import { PageList } from "./lists/pageList"
import { AyahId, Page, PageMeta } from "./types"
import { checkValidPage } from "./validation"

/**
 * Retrieves metadata for a specific page of the Quran.
 *
 * @param pageNum - The page number to retrieve metadata for (1-604)
 * @returns {@link PageMeta} An object containing the page number, first ayah, and last ayah on the page
 * @throws {@link RangeError} If the page number is not between 1 and 604
 */
export function getPageMeta(pageNum: Page): PageMeta {
  checkValidPage(pageNum)

  const [firstAyahId, nextPage]: [AyahId, AyahId] = [
    PageList[pageNum],
    PageList[pageNum + 1]
  ]
  const lastAyahId = nextPage - 1

  return {
    pageNum,
    firstAyahId,
    lastAyahId,
    first: findSurahAyahByAyahId(firstAyahId),
    last: findSurahAyahByAyahId(lastAyahId)
  }
}
