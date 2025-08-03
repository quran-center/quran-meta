/**
 * This script checks data in this library against other sources
 */
// pnpx jiti data-check


import { checkQuranApi } from "./checkQuranApi"
import { checkKFQC } from "./checkKFQC"
import { checkKFQCSmart } from "./checkKFQCSmart"
import { checkTanzil } from "./checkTanzil"
import { checkQuranCloud } from "./checkQuranCloud"



console.log(`Running data-checks against various data sources`)








checkQuranApi()
checkTanzil()
checkQuranCloud()
checkKFQCSmart()
checkKFQC()