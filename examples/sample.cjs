/**
 * This example creates  list of [surah,ayah] number pairs in Holy Quran
 */
// node sample.cjs

// const quranMeta = require("../dist/quran-meta.common.js")
const quranMeta = require("../dist/index.cjs")
console.log(`There are ${quranMeta.meta.numSurahs} surahs in the Holy Quran`)
const res = []
for (let surah = 1; surah <= quranMeta.meta.numSurahs; surah++) {
  const ayaCount = quranMeta.SurahList[surah][1]
  for (let ayah = 1; ayah <= ayaCount; ayah++) {
    // console.log(surah, ayah)
    // res.push([surah, ayah])
    res.push(`${String(surah).padStart(3, 0)}${String(ayah).padStart(3, 0)}`)
  }
}

console.log(JSON.stringify(res))
