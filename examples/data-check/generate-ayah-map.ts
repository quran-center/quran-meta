/**
 * Generates src/convert/ayahMapData.ts - the data behind `convertAyah`, which maps
 * ayah numbers between riwayas.
 *
 * Riwayas split a surah into ayahs at slightly different places (Kufi, Madani,
 * Makki and Basri counting). For every riwaya this script aligns the consonant
 * skeleton of its text with the Hafs text, surah by surah, and records where its
 * ayah boundaries differ from the Hafs ones:
 *
 * - `removed`: Hafs ayahs that do not start a new ayah in the riwaya
 * - `added`:   boundaries that fall inside a Hafs ayah, stored as
 *              [hafsAyah, wordIndex] where wordIndex counts Hafs words from 0
 *
 * Source text: the KFQC (King Fahd Quran Complex) data files in data/*.json for
 * Hafs, Warsh, Qalun, Douri, Sousi and Shuba, and the quranpedia.net dumps in
 * data/quranpedia/*.json for Bazzi and Qunbul (KFQC does not publish those).
 * The result is validated against the surah ayah counts in src/lists.
 *
 * Usage:
 *   node examples/data-check/generate-ayah-map.ts           # write src/convert/ayahMapData.ts
 *   node examples/data-check/generate-ayah-map.ts --check   # fail if the file is out of date
 */

import { execFileSync } from "node:child_process"
import { readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

interface SourceAyah {
  number: number
  text: string
}
interface SourceText {
  surahs: { ayahs: SourceAyah[] }[]
}

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, "../..")
const outFile = join(root, "src/convert/ayahMapData.ts")

type Riwaya = "Bazzi" | "Douri" | "Qalun" | "Qunbul" | "Shuba" | "Sousi" | "Warsh"

/** KFQC files are flat arrays of ayahs */
function loadKfqc(file: string): SourceText {
  const rows = JSON.parse(readFileSync(join(here, "data", file), "utf8")) as {
    sura_no: number
    aya_no: number
    aya_text: string
  }[]
  const surahs: SourceText["surahs"] = Array.from({ length: 114 }, () => ({ ayahs: [] }))
  for (const row of rows) {
    surahs[row.sura_no - 1].ayahs.push({ number: row.aya_no, text: row.aya_text })
  }
  return { surahs }
}

const loadQuranpedia = (file: string): SourceText =>
  JSON.parse(readFileSync(join(here, "data/quranpedia", file), "utf8")) as SourceText

const sources: Record<Riwaya, () => SourceText> = {
  Bazzi: () => loadQuranpedia("bazzi-data.json"),
  Douri: () => loadKfqc("DouriData_v2-0.json"),
  Qalun: () => loadKfqc("QalounData_v2-1.json"),
  Qunbul: () => loadQuranpedia("qunbul-data.json"),
  Shuba: () => loadKfqc("shubaData_v2-0.json"),
  Sousi: () => loadKfqc("SousiData_v2-0.json"),
  Warsh: () => loadKfqc("warshData_v2-1.json")
}

/** Ayah count per surah (index 1..114) from src/lists/<Riwaya>Lists.ts */
async function libraryAyahCounts(riwaya: Riwaya | "Hafs"): Promise<number[]> {
  const url = pathToFileURL(join(root, `src/lists/${riwaya}Lists.ts`)).href
  const mod = (await import(url)) as Record<string, { SurahList: [number, number][] }>
  return mod[`${riwaya}Lists`].SurahList.map((s) => s[1])
}

/**
 * Reduces a word to its consonant skeleton: diacritics, Quranic annotation marks,
 * alifs, hamzas and tatweel are dropped and letter variants are folded, so the
 * spelling differences between riwayas mostly disappear.
 */
function skeleton(word: string): string {
  return word
    .replace(/[ؤ]/g, "و")
    .replace(/[ئى]/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[^ب-غف-ي]/g, "")
}

interface SurahText {
  /** skeleton of the whole surah */
  text: string
  /** skeleton offset where each ayah starts (index 0 = ayah 1) */
  ayahStarts: number[]
  /** for every word start: [skeleton offset, ayah number, word index within ayah] */
  wordStarts: [number, number, number][]
}

function surahText(ayahs: SourceAyah[]): SurahText {
  let text = ""
  const ayahStarts: number[] = []
  const wordStarts: [number, number, number][] = []
  for (const ayah of ayahs) {
    ayahStarts.push(text.length)
    let wordIndex = 0
    for (const word of ayah.text.split(/\s+/)) {
      const sk = skeleton(word)
      if (!sk) {
        continue
      }
      wordStarts.push([text.length, ayah.number, wordIndex++])
      text += ` ${sk}`
    }
  }
  return { ayahStarts, text, wordStarts }
}

/**
 * Myers diff. Returns, for every position of `a`, the position in `b` it lines up with
 * (a matched character maps to its partner, an unmatched one to the next matched `b` position).
 */
function alignPositions(a: string, b: string): number[] {
  const n = a.length
  const m = b.length
  const max = n + m
  const offset = max + 1
  const v = new Int32Array(2 * max + 3)
  // trace[d] holds v[-d..d] as it was before step d
  const trace: Int32Array[] = []
  outer: for (let d = 0; d <= max; d++) {
    trace.push(v.slice(offset - d, offset + d + 1))
    for (let k = -d; k <= d; k += 2) {
      let x = k === -d || (k !== d && v[offset + k - 1] < v[offset + k + 1]) ? v[offset + k + 1] : v[offset + k - 1] + 1
      let y = x - k
      while (x < n && y < m && a[x] === b[y]) {
        x++
        y++
      }
      v[offset + k] = x
      if (x >= n && y >= m) {
        break outer
      }
    }
  }
  // Backtrack to collect matched pairs
  const map = Array.from<number>({ length: n + 1 }).fill(-1)
  let x = n
  let y = m
  for (let d = trace.length - 1; d >= 0 && (x > 0 || y > 0); d--) {
    const vd = trace[d]
    const k = x - y
    const prevK = k === -d || (k !== d && vd[d + k - 1] < vd[d + k + 1]) ? k + 1 : k - 1
    const prevX = d === 0 ? 0 : vd[d + prevK]
    const prevY = prevX - prevK
    while (x > prevX && y > prevY) {
      x--
      y--
      map[x] = y
    }
    if (d > 0) {
      x = prevX
      y = prevY
    }
  }
  map[n] = m
  for (let i = n - 1; i >= 0; i--) {
    if (map[i] === -1) {
      map[i] = map[i + 1]
    }
  }
  return map
}

/** Finds the Hafs word start nearest to a skeleton offset */
function nearestWord(wordStarts: SurahText["wordStarts"], pos: number): [number, number] {
  let lo = 0
  let hi = wordStarts.length - 1
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1
    if (wordStarts[mid][0] <= pos) {
      lo = mid
    } else {
      hi = mid - 1
    }
  }
  const cand = [wordStarts[lo], wordStarts[lo + 1]].filter(Boolean)
  cand.sort((p, q) => Math.abs(p[0] - pos) - Math.abs(q[0] - pos))
  return [cand[0][1], cand[0][2]]
}

type SurahDiff = { removed: number[]; added: [number, number][] }

function diffRiwaya(hafs: SourceText, other: SourceText): SurahDiff[] {
  return hafs.surahs.map((hSurah, i) => {
    const r = surahText(other.surahs[i].ayahs)
    // Al-Fatiha: riwayas that do not count the basmala as an ayah start at Hafs 1:2,
    // so leave the Hafs basmala out of the alignment
    const skipBasmala = i === 0 && !r.text.startsWith(" بسم")
    const h = surahText(skipBasmala ? hSurah.ayahs.slice(1) : hSurah.ayahs)
    const map = alignPositions(r.text, h.text)
    const boundaries = new Set<string>()
    const added: [number, number][] = []
    r.ayahStarts.forEach((start, idx) => {
      // The first ayah always starts where the (aligned) Hafs surah starts
      const [ayah, word] = idx === 0 ? [h.wordStarts[0][1], 0] : nearestWord(h.wordStarts, map[start])
      const key = `${ayah}:${word}`
      if (boundaries.has(key)) {
        throw new Error(`surah ${i + 1}: two ayahs map to Hafs ${key}`)
      }
      boundaries.add(key)
      if (word > 0) {
        added.push([ayah, word])
      }
    })
    const removed = hSurah.ayahs.map((a) => a.number).filter((a) => !boundaries.has(`${a}:0`))
    return { added, removed }
  })
}

function render(hafsCounts: number[], diffs: Record<Riwaya, SurahDiff[]>): string {
  const lines = [
    "// Generated by examples/data-check/generate-ayah-map.ts - do not edit by hand.",
    "// Ayah boundaries of every riwaya expressed relative to Hafs, see convertAyah.ts.",
    "",
    'import type { RiwayaName } from "../lists/types"',
    "",
    "/** Number of ayahs in every surah in Hafs (index 0 unused) */",
    `export const hafsAyahCounts: readonly number[] = [0, ${hafsCounts.join(", ")}]`,
    "",
    "/**",
    " * Per riwaya and surah: [removed Hafs ayah starts, added boundaries as [hafsAyah, hafsWordIndex]].",
    " * Surahs that split exactly like Hafs are omitted.",
    " */",
    "export const ayahBoundaryDiffs: Record<",
    '  Exclude<RiwayaName, "Hafs">,',
    "  Readonly<Record<number, readonly [removed: readonly number[], added: readonly (readonly [number, number])[]]>>",
    "> = {"
  ]
  for (const riwaya of Object.keys(diffs) as Riwaya[]) {
    lines.push(`  ${riwaya}: {`)
    diffs[riwaya].forEach((d, i) => {
      if (d.removed.length || d.added.length) {
        const added = d.added.map(([a, w]) => `[${a}, ${w}]`).join(", ")
        lines.push(`    ${i + 1}: [[${d.removed.join(", ")}], [${added}]],`)
      }
    })
    lines.push("  },")
  }
  lines.push("}", "")
  return lines
    .join("\n")
    .replace(/,\n {2}\},\n\}/, "\n  }\n}")
    .replaceAll(",\n  },", "\n  },")
}

const hafs = loadKfqc("hafsData_v2-0.json")
const hafsCounts = hafs.surahs.map((s) => s.ayahs.length)
const hafsLibCounts = await libraryAyahCounts("Hafs")
hafsCounts.forEach((n, i) => {
  if (n !== hafsLibCounts[i + 1]) {
    throw new Error(`Hafs surah ${i + 1}: source has ${n} ayahs, HafsLists has ${hafsLibCounts[i + 1]}`)
  }
})

const riwayaNames = Object.keys(sources) as Riwaya[]
const libraryCounts = Object.fromEntries(
  await Promise.all(riwayaNames.map(async (r) => [r, await libraryAyahCounts(r)] as const))
) as Record<Riwaya, number[]>

const diffs = {} as Record<Riwaya, SurahDiff[]>
for (const [riwaya, load] of Object.entries(sources) as [Riwaya, () => SourceText][]) {
  diffs[riwaya] = diffRiwaya(hafs, load())
  const libCounts = libraryCounts[riwaya]
  diffs[riwaya].forEach((d, i) => {
    const expected = libCounts[i + 1]
    const actual = hafsCounts[i] - d.removed.length + d.added.length
    if (expected !== actual) {
      throw new Error(`${riwaya} surah ${i + 1}: ${riwaya}Lists has ${expected} ayahs, mapping gives ${actual}`)
    }
  })
  const changed = diffs[riwaya].filter((d) => d.removed.length || d.added.length).length
  console.log(`${riwaya}: ${changed} surahs split differently from Hafs`)
}

const formatted = execFileSync(join(root, "node_modules/.bin/oxfmt"), ["--stdin-filepath", outFile], {
  input: render(hafsCounts, diffs)
}).toString()

if (process.argv.includes("--check")) {
  const current = readFileSync(outFile, "utf8")
  if (current !== formatted) {
    console.error("src/convert/ayahMapData.ts is out of date, run `pnpm generate`")
    process.exit(1)
  }
  console.log("ayahMapData.ts is up to date")
} else {
  writeFileSync(outFile, formatted)
  console.log(`wrote ${outFile}`)
}
