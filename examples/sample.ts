/**
 * This example creates  list of [surah,ayah] number pairs in Holy Quran
 */
// Pnpx jiti sample.ts

import type { AyahNo, Surah } from "../src/index"
import { SurahList, meta } from "../src/hafs"

console.log(`There are ${meta.numSurahs} suras in the Holy Quran`)
const res: string[] = []
for (let surah: Surah = 1; surah <= meta.numSurahs; surah++) {
  const ayaCount = SurahList[surah][1]
  for (let ayah: AyahNo = 1; ayah <= ayaCount; ayah++) {
    // Console.log(surah, ayah)
    // Res.push([surah, ayah])
    res.push(`${String(surah).padStart(3, 0)}${String(ayah).padStart(3, 0)}`)
  }
}

console.log(JSON.stringify(res))
