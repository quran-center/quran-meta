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
      "https://play.vuejs.org/#eNrdVs1u4zYQfhVCKGAbsKRsXKStobib3S7QLOA03W170mFpiZIZU5RKUt44hp6gvfbcV+wjdDiUFCnNegv01ostzs83Mx+HQx69q6oK9jXzll6kE8UrQwSV+WXsGR17q1jyoiqVIbG3NabSyzBMUhnc6ZQJvleBZCaUVRG+rGWZaB2qWhpesNjrHY9EsWxOkrKoasNS0pBMlQWZQMzJwKhghs5JxmV6S3M2Jzkz72tFt2uUJ1uW7H6hgqcovDrQrTO2X9fpqwOKneht/dAH+RXE0rfY/pZmGgL2Ic2hYhC3dXRBHdqcAIRb3JRzZ2HTeAYVAKPQ0QZUwaKlUDNTV0+IjGVSSg06i0cuLS0RYq+mi1mnpBC01bn4q+k5KGMpmCEVJAnKjsrIJr2aTmfkctUzN0X4YE9FDQVZOPc9AxSLgWqsZgDUl9ihDdkfIloUh2ORr9MhiCNvmM9ocz6X2B1s2wANtmAIBctTAA6CKVWqtc4HOC3EMZaEGHVwH+S5fvokvPVoSEJNsiVTNusgFGyxkoSh2v60Amh9aP4G3MadYVhRCWoYrAiJti9WP9ouIrgVt4IeclXWMo1C0DiLc7JMBNUaOqgv7FsyMeze+IqlE7JsFxvIcgIthqWQ47HtsKYhPjaxFWFfNQ3Anzt4QTdMkC7ARpTJjiCaLsILkpXSQIOnvC6cNFf04H9zdtaFcRxEXALLZO8XJcwDwMHIsYeHC5ayLjZMWT6sNdA+CkewYpb6RUo2pUqZ8s9gl4bhiN7StPwISRHFZe6/cH9cwgFzn2i5AMusTGq9RNn5cOFsR4KU56V/YdGLZV8zZB06akLk5r/SZJn/BEt2M/43JOEq5Xuoj2eDXgXTrpKuZYEVaMW+mW07gqPDcwhMaDZ2yxVj0v8Kc+/JxnmK1G4XFrIfaoGkBbOdPx1JLeGvgUdjVbDQs3l/TtCA6zVLEjiOcMD++vOP39Zst6MSjxgsf1/TlEo+cQdo0RYN0WvXJfgt+MrO36UFxkFtjUE4NMDTeJ2iTTtAn7GCWYcWdiKO1FHYB4x4kZOlVgnw9GF4M1OBt1OQiLJOQ0sXDXkB+YRfHLHeBj5s7OZDu5luO91GtJNn9bNmWS3IYER9Rw1tp0dr9pgLJHiDTUzKjKypfOBCYwX2igygv1vZk2pGbjhVxl5OdMrJ8jn2QckpF7tHYxeUnHKB/Rh7WMEph+/5w2bsgZJTLu/qDbkSzhO6buAKmivxL/x39T8crWjg07ZPFA6uIm/uufeQX9AKnnWlhIcg3nBxq4DHC8C6mLH35EFldZ95GT56vLwIzoKvodO0Ca0z2LqpB9dnA4kYDW+gjOdP0rBXORdM/VAZDm+kUTpUiPLjW5QZBfd2J8f7/Rn5nb53Kd8qppnaw0O11xmq4Nnj1G/e38DwGShhdNcCrE8o3zFditrm6MxewdyGtAd2mO01sgoz9if95t4wqbuibKLIBtrHHjyQX58o/THdRfBlz2LzN9BY/io=",
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
