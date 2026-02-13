/**
 * This script checks data in this library against other sources
 */
// Pnpx jiti data-check

import { checkKFQCWarsh } from "./checkKFQC-Warsh"

console.log(`Running data-checks against various data sources`)

export const checkWarsh = () => {
  checkKFQCWarsh()
}

console.log(`Warsh Data checks completed.`)
