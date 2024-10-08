import pkg from "./package.json" assert { type: "json" }

export default {
  // Comments are supported, like tsconfig.json
  entryPoints: ["./src/index.ts"],
  out: "docs",
  customFooterHtml: `v. ${pkg.version}`,
  navigationLinks: {
    GitHub: "https://github.com/quran-center/quran-meta"
  },
  sidebarLinks: {
    "Koran.center": "https://koran.center"
  }
}
