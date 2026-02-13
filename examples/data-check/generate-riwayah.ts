/**
 * Lists Module generator for specific riwayah
 * Still WIP
 *
 * Run with: pnpx jiti generate-riwayah.ts
 */

const name = "Warsh" // For output file naming
import data from "./data/WarshData_v2-1.json"
// Import data from "../data/WarshData_v2-0.json"
// Import data from "../data/DouriData_v2-0.json"
// Import data from "../data/SousiData_v2-0.json"
// Import data from "../data/shubaData_v2-0.json"
// Import data from "../data/QalounData_v2-1.json"
// Import data from "../data/hafsData_v2-0.json"

// Helper to format arrays
function formatArray(arr, itemsPerLine = 15) {
  const lines = []
  for (let i = 0; i < arr.length; i += itemsPerLine) {
    lines.push("  " + arr.slice(i, i + itemsPerLine).join(", "))
  }
  return lines.join(",\n")
}

// Generate PageList
const pageList = [0, 1]
let currentPage = 1
for (let i = 0; i < data.length; i++) {
  const page = Number.parseInt(data[i].page)
  if (page > currentPage) {
    pageList.push(data[i].id)
    currentPage = page
  }
}
pageList.push(data[data.length - 1].id + 1) // End sentinel

// Generate JuzList
const juzList = [0, 1]
let currentJuz = 1
for (let i = 0; i < data.length; i++) {
  if (data[i].jozz > currentJuz) {
    juzList.push(data[i].id)
    currentJuz = data[i].jozz
  }
}
juzList.push(data[data.length - 1].id + 1) // End sentinel

// Generate SurahList
const surahList = [[0, 0, 0, 0, "", false]] // Sentinel at index 0
let currentSurahNo = 0
for (let i = 0; i < data.length; i++) {
  if (data[i].sura_no > currentSurahNo) {
    const firstAyah = data[i]
    const surahData = data.filter((a) => a.sura_no === firstAyah.sura_no)
    const name = firstAyah.sura_name_ar.trim().replace(/"/g, String.raw`\"`) // Escape quotes
    surahList.push([
      firstAyah.id,
      surahData.length,
      firstAyah.sura_no,
      1, // Default ruku count (will need to be updated if ruku data available)
      name,
      true // Default to Meccan (will need manual correction)
    ])
    currentSurahNo = firstAyah.sura_no
  }
}
surahList.push([data[data.length - 1].id + 1, 1, 1, 1, "", false]) // End sentinel

// For now, use placeholder data for lists we don't have
// HizbQuarterList - using Qalun's as template (240 items + 2 sentinels)
const hizbQuarterList = [0, 1]
const hizbEighthList = [0, 1]
for (let i = 0; i < data.length; i++) {
  if (data[i].aya_text.includes("۞")) {
    hizbEighthList.push(data[i].id)
    if (!(hizbEighthList.length % 2)) {
      hizbQuarterList.push(data[i].id)
    }
  }
}

// ManzilList - 7 manzils
const manzilList = [
  0,
  1,
  Math.floor(data.length / 7),
  Math.floor((data.length * 2) / 7),
  Math.floor((data.length * 3) / 7),
  Math.floor((data.length * 4) / 7),
  Math.floor((data.length * 5) / 7),
  Math.floor((data.length * 6) / 7),
  data.length + 1
]

// RukuList - placeholder (need actual data)
const rukuList = [0]
// For (let i = 1; i <= 556; i++) {
//   RukuList.push(Math.floor(i * data.length / 556))
// }
// RukuList.push(data.length + 1)

const sajdaList = []
for (let i = 0; i < data.length; i++) {
  if (data[i].aya_text.includes("۩")) {
    sajdaList.push(data[i].id)
  }
}
// Generate the file
console.log(`import type { AyahId, SurahInfo } from "../types"
import type { FixedArray } from "../ts-utils"

// ------------------ Hizb Eighth (thumun-ul-Hizb) Data ---------------------
export const HizbEighthList: AyahId[] = [
  ${formatArray(hizbEighthList)}
  ] as const
  
  
// ------------------ Hizb Quarter (Rub-ul-Hizb) Data ---------------------
export const HizbQuarterList: AyahId[] = [
${formatArray(hizbQuarterList)}
] as const

// ------------------ Juz Data ---------------------
export const JuzList: AyahId[] = [
${formatArray(juzList)}
] as const

// ------------------ Manzil Data ---------------------
export const ManzilList: AyahId[] = [
${formatArray(manzilList)}
] as const

// ------------------ Page Data ---------------------
export const PageList: AyahId[] = [
${formatArray(pageList, 10)}
] as const

// ------------------ Ruku Data ---------------------
// export const RukuList: AyahId[] = [
// ${formatArray(rukuList, 10)}
// ] as const

// ------------------ Sajda Data ---------------------
export const SajdaList: AyahId[] = ${JSON.stringify(sajdaList)} as const

// ------------------ Surah Data ---------------------
export const SurahList: FixedArray<SurahInfo, 116> = [
${surahList.map((s) => "  [" + s[0] + ", " + s[1] + ", " + s[2] + ", " + s[3] + ', "' + s[4] + '", ' + s[5] + "]").join(",\n")}
] as const

/**
 * ${name} riwaya metadata
 */
export const ${name}Meta = {
  riwayah: ${name},
  numAyahs: ${data.length},
  numSurahs: 114,
  numPages: ${pageList.length - 2},
  numJuzs: ${juzList.length - 2},
  numHizbs: 60,
  numRubAlHizbs: ${hizbQuarterList.length - 2},
  numThumunAlHizbs: 0, // ${name} doesn't have Thumun al-Hizb
  numRubsInJuz: 8,
  numSajdas: ${sajdaList.length}, // Placeholder - needs verification
  numRukus:0, // ${rukuList.length - 2}, // Placeholder - needs verification
  numManzils: ${manzilList.length - 2}
} as const

export const ${name}Lists = {
  HizbQuarterList,
  JuzList,
  ManzilList,
  PageList,
  RukuList,
  SajdaList,
  SurahList
}
`)
