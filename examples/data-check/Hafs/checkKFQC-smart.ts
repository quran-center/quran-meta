import { meta, createHafs } from "../../../src/hafs"
import type { AyahId } from "../../../src/types"

import hafsSmartData from "./../data/hafs_smart_v8.json"

const quran = createHafs()

export function checkKFQCSmart() {
  console.log("=====================================")
  console.log("\x1b[36mChecking against KFQC Hafs Smart data\x1b[0m")
  console.log("-------------------------------------")

  const x = ""
  // Ayah Checks
  for (let ayahId: AyahId = 1; ayahId <= meta.numAyahs; ayahId++) {
    const ayahMeta = quran.getAyahMeta(ayahId)
    const hfMeta = hafsSmartData[ayahId - 1]
    const _page = quran.findPagebyAyahId(ayahId)
    // const rub = getRubAlHizbMetaByAyahId(ayahId)

    // Commented  as KFQC Smart data is using different page numbering which Quran Meta does not support
    // if (page !== hfMeta.page) console.log("Error page: ", ayahMeta, hfMeta)
    // if (rub.rubAlHizbId !== ayahMeta.rubAlHizbId) console.warn("Error: rub of Ayah are not matching: ", rub, ayahMeta)
    if (ayahId !== hfMeta.id) console.warn("Error: ayahId of Ayah are not matching: ", ayahMeta, hfMeta)
    if (ayahMeta.juz !== hfMeta.jozz) console.warn("Error: juz of Ayah are not matching: ", ayahMeta, hfMeta)
    if (ayahMeta.surah !== hfMeta.sura_no) console.warn("Error: surah of Ayah are not matching: ", ayahMeta, hfMeta)
    if (ayahMeta.ayah !== hfMeta.aya_no) console.warn("Error: ayah of Ayah are not matching: ", ayahMeta, hfMeta)
    if (ayahMeta.ayah !== hfMeta.aya_no) console.warn("Error: ayah of Ayah are not matching: ", ayahMeta, hfMeta)
    if (ayahMeta.ayah === 1 && hfMeta.sura_name_ar !== quran.getSurahMeta(ayahMeta.surah).name) console.warn("Error: name of Surah are not matching: ", quran.getSurahMeta(ayahMeta.surah).name, hfMeta)
  }
  console.log(x)
}
