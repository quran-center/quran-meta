/**
 * Compares the lists of two riwayas narrated from the same qari.
 *
 * KFQC does not publish Bazzi and Qunbul (both from Ibn Kathir), so there is no second
 * independent source for them. What can be checked is that the two riwayas, generated
 * from separate quranpedia dumps, agree with each other: they share the Makki ayah
 * count, so every boundary list must be identical. The same holds for Douri/Sousi
 * (Abu 'Amr) and Warsh/Qalun (Nafi').
 */

import { getListsOfRiwaya } from "../../src/lists"
import type { AllListsNames, RiwayaName } from "../../src/lists/types"

const lists: Exclude<AllListsNames, "HizbEighthList">[] = [
  "SurahList",
  "JuzList",
  "HizbQuarterList",
  "ManzilList",
  "PageList",
  "RukuList",
  "SajdaList"
]

export function checkSiblings(a: RiwayaName, b: RiwayaName): number {
  const la = getListsOfRiwaya(a)
  const lb = getListsOfRiwaya(b)
  let problems = 0
  for (const name of lists) {
    const x = JSON.stringify(la[name])
    const y = JSON.stringify(lb[name])
    if (x !== y) {
      problems++
      console.log(`\x1b[31m${a} and ${b} differ in ${name}\x1b[0m`)
    }
  }
  if (la.meta.numAyahs !== lb.meta.numAyahs) {
    problems++
    console.log(`\x1b[31m${a} has ${la.meta.numAyahs} ayahs, ${b} has ${lb.meta.numAyahs}\x1b[0m`)
  }
  if (problems === 0) {
    console.log(`\x1b[32m${a} and ${b} lists are identical\x1b[0m`)
  }
  return problems
}
