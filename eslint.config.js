import jsLint from "@eslint/js"
import stylistic from "@stylistic/eslint-plugin"
import globals from "globals"
import tsLint from "typescript-eslint"
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
//     baseDirectory: __dirname,
//     recommendedConfig: js.configs.recommended,
//     allConfig: js.configs.all
// });

export default [
  // config parsers
  {
    files: ["src/*.{js,mjs,cjs,ts,mts,jsx,tsx}"]
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
    }
  },
  // config envs
  {
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
  })
  //     {
  //     ignores: [
  //         "**/node_modules/",
  //         "**/dist/",
  //         "**/lib_cjs/",
  //         "**/lib_es/",
  //         "**/exampless/",
  //     ],
  // },
  // ...compat.extends(
  //     "eslint:recommended",
  //     "plugin:@typescript-eslint/recommended",
  // ), {
  //     plugins: {
  //         "@typescript-eslint": typescriptEslint,
  //     },

  // rules: {
  //     "no-undef": "error",
  //     "no-var": "error",
  //     "prefer-const": "error",
  //     "no-const-assign": "error",
  //     "one-var": ["error", "never"],
  //     "sort-imports": "off",
  //     "no-control-regex": "off",
  // },
  // }
]
