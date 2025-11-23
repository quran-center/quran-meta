/**
 * Example demonstrating Warsh riwaya
 * run with: pnpx jiti warsh-entry-example.ts
 */

import { findJuz, findPage, getAyahMeta, getSurahInfo, meta } from "../src/warsh"

console.log("=== Warsh Riwaya Example ===\n")

// Print meta information
console.log("Metadata:")
console.log(`Total Ayahs: ${meta.numAyahs}`)
console.log(`Total Surahs: ${meta.numSurahs}`)
console.log(`Total Pages: ${meta.numPages}`)
console.log(`Total Juzs: ${meta.numJuzs}`)
console.log(`Total Manzils: ${meta.numManzils}`)
console.log(`Total Rub al Hizbs: ${meta.numRubAlHizbs}`)
console.log(`Total Rukus: ${meta.numRukus}\n`)

// Get surah info
const surahInfo = getSurahInfo(1)
console.log("Surah Al-Fatiha info:", surahInfo)

// Get ayah metadata
const ayahMeta = getAyahMeta(1)
console.log("First ayah metadata:", ayahMeta)

// Find juz for a surah/ayah
const juz = findJuz(2, 142)
console.log(`\nSurah 2, Ayah 142 is in Juz: ${juz}`)

// Find page
const page = findPage(2, 142)
console.log(`Surah 2, Ayah 142 is on Page: ${page}`)

// Get last ayah
const lastAyah = getAyahMeta(meta.numAyahs)
console.log(`\nLast ayah (${meta.numAyahs}):`, lastAyah)

console.log("\n✓ Warsh riwaya is working correctly!")
