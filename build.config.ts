// obuild config https://github.com/unjs/obuild

import { defineBuildConfig } from "obuild/config"

export default defineBuildConfig({
  entries: [
    {
      type: "bundle",
      input: ["./src/index.ts", "./src/i18n/index.ts"]
      // outDir: "./dist",
      // minify: false,
      // stub: false,
      // rolldown: {}, // https://rolldown.rs/reference/config-options
      // dts: {}, // https://github.com/sxzz/rolldown-plugin-dts#options
    }
    // {
    //   type: "transform",
    //   input: "./src/runtime",
    //   outDir: "./dist/runtime"
    //   // minify: false,
    //   // stub: false,
    //   // oxc: {},
    //   // resolve: {}
    // }
  ],
  hooks: {
    // start: (ctx) => {},
    // end: (ctx) => {},
    // entries: (entries, ctx) => {},
    // rolldownConfig: (config, ctx) => {},
    // rolldownOutput: (output, res, ctx) => {},
  }
})
