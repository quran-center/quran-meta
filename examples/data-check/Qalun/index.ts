/**
 * This script checks data in this library against other sources
 */
// pnpx jiti data-check


import {  checkKFQCQalun } from "./checkKFQC-Qalun"




//todo  when we have more data sources, we can add more checks

// import DouriData from "./data/DouriData_v2-0.json"
// import QalounData from "./data/QalounData_v2-1.json"
// import sousiData from "./data/SousiData_v2-0.json"
// import warshData from "./data/warshData_v2-1.json"
  

console.log(`Running data-checks against various data sources`)


export const checkQalun = ()=>{
checkKFQCQalun()
}



console.log(`Qalun Data checks completed.`)