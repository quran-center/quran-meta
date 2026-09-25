/**
 * Generates the riwaya entry points (src/hafs.ts, src/warsh.ts, ...) from one template.
 *
 * Every entry point re-exports the functional API with the riwaya data already bound,
 * so `findJuz(2, 142)` works without passing lists around. The wrappers are plain
 * function declarations with explicit signatures: they keep type guards and assertion
 * signatures intact, tree-shake individually and satisfy `isolatedDeclarations`.
 *
 * Usage:
 *   node scripts/generate-entries.ts           # write the files
 *   node scripts/generate-entries.ts --check   # fail if any file is out of date
 */

import { execFileSync } from "node:child_process"
import { readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")

interface Riwaya {
  name: string
  /** Narrated from (qari) */
  qari: string
  numAyahs: number
  /** Riwaya has HizbEighthList (thumun al-hizb) data */
  thumun: boolean
}

const riwayas: Riwaya[] = [
  { name: "Bazzi", numAyahs: 6221, qari: "Ibn Kathir", thumun: false },
  { name: "Douri", numAyahs: 6217, qari: "Abu 'Amr", thumun: false },
  { name: "Hafs", numAyahs: 6236, qari: "'Asim", thumun: false },
  { name: "Qalun", numAyahs: 6214, qari: "Nafi'", thumun: true },
  { name: "Qunbul", numAyahs: 6221, qari: "Ibn Kathir", thumun: false },
  { name: "Shuba", numAyahs: 6236, qari: "'Asim", thumun: false },
  { name: "Sousi", numAyahs: 6217, qari: "Abu 'Amr", thumun: false },
  { name: "Warsh", numAyahs: 6214, qari: "Nafi'", thumun: false }
]

/**
 * A wrapper around a core function.
 * `bind` says what the core function takes as its last argument.
 */
interface Fn {
  name: string
  doc: string
  params: string
  args: string
  returns: string
  bind: "lists" | "meta"
  /** module in src/ that exports the core function (defaults to `name`) */
  from?: string
  thumun?: boolean
}

/** Splits a parameter list on its top-level commas */
function splitParams(params: string): string[] {
  const out: string[] = []
  let depth = 0
  let current = ""
  for (const ch of params) {
    if (ch === "[" || ch === "<" || ch === "(" || ch === "{") {
      depth++
    } else if (ch === "]" || ch === ">" || ch === ")" || ch === "}") {
      depth--
    }
    if (ch === "," && depth === 0) {
      out.push(current)
      current = ""
    } else {
      current += ch
    }
  }
  return current.trim() ? [...out, current] : out
}

const fn = (name: string, params: string, returns: string, doc: string, extra: Partial<Fn> = {}): Fn => ({
  args: splitParams(params)
    .map((p) => p.trim().split(/[?:=\s]/)[0])
    .filter(Boolean)
    .join(", "),
  bind: "lists",
  doc,
  name,
  params,
  returns,
  ...extra
})

const S = "surah: Surah"
const SA = "surah: Surah, ayah: AyahNo = 1"
const ID = "ayahId: AyahId"

/** Grouped so the generated file reads in sections */
const groups: [string, Fn[]][] = [
  [
    "Lists and parsing",
    [
      fn(
        "getList",
        "listName: PartType",
        "AyahId[] | SurahListType",
        "Returns the raw boundary list for a kind of part",
        {
          from: "lists/getList"
        }
      ),
      fn(
        "getListNormalised",
        "listName: PartType",
        "PartBlock[]",
        "Returns the parts of a kind as `{ startAyahId, ayahCount }` blocks",
        {
          from: "lists/getList"
        }
      ),
      fn(
        "generatePartBlocks",
        "part: PartType",
        "PartBlock[] | null",
        "Like getListNormalised, but returns `null` when the riwaya has no such data",
        {
          from: "lists/getList"
        }
      ),
      fn(
        "ayahStringSplitter",
        "str: string, isStrict = true",
        "SurahAyahSegment",
        'Parses `"2:255"` or `"1:1-7"` into `[surah, ayah]` or `[surah, [from, to]]`'
      ),
      fn(
        "surahStringParser",
        "str: string, isStrict = false",
        "Surah",
        'Parses a surah number from a string like `"2"`',
        { bind: "meta" }
      ),
      fn("formatAyahId", ID, "string", 'Formats an ayah id as `"surah:ayah"`', { from: "formatSurahAyah" })
    ]
  ],
  [
    "Validation",
    [
      fn(
        "checkValidSurahAyah",
        "surah: unknown, ayah: unknown",
        "asserts ayah is AyahNo",
        "Throws unless surah and ayah form a valid reference",
        { from: "validation" }
      ),
      fn(
        "checkValidSurahAyahPair",
        "pair: [unknown, unknown]",
        "asserts pair is SurahAyah",
        "Throws unless `[surah, ayah]` is a valid reference",
        { from: "validation" }
      ),
      fn(
        "checkValidSurah",
        "surah: unknown",
        "asserts surah is Surah",
        "Throws unless the value is a valid surah number",
        { bind: "meta", from: "validation" }
      ),
      fn(
        "checkValidAyahId",
        "ayahId: unknown",
        "asserts ayahId is AyahId",
        "Throws unless the value is a valid ayah id",
        { bind: "meta", from: "validation" }
      ),
      fn("checkValidPage", "page: unknown", "asserts page is Page", "Throws unless the value is a valid page number", {
        bind: "meta",
        from: "validation"
      }),
      fn("checkValidJuz", "juz: unknown", "asserts juz is Juz", "Throws unless the value is a valid juz number", {
        bind: "meta",
        from: "validation"
      }),
      fn("checkValidRuku", "ruku: unknown", "asserts ruku is Ruku", "Throws unless the value is a valid ruku number", {
        bind: "meta",
        from: "validation"
      }),
      fn(
        "checkValidManzil",
        "manzil: unknown",
        "asserts manzil is Manzil",
        "Throws unless the value is a valid manzil number",
        { bind: "meta", from: "validation" }
      ),
      fn("isValidSurah", "x: unknown", "x is Surah", "Checks whether the value is a valid surah number", {
        bind: "meta",
        from: "typeGuards"
      }),
      fn("isValidAyahId", "x: unknown", "x is AyahId", "Checks whether the value is a valid ayah id", {
        bind: "meta",
        from: "typeGuards"
      }),
      fn(
        "isValidSurahAyah",
        "x: [unknown, unknown]",
        "x is SurahAyah",
        "Checks whether `[surah, ayah]` is a valid reference",
        { from: "typeGuards" }
      ),
      fn("isValidPage", "x: unknown", "x is Page", "Checks whether the value is a valid page number", {
        bind: "meta",
        from: "typeGuards"
      }),
      fn("isValidJuz", "x: unknown", "x is Juz", "Checks whether the value is a valid juz number", {
        bind: "meta",
        from: "typeGuards"
      }),
      fn("isValidManzil", "x: unknown", "x is Manzil", "Checks whether the value is a valid manzil number", {
        bind: "meta",
        from: "typeGuards"
      }),
      fn("isValidRuku", "x: unknown", "x is Ruku", "Checks whether the value is a valid ruku number", {
        bind: "meta",
        from: "typeGuards"
      }),
      fn("isValidHizb", "x: unknown", "x is HizbId", "Checks whether the value is a valid hizb number", {
        bind: "meta",
        from: "typeGuards"
      }),
      fn(
        "isValidRubAlHizb",
        "x: unknown",
        "x is RubAlHizbId",
        "Checks whether the value is a valid rub' al-hizb number",
        { from: "typeGuards" }
      )
    ]
  ],
  [
    "Surah and ayah",
    [
      fn("getSurahMeta", S, "SurahMeta", "Returns the metadata of a surah"),
      fn(
        "getSurahInfo",
        S,
        "SurahInfo",
        "Returns `[firstAyahId, ayahCount, surahOrder, rukuCount, name, isMeccan]` for a surah"
      ),
      fn("getAyahCountInSurah", S, "AyahNo", "Returns the number of ayahs in a surah"),
      fn("findAyahIdBySurah", SA, "AyahId", "Converts `surah:ayah` to an ayah id"),
      fn("findSurahByAyahId", ID, "Surah", "Returns the surah an ayah id belongs to"),
      fn("findSurahAyahByAyahId", ID, "SurahAyah", "Converts an ayah id to `[surah, ayah]`"),
      fn("getAyahMeta", ID, "AyahMeta", "Returns everything known about an ayah: juz, page, ruku, sajdah, ..."),
      fn("getAyahMetasForSurah", S, "AyahMeta[]", "Returns getAyahMeta for every ayah of a surah")
    ]
  ],
  [
    "Juz",
    [
      fn("findJuz", SA, "Juz", "Returns the juz of `surah:ayah`"),
      fn("findJuzByAyahId", ID, "Juz", "Returns the juz of an ayah id"),
      fn("getJuzMeta", "juz: Juz", "JuzMeta", "Returns the first and last ayah of a juz"),
      fn("findJuzMetaBySurah", SA, "SurahJuzMeta", "Returns the juz boundaries around `surah:ayah`"),
      fn(
        "findJuzAndShift",
        SA,
        "JuzAndShift",
        "Returns the juz of `surah:ayah` and the distance from the juz start to the surah start",
        {
          from: "findJuzAndShift"
        }
      ),
      fn("findJuzAndShiftByAyahId", ID, "JuzAndShift", "Like findJuzAndShift, for an ayah id", {
        from: "findJuzAndShift"
      })
    ]
  ],
  [
    "Page",
    [
      fn("findPage", SA, "Page", "Returns the mushaf page of `surah:ayah`"),
      fn("findPagebyAyahId", ID, "Page", "Returns the mushaf page of an ayah id"),
      fn("getPageMeta", "page: Page", "PageMeta", "Returns the first and last ayah of a page")
    ]
  ],
  [
    "Manzil and ruku",
    [
      fn("findManzil", SA, "Manzil", "Returns the manzil of `surah:ayah`"),
      fn("findManzilByAyahId", ID, "Manzil", "Returns the manzil of an ayah id"),
      fn("getManzilMeta", "manzil: Manzil", "ManzilMeta", "Returns the first and last ayah of a manzil"),
      fn("findRukuByAyahId", ID, "Ruku", "Returns the ruku of an ayah id"),
      fn("getRukuMeta", "ruku: Ruku", "RukuMeta", "Returns the first and last ayah of a ruku")
    ]
  ],
  [
    "Rub' al-hizb",
    [
      fn("findRubAlHizb", SA, "RubAlHizbId", "Returns the rub' al-hizb (quarter) of `surah:ayah`"),
      fn("findRubAlHizbByAyahId", ID, "RubAlHizbId", "Returns the rub' al-hizb (quarter) of an ayah id"),
      fn("getRubAlHizbByAyahId", ID, "RubAlHizb", "Returns juz, hizb and quarter numbers of an ayah id"),
      fn(
        "getRubAlHizbMeta",
        "quarterIndex: RubAlHizbId",
        "RubAlHizbMeta",
        "Returns the first and last ayah of a rub' al-hizb"
      ),
      fn(
        "getRubAlHizbMetaByAyahId",
        ID,
        "RubAlHizbMeta",
        "Returns the rub' al-hizb containing an ayah id, with its first and last ayah"
      )
    ]
  ],
  [
    "Thumun al-hizb",
    [
      fn("findThumunAlHizb", SA, "ThumunAlHizbId", "Returns the thumun al-hizb (eighth) of `surah:ayah`", {
        thumun: true
      }),
      fn("findThumunAlHizbByAyahId", ID, "ThumunAlHizbId", "Returns the thumun al-hizb (eighth) of an ayah id", {
        thumun: true
      }),
      fn("getThumunAlHizbByAyahId", ID, "ThumunAlHizb", "Returns juz, hizb, quarter and eighth numbers of an ayah id", {
        thumun: true
      }),
      fn(
        "getThumunAlHizbMeta",
        "eighthIndex: ThumunAlHizbId",
        "ThumunAlHizbMeta",
        "Returns the first and last ayah of a thumun al-hizb",
        {
          thumun: true
        }
      ),
      fn(
        "getThumunAlHizbMetaByAyahId",
        ID,
        "ThumunAlHizbMeta",
        "Returns the thumun al-hizb containing an ayah id, with its first and last ayah",
        {
          thumun: true
        }
      )
    ]
  ],
  [
    "Ranges and iteration",
    [
      fn(
        "findRangeAroundAyah",
        "ayahId: AyahId, mode: RangeMode",
        "AyahRange",
        "Returns the ayah range of the juz/page/surah/... around an ayah id"
      ),
      fn(
        "findRangeAroundSurahAyah",
        "surah: Surah, ayah: AyahNo, mode: RangeMode",
        "AyahRange",
        "Returns the ayah range of the juz/page/surah/... around `surah:ayah`"
      ),
      fn(
        "getPartRange",
        "type: PartType, num: number",
        "AyahRange",
        "Returns `[firstAyahId, lastAyahId]` of a surah, juz, page, manzil, ruku or hizb part",
        {
          from: "ayahsInPart"
        }
      ),
      fn(
        "ayahsInPart",
        "type: PartType, num: number",
        "Generator<SurahAyah, void, undefined>",
        "Iterates over every `[surah, ayah]` in a part of the Quran",
        {
          from: "ayahsInPart"
        }
      ),
      fn(
        "ayahsInPage",
        "page: Page",
        "Generator<SurahAyah, void, undefined>",
        "Iterates over every `[surah, ayah]` on a page",
        { from: "ayahsInPart" }
      ),
      fn(
        "ayahsInJuz",
        "juz: Juz",
        "Generator<SurahAyah, void, undefined>",
        "Iterates over every `[surah, ayah]` in a juz",
        { from: "ayahsInPart" }
      ),
      fn(
        "isAyahJuzFirst",
        ID,
        "number",
        "Returns the juz number if the ayah id starts a juz, a negative number otherwise"
      ),
      fn(
        "isAyahPageFirst",
        ID,
        "number",
        "Returns the page number if the ayah id starts a page, a negative number otherwise"
      ),
      fn(
        "isSurahAyahJuzFirst",
        "surah: Surah, ayah: AyahNo",
        "number",
        "Returns the juz number if `surah:ayah` starts a juz, a negative number otherwise"
      ),
      fn(
        "isSurahAyahPageFirst",
        "surah: Surah, ayah: AyahNo",
        "number",
        "Returns the page number if `surah:ayah` starts a page, a negative number otherwise"
      )
    ]
  ]
]

/** Functions that do not depend on riwaya data are re-exported as they are */
const reExports: [string, string[]][] = [
  ["getRubAlHizb", ["getRubAlHizb"]],
  ["typeGuards", ["isValidAyahNo"]],
  ["ayahStringSplitter", ["string2NumberSplitter", "string2NumberSplitterStrict"]],
  ["formatSurahAyah", ["formatSurahAyah"]]
]

const typeImports = [
  "AyahId",
  "AyahMeta",
  "AyahNo",
  "AyahRange",
  "HizbId",
  "Juz",
  "JuzAndShift",
  "JuzMeta",
  "Manzil",
  "ManzilMeta",
  "Page",
  "PageMeta",
  "QuranMeta",
  "RangeMode",
  "RubAlHizb",
  "RubAlHizbId",
  "RubAlHizbMeta",
  "Ruku",
  "RukuMeta",
  "Surah",
  "SurahAyah",
  "SurahAyahSegment",
  "SurahInfo",
  "SurahJuzMeta",
  "SurahListType",
  "SurahMeta"
]
const thumunTypes = ["ThumunAlHizb", "ThumunAlHizbId", "ThumunAlHizbMeta"]

function render(r: Riwaya): string {
  const lower = r.name.toLowerCase()
  const lists = `${r.name}Lists`
  const fns = groups.map(([title, list]) => [title, list.filter((f) => !f.thumun || r.thumun)] as const)

  // Imports, grouped by source module
  const bySource = new Map<string, string[]>()
  for (const [, list] of fns) {
    for (const f of list) {
      const from = f.from ?? f.name
      bySource.set(from, [...(bySource.get(from) ?? []), f.name])
    }
  }
  const imports = [...bySource]
    .toSorted(([a], [b]) => a.localeCompare(b))
    .map(([from, names]) => `import { ${names.map((n) => `${n} as _${n}`).join(", ")} } from "./${from}"`)

  const types = [...typeImports, ...(r.thumun ? thumunTypes : [])].toSorted((a, b) => a.localeCompare(b))

  const body = fns
    .filter(([, list]) => list.length > 0)
    .map(([title, list]) => {
      const fnsCode = list.map((f) => {
        const data = f.bind === "lists" ? lists : "meta"
        const args = f.args ? `${f.args}, ${data}` : data
        const call = `_${f.name}(${args})`
        const statement = f.returns.startsWith("asserts") ? call : `return ${call}`
        return `/** ${f.doc} */\nexport function ${f.name}(${f.params}): ${f.returns} {\n  ${statement}\n}`
      })
      return `// ==================== ${title} ====================\n\n${fnsCode.join("\n\n")}`
    })

  const listNames = [
    "HizbQuarterList",
    ...(r.thumun ? ["HizbEighthList"] : []),
    "JuzList",
    "ManzilList",
    "PageList",
    "RukuList",
    "SajdaList"
  ]

  return `// Generated by scripts/generate-entries.ts - do not edit by hand.

/**
 * ${r.name} (from ${r.qari}) entry point.
 *
 * The functional API with the ${r.name} data already bound, so there is no \`lists\`
 * argument to pass. Everything is tree-shakeable.
 *
 * @example
 * \`\`\`typescript
 * import { meta, findJuz, getAyahMeta, quran } from "quran-meta/${lower}"
 *
 * meta.numAyahs // ${r.numAyahs}
 * findJuz(2, 142)
 * getAyahMeta(1)
 * quran.getSurahMeta(2) // class-based API
 * \`\`\`
 *
 * @module
 */

import { ${lists} } from "./lists/${lists}"
import type { PartBlock } from "./lists/getList"
import type { PartType, RiwayaName } from "./lists/types"
import type { AyahStepOptions } from "./nextAyah"
import type {
  ${types.join(",\n  ")}
} from "./types"
import { QuranRiwaya } from "./QuranRiwaya"
import { convertAyah as _convertAyah, convertAyahSpan as _convertAyahSpan } from "./convert/convertAyah"
import { nextAyah as _nextAyah } from "./nextAyah"
import { prevAyah as _prevAyah } from "./prevAyah"
${imports.join("\n")}

export type * from "./types"
export type { AyahStepOptions } from "./nextAyah"
export type { PartBlock } from "./lists/getList"
export type { PartType, RiwayaName } from "./lists/types"
${reExports.map(([from, names]) => `export { ${names.join(", ")} } from "./${from}"`).join("\n")}
export { ${lists} } from "./lists/${lists}"

/** ${r.name} metadata: number of ayahs, pages, juzs, ... */
export const meta: QuranMeta = ${lists}.meta

${listNames.map((l) => `export const ${l}: AyahId[] = ${lists}.${l}`).join("\n")}
export const SurahList: SurahListType = ${lists}.SurahList

${body.join("\n\n")}

// ==================== Navigation ====================

/**
 * Returns the ayah after \`surah:ayah\`. Wraps from the last ayah to 1:1 unless
 * \`{ wrap: false }\` is passed, in which case it returns \`undefined\` there.
 */
export function nextAyah(surah: Surah, ayah: AyahNo, options?: { wrap?: true }): SurahAyah
export function nextAyah(surah: Surah, ayah: AyahNo, options: AyahStepOptions): SurahAyah | undefined
export function nextAyah(surah: Surah, ayah: AyahNo, options: AyahStepOptions = {}): SurahAyah | undefined {
  return _nextAyah(surah, ayah, ${lists}, options)
}

/**
 * Returns the ayah before \`surah:ayah\`. Wraps from 1:1 to the last ayah unless
 * \`{ wrap: false }\` is passed, in which case it returns \`undefined\` there.
 */
export function prevAyah(surah: Surah, ayah: AyahNo, options?: { wrap?: true }): SurahAyah
export function prevAyah(surah: Surah, ayah: AyahNo, options: AyahStepOptions): SurahAyah | undefined
export function prevAyah(surah: Surah, ayah: AyahNo, options: AyahStepOptions = {}): SurahAyah | undefined {
  return _prevAyah(surah, ayah, ${lists}, options)
}

/** Converts a ${r.name} \`surah:ayah\` to the numbering of another riwaya */
export function convertAyahTo(surah: Surah, ayah: AyahNo, to: RiwayaName): SurahAyah {
  return _convertAyah(surah, ayah, "${r.name}", to)
}

/** Converts a ${r.name} \`surah:ayah\` to every ayah of another riwaya that shares its text */
export function convertAyahSpanTo(surah: Surah, ayah: AyahNo, to: RiwayaName): SurahAyahSegment {
  return _convertAyahSpan(surah, ayah, "${r.name}", to)
}

// ==================== Class-based API ====================

/**
 * Creates a QuranRiwaya instance for ${r.name}
 */
export function create${r.name}(): QuranRiwaya<"${r.name}"> {
  return QuranRiwaya.create<"${r.name}">(${lists})
}

/**
 * Pre-initialized QuranRiwaya instance for ${r.name}
 *
 * @example
 * \`\`\`typescript
 * import { quran } from "quran-meta/${lower}"
 *
 * quran.getAyahMeta(1)
 * quran.findJuz(2, 142)
 * \`\`\`
 */
export const quran: QuranRiwaya<"${r.name}"> = /* @__PURE__ */ create${r.name}()
`
}

const check = process.argv.includes("--check")
const oxfmt = join(root, "node_modules/.bin/oxfmt")
let stale = 0

for (const r of riwayas) {
  const file = join(root, "src", `${r.name.toLowerCase()}.ts`)
  const formatted = execFileSync(oxfmt, ["--stdin-filepath", file], { input: render(r) }).toString()
  if (check) {
    if (readFileSync(file, "utf8") !== formatted) {
      console.error(`${file} is out of date`)
      stale++
    }
  } else {
    writeFileSync(file, formatted)
  }
}

if (stale > 0) {
  console.error("Run `pnpm generate` to update the entry points")
  process.exit(1)
}
console.log(check ? "Entry points are up to date" : `Wrote ${riwayas.length} entry points`)
