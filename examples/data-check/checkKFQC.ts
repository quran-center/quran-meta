/**
 * Shared KFQC data checker.
 *
 * Compares a riwaya's lists (via a QuranRiwaya instance) against an
 * ayah-by-ayah KFQC data dump from https://qurancomplex.gov.sa/en/techquran/dev/
 * (data/<Name>Data_v2-*.json).
 *
 * Each mismatch category reports the first few offending ayahs and is then
 * suppressed, followed by a per-category summary.
 */

import type { QuranRiwaya } from "../../src/QuranRiwaya"
import type { RiwayaName } from "../../src/lists/types"
import type { AyahId } from "../../src/types"

export interface KFQCAyah {
  aya_no: number
  aya_text: string
  id: number
  jozz: number
  page: number | string
  sura_name_ar: string
  sura_no: number
}

const maxReportsPerCategory = 10

export function checkKFQCData(riwaya: RiwayaName, quran: QuranRiwaya<RiwayaName>, data: KFQCAyah[]): void {
  console.log("=====================================")
  console.log(`\x1b[35mChecking KFQC ${riwaya} data\x1b[0m`)
  console.log("-------------------------------------")

  const counts = new Map<string, number>()
  const report = (category: string, message: string) => {
    const n = (counts.get(category) ?? 0) + 1
    counts.set(category, n)
    if (n <= maxReportsPerCategory) {
      console.warn(`Error: ${message}`)
    }
    if (n === maxReportsPerCategory + 1) {
      console.warn(`... suppressing further ${category} errors`)
    }
  }

  if (data.length !== quran.meta.numAyahs) {
    report("ayahCount", `ayah count is not matching: ${data.length} (KFQC) vs ${quran.meta.numAyahs} (quran-meta)`)
  }

  const ayahCount = Math.min(data.length, quran.meta.numAyahs)
  for (let ayahId: AyahId = 1; ayahId <= ayahCount; ayahId++) {
    const ayahMeta = quran.getAyahMeta(ayahId)
    const kfqc = data[ayahId - 1]

    if (kfqc.id !== ayahId) {
      report("ayahId", `ayahId of Ayah ${ayahId} is not matching: ${kfqc.id}`)
    }
    // KFQC page can be a span like "34-35" when an ayah crosses a page
    // boundary - compare against the page the ayah starts on.
    if (ayahMeta.page !== Number.parseInt(String(kfqc.page), 10)) {
      report("page", `page of Ayah ${ayahId} is not matching: ${ayahMeta.page} vs ${kfqc.page}`)
    }
    if (ayahMeta.juz !== kfqc.jozz) {
      report("juz", `juz of Ayah ${ayahId} is not matching: ${ayahMeta.juz} vs ${kfqc.jozz}`)
    }
    if (ayahMeta.surah !== kfqc.sura_no) {
      report("surah", `surah of Ayah ${ayahId} is not matching: ${ayahMeta.surah} vs ${kfqc.sura_no}`)
    }
    if (ayahMeta.ayah !== kfqc.aya_no) {
      report("ayah", `ayah of Ayah ${ayahId} is not matching: ${ayahMeta.ayah} vs ${kfqc.aya_no}`)
    }
    if (ayahMeta.isSajdahAyah !== kfqc.aya_text.includes("۩")) {
      report("sajdah", `sajdah of Ayah ${ayahId} is not matching: ${ayahMeta.isSajdahAyah}`)
    }
    if (ayahMeta.ayah === 1) {
      const name = quran.getSurahMeta(ayahMeta.surah).name.trim()
      if (kfqc.sura_name_ar.trim() !== name) {
        report(
          "surahName",
          `name of Surah ${ayahMeta.surah} is not matching: "${name}" vs "${kfqc.sura_name_ar.trim()}"`
        )
      }
    }
  }

  if (counts.size === 0) {
    console.log(`✓ ${riwaya}: quran-meta lists match the KFQC data`)
  } else {
    const summary = [...counts.entries()].map(([category, n]) => `${category}: ${n}`).join(", ")
    console.log(`✗ ${riwaya}: mismatches against KFQC data - ${summary}`)
  }
}
