import { defineConfig } from "tsdown/config"

export default defineConfig([
  {
    entry: "src/index.ts",
    platform: "neutral",
    name: "base",
    exports: true
  },
  {
    entry: "src/hafs.ts",
    platform: "neutral",
    name: "hafs",
    exports: true
  },
  {
    entry: "src/qalun.ts",
    platform: "neutral",
    name: "qalun",
    exports: true
  },
  {
    entry: "src/warsh.ts",
    platform: "neutral",
    name: "warsh",
    exports: true
  },
  // {
  //   entry: "src/i18n/index.ts",
  //   platform: "neutral",
  //   exports: true,
  //   name: "i18n",
  //   outDir: "dist/i18n"
  // },
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
