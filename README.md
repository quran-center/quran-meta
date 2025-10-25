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



## Welcome to Quran Meta Project

This project is to help with Quran related meta queries. 

Answering Questions like:

* How many ayahs in given surah (`getAyahCountinSurah`)
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
* Validates ayah/surah id (`checkValidAyahId`,`checkValidSurah`, `checkValidSurahAyah`) 
* Typescript type guards (`isValidAyahId`, `isValidAyahNo`, `isValidSurah`, `isValidSurahAyah`, `isValidJuz`, `isValidHizb`, `isValidRubAlHizb`, `isValidPage`)
* converts `[surah, ayah]` to `ayahId` and vice-verse ( `findSurahByAyahId` and  `findAyahIdBySurah`) 
* Checks and turns strings of type "x:y" or "x:y1-y2" to surah/ayah range (`ayaStringSplitter`).
* Checks and parses strings of type "x"  to Surah (`surahStringParser`).

### APi Reference Documentation

See [here](https://quran-center.github.io/quran-meta/docs/) for API documentation

### Playground

See in action and try it without installing anything:

* [![Static Badge](https://play.vuejs.org/#eNrdVs1u4zYQfhVCKGAbsKwkbreoobib3S7QLOA03W170mFpiZYZU5RKUt44hp6gvfbcV+wjdDiUFCrNegv01ostzs83Mx+HQx6Dq6qa7WsWLIJYp4pXhggq88skMDoJlonkRVUqQ5Jga0ylF1GUZnJ2pzMm+F7NJDORrIroZS3LVOtI1dLwgiVB73gkim2mJC2LqjYsIw3ZqLIgI4g58owKZuiUbLjMbmnOpiRn5n2t6HaF8nTL0t0vVPAMhVcHunXG9us6e3VAsRO9rR/6IL+CWIYWG2L10cyhYhCy9XHxHNCUgLdb3JRTZ2EzeB4wjhxjwBIsWvY0M3X1hMNEpqXUoLN45NIyEiP2cjyfdEoKQVudi78cX4AykYIZUkGSoOxYjG3Sy/F4Qi6XPWljhJ/tqaihIAvnvieAYjFQjdV4QH2JHZpPvI9oURyORb7OfBBHnp/PYF8+l9gd7JiHBlvgQ8HyFICDYEqVaqVzD6eFOCaSEKMO7oM810qfhLceDUmpSbdkzCYdhIItVpIwVNufVgBdD33fgNuwMwwrKkENgxUh8fZ8+aPtIoJbcSvoIVdlLbM4Ao2zuCCLVFCtoYP6wr4lI8PuTahYNiKLdrGGLEfQYlgKOR7bDmsaEmITWxH2VdMA/IWDF3TNBOkCrEWZ7gii6SJ6QTalNNDgGa8LJ80VPYTfnJ11YRwHMZfAMtmHRQmjAHAwchLg4YKlrIs1U5YPaw20D8IRrJhlYZGRdakypsIz2CU/HNFbmpUfISmiuMzDc/fHJRww94mWc7DclGmtFyi78BfOdiDIeF6GLyx6sehrhqwjR02E3PxXmizzn2DJbsb/hiRcZXwP9fGN16tg2lXStSywAq3YN7NtR3B0eA6BCc2GbrliTIZfY+492ThPkdrt3EL2Q20macFs548HUkv4a+DRWBUs9GTanxM04HrF0hSOIxywv/7847cV2+2oxCMGy99XNKOSj9wBmrdFQ/TadQl+C76083dhgXFQW2MQ+gZ4Gq8ztGkH6DNWMOvQwk7EgTqO+oAxL3Ky0CoFnj74lzIVeDvNUlHWWWTpohEvIJ/oiyPW28CHjd18aDfTbafbiHbyLH/WbFML4o2o76ih7fRozR5zgQRvsIlJuSErKh+40FiBvSJn0N+t7Ek1AzecKkMvJzrlZPkc+qDklIvdo6ELSk65wH4MPazglMP3/GE99EDJKZd39ZpcCecJXee5guZK/Av/Xf0PRyvyfNr2iSPvKgqmgXsPhQWt4EVXSngD4g2XtAp4vACsi5kEj08fK/7Me/DR+OVXs/PZGTSZNhGMFnYPxm7iwdXZQBJGw/tnw/MnKdhrnAumfqgMh/fRIBUqRPnxLcqMgju7k+Pd/oz8Tt+7nG8V00zt4X3a6wxV8ORx6jfvb2DweEoY27UA6xPKd0yXorY5OrNXMLMhbc8Os71GRmG+/qTf3BsmdVeUTRTZQPskgHfx6xOlP6Y7n33Zs9j8DWMn+vo=) - interactive playground for Quran-Meta

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

### Terminology

* Surah: A chapter of the Quran. There are 114 chapters in Quran, each of different length.
* Ayah: A verse number in the particular surah (chapter) of Quran. it is relative to the surah.
* AyahId: Unique identifier for a verse in the Quran. It is a number that is the concatenation of the of sum ayahs of previous chapters of Quran and the verse number of particular Ayah. There are 6236 ayahs in Quran. AyahId is absolute, positive and is not relative to any surah.

* *Juz*: A section of the Quran. There are 30 Juz (ajza) in Quran of roughly equal length. Most Juz' are named after the first word of the first verse of the Juz'. Read more [here](https://en.wikipedia.org/wiki/Juz%27)
* *Hizb*: Each Juz' is divided into two Hizb  (lit. "two groups", plural: Aḥzāb). Therefore, there are 60 Hizbs (ahzab) in the Quran.
* *Rub-el-Hizb/Maqra*: Each Hizb is subdivided into four quarters called Maqra  (lit. "reading"), making eight quarters per Juz. In Arabic, `rub` means 'one-fourth' or 'quarter', while `ḥizb` (plural aḥzāb) translates to 'a group'. There are 240 Maqras in the Quran. In most mushafs it is noted by symbol in the shape of an octagram, represented as two overlapping squares **۞**. Read more [here](https://en.wikipedia.org/wiki/Rub_el_Hizb)
* *Manzil*: For the convenience of those who read the Quran in a week the text may be divided into seven portions. Each portion is called a Manzil. There are 7 Manzil in Quran. Read more [here](https://en.wikipedia.org/wiki/Manzil)
* *Page*: A section of the Quran that contains 15 lines (Madina mushaf)(depends on the mushaf).
* *Saajdah*: Special ayahs that require reader to prostrate. There are 15 of them in Quran.
* *Ruku*: (paragraph) is a group of related verses in a Surah. The end of a Ruku’ is marked by the Arabic letter **ﻉ** in superscript. There are 558 Rukus in the Quran. These are logical sections according to similar theme/objective or meaning. The bigger Surahs have been split into a number of Rukus, so that we would recognize when to do Ruku' (bowing) in Salat without interrupting a proceeding subject of the Quran. Additionally, on the margins of the Quran, usually three figures are written with **ﻉ**. The top figure shows the number of Rukus completed in that Surah. The middle figure shows the number of Ayats in the Ruku just completed. The bottom figure shows the number of Rukus completed in that Juz.

### Examples
You can find some examples [here](https://quran-center.github.io/quran-meta/examples/) and souce code for them [here](https://github.com/quran-center/quran-meta/tree/master/examples)



### Projects using Quran-meta

* [Koran-Center](https://koran.center) - Powerful and feature rich  web application for reading and studying the Holy Quran.

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