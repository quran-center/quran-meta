import { meta } from "./const";
import { findSurahByAyaid } from "./findSurahByAyaid";
import { PageList } from "./lists/pageList";
/**
 * Retrieves the page metadata for the specified page number.
 *
 * @param pageNum - The page number to retrieve metadata for.
 * @returns The page metadata, including the first and last ayah IDs on the page.
 * @throws {RangeError} If the page number is out of the valid range (1 to `meta.numPages`).
 */
export function pageMeta(pageNum) {
    // todo rename to getPageMeta in next major version
    if (pageNum < 1 || pageNum > meta.numPages)
        throw new RangeError("pagenum must be between 1 and " + meta.numPages);
    const [curPage, nextPage] = [
        PageList[pageNum],
        PageList[pageNum + 1],
    ];
    return {
        pageNum,
        first: findSurahByAyaid(curPage),
        last: [...findSurahByAyaid(nextPage - 1)],
    };
}
//# sourceMappingURL=pageMeta.js.map