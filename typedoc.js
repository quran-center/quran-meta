import { version } from "package.json"
export default {
  // Comments are supported, like tsconfig.json
  entryPoints: ["./src/index.ts"],
  out: "docs",
  customFooterHtml: `v. ${version}`,
  navigationLinks: {
    GitHub: "https://github.com/quran-center/quran-meta"
  },
  sidebarLinks: {
    "Koran.center": "https://koran.center"
  }
}
