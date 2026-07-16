/**
 *  Checking data from
 *  https://qurancomplex.gov.sa/en/techquran/dev/
 */

import { createDouri } from "../../../src/douri"
import { checkKFQCData } from "../checkKFQC"
import DouriData from "../data/DouriData_v2-0.json"

export function checkKFQCDouri() {
  checkKFQCData("Douri", createDouri(), DouriData)
}

/*
  The juz checks report 22 mismatching ayahs (identical for Sousi, which shares
  the Basri numbering): 13 juz start boundaries differ by 1-5 ayahs between the
  quranpedia data (source of DouriLists) and the KFQC data:

  juz  2: 149 vs 148 | juz  3: 260 vs 258  | juz  4: 385 vs 383  | juz  6: 640 vs 639
  juz  7: 749 vs 752 | juz  8: 900 vs 901  | juz  9: 1044 vs 1043 | juz 16: 2220 vs 2219
  juz 20: 3210 vs 3212 | juz 23: 3729 vs 3728 | juz 24: 4083 vs 4082 | juz 25: 4254 vs 4253
  juz 26: 4492 vs 4487

  (quranpedia vs KFQC ayahId). Note the KFQC juz data is also known to contain
  errors for other riwayas (see checkKFQC-Warsh.ts).
*/
