Quran Meta
==========

[![Static Badge](https://img.shields.io/badge/Quran-Meta-brightgreen)](https://github.com/quran-center/quran-meta)
[![Static Badge](https://img.shields.io/badge/Documentation-blue)](https://quran-center.github.io/quran-meta/docs/)

[![GitHub License](https://img.shields.io/github/license/quran-center/quran-meta)](https://github.com/quran-center/quran-meta/blob/master/LICENSE) 
[![GitHub Repo stars](https://img.shields.io/github/stars/quran-center/quran-meta)](https://github.com/quran-center/quran-meta)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/quran-center/quran-meta)](https://github.com/quran-center/quran-meta/blob/master/package.json)


[![NPM Version](https://img.shields.io/npm/v/quran-meta)](https://www.npmjs.com/package/quran-meta) 
[![npms.io](https://img.shields.io/npms-io/final-score/quran-meta)](https://moiva.io/?npm=quran-meta)
[![npms.io](https://img.shields.io/npms-io/maintenance-score/quran-meta)](https://moiva.io/?npm=quran-meta)
[![npms.io](https://img.shields.io/npms-io/popularity-score/quran-meta)](https://moiva.io/?npm=quran-meta)
[![npms.io](https://img.shields.io/npms-io/quality-score/quran-meta)](https://moiva.io/?npm=quran-meta)
[![NPM Downloads](https://img.shields.io/npm/dy/quran-meta)](https://npm.chart.dev/quran-meta)

[![NPM Type Definitions](https://img.shields.io/npm/types/quran-meta)](https://moiva.io/?npm=quran-meta)
[![GitHub top language](https://img.shields.io/github/languages/top/quran-center/quran-meta)](https://moiva.io/?npm=quran-meta)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=quran-center_quran-meta&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=quran-center_quran-meta)
[![Static Badge](https://img.shields.io/badge/Snyk%20Security%20Score-A-green)](https://snyk.io/test/github/quran-center/quran-meta)


[![GitHub repo size](https://img.shields.io/github/repo-size/quran-center/quran-meta)](https://moiva.io/?npm=quran-meta)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/quran-center/quran-meta)](https://moiva.io/?npm=quran-meta)
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

* [![Static Badge](https://img.shields.io/badge/Try-Playground-darkgreen)](https://play.vuejs.org/#eNrdVl9v2zYQ/yqEMMA2YElJnHWYoXhNtwJLAWdZu+1lKlBaomXGFKWRlBvH0CfYXve8r7iPsONRUqQsdQv0rS+2eH9+d/fj8ciDd1mWwa5i3tyLdKJ4aYigMruIPaNjbxFLnpeFMiT2NsaUeh6GSSqDW50ywXcqkMyEsszD55UsEq1DVUnDcxZ7neOBKLaekqTIy8qwlNRkrYqcjCDmqGeUM0OnZM1lekMzNiUZM28qRTdLlCcblmx/o4KnKLzc040ztl9X6Ys9ip3oVXXfBfkDxNK32BCri2b2JYOQjY+L54CmBLzd4rqYOgubwdOAUegYA5Zg0bCnmanKRxzGMimkBp3FIxeWkQixF+PZpFVSCNroXPzF+AyUsRTMkBKSBGXLYmSTXozHE3Kx6EgbI3ywo6KCgiyc+54AisVANVbTA+pKbNH6xPcRLYrDschXaR/EkdfPZ7AvH0vsFnashwZb0IeC5TEAB8GUKtRSZz2cBuIQS0KM2rsP8lQrfRDeetQkoSbZkDGbtBAKtlhJwlBtfxoBdD30fQ1uw84wLC8FNQxWhESb08XPtosIbsWNoPtMFZVMoxA0zuKMzBNBtYYO6gr7jowMuzO+YumIzJvFCrIcQYthKeRwaDqsromPTWxF2Fd1DfBnDl7QFROkDbASRbIliKbz8BlZF9JAg6e8yp00U3Tvf3ty0oZxHERcAstk5+cFjALAwcixh4cLlrLKV0xZPqw10D4IR7Bilvp5SlaFSpnyT2CX+uGI3tC0eA9JEcVl5p+6Py7hgLlPtJyB5bpIKj1H2Vl/4WwHgpRnhf/MoufzrmbIOnTUhMjN59Jkmf8AS3YzvhiScJXyHdTH171eBdO2krZlgRVoxa6ZbTuCo8NzCExoNnTLFGPS/wZz78jGeYrUbmYWshtqv5+/tX0/HshOUQak68m0Ox6o+fqtPVH//vP3n0u23VKJZwqWfy1pSiUfuRMza6qEcJVrC/wWfGEH7txC4mS2xiDsG+Dxu0rRppmYT1jBcEMLOwIH6ijsAkY8z8hcqwSIede/hanA6yhIRFGloeWHhjyHfMKvDlhpDR82dv2u2T23f475ZtQsftVsXQnSm0k/UEObcdGYPeQCCV5j15JiTZZU3nOhsQJ7JwbQ0I3sUTUDNxwjQy8nOuZk+Rz6oOSYi92joQtKjrnAfgw9rOCYw4/8fjX0QMkxl9fVilwK5wld13MFzaX4BP9t9T9HK+r5NO0Thb27x5t67gHk57SEJ1wh4dGHV1rcKOC1ArAuZuw9vHWs+CMPwAfj5+fBSTCDJtMmhFnC7oL8FoCby7KGLIyGF8+aZ49ysBc3F0z9VBoOL6JBLlSI4v0rlBkFt3Qrx9v8CfmtvnNJ3yimmdrBi7TTGargkePUL99cw6jpKWFQVwKsjyhfM12IyubozF7AlIa0e3aY7RVSChP1F/3yzjCp26JsosgG2scevIS/P1L6Q7qz4Lxjsf4P2aH1MA==) - interactive playground for Quran-Meta

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
* `hafsData_v2-0.json` - [Data coming with UthmanicHafs font from KFQC](https://download.qurancomplex.gov.sa/resources_dev/UthmanicHafs_v2-0.zip)
* `hafs_smart_v8.json` - [Data coming with Smart device UthmanicHafs font from KFQC](https://download.qurancomplex.gov.sa/resources_dev/UthmanicHafs_v2-0.zip)

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
|[UMD](https://cdn.jsdelivr.net/npm/quran-meta/dist/quran-meta.js)/ [UMD minified](https://cdn.jsdelivr.net/npm/quran-meta/dist/quran-meta.min.js) builds can be used directly in the browser via a `<script>` (see  [here](https://www.syntaxsuccess.com/viewarticle/iife-vs-umd) about UMD format)  | ES5+UMD |
| [CommonJS](https://cdn.jsdelivr.net/npm/quran-meta/dist/index.cjs) for use with older bundlers like browserify or webpack | ES5+CommonJS |
| [ESM](https://cdn.jsdelivr.net/npm/quran-meta/dist/index.mjs) for use with modern bundlers like webpack 2 or Rollup  and  for direct imports in modern browsers via `<script type="module">`| ES5+ESM |
  



### References:

* [Tanzil.net](https://tanzil.net) 
* [Quran.com Js Api](https://github.com/quran/api-js), [Quran.com API](https://api-docs.quran.com/), 
* [AlQuran Cloud](https://alquran.cloud/api)
* [KFGC Data](https://qurancomplex.gov.sa/en/techquran/dev/)

### License
This software is distributed under MIT license.