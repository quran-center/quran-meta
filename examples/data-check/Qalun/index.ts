/**
 * This script checks data in this library against other sources
 */
// Pnpx jiti data-check

import { checkKFQCQalun } from "./checkKFQC-Qalun"

console.log(`Running data-checks against various data sources`)

export const checkQalun = () => {
  checkKFQCQalun()
}

console.log(`Qalun Data checks completed.`)
