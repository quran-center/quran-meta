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
  rollup: {
    emitCJS: true,
    output: {
      banner: banner
    }
  },

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
  hooks: {
    "rollup:options": (ctx, option) => {
      option.output?.push(
        {
        //   file: "dist/index.js",
          name: "quranMeta",
          dir: "dist",
          format: "umd",
          //   format: "iife",
          exports: "auto",
          preferConst: true,
          externalLiveBindings: false,
          freeze: false
        }
      )
    }
  }
})
