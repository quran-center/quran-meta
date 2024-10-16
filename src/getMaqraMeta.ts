import { JuzHizb } from "./types"

export function getMaqraMeta(quarterIndex: number): JuzHizb {
  // return HizbQuarterList[maqra]

  // const quarterIndex = HizbQuarterList.findIndex(x => x > ayaId) - 1

  // const juz = findJuzByAyaid(ayaId)
  const juz = Math.floor((quarterIndex - 1) / 8) + 1

  const hizbIndex = Math.floor((quarterIndex - 1) / 4) + 1
  const juzPart = quarterIndex % 8 || 8
  return { juz, hizbId: hizbIndex, juzPart, maqraId: quarterIndex }
}
