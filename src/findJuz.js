/**
 *
 * @param {*} suraNumber
 * @param {*} ayaNumber
 */
export default function findJuz(suraNumber, ayaNumber = 1) {
  let l = 1
  while (
    Juz[l + 1][0] < suraNumber ||
    (Juz[l + 1][0] == suraNumber && Juz[l + 1][1] <= ayaNumber)
  ) {
    l++
  }
  return l
}
