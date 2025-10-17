/**
 * Example: Switching between different Quranic readings
 * 
 * This example demonstrates how to use the reading configuration system
 * to switch between different Quranic readings (Qira'at) such as Hafs and Warsh.
 */

import { 
  getCurrentReading, 
  setCurrentReading, 
  withReading,
  getMeta,
  getReadingMeta,
  DEFAULT_READING,
  type Reading
} from "../src"

console.log("=".repeat(60))
console.log("Quran Meta - Reading Configuration Example")
console.log("=".repeat(60))

// 1. Default reading (Hafs)
console.log("\n1. Default Reading:")
console.log(`   Current reading: ${getCurrentReading()}`)
console.log(`   Default reading: ${DEFAULT_READING}`)

let meta = getMeta()
console.log(`   Total ayahs: ${meta.numAyahs}`)
console.log(`   Total pages: ${meta.numPages}`)

// 2. Get metadata for specific readings
console.log("\n2. Reading-Specific Metadata:")

const readings: Reading[] = ["hafs", "warsh", "qaloun"]
for (const reading of readings) {
  const readingMeta = getReadingMeta(reading)
  console.log(`   ${reading.toUpperCase()}:`)
  console.log(`     - Ayahs: ${readingMeta.numAyahs}`)
  console.log(`     - Pages: ${readingMeta.numPages}`)
}

// 3. Switch to Warsh reading
console.log("\n3. Switching to Warsh Reading:")
setCurrentReading("warsh")
console.log(`   Current reading: ${getCurrentReading()}`)

meta = getMeta()
console.log(`   Total ayahs: ${meta.numAyahs}`)
console.log(`   Note: Warsh has ${6236 - meta.numAyahs} fewer ayahs than Hafs`)

// 4. Temporary reading context with withReading
console.log("\n4. Temporary Reading Context:")
setCurrentReading("hafs")
console.log(`   Current reading: ${getCurrentReading()}`)
console.log(`   Ayah count: ${getMeta().numAyahs}`)

console.log("\n   Using withReading to temporarily switch to Warsh:")
const warshAyahCount = withReading("warsh", () => {
  console.log(`     Inside withReading - current reading: ${getCurrentReading()}`)
  console.log(`     Ayah count: ${getMeta().numAyahs}`)
  return getMeta().numAyahs
})

console.log(`   After withReading - current reading: ${getCurrentReading()}`)
console.log(`   Current ayah count: ${getMeta().numAyahs}`)
console.log(`   Warsh ayah count from function: ${warshAyahCount}`)

// 5. Practical use case: Compare readings
console.log("\n5. Practical Example - Comparing Readings:")
console.log("   Difference in ayah counts between readings:")

const hafsAyahs = getReadingMeta("hafs").numAyahs
const warshAyahs = getReadingMeta("warsh").numAyahs
const difference = hafsAyahs - warshAyahs

console.log(`   Hafs:  ${hafsAyahs} ayahs`)
console.log(`   Warsh: ${warshAyahs} ayahs`)
console.log(`   Difference: ${difference} ayahs`)

// 6. Backward compatibility
console.log("\n6. Backward Compatibility:")
console.log("   The library maintains full backward compatibility.")
console.log("   Existing code continues to work without changes.")
console.log("   The default reading is Hafs (the most widely used).")

console.log("\n" + "=".repeat(60))
console.log("Key Points:")
console.log("=".repeat(60))
console.log("• Use getCurrentReading() to check the active reading")
console.log("• Use setCurrentReading(reading) to change the global reading")
console.log("• Use withReading(reading, fn) for temporary context switching")
console.log("• Use getMeta() for reading-aware metadata")
console.log("• Use getReadingMeta(reading) to query specific reading metadata")
console.log("• All existing APIs remain unchanged for backward compatibility")
console.log("=".repeat(60))
