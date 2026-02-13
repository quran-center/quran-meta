import { checkHafs } from "./Hafs"
import { checkQalun } from "./Qalun"
import { checkWarsh } from "./Warsh"

// Uncomment the check you want to run

console.log("checking Hafs data...")
checkHafs()

console.log("checking Qalun data...")
checkQalun()

console.log("checking Warsh data...")
checkWarsh()
// Todo  when we have more data sources, we can add more checks

// Import DouriData from "./data/DouriData_v2-0.json"
// Import QalounData from "./data/QalounData_v2-1.json"
// Import sousiData from "./data/SousiData_v2-0.json"
// Import warshData from "./data/warshData_v2-1.json"
