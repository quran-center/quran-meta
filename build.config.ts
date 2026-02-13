// Obuild config https://github.com/unjs/obuild

import { defineBuildConfig } from "obuild/config"

export default defineBuildConfig({
  entries: [
    {
      input: ["./src/index.ts", "./src/i18n/index.ts"],
      type: "bundle"
      // OutDir: "./dist",
      // Minify: false,
      // Stub: false,
      // Rolldown: {}, // https://rolldown.rs/reference/config-options
      // Dts: {}, // https://github.com/sxzz/rolldown-plugin-dts#options
    }
    // {
    //   Type: "transform",
    //   Input: "./src/runtime",
    //   OutDir: "./dist/runtime"
    //   // minify: false,
    //   // stub: false,
    //   // oxc: {},
    //   // resolve: {}
    // }
  ],
  hooks: {
    // Start: (ctx) => {},
    // End: (ctx) => {},
    // Entries: (entries, ctx) => {},
    // RolldownConfig: (config, ctx) => {},
    // RolldownOutput: (output, res, ctx) => {},
  }
})
