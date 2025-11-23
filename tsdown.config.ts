import { defineConfig } from "tsdown/config"

const exports = { hafs: "hafs", qalun: "qalun", warsh: "warsh", base: "index" }

export default defineConfig([
  ...Object.entries(exports).map(([name, entry]) => ({
    entry: `src/${entry}.ts`,
    platform: "neutral" as const,
    name,
    exports: true
  })),
  ...Object.entries(exports).map(([name, entry]) => ({
    entry: `src/${entry}.ts`,
    platform: "neutral" as const,
    name,
    minify: true,
    exports: false,
    outExtensions: () => ({ js: ".min.js" })
  })),
  {
    entry: "src/i18n/index.ts",
    platform: "neutral",
    exports: false,
    name: "i18n",
    outDir: "dist/i18n"
  },
  {
    entry: "src/index.ts",
    format: "iife",
    name: "iife",
    exports: true,
    outputOptions: {
      name: "quranMeta"
    }
  },
  {
    entry: "src/index.ts",
    format: "esm",
    name: "esm",
    platform: "node",
    outDir: "lib_es",
    unbundle: true
  },
  {
    entry: "src/index.ts",
    platform: "node",
    format: "commonjs",
    name: "cjs",
    outDir: "lib_cjs",
    unbundle: true
  }
]
)
