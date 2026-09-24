/**
 * Checks the gzipped size of each public entry point (the entry file plus every chunk it
 * imports statically) against a budget, so size regressions show up in CI.
 *
 * Usage: pnpm build && node scripts/check-size.ts
 */

import { readFileSync } from "node:fs"
import { dirname, join, relative, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { gzipSync } from "node:zlib"

const dist = join(dirname(fileURLToPath(import.meta.url)), "../dist")

/**
 * Budgets in kB (gzip, unminified ESM, before the consumer's tree-shaking), about 10%
 * above the current sizes. Raise them deliberately, not by accident.
 */
const budgets: Record<string, number> = {
  "index.js": 92,
  "hafs.js": 25,
  "warsh.js": 25,
  "qalun.js": 27,
  "i18n/index.js": 23,
  "i18n/async.js": 1,
  "quran-meta.iife.js": 50
}

const importRe = /(?:^|\n)\s*(?:import|export)\s[^;]*?from\s*["'](\.[^"']+)["']|(?:^|\n)\s*import\s*["'](\.[^"']+)["']/g

function closure(file: string, seen = new Set<string>()): Set<string> {
  if (seen.has(file)) {
    return seen
  }
  seen.add(file)
  for (const match of readFileSync(file, "utf8").matchAll(importRe)) {
    closure(resolve(dirname(file), match[1] ?? match[2]), seen)
  }
  return seen
}

let failed = false
for (const [entry, budget] of Object.entries(budgets)) {
  const files = closure(join(dist, entry))
  const size = [...files].reduce((sum, f) => sum + gzipSync(readFileSync(f)).length, 0) / 1024
  const ok = size <= budget
  failed ||= !ok
  const chunks = [...files].map((f) => relative(dist, f)).length
  console.log(
    `${ok ? "ok  " : "FAIL"} ${entry.padEnd(20)} ${size.toFixed(1).padStart(6)} kB gzip (budget ${budget} kB, ${chunks} files)`
  )
}

if (failed) {
  console.error(
    "\nAn entry point is over its size budget. If the growth is intended, raise the budget in scripts/check-size.ts."
  )
  process.exit(1)
}
