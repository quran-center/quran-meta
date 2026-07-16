import { defineConfig } from "tsdown/config"

const exports = {
  base: "index",
  bazzi: "bazzi",
  douri: "douri",
  hafs: "hafs",
  qalun: "qalun",
  qunbul: "qunbul",
  shuba: "shuba",
  sousi: "sousi",
  warsh: "warsh"
}

export default defineConfig([
  ...Object.entries(exports).map(([name, entry]) => ({
    entry: `src/${entry}.ts`,
    exports: false,
    name,
    platform: "neutral" as const
  })),
  ...Object.entries(exports).map(([name, entry]) => ({
    entry: `src/${entry}.ts`,
    exports: false,
    minify: true,
    name,
    outExtensions: () => ({ js: ".min.js" }),
    platform: "neutral" as const
  })),
  {
    entry: "src/i18n/index.ts",
    exports: false,
    name: "i18n",
    outDir: "dist/i18n",
    platform: "neutral"
  },
  {
    entry: "src/index.ts",
    exports: false,
    format: "iife",
    name: "iife",
    outputOptions: {
      name: "quranMeta"
    }
  },
  {
    entry: "src/index.ts",
    format: "esm",
    name: "esm",
    outDir: "lib_es",
    platform: "node",
    unbundle: true
  },
  {
    entry: "src/index.ts",
    format: "commonjs",
    name: "cjs",
    outDir: "lib_cjs",
    platform: "node",
    unbundle: true
  }
])
