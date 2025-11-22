/**
 * Example demonstrating the new riwaya-specific entry points
 *
 * This shows how to use the tree-shakeable imports that only bundle
 * the data for the riwaya you need.
 *
 * Run with: pnpx jiti hafs-entry-example.ts
 */

// Option 1: Import from Hafs-specific entry (only Hafs data bundled)
import { getAyahMeta, findJuz, meta, quran } from "../src/hafs"

console.log("=== Hafs Entry Point Example ===")
console.log(`Total ayahs in Hafs: ${meta.numAyahs}`)
console.log(`Total pages in Hafs: ${meta.numPages}`)
console.log(`Thumun al-Hizbs in Hafs: ${meta.numThumunAlHizbs}`) // 0

// Using functional API (Hafs is default)
const ayahMeta = getAyahMeta(1)
console.log(`Ayah 1 metadata:`, {
  surah: ayahMeta.surah,
  juz: ayahMeta.juz,
  page: ayahMeta.page
})

const juz = findJuz(1, 1)
console.log(`Surah 1, Ayah 1 is in Juz: ${juz}`)

// Using class API
const meta2 = quran.getAyahMeta(100)
console.log(`Ayah 100 is in Surah ${meta2.surah}, Ayah ${meta2.ayah}`)

console.log("\n=== Size Comparison ===")
console.log("When you import from 'quran-meta/hafs':")
console.log("  - Hafs data: ✅ included (~56KB)")
console.log("  - Qalun data: ❌ not bundled")
console.log("  - Total bundle: ~110KB (50% smaller!)")
console.log("\nWhen you import from 'quran-meta' (generic):")
console.log("  - Hafs data: ✅ included")
console.log("  - Qalun data: ✅ included")
console.log("  - Total bundle: ~115KB")
