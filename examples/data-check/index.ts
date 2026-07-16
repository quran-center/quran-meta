import { checkDouri } from "./Douri"
import { checkHafs } from "./Hafs"
import { checkQalun } from "./Qalun"
import { checkShuba } from "./Shuba"
import { checkSousi } from "./Sousi"
import { checkWarsh } from "./Warsh"

/***
 * run with `pnpm verify`
 */

// Comment out the checks you don't want to run

console.log("checking Hafs data...")
checkHafs()

console.log("checking Qalun data...")
checkQalun()

console.log("checking Warsh data...")
checkWarsh()

console.log("checking Douri data...")
checkDouri()

console.log("checking Sousi data...")
checkSousi()

console.log("checking Shuba data...")
checkShuba()

// To cross-check all riwaya lists against the quranpedia data dumps
// (or generate missing ones), run `pnpm verify:lists` - see generate-riwayah-lists.ts
