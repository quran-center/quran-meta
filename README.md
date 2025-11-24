Quran Meta
==========

[![Static Badge](https://img.shields.io/badge/Quran-Meta-brightgreen)](https://github.com/quran-center/quran-meta)
[![Static Badge](https://img.shields.io/badge/Documentation-blue)](https://quran-center.github.io/quran-meta/docs/)

[![GitHub License](https://img.shields.io/github/license/quran-center/quran-meta)](https://github.com/quran-center/quran-meta/blob/master/LICENSE) 
[![GitHub Repo stars](https://img.shields.io/github/stars/quran-center/quran-meta)](https://github.com/quran-center/quran-meta)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/quran-center/quran-meta)](https://github.com/quran-center/quran-meta/blob/master/package.json)


[![NPM Version](https://img.shields.io/npm/v/quran-meta)](https://www.npmjs.com/package/quran-meta) 
[![npms.io](https://img.shields.io/npms-io/final-score/quran-meta)](https://npmpackage.info/package/quran-meta)
[![npms.io](https://img.shields.io/npms-io/maintenance-score/quran-meta)](https://npmpackage.info/package/quran-meta)
[![npms.io](https://img.shields.io/npms-io/popularity-score/quran-meta)](https://npmpackage.info/package/quran-meta)
[![npms.io](https://img.shields.io/npms-io/quality-score/quran-meta)](https://npmpackage.info/package/quran-meta)
[![NPM Downloads](https://img.shields.io/npm/dy/quran-meta)](https://npm.chart.dev/quran-meta)

[![NPM Type Definitions](https://img.shields.io/npm/types/quran-meta)](https://npmpackage.info/package/quran-meta)
[![GitHub top language](https://img.shields.io/github/languages/top/quran-center/quran-meta)](https://npmpackage.info/package/quran-meta)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=quran-center_quran-meta&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=quran-center_quran-meta)
[![Static Badge](https://img.shields.io/badge/Snyk%20Security%20Score-A-green)](https://snyk.io/test/github/quran-center/quran-meta)


[![GitHub repo size](https://img.shields.io/github/repo-size/quran-center/quran-meta)](https://npmpackage.info/package/quran-meta)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/quran-center/quran-meta)](https://npmpackage.info/package/quran-meta)
[![npm bundle size](https://img.shields.io/bundlephobia/min/quran-meta)](https://bundlephobia.com/package/quran-meta)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/quran-meta)](https://bundlephobia.com/package/quran-meta)



## Welcome to Quran Meta Project - the most comprehensive Quran metadata library!

This project is to help with Quran related meta queries. 

Answering Questions like:

* How many ayahs in given surah of Hafs Riwaya or Warsh or Qalun (`getAyahCountinSurah`)
* What is the juz of given ayah (`getAyahMeta`)?
* What is the next ayah after given ayah (`nextAyah`)?
* Is given ayah 
  * a sajdah ayah (`getAyahMeta`)?
  * beginnning of a page (`isAyahPageFirst`)? 
  * beginnning of a juz (`isAyahJuzFirst`)?
* Find 
  * next or previous ayah (`nextAyah`/`prevAyah`)
  * juz `findJuz` and `findJuzByAyahId`
  * maqra/rub-el-hizb `findRubAlHizb`, `getRubAlHizbMetaByAyahId`
  * page `findPage` by surah/ayah
  * AyahId of a given surah/ayah (`findAyahIdBySurah`)
  * find range around ayah (`findRangeAroundAyah`)
* Get meta data for
  * ayah  (`getAyahMeta`)
  * surah  (`getSurahInfo`, `getSurahInfo`)
  * page  (`getPageMeta`)
  * juz  (`findJuzMetaBySurah`)
  * maqra/rub-el-hizb  (`getRubAlHizbMeta`, `getRubAlHizbMetaByAyahId`)
* Validates ayah/surah id (`checkValidAyahId`,`checkValidSurah`, `checkValidSurahAyah`, etc) 
* Typescript type guards (`isValidAyahId`, `isValidAyahNo`, `isValidSurah`, `isValidSurahAyah`, `isValidJuz`, `isValidHizb`, `isValidRubAlHizb`, `isValidPage`)
* converts `[surah, ayah]` to `ayahId` and vice-verse ( `findSurahByAyahId` and  `findAyahIdBySurah`) 
* Checks and turns strings of type "x:y" or "x:y1-y2" to surah/ayah range (`ayaStringSplitter`).
* Checks and parses strings of type "x"  to Surah (`surahStringParser`).

### Features
* Supports multiple riwayas (Hafs, Qalun, Warsh are ready. Douri, Shuba, Sousi are on the way) with riwaya-specific data and features.
* Type-safe riwaya-specific methods (e.g., Qalun's Thumun al-Hizb).
* Custom riwaya instances for advanced use cases. If you want to use quran-meta  library with your own data (e.g another riwaya or different pagination than we support) just create your own instance of QuranRiwaya with your data.
* Fully documented with examples.
* 100% unit test covered with data correctness validation against multiple data sources.
* Fully typed with Typescript types and type guards.
* Zero dependencies, lightweight and fast.
* Works in both browser and Node.js environments.
* Compatible with modern JavaScript and TypeScript projects.
* Supports modern module systems (ESM, CommonJS, IIFE).
* Open source and community driven.
* Easy to use API with both functional and class-based approaches.
* Tree-shakeable riwaya-specific imports for optimal bundle size.
* Supports various build systems and bundlers.
* Comprehensive error handling and input validation.
* Suitable for a wide range of Quran-related applications.
* Modular and extensible architecture.
* Clear and consistent naming conventions.
* Rich set of utility functions for Quranic metadata.
* Easy integration with other Quranic libraries and tools.
* Actively maintained and updated.
* Actively seeks community feedback and contributions.

### Upcoming Features
* Supports multiple mushaf page numbering systems (planned for future updates).
* More riwayas and recitations (planned for future updates).
* Enhanced performance optimizations (planned for future updates).
* Additional utility functions (planned for future updates).
* Community contributions and plugins (Submissions welcome).
* Support for additional languages and locales .
* Improved documentation and tutorials.
* Interactive online tools and demos (please, submit in issues).
* More data sources for cross-validation (please, suggest in discussions).

### Future Roadmap

* Integration with Quran text rendering libraries.
* Collaboration with Quranic studies platforms.
* Integration with Quranic search engines.
* Advanced analytics and reporting features.
* Community-driven feature requests and voting.


### APi Reference Documentation

See [here](https://quran-center.github.io/quran-meta/docs/) for API documentation

### Playground

See in action and try it without installing anything:

* [![Static Badge](https://img.shields.io/badge/Try-Playground-darkgreen)](https://play.vuejs.org/#eNrdVs1u4zYQfhVCKGAbsKRsXKStobib3S7QLOA03W170mFpiZIZU5RKUt44hp6gvfbcV+wjdDiUFCnNegv01ostzs83Mx+HQx69q6oK9jXzll6kE8UrQwSV+WXsGR17q1jyoiqVIbG3NabSyzBMUhnc6ZQJvleBZCaUVRG+rGWZaB2qWhpesNjrHY9EsWxOkrKoasNS0pBMlQWZQMzJwKhghs5JxmV6S3M2Jzkz72tFt2uUJ1uW7H6hgqcovDrQrTO2X9fpqwOKneht/dAH+RXE0rfY/pZmGgL2Ic2hYhC3dXRBHdqcAIRb3JRzZ2HTeAYVAKPQ0QZUwaKlUDNTV0+IjGVSSg06i0cuLS0RYq+mi1mnpBC01bn4q+k5KGMpmCEVJAnKjsrIJr2aTmfkctUzN0X4YE9FDQVZOPc9AxSLgWqsZgDUl9ihDdkfIloUh2ORr9MhiCNvmM9ocz6X2B1s2wANtmAIBctTAA6CKVWqtc4HOC3EMZaEGHVwH+S5fvokvPVoSEJNsiVTNusgFGyxkoSh2v60Amh9aP4G3MadYVhRCWoYrAiJti9WP9ouIrgVt4IeclXWMo1C0DiLc7JMBNUaOqgv7FsyMeze+IqlE7JsFxvIcgIthqWQ47HtsKYhPjaxFWFfNQ3Anzt4QTdMkC7ARpTJjiCaLsILkpXSQIOnvC6cNFf04H9zdtaFcRxEXALLZO8XJcwDwMHIsYeHC5ayLjZMWT6sNdA+CkewYpb6RUo2pUqZ8s9gl4bhiN7StPwISRHFZe6/cH9cwgFzn2i5AMusTGq9RNn5cOFsR4KU56V/YdGLZV8zZB06akLk5r/SZJn/BEt2M/43JOEq5Xuoj2eDXgXTrpKuZYEVaMW+mW07gqPDcwhMaDZ2yxVj0v8Kc+/JxnmK1G4XFrIfaoGkBbOdPx1JLeGvgUdjVbDQs3l/TtCA6zVLEjiOcMD++vOP39Zst6MSjxgsf1/TlEo+cQdo0RYN0WvXJfgt+MrO36UFxkFtjUE4NMDTeJ2iTTtAn7GCWYcWdiKO1FHYB4x4kZOlVgnw9GF4M1OBt1OQiLJOQ0sXDXkB+YRfHLHeBj5s7OZDu5luO91GtJNn9bNmWS3IYER9Rw1tp0dr9pgLJHiDTUzKjKypfOBCYwX2igygv1vZk2pGbjhVxl5OdMrJ8jn2QckpF7tHYxeUnHKB/Rh7WMEph+/5w2bsgZJTLu/qDbkSzhO6buAKmivxL/x39T8crWjg07ZPFA6uIm/uufeQX9AKnnWlhIcg3nBxq4DHC8C6mLH35EFldZ95GT56vLwIzoKvodO0Ca0z2LqpB9dnA4kYDW+gjOdP0rBXORdM/VAZDm+kUTpUiPLjW5QZBfd2J8f7/Rn5nb53Kd8qppnaw0O11xmq4Nnj1G/e38DwGShhdNcCrE8o3zFditrm6MxewdyGtAd2mO01sgoz9if95t4wqbuibKLIBtrHHjyQX58o/THdRfBlz2LzN9BY/io=) - interactive playground for Quran-Meta

### Installation

#### In a browser:

```html
<script src="quran-meta.js"></script>
```
Also modern browsers allow 
```html
<script type="module">
import quranMeta from "quran-meta.esm.js"
</script>
```

The library is available from various CDNs
* [JSDelivr](https://cdn.jsdelivr.net/npm/quran-meta/dist/) 
* [UnPKG](https://unpkg.com/browse/quran-meta/dist/)

#### Using npm:
```
$ npm i --save quran-meta
```


### Usage

**Tree-Shakeable Riwaya-Specific Imports (Recommended)**

For optimal bundle size, import from riwaya-specific entry points. This ensures only the data you need is bundled:

```typescript
// Hafs-specific import (only Hafs data bundled, ~50% smaller)
import { getAyahMeta, findJuz, meta, quran } from "quran-meta/hafs"

console.log(`Total ayahs: ${meta.numAyahs}`) // 6236

// Using functional API (Hafs is default)
const ayahMeta = getAyahMeta(1)
console.log(ayahMeta.juz) // => 1

// Using class API
const next = quran.nextAyah(1, 7)
console.log(next) // => [2, 1]
```

```typescript
// Qalun-specific import (only Qalun data bundled)
import { getAyahMeta, findThumunAlHizb, meta, quran } from "quran-meta/qalun"

console.log(`Total ayahs: ${meta.numAyahs}`) // 6214
console.log(`Thumun al-Hizbs: ${meta.numThumunAlHizbs}`) // 480

// Qalun-specific features available
const thumun = findThumunAlHizb(1, 1)
console.log(thumun) // => 1

const ayahMeta = getAyahMeta(1)
console.log(ayahMeta.thumunAlHizbId) // Available in Qalun!
```

**Benefits of riwaya-specific imports:**
- ✅ **50% smaller bundle** - only loads the riwaya you need
- ✅ **Zero configuration** - works immediately, no initialization required
- ✅ **Tree-shakeable** - unused riwayas are eliminated by bundlers
- ✅ **Type-safe** - full TypeScript support with correct types per riwaya
- ✅ **Future-proof** - easily add new riwayas without breaking changes

**Class-Based API**

For generic code that works with multiple riwayas, use the class-based API:

```typescript
import { QuranRiwaya } from "quran-meta"

// Create a Hafs instance
const hafs = QuranRiwaya.hafs()

// Get surah metadata
const surahMeta = hafs.getSurahMeta(2)
console.log(surahMeta.name) // => 'البَقَرَة'
console.log(surahMeta.ayahCount) // => 286

// Find juz information
const juz = hafs.findJuz(2, 1)
console.log(juz) // => 1

// Check if ayah is first in juz
const isFirst = hafs.isAyahJuzFirst(149)
console.log(isFirst) // => 2

// Get ayah metadata
const ayahMeta = hafs.getAyahMeta(1)
console.log(ayahMeta) // => { surah: 1, ayah: 1, juz: 1, page: 1, ... }

// Navigation
const next = hafs.nextAyah(1, 7)
console.log(next) // => [2, 1]

// Use Qalun riwaya for Thumun al-Hizb support
const qalun = QuranRiwaya.qalun()
const thumun = qalun.findThumunAlHizb(1, 1)
console.log(thumun) // => 1

// Create custom riwaya instance
const custom = QuranRiwaya.create("Hafs")
```

**Benefits of the class-based API:**
- ✓ No repetitive riwaya parameter in every function call
- ✓ Clear context with a dedicated instance
- ✓ Better IDE autocomplete and type safety
- ✓ Chainable and fluent API
- ✓ Riwaya-specific methods (e.g., Qalun's Thumun al-Hizb)

**Legacy Functional API**

The original functional API is still available for backward compatibility:

In Node.js see example [here](/examples/hello.cjs):

```js
var quranMeta = require("quran-meta")

console.log(" Assalam Aleykum! ") // => 'Assalam Aleykum!'
console.log(`There are ${quranMeta.meta.numSurahs} suras in the Holy Quran`) // => 'There are 114 suras in the Holy Quran'

```
In the browser/ES:
```js
import { meta } from "quran-meta"
console.log("Assalam Aleykum!")
console.log(`There are ${meta.numSurahs} suras in the Holy Quran`) // => 'There are 114 suras in the Holy Quran'
```

In TypeScript:

```ts
import { meta, getAyahCountinSurah, AyahNo, Surah } from "quran-meta"

console.log(`There are ${meta.numSurahs} suras in the Holy Quran`)

for (let surah: Surah = 1; surah <= meta.numSurahs; surah++) {
  const ayaCount = getAyahCountinSurah(surah)
  console.log(surah, ': ',ayaCount)
}
```

Here's a paragraph describing this major feature:

## Custom Riwaya Support - Build Your Own!

**quran-meta** now supports **custom riwaya instances**, allowing you to use the library with your own Quranic data sources. Whether you're working with a different recitation style (riwaya) not yet included in the library, using an alternative pagination system (like different mushaf layouts with 13, 15, or 16 lines per page), or integrating region-specific Quranic metadata, you can now create your own `QuranRiwaya` instance with your custom data. Simply prepare your data in the required format (Lists structure with SurahList, JuzList, PageList, etc.) and instantiate the library with `QuranRiwaya.create(riwayaName, customMeta, customLists)`. 

All 40+ methods will work seamlessly with your data—including navigation (`nextAyah`, `prevAyah`), metadata queries (`getAyahMeta`, `getSurahInfo`), and advanced features (juz/page/ruku lookups). This opens up possibilities for researchers, developers working with regional mushaf standards, digital Quran applications targeting specific communities, and anyone needing Quranic metadata for specialized use cases. 

The library's architecture is designed to be data-agnostic—just plug in your data and everything works! For guidance on data structure requirements, see the [API documentation](https://quran-center.github.io/quran-meta/docs/) or examine the existing riwaya implementations (Hafs, Qalun, Warsh) as reference examples.

We are commited to expanding support for more riwayas and pagination systems in future releases. Meanwhile, we welcome contributions from the community to help build a richer ecosystem of Quranic metadata.

### Terminology

* Surah: A chapter of the Quran. There are 114 chapters in Quran, each of different length.
* Ayah: A verse number in the particular surah (chapter) of Quran. it is relative to the surah.
* AyahId: Unique identifier for a verse in the Quran. It is a number that is the concatenation of the of sum ayahs of previous chapters of Quran and the verse number of particular Ayah. There are 6236 ayahs in Quran. AyahId is absolute, positive and is not relative to any surah.

* *Juz*: A section of the Quran. There are 30 Juz (ajza) in Quran of roughly equal length. Most Juz' are named after the first word of the first verse of the Juz'. Read more [here](https://en.wikipedia.org/wiki/Juz%27)
* *Hizb*: Each Juz' is divided into two Hizb  (lit. "two groups", plural: Aḥzāb). Therefore, there are 60 Hizbs (ahzab) in the Quran.
* *Rub-el-Hizb/Maqra*: Each Hizb is subdivided into four quarters called Maqra  (lit. "reading"), making eight quarters per Juz. In Arabic, `rub` means 'one-fourth' or 'quarter', while `ḥizb` (plural aḥzāb) translates to 'a group'. There are 240 Maqras in the Quran. In most mushafs it is noted by symbol in the shape of an octagram, represented as two overlapping squares **۞**. Read more [here](https://en.wikipedia.org/wiki/Rub_el_Hizb)
* *Thumun al-Hizb*: Specific to Qalun riwaya, each Hizb is further divided into eight equal parts called Thumun al-Hizb (lit. "one-eighth of a Hizb"). This results in a total of 480 Thumun al-Hizbs in the Quran. This subdivision allows for more granular reading and recitation segments, facilitating easier memorization and study. Read more [here](https://en.wikipedia.org/wiki/Thumun_al-Hizb)
* *Manzil*: For the convenience of those who read the Quran in a week the text may be divided into seven portions. Each portion is called a Manzil. There are 7 Manzil in Quran. Read more [here](https://en.wikipedia.org/wiki/Manzil)
* *Page*: A section of the Quran that contains 15 lines (Madina mushaf)(depends on the mushaf).
* *Saajdah*: Special ayahs that require reader to prostrate. There are 15 of them in Quran.
* *Ruku*: (paragraph) is a group of related verses in a Surah. The end of a Ruku’ is marked by the Arabic letter **ﻉ** in superscript. There are 558 Rukus in the Quran. These are logical sections according to similar theme/objective or meaning. The bigger Surahs have been split into a number of Rukus, so that we would recognize when to do Ruku' (bowing) in Salat without interrupting a proceeding subject of the Quran. Additionally, on the margins of the Quran, usually three figures are written with **ﻉ**. The top figure shows the number of Rukus completed in that Surah. The middle figure shows the number of Ayats in the Ruku just completed. The bottom figure shows the number of Rukus completed in that Juz.
* *Qira'at (Recitations) and Riwayat (Narrations)*: The Quran has been transmitted through different authentic modes of recitation, known as Qira'at.
        There are ten recognized Qira'at, each named after a prominent reciter (Qari).
        Within each Qira'at, there are multiple Riwayat (narrations) - the chains of transmission through which these recitations were preserved.
        The most widely used today is the *Hafs from 'Asim* narration, which is used throughout most of the Muslim world and forms the basis for all visualizations on this website.
        Other well-known narrations include *Warsh from Nafi'* (common in North and West Africa) and *Qalun from Nafi'* (used in parts of Africa).
        While the variations between these narrations are minor (mostly involving pronunciation, elongation, or slight differences in word forms),
        they can occasionally affect verse counts and word statistics. Read more [here](https://en.wikipedia.org/wiki/Qira%27at)
        
### Examples
You can find some examples [here](https://quran-center.github.io/quran-meta/examples/) and souce code for them [here](https://github.com/quran-center/quran-meta/tree/master/examples)



### Projects using Quran-meta

* [Koran-Center](https://koran.center) - Powerful and feature rich  web application for reading and studying the Holy Quran.
* [Visual Quran](https://visual.koran.center/) - Interactive platform with visualizations and insights into Quran's structure.

### Demo
* [Quran Meta Visualiser ESM Alpine3](https://codesandbox.io/p/sandbox/quran-visualiser-esm-alpine-3-q89frt) - demo app showcasing number of methods from Quran-meta to build interactive visualisations of Quran structure using Alpine.js 3 & Chart.js 4 in ESM format.

* [Quran Meta Visualiser ES module version](https://codesandbox.io/s/quran-visualiser-es-module-f0sq0) - Alpine.js 2& ChartJs.2 version of the previous demo

* [Quran Meta Visualiser CJS](https://codesandbox.io/s/quran-visualiser-p3zjd) - CommonJS version of the previous demo


![Demo image](https://quran-center.github.io/quran-meta/examples/demo-quran-visualiser.jpg)

### Data correctness and validity testing

Quran-Meta is 100% unit test covered and moreover data is cross checked with other apis to guarantee absolute correctness. 

One can run `pnpx jiti examples/data-check` to run suite of  validation tests against the following data sources

* `qcloud-meta.json` - [AlQuran Cloud Api metadata](https://api.alquran.cloud/v1/meta) 
* `tanzil-data.js` - [Tanzil.net  metadata](https://tanzil.net/res/text/metadata/quran-data.js) 
* `quran-api.json` - [Quran Api metadata](https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api/info.json) 
* `hafsData_v2-0.json` - [Data coming with KFGQPC Hafs Uthmanic font](https://download.qurancomplex.gov.sa/resources_dev/UthmanicHafs_v2-0.zip)
* `hafs_smart_v8.json` - [Data coming with KFGQPC Smart device UthmanicHafs font](https://download.qurancomplex.gov.sa/resources_dev/UthmanicHafs_v2-0.zip)
* `SousiData_v2-0.json` - [Data coming with KFGQPC Sousi Uthmanic font](https://download.qurancomplex.gov.sa/resources_dev/UthmanicSousi_v2-0.zip)
* `DouriData_v2-0.json` - [Data coming with KFGQPC Douri Uthmanic font](https://download.qurancomplex.gov.sa/resources_dev/UthmanicDouri_v2-0.zip)
* `QalounData_v2-1.json` - [Data coming with KFGQPC Qaloun Uthmanic font](https://download.qurancomplex.gov.sa/resources_dev/UthmanicQaloun_v2-1.zip)
* `shubaData_v2-0.json` - [Data coming with  KFGQPC Shuba Uthmanic font](https://download.qurancomplex.gov.sa/resources_dev/UthmanicShuba_v2-0.zip)
* `warshData_v2-1.json` - [Data coming with KFGQPC Warsh Uthmanic font](https://download.qurancomplex.gov.sa/resources_dev/UthmanicWarsh_v2-1.zip)

There are some differences with KFQC data in page numbering, due to variations between different mushafs. We plan to address these differences in future updates by supporting multiple page numbering systems of different mushafs (15 line, 16 line and etc).

Any suggestion to further improve this are welcome.

### Distributions and Downloads

Here you can find the following

|||
|--|--|
|[Source code](https://github.com/quran-center/quran-meta/tree/master/src) in typescript  | TS |
| [Javascript code](https://cdn.jsdelivr.net/npm/quran-meta/lib_es/) autotranspiled from TS as ES Next  | ESNext |
|[Javascript code](https://cdn.jsdelivr.net/npm/quran-meta/lib_cjs/) autotranspiled from TS as CJS|ES5+CommonJS|
|||
 **[Distributions](https://cdn.jsdelivr.net/npm/quran-meta/dist/) of library as**| | 
| [ESM](https://cdn.jsdelivr.net/npm/quran-meta/dist/index.js) for use with modern bundlers like webpack 2 or Rollup  and  for direct imports in modern browsers via `<script type="module">`| ES5+ESM |
| [IIFE](https://cdn.jsdelivr.net/npm/quran-meta/dist/index.iife.js) for use with classic browsers  via `<script>`| IIFE |




### References:

* [Tanzil.net](https://tanzil.net) 
* [Quran.com Js Api](https://github.com/quran/api-js), [Quran.com API](https://api-docs.quran.com/), 
* [AlQuran Cloud](https://alquran.cloud/api)
* [KFQC Data](https://qurancomplex.gov.sa/en/techquran/dev/)

### License
This software is distributed under MIT license.