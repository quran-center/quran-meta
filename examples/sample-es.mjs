/**
 * This example creates  list of [surah,ayah] number pairs in Holy Quran
 */
// node sample-es.mjs

import quranMeta, { meta } from "../lib_es/index.mjs"
console.log(`There are ${meta.numSuras} suras in the Holy Quran`)
let res = []
for (let surah = 1; surah <= quranMeta.meta.numSuras; surah++) {
  const ayaCount = quranMeta.SuraList[surah][1]
  for (let ayah = 1; ayah <= ayaCount; ayah++) {
    //console.log(surah, ayah)
    // res.push([surah, ayah])
    res.push(`${String(surah).padStart(3, 0)}${String(ayah).padStart(3, 0)}`)
  }
}

console.log(JSON.stringify(res))
