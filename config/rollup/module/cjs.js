import typescript from "@rollup/plugin-typescript"
import banner from "../../banner"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"

import { DIST_MODULE_CJS as outDir, SRC } from "../../const"

export default {
  input: `${SRC}/index.ts`,
  plugins: [
    resolve(),
    commonjs() ,
    // commonjs({ extensions: ['.js', '.ts'] }) ,
    typescript({
      module: "CommonJS", //"None", "CommonJS", "AMD", "System", "UMD", "ES6", "ES2015" or "ESNext"
      target: "ES5", //"ES3"  "ES5" "ES6"/"ES2015" "ES2016" "ES2017" "ES2018" "ES2019" "ES2020" "ESNext"
      outDir: `./${outDir}`,
    }),
  ],
  output: {
    // file: `${outDir}/index.js`,
    dir: outDir,
    format: "cjs",
    name: "quranMeta",
    sourcemap: false,
    banner: banner,
  },
}
