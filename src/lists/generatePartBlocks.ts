import { type RiwayaData, type PartType, parts } from "./types"
import type { AyahId, AyahNo, SurahInfo } from "../types"

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

function toPartFormatter(type: PartType, list: AyahId[] | SurahInfo[]): PartBlocker {
  return type === "surah"
    ? ([startAyahId, ayahCount]: SurahInfo) => ({
        startAyahId,
        ayahCount
      })
    : (ayahId: AyahId, index: number) => {
        // console.log(ayahId,index,parts[type][index+2] )
        const ayahCount = (list as AyahId[])[index + 2] - ayahId
        return {
          startAyahId: ayahId,
          ayahCount
        }
      }
}

/**
 * Retrieves a formatted list of Quran parts based on the specified type.
 * @param name - The type of parts to retrieve (e.g., juz, hizb, rub)
 * @param data - The Lists object for the riwaya.
 * @returns An array of formatted part blocks, excluding the first and last elements
 */
export function generatePartBlocks<P extends PartType>(
  name: P,
  data: RiwayaData
): PartBlock[] | null {
  if (!parts[name]) throw new Error(`Invalid part type: ${name}`)

  const listName = parts[name] as keyof RiwayaData
  const list = data[listName]

  if (!list) {
    return null
  }

  if (!Array.isArray(list)) {
    throw new TypeError(`Expected array for ${String(listName)}`)
  }

  return list.slice(1, -1).map(toPartFormatter(name, list))
}
