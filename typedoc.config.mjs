import { readFileSync } from "node:fs"

const pkg = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf8"))

/** @type {import("typedoc").TypeDocOptions} */
export default {
  name: "quran-meta",
  entryPoints: ["./src/index.ts", "./src/i18n/index.ts", "./src/i18n/async.ts"],
  out: "_site/docs",
  plugin: ["typedoc-github-theme"],
  readme: "./README.md",
  hideGenerator: true,
  customFooterHtml: `quran-meta v${pkg.version}`,
  navigationLinks: {
    Home: "https://quran-center.github.io/quran-meta/",
    Surahs: "https://quran-center.github.io/quran-meta/surahs.html",
    Playground:
      "https://play.vuejs.org/#eNrdVu9u2zYQfxVCKGAHsCQ3HlLUcLymXYGlgLOs3fpJQEtLtMyYojSScuIYeoLt6z7vFfcIOx5lhcpSb0C/FQFi8f787u7H45H74KKqom3Ngmkw06nilSGCyvw8CYxOgnkieVGVypA9UWw1ImlZVLVhGWnISpUFGYDroDMarI2p9DSO00xGNzpjgm9VJJmJZVXEr2pZplrHqpaGF9bNQy+YoSOy4jK7pjkbkZyZD7Wi6wXK0zVLNx+p4BkKL3Z07Yzt12X2eodiJ3pX33fZ/QZiGVrscE1X2g9pdhWDuK2jC+rQRgQg3OKqHDkLm8YTqAA4ix1tQBUsWgo1M3X1iMhEpqXUoLN45NzyOUPs+XByclBSCNrqXPz58BSUiRTMkAqSBOVhD2Y26flweELO5x1zQ4SPtlTUUJCFc98ngGIxUI3VeEBdiQc0n30f0aI4HIt8mfkgjjw/n97m/FdiN7BtHhpsgQ8Fy2MADoIpVaqFzj2cFmKfSEKM2rkP8lQ/fRHeejQkpSZdkyE7OUAo2GIlCUO1/dcKkgD+ZANu/c4wrKgENQxWhMzWz+c/2y4iuBXXgu5yVdYym8WgcRanZJoKqjV0UFfY92Rg2J0JFcsGZNoulpDlAFoMSyH7fdthTUNCbGIrwr5qGoA/dfCCLpkghwBLUaYbgmi6iM/IqpQGGjzjdeGkuaK78OV4fAjjOJhxCSyTbViUcNYBByMnAR4uWMq6WDJl+bDWQHsvHMGKWRYWGVmWKmMqHMMu+eGIXtOsvIWkiOIyD5+7Hy7hgLlPtJyA5apMaz1F2am/cLY9QcbzMjyz6MW0qxmyjh01MXLztTRZ5r/Akt2Mb4YkXGV8C/XxlderYHqo5NCywAq0YtfMth3B0eE5BCY067vlijEZvsDcO7JxniK164mF7IZaJGnBbOcPe1JL+Bvg0VgVLPTJqDsnaMD1gqUpHEc4YH//9efvC7bZUIlHDJZ/LGhGJR+4AzRpi4botesS/BZ8bufv1ALjoLbGIPQN8DReZmjTDtAnrGDWoYWdiD31LO4CzniRk6lWKfD02b91uRa04Km9dG9LtYnxrop5ARnp+NkeS24+Pdvb8E1Uyfxzu6duV91+tANo/qtmq1oQb1L9QA1th0hr9pAS5HmFvUzKFVlQec+FxkLsTRlBm7eyR0X13HC49L2c6JiTpbXvg5JjLnar+i4oOeYC29L3sIJjDj/y+2XfAyXHXN7XS3IhnCc0n+cKmgvxP/w39b8crcjzabtoFns3UjAK3LMoLGgFL7dSwnsQL7qkVcAbBmBdzCR49K6yuiQ4+vh78Hj1IhpHY+g0bWLrDLZu+MEt2kAiRsNTaMXzR2nYG50Lpn6qDIenUi8dKkR5+w5lRsH1fZDjNf+E/EbfuZSvFdNMbVkSdDpDFbx+nPrthyuYQZ4SJngtwPqI8j3Tpahtjs7sNYxvSNuzw2wvkVUYtb/ot3eGSX0oyiaKbKB9EsAD+82R0h/SnUTfeSx+2jJlMYHASXQWjUOVRi+t3OiPnQbk0SRo/gFo7w4s",
    GitHub: "https://github.com/quran-center/quran-meta",
    npm: "https://www.npmjs.com/package/quran-meta",
    npmx: "https://npmx.dev/package/quran-meta"
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
