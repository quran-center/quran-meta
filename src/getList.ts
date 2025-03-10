import { HizbQuarterList } from "./lists/hizbQuarterList"
import { JuzList } from "./lists/juzList"
import { ManzilList } from "./lists/manzilList"
import { PageList } from "./lists/pageList"
import { RukuList } from "./lists/rukuList"
import { SurahList } from "./lists/surahList"
import { AyahId, AyahNo, SurahInfo } from "./types"

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

/**
 * Represents a block or section of the Quran with its starting ayah and length
 * startAyahId - The identifier of the first ayah in the block
 * ayahCount - The number of ayahs contained in this block
 */
type PartBlock = {
  startAyahId: AyahId
  ayahCount: AyahId | AyahNo
}
type PartBlocker = (...any: unknown[]) => PartBlock

function toPartFormatter(type: PartType): PartBlocker {
  return (type === "surah")
    ? ([startAyahId, ayahCount]: SurahInfo) => ({
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
 * Retrieves a formatted list of Quran parts based on the specified type.
 * @param type - The type of parts to retrieve (e.g., juz, hizb, rub)
 * @returns An array of formatted part blocks, excluding the first and last elements
 */
export function getList(type: PartType): PartBlock[] {
  const list = parts[type]
  return list.slice(1, list.length - 1).map(toPartFormatter(type))
}
