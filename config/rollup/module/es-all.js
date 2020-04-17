import typescript from "@rollup/plugin-typescript"
import glob from "glob"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import { DIST_MODULE_ES as outDir, SRC } from "../../const"

function modulesPaths() {
  const paths = glob.sync(SRC + "/*.[jt]s", {
    // ignore: [SRC + "/index.ts"],
  })
  return [...paths, ...glob.sync(SRC + "/i18n/*.[jt]s*")]
}

export default {
  input: modulesPaths(),
  plugins: [
    json({
      namedExports: false
    }),
    typescript({
      outDir: `./${outDir}`,
      declaration: true,
      declarationMap: false,
      declarationDir: `./${outDir}/types`,
      module: "ESNext", //"None", "CommonJS", "AMD", "System", "UMD", "ES6", "ES2015" or "ESNext"
      target: "ESNext", //"ES3"  "ES5" "ES6"/"ES2015" "ES2016" "ES2017" "ES2018" "ES2019" "ES2020" "ESNext"ç
      sourceMap: true,
      // inlineSourceMap: false,
      // inlineSources: false,
    }),
    commonjs(),
    resolve(),
  ],

  output: {
    dir: outDir,
    format: "es", // amd,cjs,es,iife,umd,system
    // chunkFileNames: "internal/[name].js",
  },
}
