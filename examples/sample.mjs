/**
 * This example creates  list of [surah,ayah] number pairs in Holy Quran
 */
// node sample.mjs

import { meta, SuraList } from "../dist/index.mjs"
console.log(`There are ${meta.numSuras} suras in the Holy Quran`)
const res = []
for (let surah = 1; surah <= meta.numSuras; surah++) {
  const ayaCount = SuraList[surah][1]
  for (let ayah = 1; ayah <= ayaCount; ayah++) {
    //console.log(surah, ayah)
    // res.push([surah, ayah])
    res.push(`${String(surah).padStart(3, 0)}${String(ayah).padStart(3, 0)}`)
  }
}

console.log(JSON.stringify(res))
