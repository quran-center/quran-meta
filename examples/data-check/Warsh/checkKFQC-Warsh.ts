/**
 *  Checking data from
 *  https://qurancomplex.gov.sa/en/techquran/dev/
 */

import { createWarsh } from "../../../src/warsh"
import type { AyahId } from "../../../src/types"
import WarshData from "../data/WarshData_v2-1.json"

const quran = createWarsh()
const ayahCount = WarshData.length

export function checkKFQCWarsh() {
  console.log("=====================================")
  console.log("\x1b[35mChecking KFQC Warsh data\x1b[0m")
  console.log("-------------------------------------")

  // Ayah Checks
  for (let ayahId: AyahId = 1; ayahId <= ayahCount; ayahId++) {
    const ayahMeta = quran.getAyahMeta(ayahId)
    const warshMeta = WarshData[ayahId - 1]

    // Commented  as KFQC  data is using different page numbering which Quran Meta does not support
    if (ayahMeta.page !== Number.parseInt(warshMeta.page))
      console.log(`Error: page of Ayah ${ayahId} are not matching: `, ayahMeta, warshMeta)
    if (ayahId !== warshMeta.id) console.warn(`Error: ayahId of Ayah ${ayahId} are not matching: `, ayahMeta, warshMeta)
    // if (ayahMeta.rubAlHizbId !== warshMeta.rub_al_hizb) console.warn(`Error: rub of Ayah ${ayahId} are not matching: `, ayahMeta, warshMeta)
    // if (ayahMeta.juz !== warshMeta.jozz) console.warn(`Error: juz of Ayah ${ayahId} are not matching: `, ayahMeta, warshMeta)
    if (ayahMeta.surah !== warshMeta.sura_no)
      console.warn(`Error: surah of Ayah ${ayahId} are not matching: `, ayahMeta, warshMeta)
    if (ayahMeta.ayah !== warshMeta.aya_no)
      console.warn(`Error: ayah of Ayah ${ayahId} are not matching: `, ayahMeta, warshMeta)
    if (ayahMeta.isSajdahAyah !== warshMeta.aya_text.includes("۩"))
      console.warn(`Error: sajdah of Ayah ${ayahId} are not matching: `, ayahMeta, warshMeta)
    if (ayahMeta.isStartOfQuarter !== warshMeta.aya_text.includes("۞") && ayahId !== 1)
      console.warn(`Error: RubAlHizb of Ayah ${ayahId} are not matching: `, ayahMeta, warshMeta)
    if (ayahMeta.ayah === 1 && warshMeta.sura_name_ar.trim() !== quran.getSurahMeta(ayahMeta.surah).name.trim())
      console.warn(
        `Error: name of Surah of Ayah ${ayahId} are not matching: `,
        quran.getSurahMeta(ayahMeta.surah).name,
        warshMeta
      )
  }
}
/*

  The Juz checks shows a warning at:

  AyahId (3211 to 3213) | Juz 20 instead of 19 | Error from the dataset

  AyahId (3558 to 3561) | Juz 22 instead of 21 | Error from the dataset

  */
