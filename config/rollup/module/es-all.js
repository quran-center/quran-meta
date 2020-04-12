import babel from "rollup-plugin-babel"
import json from "@rollup/plugin-json"
import glob from "glob"

import { DIST_MODULE_ES, SRC } from "../../const"

function modulesPaths() {
  const paths = glob.sync(SRC + "/*.js*", {
    ignore: [SRC + "/index.js"],
  })
  return [...paths, ...glob.sync(SRC + "/*/*.js*")]
}

export default {
  input: modulesPaths(),
  plugins: [babel(), json()],

  output: {
    dir: DIST_MODULE_ES,
    format: "es",
    chunkFileNames: "internal/[name].js",
  },
}
