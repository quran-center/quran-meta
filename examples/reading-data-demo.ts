/**
 * Example: Using reading-specific data (pages, juz, surahs)
 * 
 * This example demonstrates how to access reading-specific page, juz, and surah data
 * that was extracted from the KFGQPC data files
 */

import { 
  setCurrentReading, 
  getPageList,
  getJuzList,
  getSurahList,
  getPageListForReading,
  getJuzListForReading,
  getSurahListForReading,
  getMeta,
  type Reading
} from "../src"

console.log("=".repeat(70))
console.log("Quran Meta - Reading-Specific Data Demo")
console.log("=".repeat(70))

// 1. Using current reading context
console.log("\n1. Using Current Reading Context:")
console.log("   Default reading (Hafs):")

let pageList = getPageList()
let juzList = getJuzList()
let surahList = getSurahList()

console.log(`   - Pages: ${pageList.length - 2} (${pageList[1]} to ${pageList[pageList.length - 1]})`)
console.log(`   - Juzs: ${juzList.length - 2}`)
console.log(`   - Surahs: 114 (total ayahs: ${getMeta().numAyahs})`)
console.log(`   - Last surah starts at ayah: ${surahList[114][0]}`)

// Switch to Warsh
setCurrentReading("warsh")
console.log("\n   Switched to Warsh reading:")

pageList = getPageList()
juzList = getJuzList()
surahList = getSurahList()

console.log(`   - Pages: ${pageList.length - 2}`)
console.log(`   - Juzs: ${juzList.length - 2}`)
console.log(`   - Surahs: 114 (total ayahs: ${getMeta().numAyahs})`)
console.log(`   - Last surah starts at ayah: ${surahList[114][0]}`)

// 2. Query without changing context
console.log("\n2. Query Reading Data Without Changing Context:")
setCurrentReading("hafs")

const readings: Reading[] = ["hafs", "warsh", "qaloun", "douri", "sousi", "shuba"]

console.log("\n   Total ayahs by reading:")
for (const reading of readings) {
  const list = getSurahListForReading(reading)
  const lastSurah = list[114]
  const lastAyah = list[115][0] - 1 // End marker minus 1
  console.log(`   - ${reading.padEnd(7)}: ${lastAyah} ayahs (last surah at ${lastSurah[0]})`)
}

// 3. Compare page differences
console.log("\n3. Page Differences Between Readings:")

const hafsPages = getPageListForReading("hafs")
const warshPages = getPageListForReading("warsh")

console.log(`   Hafs pages: ${hafsPages.length - 2}`)
console.log(`   Warsh pages: ${warshPages.length - 2}`)
console.log(`   Difference: ${(hafsPages.length - 2) - (warshPages.length - 2)} pages`)

// 4. Surah-level comparison
console.log("\n4. Surah-Level Ayah Count Comparison:")

const hafsSurahs = getSurahListForReading("hafs")
const warshSurahs = getSurahListForReading("warsh")

console.log("\n   Surahs with different ayah counts:")
let differences = 0
for (let i = 1; i <= 114; i++) {
  const hafsAyahCount = hafsSurahs[i][1]
  const warshAyahCount = warshSurahs[i][1]
  
  if (hafsAyahCount !== warshAyahCount) {
    console.log(`   - Surah ${i}: Hafs=${hafsAyahCount}, Warsh=${warshAyahCount} (diff: ${hafsAyahCount - warshAyahCount})`)
    differences++
  }
}

if (differences === 0) {
  console.log("   (No differences found at surah level)")
}

// 5. Juz boundaries
console.log("\n5. Juz Boundary Differences:")

const hafsJuzs = getJuzListForReading("hafs")
const warshJuzs = getJuzListForReading("warsh")

console.log("\n   First 5 juz start positions:")
for (let i = 1; i <= 5; i++) {
  console.log(`   Juz ${i}: Hafs=${hafsJuzs[i]}, Warsh=${warshJuzs[i]}, diff=${hafsJuzs[i] - warshJuzs[i]}`)
}

// 6. Practical use case
console.log("\n6. Practical Use Case - Page Navigation:")

setCurrentReading("hafs")
const hafsPage100 = getPageList()[100]
console.log(`\n   Hafs - Page 100 starts at ayah: ${hafsPage100}`)

setCurrentReading("warsh")
const warshPage100 = getPageList()[100]
console.log(`   Warsh - Page 100 starts at ayah: ${warshPage100}`)
console.log(`   Difference: ${hafsPage100 - warshPage100} ayahs`)

console.log("\n" + "=".repeat(70))
console.log("Key Takeaways:")
console.log("=".repeat(70))
console.log("• Different readings have different ayah counts (Hafs: 6236, Warsh: 6214)")
console.log("• Page numbering differs between readings")
console.log("• Juz boundaries may shift due to ayah count differences")
console.log("• Use getXxxList() for context-aware lists")
console.log("• Use getXxxListForReading(reading) to query without changing context")
console.log("=".repeat(70))
