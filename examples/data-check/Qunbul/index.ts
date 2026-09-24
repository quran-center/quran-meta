/**
 * Qunbul has no KFQC data. Its lists come from the quranpedia dump (checked by
 * `pnpm verify:lists`); here they are compared with Bazzi, the other riwaya from Ibn Kathir.
 */

import { checkSiblings } from "../checkSiblings"

export const checkQunbul = () => {
  checkSiblings("Qunbul", "Bazzi")
}
