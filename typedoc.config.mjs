import { createRequire } from "node:module"

const require = createRequire(import.meta.url)
const pkg = require("./package.json")

export default {
  // Comments are supported, like tsconfig.json
  entryPoints: ["./src/index.ts"],
  out: "docs",
  customFooterHtml: `v. ${pkg.version}`,
  navigationLinks: {
    GitHub: "https://github.com/quran-center/quran-meta",
    API: "/modules",
    "Koran.center": "https://koran.center"
  },
  // sidebarLinks: {
  // },
  navigation: {
    includeCategories: true,
    includeGroups: true,
    includeFolders: true,
    compactFolders: false,
    excludeReferences: false
  },
  categorizeByGroup: true
}
