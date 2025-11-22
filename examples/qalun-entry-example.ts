/**
 * Example demonstrating Qalun-specific entry point
 *
 * Shows how to use Qalun riwaya with ThumunAlHizb support
 *
 *
 * Run with: pnpx jiti qalun-entry-example.ts
 */

// Import from Qalun-specific entry (only Qalun data bundled)
import {
  getAyahMeta,
  findJuz,
  findThumunAlHizb,
  getThumunAlHizbMeta,
  meta,
  quran
} from "../src/qalun"

console.log("=== Qalun Entry Point Example ===")
console.log(`Total ayahs in Qalun: ${meta.numAyahs}`)
console.log(`Total pages in Qalun: ${meta.numPages}`)
console.log(`Thumun al-Hizbs in Qalun: ${meta.numThumunAlHizbs}`) // 480

// Using functional API (Qalun is default)
const ayahMeta = getAyahMeta(1)
console.log(`Ayah 1 metadata:`, {
  surah: ayahMeta.surah,
  juz: ayahMeta.juz,
  page: ayahMeta.page,
  thumunAlHizbId: ayahMeta.thumunAlHizbId // Only available in Qalun!
})

const juz = findJuz(1, 1)
console.log(`Surah 1, Ayah 1 is in Juz: ${juz}`)

// Qalun-specific: ThumunAlHizb functions
const thumun = findThumunAlHizb(1, 1)
console.log(`Surah 1, Ayah 1 is in Thumun: ${thumun}`)

const thumunMeta = getThumunAlHizbMeta(1)
console.log(`Thumun 1 metadata:`, {
  juz: thumunMeta.juz,
  hizbId: thumunMeta.hizbId,
  rubAlHizbId: thumunMeta.rubAlHizbId,
  firstAyahId: thumunMeta.firstAyahId
})

// Using class API
const meta2 = quran.getAyahMeta(100)
console.log(`Ayah 100 is in Surah ${meta2.surah}, Ayah ${meta2.ayah}`)

const thumun2 = quran.findThumunAlHizb(2, 1)
console.log(`Surah 2, Ayah 1 is in Thumun: ${thumun2}`)

console.log("\n=== Benefits ===")
console.log("✅ Zero configuration - works immediately")
console.log("✅ Tree-shakeable - only Qalun data bundled")
console.log("✅ TypeScript support - full type safety")
console.log("✅ ThumunAlHizb functions available (Qalun-specific)")
