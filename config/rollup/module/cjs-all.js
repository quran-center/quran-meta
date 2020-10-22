import typescript from "@rollup/plugin-typescript"
import glob from "glob"
// import commonjs from "@rollup/plugin-commonjs"
// import resolve from "@rollup/plugin-node-resolve"
import { DIST_MODULE_CJS as outDir, SRC } from "../../const"

function modulesPaths() {
  const paths = glob.sync(SRC + "/**/*.[jt]s", {
    ignore: [SRC + "/types.ts", SRC + "/index.ts"],
  })
  return paths
}

export default {
  input: modulesPaths(),
  plugins: [
    typescript({
      outDir: `./${outDir}`,
      module: "ES2015", //"None", "CommonJS", "AMD", "System", "UMD", "ES6", "ES2015" or "ESNext"
      target: "ES5", //"ES3"  "ES5" "ES6"/"ES2015" "ES2016" "ES2017" "ES2018" "ES2019" "ES2020" "ESNext"
    }),
    // commonjs(),
    // resolve(),
  ],
  output: {
    dir: outDir,
    format: "cjs",
    sourcemap: false,
    chunkFileNames: "internal/[name].js",
  },
}
