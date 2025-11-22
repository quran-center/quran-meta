/**
 * This script checks data in this library against other sources
 */
// pnpx jiti data-check

import { checkQuranApi } from "./checkQuranApi"
import { checkKFQCHafs } from "./checkKFQC-hafs"
import { checkKFQCShuba } from "./checkKFQC-shuba"
import { checkKFQCSmart } from "./checkKFQC-smart"
import { checkTanzil } from "./checkTanzil"
import { checkQuranCloud } from "./checkQuranCloud"

console.log(`Running data-checks against various data sources`)

export const checkHafs = () => {
  checkQuranApi()
  checkTanzil()
  checkQuranCloud()
  checkKFQCShuba()
  checkKFQCSmart()
  checkKFQCHafs()
}

console.log(`Hafs Data checks completed.`)
