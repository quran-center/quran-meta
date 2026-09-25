# Quran Meta

Quran metadata for JavaScript and TypeScript: surahs, ayahs, juz, hizb, rub' al-hizb, thumun al-hizb, mushaf pages, rukus, manzils and sajdas for eight riwayas, with conversion between their ayah numberings.

|                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Project**       | [![Static Badge](https://img.shields.io/badge/Quran-Meta-brightgreen)](https://github.com/quran-center/quran-meta) [![Documentation](https://img.shields.io/badge/Documentation-blue)](https://quran-center.github.io/quran-meta/docs/) [![Live demo](https://img.shields.io/badge/Live-demo-0c6b5d)](https://quran-center.github.io/quran-meta/) [![GitHub License](https://img.shields.io/github/license/quran-center/quran-meta)](https://github.com/quran-center/quran-meta/blob/master/LICENSE) [![GitHub top language](https://img.shields.io/github/languages/top/quran-center/quran-meta)](https://github.com/quran-center/quran-meta)                                     |
| **Package**       | [![NPM Version](https://img.shields.io/npm/v/quran-meta)](https://www.npmjs.com/package/quran-meta) [![GitHub package.json version](https://img.shields.io/github/package-json/v/quran-center/quran-meta)](https://github.com/quran-center/quran-meta/blob/master/package.json) [![NPM Type Definitions](https://img.shields.io/npm/types/quran-meta)](https://npmpackage.info/package/quran-meta) [![Node version](https://img.shields.io/node/v/quran-meta)](https://www.npmjs.com/package/quran-meta) [![Module type](https://img.shields.io/badge/module-ESM%20only-informational)](https://www.npmjs.com/package/quran-meta)                                                  |
| **Build & tests** | [![CI](https://github.com/quran-center/quran-meta/actions/workflows/ci.yml/badge.svg)](https://github.com/quran-center/quran-meta/actions/workflows/ci.yml) [![Docs site](https://github.com/quran-center/quran-meta/actions/workflows/pages.yml/badge.svg)](https://github.com/quran-center/quran-meta/actions/workflows/pages.yml) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=quran-center_quran-meta&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=quran-center_quran-meta) [![Snyk Security Score](https://img.shields.io/badge/Snyk%20Security%20Score-A-green)](https://snyk.io/test/github/quran-center/quran-meta) |
| **Usage**         | [![NPM Downloads](https://img.shields.io/npm/dy/quran-meta)](https://npm.chart.dev/quran-meta) [![jsDelivr hits](https://img.shields.io/jsdelivr/npm/hm/quran-meta)](https://www.jsdelivr.com/package/npm/quran-meta) [![GitHub Repo stars](https://img.shields.io/github/stars/quran-center/quran-meta)](https://github.com/quran-center/quran-meta) [![npms.io popularity](https://img.shields.io/npms-io/popularity-score/quran-meta)](https://npmpackage.info/package/quran-meta)                                                                                                                                                                                              |
| **Scores**        | [![npms.io final](https://img.shields.io/npms-io/final-score/quran-meta)](https://npmpackage.info/package/quran-meta) [![npms.io quality](https://img.shields.io/npms-io/quality-score/quran-meta)](https://npmpackage.info/package/quran-meta) [![npms.io maintenance](https://img.shields.io/npms-io/maintenance-score/quran-meta)](https://npmpackage.info/package/quran-meta) [![GitHub last commit](https://img.shields.io/github/last-commit/quran-center/quran-meta)](https://github.com/quran-center/quran-meta/commits/master) [![GitHub issues](https://img.shields.io/github/issues/quran-center/quran-meta)](https://github.com/quran-center/quran-meta/issues)        |
| **Size**          | [![npm bundle size](https://img.shields.io/bundlephobia/min/quran-meta)](https://bundlephobia.com/package/quran-meta) [![npm bundle size (gzip)](https://img.shields.io/bundlephobia/minzip/quran-meta)](https://bundlephobia.com/package/quran-meta) [![GitHub repo size](https://img.shields.io/github/repo-size/quran-center/quran-meta)](https://github.com/quran-center/quran-meta) [![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/quran-center/quran-meta)](https://github.com/quran-center/quran-meta)                                                                                                                                     |

**[Live demo](https://quran-center.github.io/quran-meta/)** · **[API reference](https://quran-center.github.io/quran-meta/docs/)** · **[Changelog](./CHANGELOG.md)**

## Features

- **Eight riwayas**: Hafs, Shuba, Warsh, Qalun, Douri, Sousi, Bazzi and Qunbul, each with its own tree-shakeable entry point.
- **Every division of the mushaf**: juz, hizb, rub' al-hizb, thumun al-hizb (Qalun), pages, rukus, manzils and sajdas.
- **Riwaya conversion**: find the ayah in Warsh that holds the text of Hafs 2:255, and the other way round.
- **Iteration**: walk every ayah of a page, juz, ruku or any other part.
- **Parsing and formatting**: `"2:255"` and `"1:1-7"` to tuples and back.
- **Your own data**: swap in a different page layout (Indo-Pak, 13/15/16 line mushafs) with `customizeRiwaya`.
- **Surah names in 12 languages**, including Arabic, loadable one language at a time.
- **Typed to the range**: `Surah` is `1 | 2 | ... | 114`, `Juz` is `1 ... 30`, with type guards and assertion functions.
- **Zero dependencies**, ESM, works in browsers, Node, Deno and Bun.

## Install

```sh
npm i quran-meta     # or: pnpm add quran-meta / yarn add quran-meta / bun add quran-meta
```

The package is ESM-only and needs Node 22 or newer. On Node 22.12+ `require("quran-meta")` also works, since Node can `require()` ES modules.

In the browser without a bundler:

```html
<!-- ES module -->
<script type="module">
  import { quran } from "https://cdn.jsdelivr.net/npm/quran-meta/+esm"
  console.log(quran.getSurahMeta(2).ayahCount) // 286
</script>

<!-- Classic script, exposes window.quranMeta -->
<script src="https://cdn.jsdelivr.net/npm/quran-meta"></script>
<script>
  console.log(quranMeta.meta.numAyahs) // 6236
</script>
```

## Quick start

Import from the entry point of the riwaya you need. Functions come with that riwaya's data already bound, and only that riwaya ends up in your bundle.

```ts
import { findJuz, findPage, getAyahMeta, getSurahMeta, meta, nextAyah, quran } from "quran-meta/hafs"

meta.numAyahs // 6236
findJuz(2, 142) // 2
findPage(2, 255) // 42
getSurahMeta(2).ayahCount // 286
getAyahMeta(262) // { surah: 2, ayah: 255, juz: 3, page: 42, hizbId: 5, rubAlHizbId: 17, ruku: 35, isSajdahAyah: false, ... }

nextAyah(1, 7) // [2, 1]
nextAyah(114, 6) // [1, 1], wraps around by default
nextAyah(114, 6, { wrap: false }) // undefined

// The same API as a class
quran.getSurahMeta(2).name // "البَقَرَة"
```

The entry points are `quran-meta/hafs`, `/shuba`, `/warsh`, `/qalun`, `/douri`, `/sousi`, `/bazzi` and `/qunbul`. Each exports `meta`, the raw lists (`PageList`, `JuzList`, ...), all functions, `create<Riwaya>()` and a ready-made `quran` instance.

The root `quran-meta` entry has the riwaya-agnostic functions, which take the riwaya data as their last argument. Use it when you work with several riwayas at once:

```ts
import { QuranRiwaya, findJuz, getListsOfRiwaya } from "quran-meta"

const warsh = getListsOfRiwaya("Warsh")
findJuz(2, 142, warsh)

const qalun = QuranRiwaya.create(getListsOfRiwaya("Qalun"))
qalun.findThumunAlHizb(2, 1) // thumun al-hizb is Qalun-only, other riwayas get a type error
```

## Supported riwayas

| Riwaya | Narrated from (qari) | Entry point         | Ayahs | Sajdas |
| ------ | -------------------- | ------------------- | ----- | ------ |
| Hafs   | 'Asim                | `quran-meta/hafs`   | 6236  | 15     |
| Shuba  | 'Asim                | `quran-meta/shuba`  | 6236  | 15     |
| Warsh  | Nafi'                | `quran-meta/warsh`  | 6214  | 14     |
| Qalun  | Nafi'                | `quran-meta/qalun`  | 6214  | 12     |
| Douri  | Abu 'Amr             | `quran-meta/douri`  | 6217  | 15     |
| Sousi  | Abu 'Amr             | `quran-meta/sousi`  | 6217  | 15     |
| Bazzi  | Ibn Kathir           | `quran-meta/bazzi`  | 6221  | 15     |
| Qunbul | Ibn Kathir           | `quran-meta/qunbul` | 6221  | 15     |

All riwayas have surah, juz, hizb, rub' al-hizb, page, ruku, manzil and sajda data. Qalun also has thumun al-hizb (480 eighths). See [VisualQuran](https://visualquran.com/riwayas) for background on the riwayas.

## Guide

### Converting between riwayas

Riwayas follow different ayah counting traditions, so the same text can have different numbers. In Hafs `الم` is ayah 2:1 on its own; in Warsh it opens 2:1 together with what Hafs numbers 2:2. Ayat al-Kursi (Hafs 2:255) is two ayahs in Warsh.

```ts
import { convertAyah, convertAyahSpan } from "quran-meta"

convertAyah(2, 255, "Hafs", "Warsh") // [2, 253], the Warsh ayah where Hafs 2:255 starts
convertAyahSpan(2, 255, "Hafs", "Warsh") // [2, [253, 254]], every Warsh ayah sharing its text
convertAyah(1, 1, "Warsh", "Hafs") // [1, 2], Warsh does not count the basmala

// From a riwaya entry point the source riwaya is implied
import { convertAyahTo } from "quran-meta/warsh"
convertAyahTo(2, 253, "Hafs") // [2, 255]
```

The conversion table is generated by aligning the text of each riwaya with the Hafs text (KFQC data, quranpedia for Bazzi and Qunbul) and is checked against the ayah counts of every riwaya. Riwayas from the same qari (Warsh/Qalun, Douri/Sousi, Bazzi/Qunbul, Hafs/Shuba) come out identical, which is a useful cross-check since Warsh and Qalun come from separate source files.

### Iterating over a part

```ts
import { ayahsInPage, ayahsInPart, getPartRange } from "quran-meta/hafs"

for (const [surah, ayah] of ayahsInPage(604)) {
  // 112:1 ... 114:6
}
const juzAmma = [...ayahsInPart("juz", 30)] // 564 [surah, ayah] pairs
getPartRange("ruku", 1) // [1, 7], first and last ayah id
```

Part types are `"surah"`, `"juz"`, `"rubAlHizb"`, `"thumunAlHizb"`, `"page"`, `"manzil"` and `"ruku"`.

### Parsing and formatting references

```ts
import { ayahStringSplitter, formatSurahAyah, formatAyahId, surahStringParser } from "quran-meta/hafs"

ayahStringSplitter("2:255") // [2, 255]
ayahStringSplitter("18:1-10") // [18, [1, 10]]
ayahStringSplitter("2:280-290") // throws RangeError, Al-Baqarah has 286 ayahs
formatSurahAyah([18, [1, 10]]) // "18:1-10"
formatAyahId(262) // "2:255"
surahStringParser("36") // 36
```

### Surah names

```ts
import { getSurahName, getSurahNames, languages } from "quran-meta/i18n"

getSurahName(2) // ["Al-Baqara", "The Cow"]
getSurahName(2, "ar") // ["البَقَرَة", "البقرة"], with and without tashkeel
getSurahNames("fr")[1] // ["Al Fâtiha", "L'ouverture"]
languages // ["en", "ar", "az", "ru", "tr", "uz", "kk", "fr", "lt", "tg", "ky", "bs"]
```

To ship only the language you need, load it on demand. Each language is its own chunk:

```ts
import { getSurahNamesAsync } from "quran-meta/i18n/async"

const names = await getSurahNamesAsync("ru")
```

### Validation and types

Every number type is a union of its valid values, so `Surah` is `1 | 2 | ... | 114`. Type guards narrow `unknown` input and assertion functions throw on bad input:

```ts
import { checkValidSurahAyah, getAyahCountInSurah, isValidSurah } from "quran-meta/hafs"

function handle(input: unknown) {
  if (isValidSurah(input)) {
    getAyahCountInSurah(input) // input is Surah here
  }
}

const ayah: unknown = 255
checkValidSurahAyah(2, ayah) // throws RangeError unless 2:ayah exists; afterwards ayah is AyahNo
```

### Custom data and page layouts

`customizeRiwaya` starts from a built-in riwaya, replaces some lists and recalculates the counts in `meta`. Use it for a different mushaf page layout or your own juz or ruku divisions:

```ts
import { QuranRiwaya, customizeRiwaya, getListsOfRiwaya } from "quran-meta"

// Boundary lists hold the first ayah id of each part: [0, part1, part2, ..., numAyahs + 1]
const indoPak = customizeRiwaya(getListsOfRiwaya("Hafs"), { PageList: myIndoPakPageList })
const quran = QuranRiwaya.create(indoPak)
quran.meta.numPages // the length of your page list
quran.findPage(2, 255)
```

The result is checked with `validateRiwayaData`, which you can also call yourself; it reports lists that are out of order, do not start at ayah 1 or do not end after the last ayah.

## API reference

The full reference is at **[quran-center.github.io/quran-meta/docs](https://quran-center.github.io/quran-meta/docs/)**, grouped by topic: class API, surah and ayah, navigation, juz, page, hizb, manzil and ruku, ranges and iteration, parsing and formatting, validation, riwaya conversion, riwaya data and surah names.

## Upgrading from v6

- The package is **ESM-only**. `lib_cjs/` and `lib_es/` are gone. On Node 22.12+ `require("quran-meta")` still works. The IIFE bundle is now `dist/quran-meta.iife.js` and is minified; the separate `.min.js` builds are gone (jsDelivr serves minified files on request).
- Node 22 or newer is required.
- `getSurahNamesAsync` moved to `quran-meta/i18n/async` so that it can load languages lazily.
- In the root functional API, `ayah` is now a required argument of `findJuz`, `findJuzMetaBySurah`, `findManzil`, `findPage`, `findRubAlHizb` and `findThumunAlHizb` (it used to default to 1 before the `lists` argument). Riwaya entry points and the class keep the default.
- The Qalun entry exports `QalunLists` instead of `riwayaLists`, like every other entry.
- `QuranRiwaya` thumun al-hizb methods exist only on Qalun instances at the type level and no longer claim to return `null`.
- `ayahStringSplitter` now checks both ends of a range against the surah (`"2:280-290"` used to pass).
- `languages` includes `"ar"`, so code that builds a `SurahNamesI18n` object needs an Arabic entry.

## Terminology

- **Surah**: a chapter of the Quran. There are 114.
- **Ayah**: a verse, numbered within its surah.
- **AyahId**: the position of an ayah counted from the start of the Quran (1 to 6236 in Hafs), independent of the surah.
- **Juz**: one of 30 parts of roughly equal length. [More](https://en.wikipedia.org/wiki/Juz%27)
- **Hizb**: half a juz, 60 in total.
- **Rub' al-hizb (maqra)**: a quarter of a hizb, 240 in total, marked in most mushafs with **۞**. [More](https://en.wikipedia.org/wiki/Rub_el_Hizb)
- **Thumun al-hizb**: an eighth of a hizb, 480 in total, used in North African mushafs. Qalun is the riwaya with this data here.
- **Manzil**: one of 7 portions for reading the Quran in a week. [More](https://en.wikipedia.org/wiki/Manzil)
- **Page**: a page of the mushaf. The built-in data follows the 604-page Madinah mushaf for each riwaya.
- **Sajdah**: an ayah of prostration. Hafs has 15.
- **Ruku**: a thematic section of a surah, marked with **ع**. Hafs has 556.
- **Qira'at and riwayat**: the ten recognised readings are each named after a qari, and each is transmitted through riwayat (narrations). Hafs from 'Asim is the most widely used; Warsh and Qalun from Nafi' are common in North and West Africa. The differences are mostly pronunciation and a few word forms, but they also change how ayahs are counted. [More](https://en.wikipedia.org/wiki/Qira%27at)

## Data sources and verification

`pnpm verify` checks the lists against these sources, and `pnpm verify:lists` cross-checks them against the quranpedia dumps they were generated from:

- `qcloud-meta.json`: [AlQuran Cloud API metadata](https://api.alquran.cloud/v1/meta)
- `tanzil-data.js`: [Tanzil.net metadata](https://tanzil.net/res/text/metadata/quran-data.js)
- `quran-api.json`: [Quran API metadata](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api/info.json)
- `hafsData_v2-0.json`, `hafs_smart_v8.json`: [KFGQPC Hafs font data](https://download.qurancomplex.gov.sa/resources_dev/UthmanicHafs_v2-0.zip)
- `SousiData_v2-0.json`: [KFGQPC Sousi font data](https://download.qurancomplex.gov.sa/resources_dev/UthmanicSousi_v2-0.zip)
- `DouriData_v2-0.json`: [KFGQPC Douri font data](https://download.qurancomplex.gov.sa/resources_dev/UthmanicDouri_v2-0.zip)
- `QalounData_v2-1.json`: [KFGQPC Qaloun font data](https://download.qurancomplex.gov.sa/resources_dev/UthmanicQaloun_v2-1.zip)
- `shubaData_v2-0.json`: [KFGQPC Shuba font data](https://download.qurancomplex.gov.sa/resources_dev/UthmanicShuba_v2-0.zip)
- `warshData_v2-1.json`: [KFGQPC Warsh font data](https://download.qurancomplex.gov.sa/resources_dev/UthmanicWarsh_v2-1.zip)
- `data/quranpedia/*.json`: [quranpedia.net](https://quranpedia.net) dumps for all eight riwayas, the source of the generated lists in `src/lists/`

KFQC publishes no data for Bazzi and Qunbul, so their lists are checked against each other (both are from Ibn Kathir and must match). Known differences with the KFQC data (a few juz boundaries in Douri and Sousi, some page breaks) are listed in the check scripts under `examples/data-check/`.

## Development

```sh
pnpm install
pnpm check          # format, lint, types, generated files and tests, the same as CI
pnpm dev            # tests in watch mode
pnpm build          # dist/ via tsdown
pnpm generate       # regenerate the riwaya entry points and the conversion table
pnpm docs:site      # build the landing page and API reference into _site/
pnpm verify         # check the data against external sources
```

Riwaya entry points (`src/hafs.ts`, ...) are generated by `scripts/generate-entries.ts` and the conversion table by `examples/data-check/generate-ayah-map.ts`; CI fails if either is out of date. A pre-commit hook (installed by `pnpm install`) runs formatting, lint, type and test checks.

## Projects using quran-meta

- [Koran Center](https://koran.center): a web application for reading and studying the Quran.
- [Visual Quran](https://visual.koran.center/): interactive visualisations of the structure of the Quran.

## Demos

- [Live demo](https://quran-center.github.io/quran-meta/): look up any ayah in any riwaya and see it converted to the others.
- [Quran Meta Visualiser ESM Alpine 3](https://codesandbox.io/p/sandbox/quran-visualiser-esm-alpine-3-q89frt): interactive charts of the Quran's structure with Alpine.js 3 and Chart.js 4.
- [Quran Meta Visualiser ES module version](https://codesandbox.io/s/quran-visualiser-es-module-f0sq0): the Alpine.js 2 and Chart.js 2 version.

![Demo image](https://raw.githubusercontent.com/quran-center/quran-meta/master/examples/demo-quran-visualiser.jpg)

## References

- [Tanzil.net](https://tanzil.net)
- [Quran.com JS API](https://github.com/quran/api-js), [Quran.com API](https://api-docs.quran.com/)
- [AlQuran Cloud](https://alquran.cloud/api)
- [KFQC data](https://qurancomplex.gov.sa/en/techquran/dev/)
- [Quranpedia](https://quranpedia.net)

## License

MIT
