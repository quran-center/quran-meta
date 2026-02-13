import { defineBuildConfig } from "unbuild"
import pack from "./package.json"

const banner = `/*! 
 * Quran Meta library ${pack.version}
 *
 * Released under the MIT license
 */
`

export default defineBuildConfig({
  declaration: true,
  entries: [
    "./src/index",
    {
      builder: "mkdist",
      input: "./src/",
      outDir: "./lib_es",
      format: "esm"
    },
    {
      input: "src/",
      outDir: "lib_cjs/",
      format: "cjs",
      ext: "cjs",
      declaration: false
    }
  ],

  rollup: {
    emitCJS: true,
    output: {
      banner: banner
    }
  }
  // Hooks: {
  //   "rollup:options": (ctx, option) => {
  //     Option.output?.push(
  //       {
  //         EntryFileNames: "quran-meta.js",
  //         Name: "quranMeta",
  //         Dir: "dist",
  //         Format: "umd",
  //         Banner: banner,
  //         Sourcemap: true
  //       },
  //       {
  //         EntryFileNames: "quran-meta.min.js",
  //         Name: "quranMeta",
  //         InlineDynamicImports: true,
  //         Dir: "dist",
  //         Format: "umd",
  //         Banner: banner,
  //         Compact: true
  //       }
  //     )
  //   }
  // }
})
