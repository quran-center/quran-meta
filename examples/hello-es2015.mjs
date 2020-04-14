// start with node es2015.mjs

//import  {meta}  from "../dist/quran-meta.esm.browser.js"
import  quranMeta  from "../dist/quran-meta.common.js"
console.log("hello")
//console.log(`There are ${meta.numSuras} suras in the Holy Quran`)
console.log(`There are ${quranMeta.meta.numSuras} suras in the Holy Quran`)
