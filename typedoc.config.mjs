import { readFileSync } from "node:fs"

const pkg = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf8"))

/** @type {import("typedoc").TypeDocOptions} */
export default {
  name: "quran-meta",
  entryPoints: ["./src/index.ts", "./src/i18n/async.ts"],
  out: "_site/docs",
  plugin: ["typedoc-github-theme"],
  readme: "./README.md",
  hideGenerator: true,
  customFooterHtml: `quran-meta v${pkg.version}`,
  navigationLinks: {
    Home: "https://quran-center.github.io/quran-meta/",
    GitHub: "https://github.com/quran-center/quran-meta",
    npm: "https://www.npmjs.com/package/quran-meta"
  },
  navigation: {
    compactFolders: false,
    excludeReferences: false,
    includeCategories: true,
    includeFolders: true,
    includeGroups: true
  },
  categorizeByGroup: true,
  defaultCategory: "Other",
  categoryOrder: [
    "Class API",
    "Surah & Ayah",
    "Navigation",
    "Juz",
    "Page",
    "Hizb",
    "Manzil & Ruku",
    "Ranges & Iteration",
    "Parsing & Formatting",
    "Validation",
    "Riwaya Conversion",
    "Riwaya Data",
    "Surah Names",
    "*"
  ],
  sort: ["kind", "instance-first", "alphabetical-ignoring-documents"],
  treatWarningsAsErrors: false
}
