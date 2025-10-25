/**
 * Script to extract reading-specific data from JSON files
 * Generates TypeScript list files for different Quranic readings
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

interface AyahData {
  id: number
  jozz: number
  page: number | string
  sura_no: number
  sura_name_en: string
  sura_name_ar: string
  line_start: number
  line_end: number
  aya_no: number
  aya_text?: string
  aya_text_emlaey?: string
}

interface SurahInfo {
  startAyahId: number
  ayahCount: number
  surahOrder: number
  rukuCount: number
  name: string
  isMeccan: boolean
}

type Reading = "hafs" | "warsh" | "qaloun" | "douri" | "sousi" | "shuba"

const readingFiles: Record<Reading, string> = {
  hafs: "hafsData_v2-0.json",
  warsh: "warshData_v2-1.json",
  qaloun: "QalounData_v2-1.json",
  douri: "DouriData_v2-0.json",
  sousi: "SousiData_v2-0.json",
  shuba: "shubaData_v2-0.json"
}

function extractPageList(data: AyahData[]): number[] {
  const pageList: number[] = [0] // Start with 0
  let currentPage = 1
  
  for (const ayah of data) {
    const page = typeof ayah.page === "string" ? parseInt(ayah.page.split("-")[0]) : ayah.page
    
    // When we encounter a new page, record the ayah ID
    if (page > currentPage) {
      while (currentPage < page) {
        currentPage++
        pageList.push(ayah.id)
      }
    }
  }
  
  // Add final marker
  pageList.push(data.length + 1)
  
  return pageList
}

function extractJuzList(data: AyahData[]): number[] {
  const juzList: number[] = [0] // Start with 0
  let currentJuz = 1
  
  for (const ayah of data) {
    if (ayah.jozz > currentJuz) {
      while (currentJuz < ayah.jozz) {
        currentJuz++
        juzList.push(ayah.id)
      }
    }
  }
  
  // Add final marker
  juzList.push(data.length + 1)
  
  return juzList
}

function extractSurahList(data: AyahData[]): Array<[number, number, number, number, string, boolean]> {
  const surahMap = new Map<number, SurahInfo>()
  
  // Collect surah info
  for (const ayah of data) {
    if (!surahMap.has(ayah.sura_no)) {
      surahMap.set(ayah.sura_no, {
        startAyahId: ayah.id,
        ayahCount: 1,
        surahOrder: ayah.sura_no,
        rukuCount: 0, // We'll estimate this
        name: ayah.sura_name_ar,
        isMeccan: true // Default, we'll use hafs data for this
      })
    } else {
      const info = surahMap.get(ayah.sura_no)!
      info.ayahCount = Math.max(info.ayahCount, ayah.aya_no)
    }
  }
  
  // Convert to array format: [startAyahId, ayahCount, surahOrder, rukuCount, name, isMeccan]
  const surahList: Array<[number, number, number, number, string, boolean]> = []
  
  for (let i = 1; i <= surahMap.size; i++) {
    const info = surahMap.get(i)!
    // Estimate rukuCount based on ayah count (rough approximation)
    const rukuCount = Math.ceil(info.ayahCount / 10)
    surahList.push([
      info.startAyahId,
      info.ayahCount,
      info.surahOrder,
      rukuCount,
      info.name,
      info.isMeccan
    ])
  }
  
  return surahList
}

function generateListFile(reading: Reading, listName: string, data: number[] | Array<[number, number, number, number, string, boolean]>, totalAyahs: number) {
  const outputDir = join(__dirname, "..", "src", "lists", reading)
  mkdirSync(outputDir, { recursive: true })
  
  const fileName = `${listName}.ts`
  const filePath = join(outputDir, fileName)
  
  let content = `import { AyahId } from "../../types"\n\n`
  
  if (listName === "pageList") {
    content += `/**\n * Page list for ${reading} reading\n * Total pages: ${data.length - 2}\n */\n`
    content += `export const PageList: AyahId[] = [\n`
    content += formatArray(data as number[])
    content += `] as const\n`
  } else if (listName === "juzList") {
    content += `/**\n * Juz list for ${reading} reading\n * Total juzs: 30\n */\n`
    content += `export const JuzList: AyahId[] = [\n`
    content += formatArray(data as number[])
    content += `] as const\n`
  } else if (listName === "surahList") {
    content += `import { SurahInfo } from "../../types"\n`
    content += `import { FixedArray } from "../../ts-utils"\n\n`
    content += `/**\n * Surah list for ${reading} reading\n * Total ayahs: ${totalAyahs}\n */\n`
    content += `const SurahListRaw: FixedArray<SurahInfo, 114> = [\n`
    for (const item of data as Array<[number, number, number, number, string, boolean]>) {
      content += `  [${item[0]}, ${item[1]}, ${item[2]}, ${item[3]}, "${item[4]}", ${item[5]}],\n`
    }
    content += `] as const\n\n`
    content += `export const SurahList: FixedArray<SurahInfo, 116> = [\n`
    content += `  [-1, 1, 1, 1, "", false], // this value is not used, but is here to make the array 1-indexed\n`
    content += `  ...SurahListRaw, // 114 surahs\n`
    content += `  [${totalAyahs + 1}, 1, 1, 1, "", false] // this value is not used, but is here to be used as a length check\n`
    content += `]\n\n`
    content += `export type SurahListType = typeof SurahList\n`
  }
  
  writeFileSync(filePath, content, "utf-8")
  console.log(`Generated ${filePath}`)
}

function formatArray(arr: number[], itemsPerLine = 15): string {
  let result = ""
  for (let i = 0; i < arr.length; i++) {
    if (i % itemsPerLine === 0) {
      result += "  "
    }
    result += arr[i]
    if (i < arr.length - 1) {
      result += ", "
    }
    if ((i + 1) % itemsPerLine === 0 && i < arr.length - 1) {
      result += "\n"
    }
  }
  return result + "\n"
}

function processReading(reading: Reading) {
  console.log(`\nProcessing ${reading} reading...`)
  
  const dataFile = readingFiles[reading]
  const dataPath = join(__dirname, "..", "examples", "data-check", "data", dataFile)
  
  const rawData = readFileSync(dataPath, "utf-8")
  const data: AyahData[] = JSON.parse(rawData)
  
  console.log(`  Total ayahs: ${data.length}`)
  
  // Extract lists
  const pageList = extractPageList(data)
  const juzList = extractJuzList(data)
  const surahList = extractSurahList(data)
  
  console.log(`  Pages: ${pageList.length - 2}`)
  console.log(`  Juzs: ${juzList.length - 2}`)
  console.log(`  Surahs: ${surahList.length}`)
  
  // Generate files
  generateListFile(reading, "pageList", pageList, data.length)
  generateListFile(reading, "juzList", juzList, data.length)
  generateListFile(reading, "surahList", surahList, data.length)
}

// Main execution
console.log("Extracting reading data...")

const readings: Reading[] = ["warsh", "qaloun", "douri", "sousi", "shuba"]

for (const reading of readings) {
  try {
    processReading(reading)
  } catch (error) {
    console.error(`Error processing ${reading}:`, error)
  }
}

console.log("\nDone!")
