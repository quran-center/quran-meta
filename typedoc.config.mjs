import { createRequire } from "node:module"

const require = createRequire(import.meta.url)
const pkg = require("./package.json")

export default {
  // Comments are supported, like tsconfig.json
  entryPoints: ["./src/index.ts"],
  out: "docs",
  customFooterHtml: `v. ${pkg.version}`,
  navigationLinks: {
    API: "/modules",
    GitHub: "https://github.com/quran-center/quran-meta",
    "Koran.center": "https://koran.center"
  },
  // SidebarLinks: {
  // },
  navigation: {
    compactFolders: false,
    excludeReferences: false,
    includeCategories: true,
    includeFolders: true,
    includeGroups: true
  },
  categorizeByGroup: true
}
