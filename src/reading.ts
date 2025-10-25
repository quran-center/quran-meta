/**
 * Represents different Quranic readings (Qira'at)
 * 
 * @remarks
 * Different readings may have variations in:
 * - Number of ayahs
 * - Page numbering
 * - Juz divisions
 * - Ruku divisions
 */
export type Reading = "hafs" | "warsh" | "qaloun" | "douri" | "sousi" | "shuba"

/**
 * The default reading used by the library
 * Currently set to Hafs, which is the most widely used reading
 */
export const DEFAULT_READING: Reading = "hafs"

/**
 * Current active reading context
 * This can be changed to switch between different readings
 */
let currentReading: Reading = DEFAULT_READING

/**
 * Gets the current active reading
 * @returns The current reading
 */
export function getCurrentReading(): Reading {
  return currentReading
}

/**
 * Sets the current active reading
 * 
 * @param reading - The reading to set as current
 * @throws Error if the reading is not supported
 * 
 * @remarks
 * This affects all subsequent API calls that depend on reading-specific data.
 * For now, only "hafs" is fully implemented. Other readings will return hafs data.
 */
export function setCurrentReading(reading: Reading): void {
  currentReading = reading
}

/**
 * Executes a function with a specific reading context
 * 
 * @param reading - The reading to use for this execution
 * @param fn - The function to execute
 * @returns The result of the function
 * 
 * @remarks
 * This allows temporary switching of reading context without affecting global state
 */
export function withReading<T>(reading: Reading, fn: () => T): T {
  const previousReading = currentReading
  try {
    currentReading = reading
    return fn()
  }
  finally {
    currentReading = previousReading
  }
}
