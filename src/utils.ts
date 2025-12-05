/**
 * Performs a binary search on the given array to find the index of the specified element.
 *
 * @param ar - The array to search.
 * @param el - The element to search for.
 * @param compare_fn - An optional comparison function to use for the search. Defaults to a simple numeric comparison.
 * @returns The index of the element if found, or a negative value indicating the insertion point if not found.
 */
export function binarySearch<T, X>(
  ar: Array<T>,
  el: X,
  compare_fn: (a: X, b: T) => number = (a, b) => (a as number) - (b as number)
): number {
  let m = 0
  let n = ar.length - 1
  while (m <= n) {
    const k = (n + m) >> 1
    const cmp = compare_fn(el, ar[k])
    if (cmp > 0) {
      m = k + 1
    } else if (cmp < 0) {
      n = k - 1
    } else {
      return k
    }
  }
  return -m - 1
}
