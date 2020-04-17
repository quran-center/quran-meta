import typescript from "@rollup/plugin-typescript"
import banner from "../../banner"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import { DIST_MODULE_ES as outDir, SRC } from "../../const"



export default {
  input: `${SRC}/index.ts`,
  plugins: [
    typescript({
      outDir: `./${outDir}`,
      module: "ESNext", //"None", "CommonJS", "AMD", "System", "UMD", "ES6", "ES2015" or "ESNext"
      target: "ESNext", //"ES3"  "ES5" "ES6"/"ES2015" "ES2016" "ES2017" "ES2018" "ES2019" "ES2020" "ESNext"
    }),
    resolve(),
    commonjs(),
  ],
  output: {
    // file: `${outDir}/index.js`,
    dir: outDir,
    format: "esm", // amd,cjs,es,iife,umd,system
    name: "quranMeta",
    // sourcemap: false,
    banner: banner,
  },
}
