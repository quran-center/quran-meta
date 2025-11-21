import { checkHafs } from "./Hafs"
import { checkQalun } from "./Qalun"

// Uncomment the check you want to run

console.log("checking Hafs data...");
checkHafs()
 

console.log("checking Qalun data...");
checkQalun()


// todo  when we have more data sources, we can add more checks

// import DouriData from "./data/DouriData_v2-0.json"
// import QalounData from "./data/QalounData_v2-1.json"
// import sousiData from "./data/SousiData_v2-0.json"
// import warshData from "./data/warshData_v2-1.json"