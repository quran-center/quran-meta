import typescript from "@rollup/plugin-typescript"
import glob from "glob"

import { DIST_MODULE_CJS as outDir, SRC } from "../../const"

function modulesPaths() {
  const paths = glob.sync(SRC + "/*.js*", {
    ignore: [SRC + "index.ts"],
  })
  return [...paths, ...glob.sync(SRC + "/*/*.js*")]
}

export default {
  input: modulesPaths(),
  plugins: [typescript({ outDir: outDir })],
  output: {
    dir: outDir,
    format: "cjs",
    chunkFileNames: "internal/[name].js",
  },
}
