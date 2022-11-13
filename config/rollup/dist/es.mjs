import typescript from "@rollup/plugin-typescript"
import { terser } from "rollup-plugin-terser"
import banner from "../../banner.cjs"

import { DIST_UNIVERSAL as outDir, SRC } from "../../const.mjs"

export default {
  input: `${SRC}/index.ts`,
  plugins: [
    typescript({      
      removeComments:true,
      // outDir: `./${outDir}`,
      module: "ESNext", //"None", "CommonJS", "AMD", "System", "UMD", "ES6", "ES2015" or "ESNext"
      target: "ESNext", //"ES3"  "ES5" "ES6"/"ES2015" "ES2016" "ES2017" "ES2018" "ES2019" "ES2020" "ESNext"
    }),
  ],
  output: [{
    file: `${outDir}/quran-meta.esm.browser.js`,
    // dir: outDir,
    format: "es",
    name: "quranMeta",
    // sourcemap: false,
    banner: banner,
  },
  {
    file: `${outDir}/quran-meta.esm.browser.min.js`,
    // dir: outDir,
    format: "es",
    name: "quranMeta",
    // sourcemap: false,
    banner: banner,
    plugins: [terser({  output: {comments:false}})],
  },]
}
