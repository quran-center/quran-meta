/**
 *  Checking data from
 *  https://qurancomplex.gov.sa/en/techquran/dev/
 */

import { meta, createQalun } from "../../../src/qalun"
import type { AyahId } from "../../../src/types"

import QalunData from "../data/QalounData_v2-1.json"

const quran = createQalun()

const ayahCount = QalunData.length

export function checkKFQCQalun() {
  console.log("=====================================")
  console.log("\x1b[35mChecking KFQC Qalun data\x1b[0m")
  console.log("-------------------------------------")

  if (ayahCount !== meta.numAyahs) console.log(`Error: ayah count is not matching: `, ayahCount, meta.numAyahs)

  // Ayah Checks
  for (let ayahId: AyahId = 1; ayahId <= ayahCount; ayahId++) {
    const ayahMeta = quran.getAyahMeta(ayahId)
    const qalMeta = QalunData[ayahId - 1]

    // Commented  as KFQC  data is using different page numbering which Quran Meta does not support
    if (ayahMeta.page !== Number.parseInt(qalMeta.page))
      console.log(`Error: page of Ayah ${ayahId} are not matching: `, ayahMeta, qalMeta)
    if (ayahId !== qalMeta.id) console.warn(`Error: ayahId of Ayah ${ayahId} are not matching: `, ayahMeta, qalMeta)
    // if (rub.rubAlHizbId !== ayahMeta.rubAlHizbId) console.warn(`Error: rub of Ayah ${ayahId} are not matching: `, ayahMeta, rub)
    if (ayahMeta.juz !== qalMeta.jozz)
      console.warn(`Error: juz of Ayah ${ayahId} are not matching: `, ayahMeta, qalMeta)
    if (ayahMeta.surah !== qalMeta.sura_no)
      console.warn(`Error: surah of Ayah ${ayahId} are not matching: `, ayahMeta, qalMeta)
    if (ayahMeta.ayah !== qalMeta.aya_no)
      console.warn(`Error: ayah of Ayah ${ayahId} are not matching: `, ayahMeta, qalMeta)
    if (ayahMeta.isSajdahAyah !== qalMeta.aya_text.includes("۩"))
      console.warn(`Error: sajdah of Ayah ${ayahId} are not matching: `, ayahMeta, qalMeta)
    // if (ayahMeta.isStartOfQuarter !== qalMeta.aya_text.includes("۞")) console.warn(`Error: Juz of Ayah ${ayahId} are not matching: `, ayahMeta, qalMeta)
    if (ayahMeta.ayah === 1 && qalMeta.sura_name_ar.trim() !== quran.getSurahMeta(ayahMeta.surah).name.trim())
      console.warn(
        `Error: name of Surah of Ayah ${ayahId} are not matching: `,
        quran.getSurahMeta(ayahMeta.surah).name,
        qalMeta
      )
  }
}
/*

  The Juz checks shows a warning at:

  AyahId (3211 to 3213) | Juz 20 instead of 19 | Error from the dataset

  AyahId (3558 to 3561) | Juz 22 instead of 21 | Error from the dataset

  */
