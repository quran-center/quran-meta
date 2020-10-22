import typescript from "@rollup/plugin-typescript"
import { terser } from "rollup-plugin-terser"
import banner from "../../banner"

import { DIST_UNIVERSAL as outDir, SRC } from "../../const"

export default {
  input: `${SRC}/index.ts`,
  plugins: [
    typescript({
      // declaration: true,
      // declarationDir: `${outDir}`,
      sourceMap: true,
      removeComments:true,
      module: "ES2015",//"None", "CommonJS", "AMD", "System", "UMD", "ES6", "ES2015" or "ESNext"
      target: "ES5",//"ES3"  "ES5" "ES6"/"ES2015" "ES2016" "ES2017" "ES2018" "ES2019" "ES2020" "ESNext"
    }),
  ],
  output: [
    {
      file: `${outDir}/quran-meta.js`,
      // dir: `${outDir}`,
      format: "umd",
      name: "quranMeta",
      sourcemap: true,
      banner: banner,
    },
    {
      file: `${outDir}/quran-meta.common.js`,
      // dir: `${outDir}`,
      format: "cjs",// amd,cjs,es,iife,umd,system
      name: "quranMeta",
      sourcemap: true,
      banner: banner,
    },
     {
      file: `${outDir}/quran-meta.esm.js`,
      // dir: `${outDir}`,
      format: "es",
      name: "quranMeta",
      sourcemap: true,
      banner: banner,
    },
    {
      file: `${outDir}/quran-meta.min.js`,
      // dir:`${outDir}`,
      format: "umd",
      name: "quranMeta",
      sourcemap: false,
      banner: banner,
      plugins: [terser({  output: {comments:false}})],
    },    
  ],
}
