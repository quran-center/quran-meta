## Welcome to Quran Meta Project

This project is to help with Quran related meta queries. 

Answering Questions like:

* How many ayahs in given sura (`getAyaCountinSura`)
* Is given aya 
  * a sajdah ayah?
  * beginnning of a juz (`isAyahJuzFirst`)?
  * beginnning of a page? 
* `findJuz` and `findJuzByAyaid`
* `findPage` by surah/aya
* Find next or previous ayah (`nextAyah`/`prevAyah`)
* converts `[surah,aya]` to `ayaId` and vice-verse ( `findSurahByAyaid` and  `findAyaidBySurah`) 

### Installation

In a browser:

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

Using npm:
```
$ npm i --save quran-meta
```

In Node.js:

```js
var quranMeta = require('quran-meta');
```


### APi Reference Documentation

See [here](https://quran-center.github.io/quran-meta/docs/globals.html) for API documentation

### Examples
You can find some examples [here](https://quran-center.github.io/quran-meta/examples/) and souce code for them [here](https://github.com/quran-center/quran-meta/tree/master/examples)

### Demo
* [Quran Meta Visualiser](https://codesandbox.io/s/quran-visualiser-p3zjd) - demo app showcasing number of methods from Quran-meta to build interactive visualisations of Quran structure using Alpine.js & chart.js

* [Quran Meta Visualiser ES module version](https://codesandbox.io/s/quran-visualiser-es-module-f0sq0) - ES Module version of the previous demo

![demo image](https://quran-center.github.io/quran-meta/examples/demo-quran-visualiser.jpg)

### Distributions and Downloads

Here you can find the following

|||
|--|--|
|[Source code](https://github.com/quran-center/quran-meta/tree/master/src) in typescript  | TS |
| [Javascript code](https://github.com/quran-center/quran-meta/tree/master/lib_es) autotranspiled from TS as ES Next  | ESNext |
|[Javascript code](https://github.com/quran-center/quran-meta/tree/master/lib_cjs) autotranspiled from TS as CJS|ES5+CommonJS|
|||
 **[distributions](https://github.com/quran-center/quran-meta/tree/master/dist) of library as**| | 
|[UMD](https://quran-center.github.io/quran-meta/dist/quran-meta.js)/ [UMD minified](https://quran-center.github.io/quran-meta/dist/quran-meta.min.js) builds can be used directly in the browser via a `<script>` (see  [here](https://www.syntaxsuccess.com/viewarticle/iife-vs-umd) about UMD format)  | ES5+UMD |
| [CommonJS](https://quran-center.github.io/quran-meta/dist/quran-meta.common.js) for use with older bundlers like browserify or webpack | ES5+CommonJS |
| [ESM](https://quran-center.github.io/quran-meta/dist/quran-meta.esm.js) for use with modern bundlers like webpack 2 or Rollup  | ES5+ESM |
| [ESM Browser](https://quran-center.github.io/quran-meta/dist/quran-meta.esm.browser.js)/[ESM Browser minified](https://quran-center.github.io/quran-meta/dist/quran-meta.esm.browser.min.js) for direct imports in modern browsers via `<script type="module">`  | ESNext+ESM |



