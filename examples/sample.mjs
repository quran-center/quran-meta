/**
 * This example creates  list of [surah,ayah] number pairs in Holy Quran
 */
// node sample.mjs

import { quran } from "../dist/index.js"
console.log(`There are ${quran.meta.numSurahs} suras in the Holy Quran`)
const res = []
for (let surah = 1; surah <= quran.meta.numSurahs; surah++) {
  const ayaCount = quran.getAyahCountInSurah(surah)
  for (let ayah = 1; ayah <= ayaCount; ayah++) {
    // console.log(surah, ayah)
    // res.push([surah, ayah])
    res.push(`${String(surah).padStart(3, 0)}${String(ayah).padStart(3, 0)}`)
  }
}

console.log(JSON.stringify(res))
