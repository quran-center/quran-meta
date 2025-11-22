/**
 * This script checks data in this library against other sources
 */
// pnpx jiti data-check

import { checkKFQCWarsh } from "./checkKFQC-Warsh"
import "../generate-riwayah"

console.log(`Running data-checks against various data sources`)

export const checkWarsh = () => {
  checkKFQCWarsh()
}

console.log(`Warsh Data checks completed.`)
