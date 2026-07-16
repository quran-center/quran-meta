/**
 *  Checking data from
 *  https://qurancomplex.gov.sa/en/techquran/dev/
 */

import { createShuba } from "../../../src/shuba"
import { checkKFQCData } from "../checkKFQC"
import ShubaData from "../data/ShubaData_v2-0.json"

export function checkKFQCShuba() {
  checkKFQCData("Shuba", createShuba(), ShubaData)
}
