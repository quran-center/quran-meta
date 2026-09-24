import { defineConfig } from "tsdown/config"

const riwayas = ["bazzi", "douri", "hafs", "qalun", "qunbul", "shuba", "sousi", "warsh"]

export default defineConfig([
  {
    // ESM for bundlers, Node and <script type="module">. Entries share chunks, so
    // importing two riwayas does not ship the functional API twice.
    entry: {
      index: "src/index.ts",
      "i18n/index": "src/i18n/index.ts",
      "i18n/async": "src/i18n/async.ts",
      ...Object.fromEntries(riwayas.map((r) => [r, `src/${r}.ts`]))
    },
    format: "esm",
    platform: "neutral",
    target: "es2022",
    dts: true,
    clean: true,
    name: "esm"
  },
  {
    // Minified IIFE for a plain <script> tag, exposes `window.quranMeta`
    entry: { "quran-meta": "src/index.ts" },
    format: "iife",
    platform: "browser",
    target: "es2022",
    minify: true,
    dts: false,
    clean: false,
    name: "iife",
    outputOptions: { name: "quranMeta" }
  }
])
