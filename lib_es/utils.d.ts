/**
 * Performs a binary search on the given array to find the index of the specified element.
 *
 * @param ar - The array to search.
 * @param el - The element to search for.
 * @param compare_fn - An optional comparison function to use for the search. Defaults to a simple numeric comparison.
 * @returns The index of the element if found, or a negative value indicating the insertion point if not found.
 */
export declare function binarySearch(ar: Array<number>, el: number, compare_fn?: (a: number, b: number) => number): number;
