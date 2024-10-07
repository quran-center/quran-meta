import { Page, PageMeta } from "./types";
/**
 * Retrieves the page metadata for the specified page number.
 *
 * @param pageNum - The page number to retrieve metadata for.
 * @returns The page metadata, including the first and last ayah IDs on the page.
 * @throws {RangeError} If the page number is out of the valid range (1 to `meta.numPages`).
 */
export declare function pageMeta(pageNum: Page): PageMeta;
