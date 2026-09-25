/**
 * Assembles the GitHub Pages site in _site/:
 *   _site/index.html  landing page with a live demo (from site/)
 *   _site/lib/        the built library (from dist/), imported by the demo
 *   _site/docs/       API reference, written by `pnpm docs:api` (TypeDoc)
 *
 * Usage: pnpm build && pnpm docs:site
 */

import { cpSync, existsSync, mkdirSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const out = join(root, "_site")

if (!existsSync(join(root, "dist/index.js"))) {
  console.error("dist/ is missing, run `pnpm build` first")
  process.exit(1)
}

mkdirSync(out, { recursive: true })
cpSync(join(root, "site"), out, { recursive: true })
cpSync(join(root, "dist"), join(out, "lib"), {
  filter: (src) => !src.endsWith(".d.ts"),
  recursive: true
})
console.log("Site written to _site/")
