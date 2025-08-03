/**
 * This script checks data in this library against other sources
 */
// pnpx jiti data-check


import { checkQuranApi } from "./checkQuranApi"
import {  checkKFQCHafs } from "./checkKFQC-hafs"
import {  checkKFQCShuba } from "./checkKFQC-shuba"
import { checkKFQCSmart } from "./checkKFQC-smart"
import { checkTanzil } from "./checkTanzil"
import { checkQuranCloud } from "./checkQuranCloud"



//todo  when we have more data sources, we can add more checks

// import DouriData from "./data/DouriData_v2-0.json"
// import QalounData from "./data/QalounData_v2-1.json"
// import sousiData from "./data/SousiData_v2-0.json"
// import warshData from "./data/warshData_v2-1.json"
  

console.log(`Running data-checks against various data sources`)




checkQuranApi()
checkTanzil()
checkQuranCloud()
checkKFQCShuba()
checkKFQCSmart()
checkKFQCHafs()

console.log(`Data checks completed.`)