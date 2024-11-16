import { HizbQuarterList } from "./lists/hizbList"
import { JuzList } from "./lists/juzList"
import { ManzilList } from "./lists/manzilList"
import { PageList } from "./lists/pageList"
import { RukuList } from "./lists/rukuList"
import { SurahList } from "./lists/surahList"
import { AyahId, SurahMeta } from "./types"

export const partNames = ["surah", "juz", "page", "manzil", "rubAlHizb", "ruku"] as const
export type PartType = (typeof partNames)[number]
/**
 * An object that maps part types to their corresponding data lists.
 */
export const parts = {
  surah: SurahList,
  juz: JuzList,
  rubAlHizb: HizbQuarterList,
  page: PageList,
  manzil: ManzilList,
  ruku: RukuList
} as const

type PartBlock = {
  startAyahId: AyahId
  ayahCount: number
}
type PartBlocker = (...any: unknown[]) => PartBlock

function toPartFormatter(type: PartType): PartBlocker {
  return (type === "surah")
    ? ([startAyahId, ayahCount]: SurahMeta) => ({
        startAyahId, ayahCount
      })
    : (ayahId: AyahId, index: number) => {
      // console.log(ayahId,index,parts[type][index+2] )
        const ayahCount = parts[type][index + 2] - ayahId
        return {
          startAyahId: ayahId, ayahCount
        }
      }
}

/**
 * Retrieves a list of part blocks for the specified part type.
 *
 * @param type - The type of part to retrieve the list for, such as "surah", "juz", "page", "manzil", "ruku" or "rubAlHizb".
 * @returns An array of part blocks, where each part block contains the starting ayah ID and the ayah count for that part.
 */
export function getList(type: PartType): PartBlock[] {
  const list = parts[type]
  return list.slice(1, list.length - 1).map(toPartFormatter(type))
}
