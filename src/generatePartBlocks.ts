import { getList, getListsOfRiwaya } from "./lists/index"
import type { Riwayas, allListsNames, RiwayahsWith } from "./lists/types"
import { AyahId, AyahNo, SurahInfo } from "./types"

/* A map of readable parameters that can be used in the function and their corresponding list name */
export type PartType
  = | "surah"
    | "juz"
    | "rubAlHizb"
    | "thumunAlHizb"
    | "page"
    | "manzil"
    | "ruku"

export const parts = {
  surah: "SurahList",
  juz: "JuzList",
  rubAlHizb: "HizbQuarterList",
  thumunAlHizb: "HizbEighthList",
  page: "PageList",
  manzil: "ManzilList",
  ruku: "RukuList"
} as const satisfies Record<PartType, allListsNames>

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

function toPartFormatter(type: PartType, list: any[]): PartBlocker {
  return type === "surah"
    ? ([startAyahId, ayahCount]: SurahInfo) => ({
        startAyahId,
        ayahCount
      })
    : (ayahId: AyahId, index: number) => {
        // console.log(ayahId,index,parts[type][index+2] )
        const ayahCount = list[index + 2] - ayahId
        return {
          startAyahId: ayahId,
          ayahCount
        }
      }
}

/**
 * Retrieves a formatted list of Quran parts based on the specified type.
 * @param type - The type of parts to retrieve (e.g., juz, hizb, rub)
 * @param riwaya - The riwaya. Defaults to "Hafs" if not provided.
 * @returns An array of formatted part blocks, excluding the first and last elements
 */
export function generatePartBlocks<P extends PartType>(
  type: P,
  riwaya?: RiwayahsWith<(typeof parts)[P]>
): PartBlock[] {
  if (!parts[type]) throw new Error(`Invalid part type: ${type}`)

  const listName = parts[type]
  const list = getList(listName, riwaya as any)

  if (!Array.isArray(list)) {
    throw new Error(`Expected array for ${String(listName)}`)
  }

  return list.slice(1, list.length - 1).map(toPartFormatter(type, list))
}
