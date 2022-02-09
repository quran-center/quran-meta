/**
 * This example creates  list of [surah,ayah] number pairs in Holy Quran
 */
// npx ts-node sample.ts

import { meta, SuraList, AyahNo, Surah } from "../src/index"

console.log(`There are ${meta.numSuras} suras in the Holy Quran`)
const res: string[] = []
for (let surah: Surah = 1; surah <= meta.numSuras; surah++) {
  const ayaCount = SuraList[surah][1]
  for (let ayah: AyahNo = 1; ayah <= ayaCount; ayah++) {
    //console.log(surah, ayah)
    // res.push([surah, ayah])
    res.push(`${String(surah).padStart(3, 0)}${String(ayah).padStart(3, 0)}`)
  }
}

console.log(JSON.stringify(res))
