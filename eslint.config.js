import jsLint from "@eslint/js"
import stylistic from "@stylistic/eslint-plugin"
import globals from "globals"
import tsLint from "typescript-eslint"

export default [
  // config parsers
  {
    files: ["src/*.{js,mjs,cjs,ts,mts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser, ...globals.node
      }
    }
  },

  // syntax rules
  jsLint.configs.recommended,
  ...tsLint.configs.recommended,
  // code style rules
  // disable legacy conflict rules about code style
  stylistic.configs["disable-legacy"],
  // you can customize or use a preset
  stylistic.configs.customize({
    indent: 2,
    quotes: "double",
    semi: false,
    commaDangle: "never"
  }),
  {
    ignores: [
      "**/node_modules/",
      "**/coverage/",
      "**/dist/",
      "**/docs/",
      "**/examples/",
      "**/lib_cjs/",
      "**/lib_es/"
    ]
  },
  {
    rules: {
      // "@typescript-eslint/no-explicit-any": "off"
    }
  },
  {
    files: ["tests/*.{js,mjs,cjs,ts,mts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
        ...globals.jest
      }
    },

    rules: {
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
]
