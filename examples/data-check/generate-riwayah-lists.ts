/**
 * Generic riwayah lists generator and cross-checker.
 *
 * Generates a lists module (HizbQuarterList, JuzList, ManzilList, PageList,
 * SajdaList, SurahList, RukuList + `<Name>Meta` / `<Name>Lists`) for
 * src/lists/<Name>Lists.ts from the surahs/ayahs JSON structure used by the
 * quranpedia.net data dumps (data/quranpedia/*.json and data/warsh-data.json).
 *
 * Each ayah entry provides: number, surah, page_number, juz,
 * hizb (1..240 = rub-al-hizb quarter), ruku, manzil, text (۩ marks sajda).
 * Surah name / revelation order / isMeccan are taken from HafsLists.ts
 * (riwaya-independent); per-surah ruku counts are computed from the data.
 *
 * Usage:
 *   pnpx jiti examples/data-check/generate-riwayah-lists.ts <riwayah...|all> [--check] [--force] [--stdout]
 *
 *   (no flags)  writes src/lists/<Name>Lists.ts when missing; when the module
 *               already exists it cross-checks against it instead
 *   --check     only cross-check generated lists against src/lists/<Name>Lists.ts
 *   --force     overwrite an existing src/lists/<Name>Lists.ts
 *   --stdout    print the generated module to stdout instead of writing
 *
 * Examples:
 *   pnpx jiti examples/data-check/generate-riwayah-lists.ts sousi
 *   pnpx jiti examples/data-check/generate-riwayah-lists.ts all --check
 */

import { execSync } from "node:child_process"
import { existsSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { SurahList as HafsSurahList } from "../../src/lists/HafsLists"

const here = dirname(fileURLToPath(import.meta.url))
const listsDir = join(here, "..", "..", "src", "lists")
const scriptRef = "examples/data-check/generate-riwayah-lists.ts"

// ---------- Riwayah registry ----------

interface RiwayahConfig {
  /** Extra names accepted on the command line */
  aliases?: string[]
  /** The existing src/lists module is canonical - never overwrite it, only cross-check */
  checkOnly?: boolean
  /** Source data file, relative to this script's directory */
  dataFile: string
  /** Canonical riwayah name used in generated identifiers (e.g. "Sousi" -> SousiLists) */
  name: string
}

const riwayahs: Record<string, RiwayahConfig> = {
  bazzi: { dataFile: "data/quranpedia/bazzi-data.json", name: "Bazzi" },
  douri: { dataFile: "data/quranpedia/douri-data.json", name: "Douri" },
  hafs: { checkOnly: true, dataFile: "data/quranpedia/hafs-data.json", name: "Hafs" },
  qalun: { aliases: ["qaloon"], dataFile: "data/quranpedia/qaloon-data.json", name: "Qalun" },
  qunbul: { dataFile: "data/quranpedia/qunbul-data.json", name: "Qunbul" },
  shuba: { dataFile: "data/quranpedia/shuba-data.json", name: "Shuba" },
  sousi: { dataFile: "data/quranpedia/sousi-data.json", name: "Sousi" },
  warsh: { dataFile: "data/quranpedia/warsh-data.json", name: "Warsh" }
}

// ---------- Source data shape (quranpedia.net JSON dump) ----------

interface SourceAyah {
  hizb: number
  juz: number
  manzil: number
  number: number
  page_number: number
  ruku: number
  surah: number | string
  text: string
}

interface SourceSurah {
  ayahs: SourceAyah[]
  id: number
  name: string
}

interface SourceData {
  name: string
  surahs: SourceSurah[]
}

/** A flattened, repaired ayah with its global 1-based ayahId */
interface Ayah {
  ayahId: number
  hizb: number
  juz: number
  manzil: number
  number: number
  page_number: number
  ruku: number
  surahNo: number
  text: string
}

type NumericField = "hizb" | "juz" | "manzil" | "page_number" | "ruku"

// ---------- Load, flatten and repair ayahs (ayahId = 1..N in mushaf order) ----------

function loadAyahs(dataPath: string): Ayah[] {
  const data = JSON.parse(readFileSync(dataPath, "utf8")) as SourceData
  const surahs = [...data.surahs].toSorted((a, b) => a.id - b.id)
  if (surahs.length !== 114) {
    throw new Error(`Expected 114 surahs, got ${surahs.length}`)
  }

  const ayahs = surahs.flatMap((s) => {
    // Some entries merge two ayahs into one, with the ayah-number marker left
    // embedded as Arabic-Indic digits (e.g. Warsh 16:123+124) - split them.
    const expanded = [...s.ayahs]
      .toSorted((a, b) => a.number - b.number)
      .flatMap((a) => {
        const parts = a.text
          .split(/[٠-٩]+/)
          .map((t) => t.trim())
          .filter(Boolean)
        if (parts.length > 1) {
          console.error(`Split merged entry ${a.surah}:${a.number} into ${parts.length} ayahs`)
        }
        return parts.map((text) => ({
          ayahId: 0,
          hizb: a.hizb,
          juz: a.juz,
          manzil: a.manzil,
          number: a.number,
          page_number: a.page_number,
          ruku: a.ruku,
          surahNo: Number(a.surah),
          text
        }))
      })
    expanded.forEach((a, i) => {
      a.number = i + 1
    })
    return expanded
  })
  ayahs.forEach((a, i) => {
    a.ayahId = i + 1
  })

  // Repair known data holes: some surah-final ayahs have juz/hizb/ruku/manzil
  // zeroed in the source data - forward-fill them from the preceding ayah.
  const fillFields: NumericField[] = ["juz", "hizb", "ruku", "manzil"]
  for (const field of fillFields) {
    if (!(ayahs[0][field] >= 1)) {
      throw new Error(`First ayah has no ${field} value - cannot forward-fill`)
    }
  }
  const filled: string[] = []
  for (let i = 1; i < ayahs.length; i++) {
    for (const field of fillFields) {
      if (!(ayahs[i][field] >= 1)) {
        ayahs[i][field] = ayahs[i - 1][field]
        filled.push(`${ayahs[i].surahNo}:${ayahs[i].number} ${field}`)
      }
    }
  }
  if (filled.length > 0) {
    console.error(`Forward-filled ${filled.length} zeroed values:\n  ${filled.join(", ")}`)
  }

  // Repair skipped ruku numbers: some sources omit a single-ayah ruku that
  // starts at the last ayah of a surah (e.g. ruku 509 at the end of
  // Al-Muzzammil in Warsh and Qalun), labelling that ayah with the previous
  // ruku. Relabel the last ayah of the previous surah as the skipped ruku.
  let currentRuku = 0
  for (let i = 0; i < ayahs.length; i++) {
    const { ruku } = ayahs[i]
    if (ruku === currentRuku || ruku === currentRuku + 1) {
      currentRuku = ruku
      continue
    }
    const previous = ayahs[i - 1]
    if (ruku === currentRuku + 2 && ayahs[i].number === 1 && previous.ruku === currentRuku) {
      previous.ruku = currentRuku + 1
      console.error(
        `Fixed: set ruku ${previous.ruku} at ${previous.surahNo}:${previous.number} (single-ayah ruku missing from source data)`
      )
      currentRuku = ruku
      continue
    }
    throw new Error(
      `ruku: expected ${currentRuku} or ${currentRuku + 1}, got ${ruku} at ${ayahs[i].surahNo}:${ayahs[i].number}`
    )
  }

  return ayahs
}

// ---------- Build the lists ----------

/** [startAyahId, ayahCount, revelationOrder, rukuCount, name, isMeccan] */
type SurahRow = [number, number, number, number, string, boolean]

interface GeneratedMeta {
  numAyahs: number
  numHizbs: number
  numJuzs: number
  numManzils: number
  numPages: number
  numRubAlHizbs: number
  numRukus: number
  numSajdas: number
  numSurahs: number
}

interface Generated {
  lists: {
    HizbQuarterList: number[]
    JuzList: number[]
    ManzilList: number[]
    PageList: number[]
    RukuList: number[]
    SajdaList: number[]
    SurahList: SurahRow[]
  }
  meta: GeneratedMeta
}

/** Boundary list of a 1..N-numbered unit: [0, firstAyahIdOfUnit1..N, numAyahs + 1] */
function boundaryList(ayahs: Ayah[], field: NumericField): number[] {
  const sentinel = ayahs.length + 1
  const list = [0]
  let current = 0
  for (const a of ayahs) {
    const unit = a[field]
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

function buildLists(ayahs: Ayah[]): Generated {
  const sentinel = ayahs.length + 1

  const PageList = boundaryList(ayahs, "page_number")
  const JuzList = boundaryList(ayahs, "juz")
  const ManzilList = boundaryList(ayahs, "manzil")
  const RukuList = boundaryList(ayahs, "ruku")
  const HizbQuarterList = boundaryList(ayahs, "hizb")
  const SajdaList = ayahs.filter((a) => a.text.includes("۩")).map((a) => a.ayahId)

  // SurahList: start / ayahCount / rukuCount from the data; revelation order,
  // name and isMeccan from HafsLists (riwaya-independent).
  const SurahList: SurahRow[] = [[-1, 1, 1, 1, "", false]]
  for (let s = 1; s <= 114; s++) {
    const surahAyahs = ayahs.filter((a) => a.surahNo === s)
    if (surahAyahs.length === 0) {
      throw new Error(`No ayahs for surah ${s}`)
    }
    const [, , order, , name, isMeccan] = HafsSurahList[s]
    const rukuCount = new Set(surahAyahs.map((a) => a.ruku)).size
    SurahList.push([surahAyahs[0].ayahId, surahAyahs.length, order, rukuCount, name, isMeccan])
  }
  SurahList.push([sentinel, 1, 1, 1, "", false])

  return {
    lists: { HizbQuarterList, JuzList, ManzilList, PageList, RukuList, SajdaList, SurahList },
    meta: {
      numAyahs: ayahs.length,
      numHizbs: (HizbQuarterList.length - 2) / 4,
      numJuzs: JuzList.length - 2,
      numManzils: ManzilList.length - 2,
      numPages: PageList.length - 2,
      numRubAlHizbs: HizbQuarterList.length - 2,
      numRukus: RukuList.length - 2,
      numSajdas: SajdaList.length,
      numSurahs: 114
    }
  }
}

// ---------- Render the src/lists/<Name>Lists.ts module ----------

function formatNumbers(arr: number[], width = 118): string {
  const lines: string[] = []
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

function formatSurahRow([start, ayahCount, order, rukuCount, name, isMeccan]: SurahRow): string {
  return `[${start}, ${ayahCount}, ${order}, ${rukuCount}, "${name.replaceAll('"', String.raw`\"`)}", ${isMeccan}]`
}

function renderModule(config: RiwayahConfig, { lists, meta }: Generated): string {
  const { name } = config
  const surahRows = lists.SurahList.map((row, i) => {
    const comment = i === 0 ? " // This value is not used, but is here to make the array 1-indexed" : ""
    const comma = i === lists.SurahList.length - 1 ? "" : ","
    return `  ${formatSurahRow(row)}${comma}${comment}`
  }).join("\n")

  return `import type { AyahId, QuranMeta, SurahInfo } from "../types"
import type { FixedArray } from "../ts-utils"

// Lists generated from examples/data-check/${config.dataFile} by ${scriptRef}
// Note: ${name} has no HizbEighthList (thumun al-hizb) - no verified source data is available for it.

// ------------------ Hizb Quarter (Rub-ul-Hizb) Data ---------------------

export const HizbQuarterList: AyahId[] = [
${formatNumbers(lists.HizbQuarterList)}
]

// ------------------ Juz Data ---------------------

export const JuzList: AyahId[] = [
${formatNumbers(lists.JuzList)}
] as const

// ------------------ Manzil Data ---------------------
export const ManzilList: AyahId[] = [${lists.ManzilList.join(", ")}] as const

// ------------------ Page Data ---------------------
export const PageList: AyahId[] = [
${formatNumbers(lists.PageList)}
] as const

// ------------------ Sajda Data ---------------------
export const SajdaList: AyahId[] = [
${formatNumbers(lists.SajdaList)}
] as const

// ------------------ Surah Data ---------------------
export const SurahList: FixedArray<SurahInfo, 116> = [
${surahRows}
] as const

// ------------------ Ruku Data ---------------------
export const RukuList: AyahId[] = [
${formatNumbers(lists.RukuList)}
] as const

/**
 * ${name} riwaya metadata
 */
export const ${name}Meta: QuranMeta = {
  riwayaName: "${name}",
  numAyahs: ${meta.numAyahs},
  numSurahs: ${meta.numSurahs},
  numPages: ${meta.numPages},
  numJuzs: ${meta.numJuzs},
  numHizbs: ${meta.numHizbs},
  numRubAlHizbs: ${meta.numRubAlHizbs},
  numThumunAlHizbs: 0, // ${name} doesn't have Thumun al-Hizb data
  numRubsInJuz: 8,
  numSajdas: ${meta.numSajdas},
  numRukus: ${meta.numRukus},
  numManzils: ${meta.numManzils}
} as const

export const ${name}Lists = {
  HizbQuarterList,
  JuzList,
  ManzilList,
  PageList,
  RukuList,
  SajdaList,
  SurahList,
  meta: ${name}Meta
}
`
}

// ---------- Cross-check against the existing src/lists module ----------

interface ExistingLists {
  HizbQuarterList: readonly number[]
  JuzList: readonly number[]
  ManzilList: readonly number[]
  PageList: readonly number[]
  RukuList: readonly number[]
  SajdaList: readonly number[]
  SurahList: readonly SurahRow[]
  meta: Record<string, unknown>
}

function diffNumberList(label: string, generated: readonly number[], existing: readonly number[]): number {
  let mismatches = 0
  if (generated.length !== existing.length) {
    console.error(`  ${label}: length mismatch - generated ${generated.length}, existing ${existing.length}`)
    mismatches++
  }
  const max = Math.max(generated.length, existing.length)
  let reported = 0
  for (let i = 0; i < max; i++) {
    if (generated[i] !== existing[i]) {
      mismatches++
      if (reported < 10) {
        console.error(`  ${label}[${i}]: generated ${generated[i]}, existing ${existing[i]}`)
        reported++
      }
    }
  }
  if (mismatches > reported + (generated.length === existing.length ? 0 : 1)) {
    console.error(`  ${label}: ... ${mismatches} differing entries in total`)
  }
  return mismatches
}

async function checkAgainstExisting(config: RiwayahConfig, generated: Generated): Promise<number> {
  const moduleName = `${config.name}Lists`
  const module_ = (await import(`../../src/lists/${moduleName}`)) as Record<string, unknown>
  const existing = module_[moduleName] as ExistingLists | undefined
  if (!existing) {
    console.error(`  ${moduleName} export not found in src/lists/${moduleName}.ts`)
    return 1
  }

  let mismatches = 0
  const numberLists = ["HizbQuarterList", "JuzList", "ManzilList", "PageList", "RukuList", "SajdaList"] as const
  for (const listName of numberLists) {
    mismatches += diffNumberList(listName, generated.lists[listName], existing[listName])
  }

  // SurahList: startAyahId / ayahCount / revelationOrder / rukuCount / isMeccan
  // must match; name differences (spelling/diacritics) are warnings only.
  for (let s = 0; s < generated.lists.SurahList.length; s++) {
    const gen = generated.lists.SurahList[s]
    const old = existing.SurahList[s]
    if (!old) {
      console.error(`  SurahList[${s}]: missing in existing lists`)
      mismatches++
      continue
    }
    for (const [field, index] of [
      ["startAyahId", 0],
      ["ayahCount", 1],
      ["order", 2],
      ["rukuCount", 3],
      ["isMeccan", 5]
    ] as const) {
      if (gen[index] !== old[index]) {
        console.error(`  SurahList[${s}].${field}: generated ${gen[index]}, existing ${old[index]}`)
        mismatches++
      }
    }
    if (gen[4] !== old[4]) {
      console.error(`  Warning: SurahList[${s}].name differs: generated "${gen[4]}", existing "${old[4]}"`)
    }
  }

  // Meta counts (numThumunAlHizbs is not derivable from this data source - skipped)
  for (const [key, value] of Object.entries(generated.meta)) {
    if (existing.meta[key] !== value) {
      console.error(`  meta.${key}: generated ${value}, existing ${String(existing.meta[key])}`)
      mismatches++
    }
  }

  return mismatches
}

// ---------- CLI ----------

function usage(): void {
  console.error(`Usage: pnpx jiti ${scriptRef} <riwayah...|all> [--check] [--force] [--stdout]`)
  console.error(`Riwayahs: ${Object.keys(riwayahs).join(", ")}`)
}

function resolveKey(name: string): string | undefined {
  if (name in riwayahs) {
    return name
  }
  return Object.keys(riwayahs).find((key) => riwayahs[key].aliases?.includes(name))
}

async function main(): Promise<void> {
  const args = process.argv.slice(2)
  const flags = new Set(args.filter((a) => a.startsWith("--")))
  const requested = args.filter((a) => !a.startsWith("--")).map((a) => a.toLowerCase())

  const unknownFlags = [...flags].filter((f) => !["--check", "--force", "--stdout"].includes(f))
  if (unknownFlags.length > 0 || requested.length === 0) {
    if (unknownFlags.length > 0) {
      console.error(`Unknown flags: ${unknownFlags.join(", ")}`)
    }
    usage()
    process.exitCode = 1
    return
  }

  const keys = requested.includes("all") ? Object.keys(riwayahs) : requested.map(resolveKey)
  let failures = 0

  for (const [i, key] of keys.entries()) {
    if (!key) {
      console.error(`Unknown riwayah: ${requested[i]}`)
      failures++
      continue
    }
    const config = riwayahs[key]
    console.error(`\n=== ${config.name} (${config.dataFile}) ===`)

    let generated: Generated
    try {
      generated = buildLists(loadAyahs(join(here, config.dataFile)))
    } catch (error) {
      console.error(`  Failed: ${error instanceof Error ? error.message : String(error)}`)
      failures++
      continue
    }
    console.error(`Counts: ${JSON.stringify(generated.meta)}`)

    if (flags.has("--stdout")) {
      console.log(renderModule(config, generated))
      continue
    }

    const outFile = join(listsDir, `${config.name}Lists.ts`)
    const exists = existsSync(outFile)

    if (flags.has("--check") || (exists && (config.checkOnly || !flags.has("--force")))) {
      if (!exists) {
        console.error(`  Cannot check: src/lists/${config.name}Lists.ts does not exist`)
        failures++
        continue
      }
      const mismatches = await checkAgainstExisting(config, generated)
      if (mismatches > 0) {
        console.error(`✗ ${config.name}: ${mismatches} mismatches against src/lists/${config.name}Lists.ts`)
        failures++
      } else {
        console.error(`✓ ${config.name}: matches src/lists/${config.name}Lists.ts`)
      }
      if (!flags.has("--check") && !config.checkOnly && !flags.has("--force")) {
        console.error(`  (src/lists/${config.name}Lists.ts already exists - checked instead; use --force to overwrite)`)
      }
      continue
    }

    if (config.checkOnly) {
      console.error(`  ${config.name} lists are canonical - refusing to generate src/lists/${config.name}Lists.ts`)
      failures++
      continue
    }

    writeFileSync(outFile, renderModule(config, generated))
    execSync(`pnpm exec oxfmt "${outFile}"`, { stdio: "ignore" })
    console.error(`Wrote src/lists/${config.name}Lists.ts`)
  }

  if (failures > 0) {
    process.exitCode = 1
  }
}

await main()
