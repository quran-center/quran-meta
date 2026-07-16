/**
 * Generates the Warsh lists (SurahList, PageList, ManzilList, JuzList,
 * SajdaList, RukuList, HizbQuarterList + WarshMeta) for src/lists/WarshLists.ts
 * from the surahs/ayahs JSON structure in data/warsh-data.json.
 *
 * Each ayah entry provides: number, surah, page_number, juz,
 * hizb (1..240 = rub-al-hizb quarter), ruku, manzil, text (۩ marks sajda).
 * Surah name / revelation order / isMeccan are taken from HafsLists.ts
 * (riwaya-independent); per-surah ruku counts are computed from the data.
 *
 * Run with: node generate-warsh-lists.mjs [path/to/data.json]
 */

import { readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const here = dirname(fileURLToPath(import.meta.url))
const dataPath = process.argv[2] ?? join(here, "data", "warsh-data.json")
const hafsListsPath = join(here, "..", "..", "src", "lists", "HafsLists.ts")

const data = JSON.parse(readFileSync(dataPath, "utf8"))

// ---------- Flatten and index ayahs (ayahId = 1..N in mushaf order) ----------
const surahs = [...data.surahs].sort((a, b) => a.id - b.id)
const ayahs = surahs.flatMap((s) => {
  // Some entries merge two ayahs into one, with the ayah-number marker left
  // embedded as Arabic-Indic digits (e.g. Warsh 16:123+124) — split them.
  const expanded = [...s.ayahs]
    .sort((a, b) => a.number - b.number)
    .flatMap((a) => {
      const parts = a.text
        .split(/[٠-٩]+/)
        .map((t) => t.trim())
        .filter(Boolean)
      if (parts.length > 1) console.error(`Split merged entry ${a.surah}:${a.number} into ${parts.length} ayahs\n`)
      return parts.map((text) => ({ ...a, text, surahNo: Number(a.surah) }))
    })
  expanded.forEach((a, i) => {
    a.number = i + 1
  })
  return expanded
})
ayahs.forEach((a, i) => {
  a.ayahId = i + 1
})
const numAyahs = ayahs.length
const sentinel = numAyahs + 1

// ---------- Repair known data holes ----------
// 26 surah-final ayahs have juz/hizb/ruku/manzil zeroed in the source data;
// forward-fill them from the preceding ayah.
const filled = []
for (let i = 1; i < ayahs.length; i++) {
  for (const field of ["juz", "hizb", "ruku", "manzil"]) {
    if (!(ayahs[i][field] >= 1)) {
      ayahs[i][field] = ayahs[i - 1][field]
      filled.push(`${ayahs[i].surahNo}:${ayahs[i].number} ${field}`)
    }
  }
}
if (filled.length) console.error(`Forward-filled ${filled.length} zeroed values:\n  ${filled.join(", ")}\n`)

// The source data omits ruku 509 — the single-ayah ruku at the last ayah of
// Al-Muzzammil (73:18 in Warsh, 73:20 in Hafs) — labelling it as ruku 508.
for (const a of ayahs) {
  if (a.surahNo === 73 && a.number === 18) {
    if (a.ruku !== 509) {
      a.ruku = 509
      console.error("Fixed: set ruku 509 at 73:18 (single-ayah ruku missing from source data)\n")
    }
  }
}

// ---------- Boundary lists: [0, firstAyahOfUnit1..N, numAyahs + 1] ----------
function boundaryList(field, getter = (a) => a[field]) {
  const list = [0]
  let current = 0
  for (const a of ayahs) {
    const unit = getter(a)
    if (unit === current + 1) {
      list.push(a.ayahId)
      current = unit
    } else if (unit !== current) {
      throw new Error(`${field}: expected ${current} or ${current + 1}, got ${unit} at ${a.surahNo}:${a.number}`)
    }
  }
  list.push(sentinel)
  return list
}

const PageList = boundaryList("page_number")
const JuzList = boundaryList("juz")
const ManzilList = boundaryList("manzil")
const RukuList = boundaryList("ruku")
const HizbQuarterList = boundaryList("hizb")

const SajdaList = ayahs.filter((a) => a.text.includes("۩")).map((a) => a.ayahId)

// ---------- SurahList: [start, ayahCount, revelationOrder, rukuCount, name, isMeccan] ----------
const hafsSource = readFileSync(hafsListsPath, "utf8").match(/export const SurahList[\s\S]*?] as const/)[0]
const hafsSurahs = [...hafsSource.matchAll(/\[(-?\d+), (\d+), (\d+), (\d+), "([^"]*)", (true|false)\]/g)]
  .slice(1, 115)
  .map((m) => ({ order: Number(m[3]), name: m[5], isMeccan: m[6] === "true" }))
if (hafsSurahs.length !== 114) throw new Error(`Parsed ${hafsSurahs.length} surahs from HafsLists.ts, expected 114`)

const SurahList = [`[-1, 1, 1, 1, "", false], // This value is not used, but is here to make the array 1-indexed`]
for (let s = 1; s <= 114; s++) {
  const surahAyahs = ayahs.filter((a) => a.surahNo === s)
  if (surahAyahs.length === 0) throw new Error(`No ayahs for surah ${s}`)
  const { order, name, isMeccan } = hafsSurahs[s - 1]
  const rukuCount = new Set(surahAyahs.map((a) => a.ruku)).size
  SurahList.push(`[${surahAyahs[0].ayahId}, ${surahAyahs.length}, ${order}, ${rukuCount}, "${name}", ${isMeccan}],`)
}
SurahList.push(`[${sentinel}, 1, 1, 1, "", false]`)

// ---------- Formatting ----------
function formatNumbers(arr, width = 118) {
  const lines = []
  let line = " "
  for (const n of arr) {
    const piece = ` ${n},`
    if (line.length + piece.length > width) {
      lines.push(line)
      line = " "
    }
    line += piece
  }
  lines.push(line)
  return lines.join("\n").replace(/,$/, "")
}

const counts = {
  numAyahs,
  numSurahs: 114,
  numPages: PageList.length - 2,
  numJuzs: JuzList.length - 2,
  numHizbs: (HizbQuarterList.length - 2) / 4,
  numRubAlHizbs: HizbQuarterList.length - 2,
  numSajdas: SajdaList.length,
  numRukus: RukuList.length - 2,
  numManzils: ManzilList.length - 2
}

console.log(`// Generated from ${dataPath.replaceAll("\\", "/")} by generate-warsh-lists.mjs

// ------------------ Hizb Quarter (Rub-ul-Hizb) Data ---------------------

export const HizbQuarterList: AyahId[] = [
${formatNumbers(HizbQuarterList)}
]

// ------------------ Juz Data ---------------------

export const JuzList: AyahId[] = [
${formatNumbers(JuzList)}
] as const

// ------------------ Manzil Data ---------------------
export const ManzilList: AyahId[] = [${ManzilList.join(", ")}] as const

// ------------------ Page Data ---------------------
export const PageList: AyahId[] = [
${formatNumbers(PageList)}
] as const

// ------------------ Sajda Data ---------------------
export const SajdaList: AyahId[] = [
 ${SajdaList.join(", ")}
] as const

// ------------------ Surah Data ---------------------
export const SurahList: FixedArray<SurahInfo, 116> = [
${SurahList.map((row) => `  ${row}`).join("\n")}
] as const

export const RukuList: AyahId[] = [
${formatNumbers(RukuList)}
] as const

/**
 * Warsh riwaya metadata
 */
export const WarshMeta: QuranMeta = {
  riwayaName: "Warsh",
  numAyahs: ${counts.numAyahs},
  numSurahs: ${counts.numSurahs},
  numPages: ${counts.numPages},
  numJuzs: ${counts.numJuzs},
  numHizbs: ${counts.numHizbs},
  numRubAlHizbs: ${counts.numRubAlHizbs},
  numThumunAlHizbs: 0, // Warsh doesn't have Thumun al-Hizb data
  numRubsInJuz: 8,
  numSajdas: ${counts.numSajdas},
  numRukus: ${counts.numRukus},
  numManzils: ${counts.numManzils}
} as const`)

console.error(`\nCounts: ${JSON.stringify(counts)}`)
