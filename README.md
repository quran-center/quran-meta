Quran Meta
==========

![Static Badge](https://img.shields.io/badge/Quran-Meta-brightgreen) 
![GitHub License](https://img.shields.io/github/license/quran-center/quran-meta) 
![GitHub Repo stars](https://img.shields.io/github/stars/quran-center/quran-meta)
![GitHub package.json version](https://img.shields.io/github/package-json/v/quran-center/quran-meta) 


![NPM Version](https://img.shields.io/npm/v/quran-meta) 
![npms.io](https://img.shields.io/npms-io/final-score/quran-meta)
![npms.io](https://img.shields.io/npms-io/maintenance-score/quran-meta)
![npms.io](https://img.shields.io/npms-io/popularity-score/quran-meta)
![npms.io](https://img.shields.io/npms-io/quality-score/quran-meta)
![NPM Downloads](https://img.shields.io/npm/dy/quran-meta)

![NPM Type Definitions](https://img.shields.io/npm/types/quran-meta)
![GitHub top language](https://img.shields.io/github/languages/top/quran-center/quran-meta)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=quran-center_quran-meta&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=quran-center_quran-meta)

![GitHub repo size](https://img.shields.io/github/repo-size/quran-center/quran-meta)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/quran-center/quran-meta)
![npm bundle size](https://img.shields.io/bundlephobia/min/quran-meta)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/quran-meta)



## Welcome to Quran Meta Project

This project is to help with Quran related meta queries. 

Answering Questions like:

* How many ayahs in given sura (`getAyahCountinSurah`)
* Is given aya 
  * a sajdah ayah (`getAyahMeta`)?
  * beginnning of a page (`isAyahPageFirst`)? 
  * beginnning of a juz (`isAyahJuzFirst`)?
* Find 
  * next or previous ayah (`nextAyah`/`prevAyah`)
  * juz `findJuz` and `findJuzByAyaid`
  * hizb `findRubAlHizb`, `getRubAlHizbMetaByAyaid`
  * page `findPage` by surah/aya
  * Ayaid of a given surah/aya (`findAyaidBySurah`)
  * find range around ayah (`findRangeAroundAyah`)
* Get meta data for
  * ayah  (`getAyahMeta`)
  * surah  (`getSurahMeta`)
  * page  (`getPageMeta`)
  * juz  (`findJuzMetaBySurah`)
  * maqra/rub-el-hizb  (`getRubAlHizbMeta`, `getRubAlHizbMetaByAyaid`)
* Validates ayah/surah id (`checkValidAyahId`,`checkValidSurah`, `checkValidSurahAyah`) 
* converts `[surah,aya]` to `ayaId` and vice-verse ( `findSurahByAyaid` and  `findAyaidBySurah`) 
* Checks and turns strings of type "x:y" or "x:y1-y2" to surah/aya range `ayaStringSplitter`.

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
console.log(`There are ${quranMeta.meta.numSuras} suras in the Holy Quran`) // => 'There are 114 suras in the Holy Quran'

```
In the browser/ES:
```js
import { meta } from "quran-meta"
console.log("Assalam Aleykum!")
console.log(`There are ${meta.numSuras} suras in the Holy Quran`) // => 'There are 114 suras in the Holy Quran'
```

In TypeScript:

```ts
import { meta, getAyahCountinSurah, AyahNo, Surah } from "quran-meta"

console.log(`There are ${meta.numSuras} suras in the Holy Quran`)

for (let surah: Surah = 1; surah <= meta.numSuras; surah++) {
  const ayaCount = getAyahCountinSurah(surah)
  console.log(surah, ': ',ayaCount)
}
```

### Terminology

* Surah: A chapter of the Quran. There are 114 chapters in Quran, each of different length.
* Aya: A verse number in the particular surah (chapter) of Quran. it is relative to the surah.
* Ayaid: Unique identifier for a verse in the Quran. It is a number that is the concatenation of the of sum ayahs of previous chapters of Quran and the verse number of particular Aya. There are 6236 ayahs in Quran. AyaId is absolute and is not relative to any surah.

* *Juz*: A section of the Quran. There are 30 Juz in Quran of roughly equal length.
* *Hizb*: Each Juz' is divided into two Hizb. Therefore, there are 60 Hizbs in the Quran.
* *Rub-el-Hizb/Maqra*: Each Hizb is subdivided into four quarters called Maqra, making eight quarters per Juz. In Arabic, `rub` means 'one-fourth' or 'quarter', while `ḥizb` (plural aḥzāb) translates to 'a group'. There are 240 Maqras in the Quran.
* *Manzil*: For the convenience of those who read the Quran in a week the text may be divided into seven portions. Each portion is called a Manzil. There are 7 Manzil in Quran.
* *Page*: A section of the Quran that contains 15 lines (Madina mushaf)(depends on the mushaf).
* *Saajdah*: Special ayahs that require reader to prostrate. There are 15 of them in Quran.


### APi Reference Documentation

See [here](https://quran-center.github.io/quran-meta/docs/) for API documentation

### Examples
You can find some examples [here](https://quran-center.github.io/quran-meta/examples/) and souce code for them [here](https://github.com/quran-center/quran-meta/tree/master/examples)


### Playground

* [Quran Meta Playground](https://play.vuejs.org/#eNrdVk2T0zgQ/StdvpCpGsfDzBZbm8qkFnY5DFWws8vCyRfFbjsaZMnoI0xI+b/TkmwnhhAO3LjMWE/dr1+31K3sk+dtO986TBbJ0hSat3aVS960SlvIk421rVlkWVHK+YMpUfCtnku0mWyb7E8nVWFMpp20vME8GR33oLG6hEI1rbNYQgeVVg08oThPcrnMxkC0iN9g0Lr2EHoPDVp2CRWX5T2rkcg2WHx4zwQv3zrNNs93bBO36YuXL3YBjcgr93mI+JFQmXouCpzLQklDsbwp3HqRs5uLAWXE2IPXBOZSoIWWYhM4ZDKbXcDtalQ1C0zzLROOFHqC+H1B/t7bI3flaf9j2T/ieXCfT5NQpud8ozdqrfRrU39Lsc8lgNW7+AGnavxdeu/RQcFssYEZXgwUms5RS8Cw7f/0AN0Ouh8duU2P32LTCmaRVgDLzdPVv/7E4DWdGNwLtqu1crJcZrQTLa6hEMyY2zyx+GjTNWnJk1XQC/t9f7ZdByl4+R4KB9t1xHEdOQRboxhp1kIVHyCQmSZ7BpWSlm5MyV0T0VqzXfrH1dUQJia65JJKCdu0UdQXxBMi5wnYXYu0lK5Zo/ZJe2uq7SQchLSwTJsS1kqXqNMrOorjcGA2rFSfSBRoLuv0afzHJbVK/AyWN2RZqcKZRcCujxfRdgKUvFbpM8/eLMacSXUWS5OF2vxsmXzlv1Mlfxi/TJHCquRbyo9XJHvoNDKdXFKNJVWFruLYiv46kmPkc4IIUBicetUaUaa/B+ljrYmnr6zgKz+DFv6KhzHlOQk8bIcGuCuDRT+KJjaDHU2RYOPHzJHBMnNjktQ67wxWpPSoP/9mlvVd1ZsFh4H2TThcUBWEtjEhhh/Fczp2D5lvJR98vPipCyFnPXw1ph4BOedCmU89PHCiBsvsaE4ll0l8pdKGtfQsKkmPZxh/eb9h8oRYY8A8ObxBHv7Bo3owpvthbEaXER/nzQNR9iO1o/jW0JtV8fqr6H68c4H6n9ZyetMmKpgQ6tOrgFlNs3zAw8w/gT+Yxyj3XqNBvaUpO+5Zpmu0cfvl2zd0WY82qdOdIOszm/+hUcJ5jdHsBbU5yT6yC2rvQjGpJf83Lx8tSjMk5YWGagT7PKHfFX+dSf0g92b+21jF7gtouQgs) - interactive playground for Quran-Meta

### Projects using Quran-meta

* [Koran-Center](https://koran.center) - Powerful and feature rich  web application for reading and studying the Holy Quran.

### Demo
* [Quran Meta Visualiser](https://codesandbox.io/s/quran-visualiser-p3zjd) - demo app showcasing number of methods from Quran-meta to build interactive visualisations of Quran structure using Alpine.js & chart.js

* [Quran Meta Visualiser ES module version](https://codesandbox.io/s/quran-visualiser-es-module-f0sq0) - ES Module version of the previous demo

![Demo image](https://quran-center.github.io/quran-meta/examples/demo-quran-visualiser.jpg)

### Data correctness and validity testing

Quran-Meta is 100% unit test covered and moreover data is cross checked with other apis to guarantee absolute correctness. 

one can run `pnpx jiti examples/data-check` to run suite of  validation tests against the following data sources

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

