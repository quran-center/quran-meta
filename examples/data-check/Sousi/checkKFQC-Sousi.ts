/**
 *  Checking data from
 *  https://qurancomplex.gov.sa/en/techquran/dev/
 */

import { createSousi } from "../../../src/sousi"
import { checkKFQCData } from "../checkKFQC"
import SousiData from "../data/SousiData_v2-0.json"

export function checkKFQCSousi() {
  checkKFQCData("Sousi", createSousi(), SousiData)
}

/*
  The juz checks report 22 mismatching ayahs: 13 juz start boundaries differ
  by 1-5 ayahs between the quranpedia data (source of SousiLists) and the KFQC
  data - the same boundaries as Douri (both follow the Basri numbering).
  See checkKFQC-Douri.ts for the full list.
*/
