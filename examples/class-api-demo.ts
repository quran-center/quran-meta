/**
 * Demo of the new QuranRiwaya class-based API
 * Run with: pnpx jiti examples/class-api-demo.ts
 */

import { QuranRiwaya } from "../src/index"

console.log("=== QuranRiwaya Class-Based API Demo ===\n")

// Create Hafs instance using convenience factory
const hafs = QuranRiwaya.hafs()
console.log("Created Hafs instance:", hafs.getRiwayaName())

// Get surah metadata
const surahMeta = hafs.getSurahMeta(2)
console.log("\nSurah 2 (Al-Baqarah) metadata:")
console.log("  Name:", surahMeta.name)
console.log("  Ayah count:", surahMeta.ayahCount)
console.log("  First ayah ID:", surahMeta.firstAyahId)
console.log("  Last ayah ID:", surahMeta.lastAyahId)

// Find juz information
const juz = hafs.findJuz(2, 1)
console.log("\nJuz for Surah 2, Ayah 1:", juz)

// Check if ayah is first in juz
const isFirst = hafs.isAyahJuzFirst(149)
console.log("Is ayah 149 first in juz?", isFirst)

// Get page information
const page = hafs.findPage(1, 1)
console.log("\nPage for Surah 1, Ayah 1:", page)

// Get ayah metadata
const ayahMeta = hafs.getAyahMeta(1)
console.log("\nAyah 1 metadata:")
console.log("  Surah:", ayahMeta.surah)
console.log("  Ayah:", ayahMeta.ayah)
console.log("  Juz:", ayahMeta.juz)
console.log("  Page:", ayahMeta.page)
console.log("  Ruku:", ayahMeta.ruku)

// Navigation
const nextAyah = hafs.nextAyah(1, 7)
console.log("\nNext ayah after [1, 7]:", nextAyah)

const prevAyah = hafs.prevAyah(2, 1)
console.log("Previous ayah before [2, 1]:", prevAyah)

// Create Qalun instance
const qalun = QuranRiwaya.qalun()
console.log("\n\n=== Qalun Riwaya ===")
console.log("Created Qalun instance:", qalun.getRiwayaName())

// Qalun-specific: Thumun al-Hizb (eighth of hizb)
try {
  const thumun = qalun.findThumunAlHizb(1, 1)
  console.log("Thumun al-Hizb for Surah 1, Ayah 1:", thumun)

  const thumunMeta = qalun.getThumunAlHizbMeta(1)
  console.log("Thumun al-Hizb 1 metadata:")
  console.log("  First ayah ID:", thumunMeta.firstAyahId)
  console.log("  Last ayah ID:", thumunMeta.lastAyahId)
}
catch {
  console.log("Thumun al-Hizb methods only available in Qalun")
}

// Compare: Old API vs New API
console.log("\n\n=== API Comparison ===")
console.log("Old API: getSurahMeta(2, 'Hafs')")
console.log("New API: QuranRiwaya.hafs().getSurahMeta(2)")
console.log("\nOld API: isAyahJuzFirst(149, 'Hafs')")
console.log("New API: hafs.isAyahJuzFirst(149)")
console.log("\nBenefits:")
console.log("  ✓ No repetitive riwaya parameter")
console.log("  ✓ Clear context with instance")
console.log("  ✓ Chainable and fluent API")
console.log("  ✓ Better IDE autocomplete")
console.log("  ✓ Type-safe riwaya handling")

console.log("\n=== Demo Complete ===")
