import jsLint from "@eslint/js"
import tsDocLint from "eslint-plugin-tsdoc"
import tsLint from "typescript-eslint"

export default [
  // Config parsers
  {
    files: ["src/**.{js,mjs,cjs,ts,mts,jsx,tsx}"],
    languageOptions: {}
  },
  {
    files: ["examples/**.{js,mjs,cjs,ts,mts,jsx,tsx}"],
    languageOptions: {
      globals: {
        console: "readonly",
        fetch: "readonly",
        process: "readonly"
      }
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "no-console": "off",
      "no-unused-vars": "off"
    }
  },
  // Syntax rules
  jsLint.configs.recommended,
  ...tsLint.configs.recommended,

  {
    ignores: ["**/node_modules/", "**/coverage/", "**/dist/", "**/docs/", "**/lib_cjs/", "**/lib_es/"]
  },
  {
    rules: {
      // "@typescript-eslint/no-explicit-any": "off"
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports"
        }
      ]
    }
  },
  {
    files: ["tests/*.{js,mjs,cjs,ts,mts,jsx,tsx}"],
    languageOptions: {},

    rules: {
      "@typescript-eslint/no-explicit-any": "off"
    }
  },
  {
    plugins: {
      tsdoc: tsDocLint
    },
    rules: {
      "tsdoc/syntax": "warn"
    }
  }
]
